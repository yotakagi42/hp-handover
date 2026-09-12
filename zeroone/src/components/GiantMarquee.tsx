import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'

type GiantMarqueeProps = {
  text?: string
  className?: string
  /** page scroll progress (0..1); the band drifts horizontally with it so the
   *  type keeps travelling as the section scrolls — a shared element that
   *  transforms continuously with the page rather than sitting still. */
  scrollProgress?: MotionValue<number>
}

/** gaaboo-style oversized rolling text band — seamless infinite horizontal loop,
 *  with an added scroll-linked drift layered on top of the CSS auto-scroll. */
export default function GiantMarquee({
  text = 'ZEROONE',
  className = '',
  scrollProgress,
}: GiantMarqueeProps) {
  const reduce = useReducedMotion()
  // fallback source so the hook order is stable when no progress is supplied
  const fallback = useMotionValue(0)
  const source = scrollProgress ?? fallback
  const drift = useTransform(source, [0, 1], ['8%', '-8%'])

  // one track holds enough repeats to overflow the viewport; we render two
  // identical tracks and slide the pair by -50% for a seamless loop.
  const track = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className="mx-[0.18em] inline-block">
      {text}
      <span className="mx-[0.18em] text-accent">✦</span>
    </span>
  ))

  return (
    <div
      className={`overflow-hidden border-y border-black/5 bg-white/70 py-6 backdrop-blur-sm sm:py-10 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        style={reduce || !scrollProgress ? undefined : { x: drift }}
        className="flex w-max animate-marquee whitespace-nowrap will-change-transform motion-reduce:animate-none motion-reduce:will-change-auto"
      >
        <div className="flex font-round text-[16vw] font-extrabold leading-none tracking-tight text-ink/25 sm:text-[13vw]">
          {track}
        </div>
        <div className="flex font-round text-[16vw] font-extrabold leading-none tracking-tight text-ink/25 sm:text-[13vw]">
          {track}
        </div>
      </motion.div>
    </div>
  )
}
