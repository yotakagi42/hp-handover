import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Illust from './Illust'
import Magnetic from './Magnetic'

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-10 lg:px-10 lg:py-16">
      <Reveal>
        <div className="relative mx-auto max-w-container overflow-hidden rounded-[40px] bg-white/80 px-6 py-20 text-center text-ink shadow-xl ring-1 ring-white/60 lg:py-28">
          <div className="pointer-events-none absolute -left-16 top-0 h-72 w-72 animate-blob rounded-full bg-pop-pink/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 animate-blob rounded-full bg-pop-blue/30 blur-3xl [animation-delay:-5s]" />
          <div className="relative">
            <div className="mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg">
              <Illust name="success" alt="成功・成長のイラスト" className="h-20 w-auto" />
            </div>
            <p className="label-caps mb-5 text-pop-blue">CONTACT ／ お問い合わせ</p>
            <h2 className="mx-auto max-w-3xl font-round text-3xl font-extrabold leading-tight sm:text-5xl">
              次の一手を、<span className="c-colorful">Zeroone</span>と。
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-jp text-base leading-loose text-ink-soft">
              事業のご相談も、キャリアのご相談も。まずは気軽にお声がけください。
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={0.4}>
                <a
                  href="mailto:contact@hr-zeroone.com"
                  className="group flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-bold text-white shadow-lg transition-transform hover:scale-[1.03]"
                >
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  お問い合わせ
                </a>
              </Magnetic>
              <Link
                to="/recruit"
                className="rounded-full border border-ink/15 bg-white/50 px-8 py-4 font-bold text-ink transition-colors hover:bg-white"
              >
                採用情報を見る
              </Link>
              <Link
                to="/company"
                className="rounded-full border border-ink/15 bg-white/50 px-8 py-4 font-bold text-ink transition-colors hover:bg-white"
              >
                会社概要を見る
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
