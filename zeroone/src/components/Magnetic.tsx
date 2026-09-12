import { useRef, type ReactNode, type PointerEvent } from 'react'
import { useReducedMotion } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  /** how strongly the element follows the cursor (0..1) */
  strength?: number
}

/**
 * Magnetic wrapper — the child gently follows the cursor while hovered and
 * springs back on leave. Transform-only (60fps); disabled for reduced-motion.
 */
export default function Magnetic({ children, className = '', strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || reduce) return
    const r = el.getBoundingClientRect()
    const x = e.clientX - (r.left + r.width / 2)
    const y = e.clientY - (r.top + r.height / 2)
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  )
}
