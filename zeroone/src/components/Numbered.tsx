import Reveal from './Reveal'
import Illust from './Illust'
import FrostPanel from './FrostPanel'
import InteractiveCard from './InteractiveCard'

type Block = {
  no: string
  en: string
  title: string
  body: string
  illust: string
  alt: string
  ring: string
  blob: string
}

const BLOCKS: Block[] = [
  {
    no: '01',
    en: 'Achievements',
    title: '14年以上の挑戦と実績',
    body: 'SES黎明期から顧客の課題解決に挑み、変化の激しい市場へ柔軟に対応。培った知見と経験を活かし、仲間と共に新しい価値を提供し続けています。',
    illust: 'engineer',
    alt: 'エンジニアのイラスト',
    ring: 'border-pop-blue/30',
    blob: 'bg-pop-blue/10',
  },
  {
    no: '02',
    en: 'Culture',
    title: '変化を楽しむチーム',
    body: '正解のない領域へ柔軟に挑戦し、学び続けることを当たり前に。一人ひとりの創造性を尊重し、多様な仲間と共に成長していく文化があります。',
    illust: 'creative-work',
    alt: 'クリエイティブに働く様子のイラスト',
    ring: 'border-pop-pink/30',
    blob: 'bg-pop-pink/10',
  },
  {
    no: '03',
    en: 'Vision',
    title: 'ゼロから未来を描く',
    body: '目の前の課題解決にとどまらず、その先の社会まで見据えて。技術を起点に、まだ誰も見たことのない可能性を一緒に形にしていきます。',
    illust: 'presentation',
    alt: 'プレゼンテーションのイラスト',
    ring: 'border-pop-teal/30',
    blob: 'bg-pop-teal/10',
  },
]

export default function Numbered() {
  return (
    <section className="px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-container space-y-20 lg:space-y-28">
        {BLOCKS.map((b, i) => {
          const flip = i % 2 === 1
          return (
            <div
              key={b.no}
              className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
            >
              {/* illustration in a soft circular frame */}
              <Reveal
                direction={flip ? 'left' : 'right'}
                className={flip ? 'md:order-2' : ''}
              >
                <InteractiveCard tilt={5} glow="rgba(138,92,246,0.16)" className="rounded-[2.5rem]">
                  <FrostPanel className="!p-6">
                    <div className="relative mx-auto aspect-square w-full max-w-md">
                      <div className={`absolute inset-0 rounded-full ${b.blob}`} />
                      <div
                        className={`absolute inset-4 rounded-full border-2 border-dashed ${b.ring} animate-spin-slower motion-reduce:animate-none`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center p-12">
                        <Illust name={b.illust} alt={b.alt} className="h-full w-full object-contain" />
                      </div>
                    </div>
                  </FrostPanel>
                </InteractiveCard>
              </Reveal>

              {/* text */}
              <Reveal
                delay={0.1}
                direction={flip ? 'right' : 'left'}
                className={flip ? 'md:order-1' : ''}
              >
                <FrostPanel>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-round text-4xl font-extrabold text-pop-orange">
                      {b.no}
                    </span>
                    <span className="label-caps text-ink-soft">{b.en}</span>
                  </div>
                  <h3 className="mb-5 font-round text-3xl font-extrabold leading-snug text-ink sm:text-4xl">
                    <span className="c-colorful">{b.title}</span>
                  </h3>
                  <p className="font-jp text-base leading-loose text-ink-soft">{b.body}</p>
                </FrostPanel>
              </Reveal>
            </div>
          )
        })}
      </div>
    </section>
  )
}
