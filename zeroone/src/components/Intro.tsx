import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

function useFontReady(reduce: boolean) {
  const [ready, setReady] = useState(reduce)
  useEffect(() => {
    if (reduce) return
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts
    if (fonts?.load) {
      Promise.race([
        fonts.load('900 1em "Roboto Slab"'),
        new Promise((r) => setTimeout(r, 700)),
      ]).then(() => setReady(true))
    } else {
      setReady(true)
    }
  }, [reduce])
  return ready
}

const VARIANTS = ['counter', 'panels', 'logo', 'marquee'] as const

function variant() {
  if (typeof window === 'undefined') return 'counter'
  // ?intro= は QA 用の固定オーバーライド。通常はロードごとにランダムで変える。
  const forced = new URLSearchParams(window.location.search).get('intro')
  if (forced) return forced
  return VARIANTS[Math.floor(Math.random() * VARIANTS.length)]
}

/* ----------------------------- counter ----------------------------- */
function Counter({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    const start = performance.now()
    const dur = 820
    let raf = 0
    const tick = () => {
      const p = Math.min((performance.now() - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(onDone, 80)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-paper"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.5, ease }}
    >
      <span className="font-round text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">
        Zero<span className="c-colorful">one</span>
      </span>
      <span className="mt-2 font-mono text-xs tracking-[0.3em] text-ink-soft">
        THE CORE OF INNOVATION
      </span>
      <div className="absolute bottom-8 right-8 font-slab text-6xl font-black tabular-nums text-ink sm:bottom-12 sm:right-16 sm:text-[120px]">
        {n}
        <span className="text-pop-pink">%</span>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-pop-blue" style={{ width: `${n}%` }} />
    </motion.div>
  )
}

/* ----------------------------- panels ------------------------------ */
const PANEL_COLORS = ['bg-pop-pink', 'bg-pop-violet', 'bg-pop-blue', 'bg-pop-teal', 'bg-pop-yellow']
function Panels({ onDone }: { onDone: () => void }) {
  const [leaving, setLeaving] = useState(false)
  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1100)
    const t2 = setTimeout(onDone, 2050)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onDone])

  return (
    <div className="fixed inset-0 z-[200] flex">
      {PANEL_COLORS.map((c, i) => (
        <motion.div
          key={i}
          className={`h-full flex-1 ${c}`}
          initial={{ y: 0 }}
          animate={leaving ? { y: '-100%' } : { y: 0 }}
          transition={{ duration: 0.7, ease, delay: leaving ? i * 0.08 : 0 }}
        />
      ))}
      <AnimatePresence>
        {!leaving && (
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="font-round text-[14vw] font-extrabold text-white drop-shadow lg:text-[120px]">
              Zeroone
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ------------------------------ logo ------------------------------- */
function LogoRise({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1700)
    return () => clearTimeout(t)
  }, [onDone])
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-paper"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.85, ease }}
    >
      <h1 className="flex overflow-hidden pb-[0.1em] font-round text-[20vw] font-extrabold leading-none tracking-tight text-ink lg:text-[180px]">
        <motion.span
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="inline-block"
        >
          Zero
        </motion.span>
        <motion.span
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="c-colorful inline-block"
        >
          one
        </motion.span>
      </h1>
    </motion.div>
  )
}

/* ----------------------------- marquee ----------------------------- */
function Marquee({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1900)
    return () => clearTimeout(t)
  }, [onDone])
  const word = (
    <span className="mx-[0.12em] inline-block">
      ZEROONE<span className="mx-[0.12em] text-pop-pink">✦</span>
    </span>
  )
  const t = (
    <div className="flex font-slab text-[26vw] font-black leading-none text-ink lg:text-[220px]">
      {word}
      {word}
      {word}
      {word}
    </div>
  )
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-paper"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.85, ease }}
    >
      <motion.div
        className="flex w-max whitespace-nowrap"
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease }}
      >
        <div className="flex animate-marquee">
          {t}
          {t}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Intro() {
  const reduce = !!useReducedMotion()
  // QA switch: ?intro=off skips the preloader entirely (used for headless
  // capture of the in-motion page), mirroring the ?intro=<variant> override.
  const skip =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('intro') === 'off'
  const ready = useFontReady(reduce)
  const [show, setShow] = useState(!reduce && !skip)
  // pick the opening once on mount so re-renders don't re-randomize it
  const [v] = useState(variant)

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [show])

  // Hard failsafe: whatever a variant's own timer does, the preloader is torn
  // down by 2.2s (longest variant = panels 2.05s) so a stalled font load or
  // dropped rAF can never leave the page covered.
  useEffect(() => {
    if (reduce) return
    const t = setTimeout(() => setShow(false), 2200)
    return () => clearTimeout(t)
  }, [reduce])

  if (reduce || skip) return null
  // cover the page immediately so content never flashes before fonts load
  if (!ready) return <div className="fixed inset-0 z-[200] bg-paper" />

  const done = () => setShow(false)

  return (
    <AnimatePresence>
      {show &&
        (v === 'panels' ? (
          <Panels key="i" onDone={done} />
        ) : v === 'logo' ? (
          <LogoRise key="i" onDone={done} />
        ) : v === 'marquee' ? (
          <Marquee key="i" onDone={done} />
        ) : (
          <Counter key="i" onDone={done} />
        ))}
    </AnimatePresence>
  )
}
