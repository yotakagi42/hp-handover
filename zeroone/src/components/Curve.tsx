type CurveProps = {
  /** fill color of the curve (the color of the section it reveals below) */
  fill?: string
  className?: string
  flip?: boolean
  /** 'soft' = gentle wave, 'organic' = bigger asymmetric S-curve */
  variant?: 'soft' | 'organic'
  /** rough pixel height of the curve band */
  height?: number
}

const PATHS = {
  soft: 'M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z',
  // taller asymmetric S — rises left, sweeps down to the right
  organic: 'M0,70 C260,10 520,140 820,90 C1080,52 1280,10 1440,46 L1440,120 L0,120 Z',
} as const

/** Soft / organic curved section divider. */
export default function Curve({
  fill = '#FCFBF7',
  className = '',
  flip = false,
  variant = 'soft',
  height = 100,
}: CurveProps) {
  return (
    <div className={`pointer-events-none w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`w-full ${flip ? 'rotate-180' : ''}`}
        style={{ height, display: 'block' }}
      >
        {/* same-color non-scaling stroke covers sub-pixel antialiasing seams */}
        <path
          d={PATHS[variant]}
          fill={fill}
          stroke={fill}
          strokeWidth={1.5}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
