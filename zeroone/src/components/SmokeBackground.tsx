import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer.js'

/**
 * Animated "flowing air" smoke background — a faithful port of the GPGPU
 * smoke simulation from taikisha.co.jp/recruit (Three.js + GPUComputationRenderer).
 *
 * - A 16x8 position texture stores a FIFO trail of the last 128 pointer points.
 * - A full-screen RawShaderMaterial plane renders an fbm "air" gradient that
 *   drifts on its own (getBackColor), plus smoke puffs that follow the trail
 *   and fade out (mouseMoveCount decay) once the pointer stops.
 *
 * Colors are shifted from taikisha's pale blue toward a soft Zeroone tint.
 */

const TEXTURE_W = 16
const TEXTURE_H = 8

// FIFO position-update shader: shift every texel toward the tail, write the
// current pointer at the last texel. (GPUComputationRenderer provides
// `resolution` and the `mousePositionTexture` sampler.)
const positionShader = /* glsl */ `
  precision lowp float;
  precision lowp int;

  uniform vec2 mousePoint;
  uniform vec2 mouseTextureSize;
  uniform float mouseMoveCount;
  uniform float timecount;
  uniform bool mousePress;

  void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    float pixelQt = mouseTextureSize.x * mouseTextureSize.y;
    float serialNum = floor(uv.x * mouseTextureSize.x) + floor(uv.y * mouseTextureSize.y) * mouseTextureSize.x;
    float shiftSerialNum = serialNum + 1.0;
    vec2 shiftXY = vec2(mod(shiftSerialNum, mouseTextureSize.x) / mouseTextureSize.x, floor(shiftSerialNum / mouseTextureSize.x) / mouseTextureSize.y);

    vec4 tmpPos = texture2D(mousePositionTexture, uv);
    tmpPos.xy = (serialNum >= pixelQt - 1.0) ? mousePoint.xy : texture2D(mousePositionTexture, shiftXY).xy;
    tmpPos.z = (serialNum >= pixelQt - 1.0) ? timecount : texture2D(mousePositionTexture, shiftXY).z;
    gl_FragColor = tmpPos;
  }
`

const vertexShader = /* glsl */ `
  precision lowp float;
  precision lowp int;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  attribute vec3 position;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  precision lowp float;
  precision lowp int;

  const float PI = 3.1415926535897932384626433832795;
  uniform float timecount;
  uniform vec2 mousePoint;
  uniform vec2 winSize;
  uniform bool mousePress;
  uniform vec2 mouseTextureSize;
  uniform float mouseMoveCount;
  uniform sampler2D mousePositionTexture;
  uniform bool touchdevice;
  uniform float repeatCount;
  uniform float limitCount;
  uniform bool lowFps;
  uniform vec3 backBaseColor;
  uniform float scrollShift;

  float rand(vec2 n) {
    return smoothstep(0.0, 1.0, cos(dot(n, vec2(11.12, 4.6414))) * 42748.5453);
  }

  float noise(vec2 n) {
    const vec2 d = vec2(0.0, 1.0);
    vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
    return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
  }

  float fbm(vec2 n) {
    float total = 0.0, amplitude = 1.0;
    for (int i = 0; i < 4; i++) {
      total += noise(n) * amplitude;
      n += n;
      amplitude *= 0.5;
    }
    return total;
  }

  float smokeAlpha2(vec2 XY, float nCountRatio, float time, vec2 center, vec2 moveSpeed) {
    vec2 centerSize = center * winSize;
    float scaleAdjust = 0.6 + (0.5 + 0.7 * (1.0 - nCountRatio)) * 0.6 * mouseMoveCount / 64.0;
    scaleAdjust *= (limitCount < 1.0) ? 1.10 : (limitCount < 97.0) ? 0.95 : (limitCount < 65.0) ? 0.85 : 0.75;
    float alpha0 = scaleAdjust * clamp(5.0 * length(XY - centerSize) / (winSize.y), 0.0, 1.0);
    return alpha0;
  }

  float smokeAlpha3(vec2 XY, vec4 p1, vec4 p2, float nCountRatio, float scalekey) {
    vec2 transform = p2.xy - p1.xy;
    float transformR = (length(transform) == 0.0) ? 0.0 : atan(transform.y, transform.x);
    vec2 centerSize = p1.xy;
    vec2 fromCenter = (p1.xy - XY);
    float rotation = (length(fromCenter) == 0.0) ? 0.0 : atan(fromCenter.y, fromCenter.x);
    float nearAdjust = 1.5;
    float opacityAdjust = (scalekey == 0.65) ? 1.0 : (scalekey == 0.70) ? 0.85 : (scalekey == 0.75) ? 0.65 : 0.5;
    float extendAdjust = (limitCount < 65.0) ? 2.5 : 0.5;
    float nearRRasio = 1.6 - 1.4 * (1.0 - pow(nCountRatio, nearAdjust)) + extendAdjust * (0.1 + length(transform)) / winSize.y * pow(abs(cos(rotation - transformR)), 4.0);
    float opacity = 1.0 - 1.0 * pow(nCountRatio, opacityAdjust);
    float scaleAdjust = 0.5 + 0.5 * mouseMoveCount / 64.0;
    scaleAdjust *= (limitCount < 1.0) ? 1.10 : (limitCount < 97.0) ? 0.95 : (limitCount < 65.0) ? 0.85 : 0.75;
    float alpha0 = clamp(scaleAdjust * 1.25 / (nearRRasio) * length(XY - p1.xy) / (winSize.y * scalekey), 0.0, 1.0);
    alpha0 = (nCountRatio == 0.0) ? 1.0 : alpha0;
    alpha0 = (length(p2.xy) == 0.0) ? 1.0 : alpha0;
    return opacity * (1.0 - alpha0);
  }

  // Zeroone soft rainbow ramp (pink -> violet -> blue -> teal -> lime)
  vec3 brandRamp(float t) {
    vec3 pink   = vec3(1.000, 0.365, 0.635);
    vec3 violet = vec3(0.541, 0.361, 0.965);
    vec3 blue   = vec3(0.231, 0.424, 0.961);
    vec3 teal   = vec3(0.000, 0.761, 0.659);
    vec3 lime   = vec3(0.608, 0.878, 0.000);
    float x = fract(t) * 4.0;
    if (x < 1.0) return mix(pink, violet, x);
    if (x < 2.0) return mix(violet, blue, x - 1.0);
    if (x < 3.0) return mix(blue, teal, x - 2.0);
    return mix(teal, lime, x - 3.0);
  }

  vec3 getBackColor(float time, vec2 mouseP, vec2 normalXY, vec2 winSize) {
    vec2 q = vec2(0.0);
    float startTime = 5.0;
    q.x = fbm(normalXY * vec2(1.0, 1.0) + startTime + 0.01 * time);
    q.y = fbm(normalXY * vec2(1.0, 1.0) + startTime + 0.013 * time);
    vec2 r = vec2(0.0);
    r.x = fbm(normalXY + 0.1 * q + vec2(1.7, 7.2) + startTime + 0.35 * time);
    r.y = fbm(normalXY + 1.0 * q + vec2(8.3, 2.8) + startTime + 13.026 * cos(0.05 * time));
    float f = fbm(normalXY * vec2(0.25, -0.35 - 0.5 * cos(0.01 * time)) * (0.25 + 0.5 * r) + 0.25 * abs(sin(startTime + 0.015 * time)) * r);

    // hue is mostly positional (stable regions) with a gentle flowing drift,
    // plus a continuous shift tied to scroll progress so the whole page's colour
    // field migrates as the visitor descends (concept: the ink quietly bleeds).
    float hue = 0.26 * r.x + 0.44 * normalXY.x + 0.18 * normalXY.y + 0.010 * time + 0.32 * scrollShift;
    vec3 brand = brandRamp(hue);

    // soft pastel: white-ish base tinted by the flow field f. A small floor on
    // intensity keeps a gentle brand wash everywhere (no large flat-white areas)
    // while staying light enough for dark text.
    float fval = clamp(f * f * f + 0.6 * f * f + 0.5 * f, 0.0, 1.0);
    // density grows gently with scroll depth — top stays airy/paper-light, the
    // lower sections carry a slightly richer brand wash (still text-safe).
    float depth = 0.44 + 0.20 * scrollShift;
    float intensity = clamp(0.28 + 0.7 * fval, 0.0, 1.0) * depth;
    vec3 backColor = mix(vec3(0.975), brand, intensity);
    backColor *= (0.92 + 0.08 * backBaseColor);
    return clamp(backColor, 0.0, 1.0);
  }

  void main() {
    vec2 XY = gl_FragCoord.xy;
    vec2 normalXY = gl_FragCoord.xy / winSize * 1.0;
    float time = timecount * 0.25;

    float difLengthTotal = 0.0;
    float alpha0 = 0.0;
    float alpha1 = 0.0;
    float alpha2 = 0.0;
    float timeKey = 0.01;
    float difLengthTotalLimit = (touchdevice) ? 5.0 : 10.0;
    float limitCount2 = limitCount;
    float nCount = 0.0;
    float nCountMax = 128.0 - limitCount2;
    float scalekey = 0.65;

    for (int n = 128; n > 0; n--) {
      float fn = float(n);
      if (fn > limitCount2) {
        float nCountRatio = nCount / nCountMax;
        nCount += 1.0;
        vec2 shiftXY = vec2(mod(fn, mouseTextureSize.x) / mouseTextureSize.x, floor(fn / mouseTextureSize.x) / mouseTextureSize.y);
        float shift2Num = (1.0 - nCountRatio) * 128.0 - 0.0;
        vec2 shiftXY2 = vec2(mod(shift2Num, mouseTextureSize.x) / mouseTextureSize.x, floor(shift2Num / mouseTextureSize.x) / mouseTextureSize.y);
        vec4 mouseInfo = texture2D(mousePositionTexture, shiftXY);
        vec4 mouseInfo2 = texture2D(mousePositionTexture, shiftXY2);
        float difLength = (mouseInfo2.x > 0.0 && mouseInfo2.y > 0.0) ? length(mouseInfo.xy - mouseInfo2.xy) : 0.0;
        float bokelength = fn;
        float overlapOpacity = (limitCount2 == 0.0) ? 0.075 : (limitCount2 <= 96.0) ? 0.1 : (limitCount2 <= 64.0) ? 0.15 : 0.3;
        alpha0 += overlapOpacity * smokeAlpha3(XY, mouseInfo, mouseInfo2, nCountRatio, scalekey);
        if (difLengthTotal >= difLengthTotalLimit) {
          float shiftZero = 0.1 * winSize.y;
          float timeRotation = time * 0.1;
          vec2 plus1 = vec2(shiftZero * cos(timeRotation + PI / 3.0), shiftZero * sin(timeRotation + PI / 3.0));
          vec2 plus2 = vec2(shiftZero * 0.5 * cos(timeRotation + PI), shiftZero * 0.5 * sin(timeRotation + PI));
          vec2 mouseInfo01 = mouseInfo.xy + plus1;
          vec2 mouseInfo02 = mouseInfo2.xy + plus1;
          vec2 mouseInfo03 = mouseInfo.xy + plus2;
          vec2 mouseInfo04 = mouseInfo2.xy + plus2;
          alpha1 += 0.25 * pow(fn / repeatCount, 3.0) * (1.0 - smokeAlpha2(XY, nCountRatio, bokelength * 2.0 * timeKey, (mouseInfo01) / winSize, (mouseInfo01 - mouseInfo02)));
          alpha2 += 0.25 * pow(fn / repeatCount, 3.0) * (1.0 - smokeAlpha2(XY, nCountRatio, bokelength * 2.0 * timeKey, (mouseInfo03) / winSize, (mouseInfo03 - mouseInfo04)));
          difLengthTotal = 0.0;
        } else {
          difLengthTotal += difLength;
        }
      }
    }

    alpha0 = clamp(alpha0, 0.0, 1.0);
    float opacityAdjust = pow(mouseMoveCount / 64.0, 1.0);
    alpha0 *= opacityAdjust;
    alpha1 = clamp(alpha1 * (alpha0 * 0.5), 0.0, 1.0);
    alpha2 = clamp(alpha2 * (alpha0 * 0.75), 0.0, 1.0);
    alpha1 *= opacityAdjust;
    alpha2 *= opacityAdjust;

    vec3 color = vec3(alpha0 * 0.3, alpha0 * 0.10, alpha0 * 0.00) * 1.2;
    vec3 color1 = vec3(alpha1 * 0.3, alpha1 * 0.0, alpha1 * 0.00) * 1.0;
    vec3 color2 = vec3(alpha2 * 0.05, alpha2 * 0.3, alpha2 * 0.05) * 0.75;

    vec3 backColor = getBackColor(time * 0.05, mousePoint, normalXY, winSize);
    vec3 backColorHall = clamp(backColor + 0.4 * pow(alpha0, 4.5), 0.66, 0.99);

    gl_FragColor = (lowFps) ? vec4(backColor, 1.0) : vec4(backColorHall - color - 0.5 * (color1 - color2), 1.0);
  }
`

type Props = {
  /** soft base tint of the air field (RGB 0..1) */
  baseColor?: [number, number, number]
  className?: string
  reduced?: boolean
  /**
   * CSS selector of the element the mouse-reactive smoke is limited to.
   * When set, pointer movement only feeds smoke while the cursor is inside
   * that element's on-screen rect (e.g. the hero). The air keeps flowing
   * everywhere regardless. When unset, the whole viewport is interactive.
   */
  interactiveSelector?: string
  /**
   * Live scroll progress (0..1) as a ref. The frame loop eases the shader's
   * `scrollShift` toward it every tick, so the page-wide colour field migrates
   * continuously with scroll without re-running this heavy effect.
   */
  scrollRef?: { current: number }
}

export default function SmokeBackground({
  baseColor = [1.0, 1.0, 1.0],
  className = '',
  reduced = false,
  interactiveSelector,
  scrollRef,
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const touchDevice =
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer:coarse)').matches

    // create the canvas + context up front so three never double-requests a
    // context (which throws "existing context of a different type")
    const canvas = document.createElement('canvas')
    const context =
      canvas.getContext('webgl2', { antialias: false, alpha: false }) ?? undefined

    // If WebGL isn't available (headless render, blocklisted GPU, context loss)
    // three's WebGLRenderer constructor throws. That throw must never escape the
    // effect — an uncaught error here would unmount the whole React tree and
    // blank the page. Fall back to the static CSS brand wash instead so every
    // section stays fully visible without WebGL.
    let renderer: THREE.WebGLRenderer
    try {
      if (!context) throw new Error('no webgl2 context')
      renderer = new THREE.WebGLRenderer({
        canvas,
        context: context as WebGL2RenderingContext,
        antialias: false,
        alpha: false,
      })
    } catch {
      host.classList.add('air-fallback')
      return
    }
    renderer.setPixelRatio(1) // taikisha forces ratio 1 — the shader math is in CSS pixels
    host.appendChild(canvas)
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(30, 1, 15, 100000)
    camera.position.set(0, 0, 200)
    camera.lookAt(new THREE.Vector3())

    // --- GPUComputationRenderer FIFO of pointer positions ---
    const gpuCompute = new GPUComputationRenderer(TEXTURE_W, TEXTURE_H, renderer)
    const pTexture = gpuCompute.createTexture()
    const posArray = pTexture.image.data as Float32Array
    for (let n = 0; n < posArray.length; n += 4) {
      posArray[n] = -1
      posArray[n + 1] = -1
      posArray[n + 2] = -1
      posArray[n + 3] = 0
    }

    const pointVariable = gpuCompute.addVariable(
      'mousePositionTexture',
      positionShader,
      pTexture,
    )
    pointVariable.material.uniforms.mousePoint = { value: new THREE.Vector2() }
    pointVariable.material.uniforms.mouseMoveCount = { value: 0 }
    pointVariable.material.uniforms.timecount = { value: 0 }
    pointVariable.material.uniforms.mouseTextureSize = {
      value: new THREE.Vector2(TEXTURE_W, TEXTURE_H),
    }
    pointVariable.material.uniforms.mousePress = { value: false }
    gpuCompute.setVariableDependencies(pointVariable, [pointVariable])
    const gpuErr = gpuCompute.init()
    if (gpuErr) console.error('GPUComputationRenderer:', gpuErr)

    // --- full-screen render plane ---
    const planeGeometry = new THREE.PlaneGeometry(108, 108, 1, 1)
    const material = new THREE.RawShaderMaterial({
      uniforms: {
        mousePositionTexture: { value: null },
        timecount: { value: 0 },
        mousePoint: { value: new THREE.Vector2() },
        winSize: { value: new THREE.Vector2() },
        mouseTextureSize: { value: new THREE.Vector2(TEXTURE_W, TEXTURE_H) },
        mousePress: { value: false },
        touchdevice: { value: touchDevice },
        repeatCount: { value: 128 },
        // smoke disabled: limitCount == 128 skips the entire per-pixel trail
        // loop, leaving only the cheap flowing-air background (big perf win)
        limitCount: { value: 128 },
        mouseMoveCount: { value: 0 },
        lowFps: { value: false },
        backBaseColor: { value: new THREE.Vector3(...baseColor) },
        scrollShift: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      depthTest: true,
    })
    const mesh = new THREE.Mesh(planeGeometry, material)
    scene.add(mesh)

    const mousePoint = new THREE.Vector2()
    let mouseMoveCount = 0
    let winW = 1
    let winH = 1

    // render the heavy GPGPU pass at a fraction of screen resolution — the
    // smoke is soft/blurry so the downscale is invisible but ~3x cheaper. The
    // canvas is CSS-stretched back to 100% (updateStyle=false keeps our sizing).
    const RENDER_SCALE = 0.55
    const resize = () => {
      winW = Math.max(1, host.clientWidth)
      winH = Math.max(1, host.clientHeight)
      const bufW = Math.max(1, Math.round(winW * RENDER_SCALE))
      const bufH = Math.max(1, Math.round(winH * RENDER_SCALE))
      camera.aspect = winW / winH
      camera.updateProjectionMatrix()
      renderer.setSize(bufW, bufH, false)
      material.uniforms.winSize.value.set(bufW, bufH)
      mesh.scale.x = winW / winH
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(host)

    // pause the GPU work entirely when the hero is scrolled out of view
    let visible = true
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { threshold: 0 },
    )
    io.observe(host)

    // mouse-reactive smoke is disabled for performance — the air field still
    // flows on its own (getBackColor), but no pointer-following smoke puffs.

    let raf = 0
    let count = 0
    // render at the display's native refresh rate (requestAnimationFrame is
    // vsync-locked, so this tops out at the monitor's Hz — 60/120/144...).
    // The simulation advances by real elapsed time (referenced to a 30fps
    // cadence) so flow speed and smoke decay stay identical at any frame rate.
    let last = 0
    const minDt = 1000 / 45 // cap the heavy GPGPU pass at ~45fps to stay light
    const refDt = 1000 / 30
    const frame = (t: number) => {
      raf = requestAnimationFrame(frame)
      if (!visible) return
      const dt = t - last
      if (dt < minDt) return
      last = t
      const step = Math.min(dt / refDt, 2)

      gpuCompute.compute()
      material.uniforms.mousePositionTexture.value =
        gpuCompute.getCurrentRenderTarget(pointVariable).texture
      material.uniforms.mousePoint.value.copy(mousePoint)
      pointVariable.material.uniforms.mousePoint.value.copy(mousePoint)
      material.uniforms.timecount.value = count
      pointVariable.material.uniforms.timecount.value = count
      const reduceNum = 0.7 * step
      mouseMoveCount -= mouseMoveCount >= reduceNum ? reduceNum : 0
      material.uniforms.mouseMoveCount.value = mouseMoveCount
      // ease the shader's scroll term toward the live page progress so the
      // colour field migrates smoothly rather than snapping between sections
      if (scrollRef) {
        const cur = material.uniforms.scrollShift.value as number
        const tgt = scrollRef.current
        material.uniforms.scrollShift.value = cur + (tgt - cur) * Math.min(0.08 * step, 1)
      }
      renderer.render(scene, camera)
      count += step
    }

    if (reduced) {
      // single static frame (resize() already ran above)
      gpuCompute.compute()
      material.uniforms.mousePositionTexture.value =
        gpuCompute.getCurrentRenderTarget(pointVariable).texture
      material.uniforms.timecount.value = 12
      renderer.render(scene, camera)
    } else {
      raf = requestAnimationFrame(frame)
    }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      planeGeometry.dispose()
      material.dispose()
      gpuCompute.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === host) {
        host.removeChild(renderer.domElement)
      }
    }
    // primitive deps keep the heavy GL setup from re-running on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseColor[0], baseColor[1], baseColor[2], reduced, interactiveSelector, scrollRef])

  return <div ref={hostRef} className={className} aria-hidden />
}
