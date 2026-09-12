import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  /** depth: fraction of the element's travel range, positive = moves slower
   *  (recedes), negative = moves faster (approaches). ~0.1–0.4 reads well. */
  speed?: number
}

/**
 * Scroll-progress-driven depth layer. As the element travels through the
 * viewport its vertical offset is mapped continuously from scroll position —
 * not a one-shot fade — so decorative layers from one section keep drifting as
 * the next arrives, dissolving the seam between sections. Transform-only, and
 * fully static under prefers-reduced-motion (and with no JS, since framer only
 * applies the offset once mounted — content sits at its natural spot).
 */
export default function Parallax({ children, className, speed = 0.2 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const shift = `${speed * 100}%`
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ['0%', '0%'] : [shift, `-${speed * 100}%`],
  )
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
