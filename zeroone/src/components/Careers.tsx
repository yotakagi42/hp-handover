import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Illust from './Illust'
import FrostPanel from './FrostPanel'
import InteractiveCard from './InteractiveCard'

const POSITIONS = [
  { en: 'SYSTEM ARCHITECT', jp: 'システムアーキテクト', color: 'text-pop-blue' },
  { en: 'SECURITY ENGINEER', jp: 'セキュリティエンジニア', color: 'text-pop-teal' },
  { en: 'FRONTEND ENGINEER', jp: 'フロントエンドエンジニア', color: 'text-pop-violet' },
]

export default function Careers() {
  return (
    <section id="careers" className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <FrostPanel>
              <div className="mb-3 flex items-center gap-3">
                <span className="font-round text-3xl font-extrabold text-pop-pink">02</span>
                <span className="label-caps text-ink-soft">Careers</span>
              </div>
              <h2 className="mb-6 font-round text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                あなたの技術が、
                <br />
                <span className="c-colorful">世界を変える力</span>に。
              </h2>
              <p className="mb-6 max-w-md font-jp text-base leading-loose text-ink-soft">
                最高峰の技術課題に挑戦し、共に成長できる仲間を募集しています。
              </p>
              <Link
                to="/recruit"
                className="group mb-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-[0.97]"
              >
                採用情報を見る
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
              <div className="flex flex-wrap gap-4">
                <div className="rounded-2xl bg-paper px-6 py-4 ring-1 ring-black/5">
                  <span className="label-caps text-ink-soft">OPEN</span>
                  <p className="font-round text-2xl font-extrabold text-ink">12+</p>
                </div>
                <div className="rounded-2xl bg-paper px-6 py-4 ring-1 ring-black/5">
                  <span className="label-caps text-ink-soft">STACK</span>
                  <p className="font-round text-2xl font-extrabold text-ink">MODERN</p>
                </div>
                <Illust
                  name="man-riding-a-rocket"
                  alt="ロケットに乗る人のイラスト"
                  className="h-24 w-auto animate-float motion-reduce:animate-none sm:h-28"
                />
              </div>
              </FrostPanel>
            </Reveal>
          </div>

          <div className="space-y-4 md:col-span-7">
            {POSITIONS.map((p, i) => (
              <Reveal key={p.en} delay={0.08 + i * 0.08}>
                <InteractiveCard
                  tilt={4}
                  glow="rgba(255,93,162,0.18)"
                  className="group rounded-2xl bg-paper ring-1 ring-black/5 hover:shadow-[0_18px_50px_-26px_rgba(20,20,20,0.4)] hover:ring-pop-pink/40"
                >
                  <a
                    href="#contact"
                    className="flex items-center justify-between p-6"
                  >
                    <div>
                      <span className={`label-caps block ${p.color}`}>{p.en}</span>
                      <p className="mt-1 font-round text-xl font-bold text-ink">{p.jp}</p>
                    </div>
                    <span className="material-symbols-outlined text-ink/40 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-ink">
                      chevron_right
                    </span>
                  </a>
                </InteractiveCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
