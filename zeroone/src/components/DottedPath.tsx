type DottedPathProps = {
  color?: string
  className?: string
  /** SVG path drawn as a row of round dots */
  d?: string
  dotGap?: number
  dotSize?: number
}

/** A hand-drawn-style dotted arc — round dots following a curved path. */
export default function DottedPath({
  color = '#FFFFFF',
  className = '',
  d = 'M10,80 C140,20 260,140 400,70 C540,8 680,120 800,60',
  dotGap = 22,
  dotSize = 7,
}: DottedPathProps) {
  return (
    <svg
      viewBox="0 0 810 160"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={d}
        stroke={color}
        strokeWidth={dotSize}
        strokeLinecap="round"
        strokeDasharray={`0.1 ${dotGap}`}
      />
    </svg>
  )
}
