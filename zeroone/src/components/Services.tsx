import Reveal from './Reveal'
import Illust from './Illust'
import FrostPanel from './FrostPanel'
import InteractiveCard from './InteractiveCard'

const SERVICES = [
  {
    illust: 'web-design',
    alt: 'インフラ構築のイラスト',
    en: 'INFRASTRUCTURE',
    title: '基盤構築・最適化',
    body: 'スケーラブルで堅牢なクラウドネイティブ基盤を設計・構築し、性能を最大化します。',
    panel: 'bg-pop-blue/10',
    ring: 'hover:ring-pop-blue/50',
    glow: 'rgba(59,108,245,0.20)',
  },
  {
    illust: 'customer-support',
    alt: 'セキュリティ支援のイラスト',
    en: 'SECURITY',
    title: 'セキュリティ基盤',
    body: 'ゼロトラストに基づく多層防御で、企業のデジタル資産を脅威から守ります。',
    panel: 'bg-pop-teal/10',
    ring: 'hover:ring-pop-teal/50',
    glow: 'rgba(0,194,168,0.20)',
  },
  {
    illust: 'studying',
    alt: '研究開発のイラスト',
    en: 'R&D',
    title: '研究開発',
    body: 'AI・ブロックチェーン・量子の可能性を、実用的なソリューションへ昇華します。',
    panel: 'bg-pop-violet/10',
    ring: 'hover:ring-pop-violet/50',
    glow: 'rgba(138,92,246,0.20)',
  },
  {
    illust: 'video-call',
    alt: '技術パートナーのイラスト',
    en: 'SES PARTNER',
    title: '技術パートナー',
    body: '伴走型のエンジニア支援で、顧客のプロダクトとチームを内側から強くします。',
    panel: 'bg-pop-orange/10',
    ring: 'hover:ring-pop-orange/50',
    glow: 'rgba(255,122,61,0.20)',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative px-5 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-12">
          <FrostPanel className="inline-block px-9 py-6">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-round text-3xl font-extrabold text-pop-orange">01</span>
              <span className="label-caps text-ink-soft">Service</span>
            </div>
            <h2 className="font-round text-3xl font-extrabold text-ink sm:text-4xl">
              事業を通じて、<span className="c-colorful">価値を届ける</span>。
            </h2>
          </FrostPanel>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SERVICES.map((s, i) => (
            <Reveal key={s.en} delay={(i % 2) * 0.08}>
              <InteractiveCard
                glow={s.glow}
                className={`group h-full overflow-hidden rounded-3xl bg-paper shadow-[0_8px_30px_-18px_rgba(20,20,20,0.25)] ring-1 ring-black/5 hover:shadow-[0_24px_60px_-28px_rgba(20,20,20,0.4)] hover:ring-2 ${s.ring}`}
              >
                <div className={`flex h-44 items-center justify-center ${s.panel}`}>
                  <Illust
                    name={s.illust}
                    alt={s.alt}
                    className="h-32 w-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="label-caps text-ink-soft">{s.en}</span>
                  <h3 className="mb-3 mt-1 font-round text-2xl font-bold text-ink">{s.title}</h3>
                  <p className="font-jp text-sm leading-loose text-ink-soft">{s.body}</p>
                </div>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
