import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Fixed HUD chrome — thin monospace "raw data" overlays in the page corners:
 * a live clock, the scroll-progress percentage, and the current section index
 * (01 / 07). Purely decorative and pointer-transparent; it never blocks the
 * content beneath. Hidden on small screens so it can't cause overflow, and it
 * stays static (no transitions) under prefers-reduced-motion.
 */

const SECTIONS = [
  { id: 'top', label: 'HOME' },
  { id: 'about', label: 'PHILOSOPHY' },
  { id: 'services', label: 'SERVICES' },
  { id: 'topics', label: 'TOPICS' },
  { id: 'careers', label: 'CAREERS' },
  { id: 'contact', label: 'CONTACT' },
  { id: 'company', label: 'COMPANY' },
] as const

function clock() {
  const d = new Date()
  const p = (n: number) => String(n).padStart(2, '0')
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`
}

export default function Hud() {
  const reduce = useReducedMotion()
  const [time, setTime] = useState(clock)
  const [pct, setPct] = useState(0)
  const [active, setActive] = useState(0)
  const raf = useRef(0)

  // live clock (tabular-nums keeps digit width fixed so it never jitters)
  useEffect(() => {
    const t = setInterval(() => setTime(clock()), 1000)
    return () => clearInterval(t)
  }, [])

  // scroll progress + active section, coalesced to one rAF per scroll burst
  useEffect(() => {
    const read = () => {
      raf.current = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setPct(max > 0 ? Math.round((doc.scrollTop / max) * 100) : 0)

      // absolute document top of each section (getBoundingClientRect is robust
      // to sticky/nested offsetParents, unlike offsetTop) vs a line 35% down
      const line = window.innerHeight * 0.35
      let idx = 0
      for (let i = 0; i < SECTIONS.length; i++) {
        const el = document.getElementById(SECTIONS[i].id)
        if (el && el.getBoundingClientRect().top <= line) idx = i
      }
      setActive(idx)
    }
    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  const num = (n: number) => String(n + 1).padStart(2, '0')
  const trans = reduce ? '' : 'transition-colors duration-300'

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 hidden lg:block"
    >
      {/* bottom-left — section index + label */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-ink-soft/70">
        <span className="tabular-nums text-ink">{num(active)}</span>
        <span className="text-ink-soft/40">/</span>
        <span className="tabular-nums">{num(SECTIONS.length - 1)}</span>
        <span className={`ml-2 text-ink-soft/80 ${trans}`}>
          {SECTIONS[active].label}
        </span>
      </div>

      {/* bottom-right — scroll progress + live clock */}
      <div className="absolute bottom-6 right-6 flex items-center gap-4 font-mono text-[11px] tracking-[0.12em] text-ink-soft/70">
        <span className="flex items-center gap-1.5">
          <span className="text-ink-soft/40">SCROLL</span>
          <span className="tabular-nums text-ink">{String(pct).padStart(2, '0')}%</span>
        </span>
        <span className="h-3 w-px bg-black/15" />
        <span className="tabular-nums">{time}</span>
      </div>
    </div>
  )
}
