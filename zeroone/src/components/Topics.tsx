import Reveal from './Reveal'
import FrostPanel from './FrostPanel'

const NEWS = [
  { date: '2024.06.20', cat: 'PRESS', title: '次世代クラウド基盤ソリューションの提供を開始しました。' },
  { date: '2024.05.28', cat: 'EVENT', title: 'テックカンファレンス「Zeroone Forge」を初開催。' },
  { date: '2024.05.10', cat: 'RECRUIT', title: 'システムアーキテクト・セキュリティエンジニアを募集中です。' },
  { date: '2024.04.15', cat: 'R&D', title: '量子コンピューティング領域の研究開発チームを新設しました。' },
  { date: '2024.03.30', cat: 'NEWS', title: 'コーポレートサイトをリニューアルしました。' },
]

const CHIP: Record<string, string> = {
  PRESS: 'bg-pop-blue',
  EVENT: 'bg-pop-pink',
  RECRUIT: 'bg-pop-teal',
  'R&D': 'bg-pop-violet',
  NEWS: 'bg-pop-orange',
}

export default function Topics() {
  return (
    <section id="topics" className="px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-10 flex items-end justify-between">
          <FrostPanel className="px-8 py-5">
            <p className="label-caps mb-3 text-pop-violet">TOPICS ／ お知らせ</p>
            <h2 className="font-round text-3xl font-extrabold text-ink sm:text-4xl">
              最新の<span className="c-colorful">トピックス</span>
            </h2>
          </FrostPanel>
          <a
            href="#topics"
            className="hidden items-center gap-1 font-bold text-ink-soft transition-colors hover:text-ink sm:flex"
          >
            一覧へ
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </a>
        </Reveal>

        <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
          {NEWS.map((n, i) => (
            <Reveal key={`${n.date}-${n.cat}`} delay={i * 0.05}>
              <a
                href="#topics"
                className="group flex flex-col gap-2 border-b border-l-[3px] border-black/5 border-l-transparent px-6 py-5 transition-all duration-300 last:border-b-0 hover:border-l-pop-blue hover:bg-paper hover:pl-8 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="font-mono text-sm text-ink-soft">{n.date}</span>
                <span
                  className={`inline-block w-fit rounded-full px-3 py-0.5 text-[11px] font-bold text-white ${CHIP[n.cat]}`}
                >
                  {n.cat}
                </span>
                <span className="flex-1 font-jp text-sm font-medium text-ink transition-colors group-hover:text-pop-blue">
                  {n.title}
                </span>
                <span className="material-symbols-outlined text-ink/30 transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
