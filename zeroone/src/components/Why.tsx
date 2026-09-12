import Reveal from './Reveal'
import InteractiveCard from './InteractiveCard'

// Zeroone rainbow band
const RAINBOW =
  'linear-gradient(135deg, #FF5DA2 0%, #8A5CF6 26%, #3B6CF5 48%, #00C2A8 72%, #9BE000 100%)'

// organic S-curve used to carve the rainbow band's wavy top & bottom edges
const WAVE = 'M0,70 C260,10 520,140 820,90 C1080,52 1280,10 1440,46'
// opaque region = where the rainbow shows (mask: black keeps, transparent cuts)
const svg = (path: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120' preserveAspectRatio='none'><path d='${path}' fill='black'/></svg>`,
  )}")`
// top band: rainbow below the wave; bottom band: rainbow above the wave
const MASK = `${svg(`${WAVE} L1440,120 L0,120 Z`)}, linear-gradient(black, black), ${svg(`${WAVE} L1440,0 L0,0 Z`)}`

const REASONS = [
  {
    no: '01',
    title: '圧倒的な技術力',
    body: 'クラウドネイティブからセキュリティまで、最新スタックを使いこなす精鋭が集結。',
  },
  {
    no: '02',
    title: '変化を楽しむ文化',
    body: '正解のない領域へ柔軟に挑戦。学び続けることを当たり前にするチーム。',
  },
  {
    no: '03',
    title: '伴走するパートナー',
    body: '受託で終わらせず、顧客のビジネス成長まで一緒に走り抜けます。',
  },
  {
    no: '04',
    title: '一人ひとりの裁量',
    body: '裁量と責任をセットで委ねる。あなたの判断が、そのままプロダクトになる。',
  },
  {
    no: '05',
    title: '研究開発への投資',
    body: 'AI・ブロックチェーン・量子。次のフロンティアへ継続的に投資します。',
  },
  {
    no: '06',
    title: 'フェアな還元',
    body: '生み出した価値を、正当にエンジニアへ還元する透明な仕組み。',
  },
]

export default function Why() {
  return (
    <section className="relative overflow-hidden px-5 pb-32 pt-32 lg:px-10">
      {/* rainbow band masked into a wavy shape; outside the wave is transparent
          so the animated background behind shows through */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: RAINBOW,
          maskImage: MASK,
          WebkitMaskImage: MASK,
          maskRepeat: 'no-repeat, no-repeat, no-repeat',
          WebkitMaskRepeat: 'no-repeat, no-repeat, no-repeat',
          maskPosition: 'top, center, bottom',
          WebkitMaskPosition: 'top, center, bottom',
          maskSize: '100% 100px, 100% calc(100% - 196px), 100% 100px',
          WebkitMaskSize: '100% 100px, 100% calc(100% - 196px), 100% 100px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-container">
        <Reveal className="mb-14 text-center">
          <p className="label-caps mb-4 text-white/80">WHY ZEROONE ／ 選ばれる理由</p>
          <h2 className="font-round text-3xl font-extrabold text-white drop-shadow-[0_2px_18px_rgba(255,255,255,0.35)] sm:text-4xl">
            私たちが、選ばれ続ける理由。
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.no} delay={(i % 3) * 0.08}>
              <InteractiveCard
                glow="rgba(138,92,246,0.20)"
                className="group h-full rounded-3xl bg-white p-7 shadow-[0_10px_36px_-20px_rgba(20,20,20,0.35)] ring-1 ring-transparent hover:shadow-[0_26px_64px_-30px_rgba(138,92,246,0.5)] hover:ring-pop-violet/40"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-round text-4xl font-extrabold text-ink/10 transition-colors group-hover:text-pop-violet/40">
                    {r.no}
                  </span>
                  <span className="h-px flex-1 bg-black/5" />
                </div>
                <h3 className="mb-3 font-round text-xl font-bold">
                  <span className="c-colorful">{r.title}</span>
                </h3>
                <p className="font-jp text-sm leading-loose text-ink-soft">{r.body}</p>
              </InteractiveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
