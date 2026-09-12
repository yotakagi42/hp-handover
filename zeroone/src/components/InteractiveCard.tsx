import { useRef, type ReactNode, type PointerEvent } from 'react'
import { useReducedMotion } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  /** max tilt in degrees (set 0 to disable tilt but keep the spotlight) */
  tilt?: number
  /** spotlight color (brand-tinted rgba) */
  glow?: string
  /** spotlight radius in px */
  glowSize?: number
}

/**
 * Pointer-driven card: a subtle 3D tilt toward the cursor + a soft radial
 * spotlight that follows the pointer + a hover lift. Only transform/opacity
 * animate (60fps). Disabled gracefully under prefers-reduced-motion.
 *
 * Pass the card's own bg/ring/rounded via className — this becomes the card.
 */
export default function InteractiveCard({
  children,
  className = '',
  tilt = 6,
  glow = 'rgba(138,92,246,0.22)',
  glowSize = 360,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || reduce) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
    if (tilt > 0) {
      el.style.setProperty('--rx', `${(0.5 - py) * tilt}deg`)
      el.style.setProperty('--ry', `${(px - 0.5) * tilt}deg`)
    }
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`group/ic relative transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1.5 motion-reduce:hover:translate-y-0 ${className}`}
      style={
        reduce
          ? undefined
          : {
              transform:
                'perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))',
              transformStyle: 'preserve-3d',
            }
      }
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/ic:opacity-100 motion-reduce:hidden"
        style={{
          background: `radial-gradient(${glowSize}px circle at var(--mx,50%) var(--my,50%), ${glow}, transparent 65%)`,
        }}
        aria-hidden
      />
      {children}
    </div>
  )
}
