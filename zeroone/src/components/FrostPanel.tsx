import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

/**
 * Soft frosted panel that sits over the animated air background to give text
 * blocks a subtle, readable backdrop while still letting the field glow
 * through. Generous rounded corners keep the curvy, organic feel.
 */
export default function FrostPanel({ children, className = '' }: Props) {
  return (
    <div
      className={`rounded-[2.5rem] bg-white/75 p-7 shadow-[0_10px_40px_-20px_rgba(20,20,20,0.25)] ring-1 ring-white/60 sm:p-9 lg:p-10 ${className}`}
    >
      {children}
    </div>
  )
}
