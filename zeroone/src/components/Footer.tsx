import { useState } from 'react'
import Logo from './Logo'

const MENU = [
  { ja: 'ホーム', href: '/#top' },
  { ja: '企業理念', href: '/#about' },
  { ja: '事業紹介', href: '/#services' },
  { ja: '採用情報', href: '/recruit' },
  { ja: '会社概要', href: '/company' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
    setTimeout(() => setSent(false), 2600)
  }

  return (
    <footer id="company" className="border-t border-black/5 px-5 py-20 lg:px-10">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mb-5 flex items-center gap-2">
            <Logo className="h-8 w-8 text-ink" />
            <span className="font-round text-2xl font-extrabold text-ink">Zeroone</span>
          </div>
          <p className="max-w-xs font-jp text-sm leading-loose text-ink-soft">
            SES Global Systems Engineering.
            <br />
            ゼロから、無限の可能性へ。
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="label-caps mb-5 text-ink-soft">MENU</h4>
          <div className="space-y-3">
            {MENU.map((m) => (
              <a
                key={m.href}
                href={m.href}
                className="block font-jp text-sm text-ink/70 transition-colors hover:text-pop-blue"
              >
                {m.ja}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <h4 className="label-caps mb-5 text-ink-soft">NEWSLETTER</h4>
          <form
            onSubmit={submit}
            className="flex overflow-hidden rounded-full bg-paper ring-1 ring-black/10 focus-within:ring-pop-blue"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="メールアドレス"
              className="w-full border-none bg-transparent px-5 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:ring-0"
            />
            <button
              type="submit"
              className="flex items-center bg-ink px-5 text-white"
              aria-label="送信"
            >
              <span className="material-symbols-outlined text-[20px]">
                {sent ? 'check' : 'send'}
              </span>
            </button>
          </form>
          {sent && (
            <p className="mt-2 font-mono text-xs text-pop-teal">登録ありがとうございます。</p>
          )}
        </div>

        <div className="col-span-full mt-10 flex flex-col items-center justify-center gap-4 border-t border-black/5 pt-8 md:flex-row">
          <span className="font-mono text-xs text-ink-soft/70">
            © {new Date().getFullYear()} Zeroone — SES Global Systems Engineering.
          </span>
        </div>
      </div>
    </footer>
  )
}
