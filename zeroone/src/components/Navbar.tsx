import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from './Logo'

// route: true は SPA 遷移（Link）、それ以外はトップページ内アンカー
const LINKS = [
  { ja: 'ホーム', href: '/#top' },
  { ja: '企業理念', href: '/#about' },
  { ja: '事業紹介', href: '/#services' },
  { ja: '採用情報', href: '/recruit', route: true },
  { ja: '会社概要', href: '/company', route: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-paper/95 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-5 lg:px-10">
        <a href="/#top" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-ink" />
          <span className="font-round text-2xl font-extrabold tracking-tight text-ink">
            Zeroone
          </span>
        </a>

        {/* pill nav */}
        <nav className="hidden items-center gap-1.5 rounded-full bg-white/90 p-1.5 shadow-sm ring-1 ring-black/5 lg:flex">
          {LINKS.map((l) => {
            const cls =
              'rounded-full px-4 py-2.5 text-sm font-bold text-ink/80 transition-colors hover:bg-ink hover:text-white'
            return l.route ? (
              <Link key={l.href} to={l.href} className={cls}>
                {l.ja}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className={cls}>
                {l.ja}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/recruit"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink shadow-sm ring-1 ring-black/5 transition-colors hover:bg-ink hover:text-white sm:block lg:hidden"
          >
            採用情報
          </Link>
          <Link
            to="/company"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink shadow-sm ring-1 ring-black/5 transition-colors hover:bg-ink hover:text-white sm:block lg:hidden"
          >
            会社概要
          </Link>
          <a
            href="/#contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[0.97] sm:flex"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            お問い合わせ
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full bg-white p-2 text-ink shadow-sm ring-1 ring-black/5 lg:hidden"
            aria-label="メニュー"
          >
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-5 mt-3 flex flex-col gap-1 rounded-3xl bg-white p-3 shadow-lg ring-1 ring-black/5">
              {LINKS.map((l) => {
                const cls =
                  'rounded-full px-4 py-3 font-bold text-ink/80 hover:bg-ink hover:text-white'
                return l.route ? (
                  <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className={cls}>
                    {l.ja}
                  </Link>
                ) : (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={cls}>
                    {l.ja}
                  </a>
                )
              })}
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-full bg-ink px-4 py-3 text-center font-bold text-white"
              >
                お問い合わせ
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
