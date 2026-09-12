import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** travel distance in px (gaaboo-like ~40) */
  distance?: number
  direction?: Direction
}

const ease = [0.22, 1, 0.36, 1] as const

function offset(dir: Direction, d: number) {
  switch (dir) {
    case 'down':
      return { y: -d }
    case 'left':
      return { x: d }
    case 'right':
      return { x: -d }
    default:
      return { y: d }
  }
}

export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 40,
  direction = 'up',
}: RevealProps) {
  const reduce = useReducedMotion()

  // Respect prefers-reduced-motion: render statically, no transform/opacity anim.
  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const from = offset(direction, distance)

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  )
}
