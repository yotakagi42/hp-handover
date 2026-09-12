import Reveal from '../components/Reveal'
import Illust from '../components/Illust'
import FrostPanel from '../components/FrostPanel'
import InteractiveCard from '../components/InteractiveCard'
import SubpageLayout from '../components/SubpageLayout'

const POSITIONS = [
  {
    en: 'SYSTEM ARCHITECT',
    jp: 'システムアーキテクト',
    color: 'text-pop-blue',
    desc: '大規模システムの全体設計をリード。要件定義からアーキテクチャ選定、技術戦略の策定までを担います。',
    type: '正社員 ／ 東京・リモート併用',
  },
  {
    en: 'SECURITY ENGINEER',
    jp: 'セキュリティエンジニア',
    color: 'text-pop-teal',
    desc: '脆弱性診断・セキュア設計・インシデント対応。グローバル基準のセキュリティ体制を支えます。',
    type: '正社員 ／ 東京・リモート併用',
  },
  {
    en: 'FRONTEND ENGINEER',
    jp: 'フロントエンドエンジニア',
    color: 'text-pop-violet',
    desc: 'React / TypeScript を軸に、体験まで踏み込んだ UI 開発を推進。デザイナーと近い距離で作ります。',
    type: '正社員 ／ フルリモート可',
  },
  {
    en: 'BACKEND ENGINEER',
    jp: 'バックエンドエンジニア',
    color: 'text-pop-pink',
    desc: 'クラウドネイティブな API・基盤開発。設計から運用まで一気通貫でオーナーシップを持てます。',
    type: '正社員 ／ フルリモート可',
  },
]

const BENEFITS = [
  { icon: 'home_work', title: 'リモートワーク', desc: '職種に応じてフルリモート・ハイブリッドを選択できます。' },
  { icon: 'school', title: '学習支援', desc: '書籍・カンファレンス・資格取得の費用を会社が負担します。' },
  { icon: 'devices', title: '機材選択制', desc: '開発マシン・エディタ・周辺機器は自由に選べます。' },
  { icon: 'diversity_3', title: 'チーム文化', desc: '肩書きよりアウトプット。フラットに議論できる環境です。' },
  { icon: 'schedule', title: 'フレックスタイム', desc: 'コアタイムなしのフルフレックスで、生活に合わせて働けます。' },
  { icon: 'trending_up', title: '評価と還元', desc: '半期ごとの技術評価を昇給・グレードに直結させています。' },
]

const STEPS = [
  { no: '01', title: '応募', desc: 'フォームから応募。職務経歴書・GitHub・ポートフォリオなど、あなたを表すものを添えてください。' },
  { no: '02', title: 'カジュアル面談', desc: 'まずはお互いを知る場。現場エンジニアがチームと技術の実際をお話しします。' },
  { no: '03', title: '技術面接', desc: '過去の実績を深掘りする対話形式。抜き打ちのコーディングテストは行いません。' },
  { no: '04', title: 'オファー', desc: '最終面談のうえ条件を提示。入社日は柔軟に調整できます。' },
]

export default function RecruitPage() {
  return (
    <SubpageLayout
      labelEn="RECRUIT ／ 採用情報"
      title={
        <>
          ゼロから、
          <span className="c-colorful">一緒に</span>創る仲間へ。
        </>
      }
      lead="Zeroone は、技術で課題を解きほぐすことに本気のエンジニア集団です。肩書きや経歴よりも、手を動かして学び続ける姿勢を大切にしています。"
    >
      {/* 募集職種 */}
      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="label-caps mb-8 text-ink-soft">OPEN POSITIONS ／ 募集職種</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {POSITIONS.map((p, i) => (
              <Reveal key={p.en} delay={0.06 + i * 0.06}>
                <InteractiveCard
                  tilt={3}
                  glow="rgba(255,93,162,0.16)"
                  className="group h-full rounded-3xl bg-white ring-1 ring-black/5 hover:shadow-[0_18px_50px_-26px_rgba(20,20,20,0.4)] hover:ring-pop-pink/40"
                >
                  <a href="/#contact" className="flex h-full flex-col p-7">
                    <span className={`label-caps block ${p.color}`}>{p.en}</span>
                    <p className="mt-1 font-round text-2xl font-bold text-ink">{p.jp}</p>
                    <p className="mt-3 flex-1 font-jp text-sm leading-loose text-ink-soft">
                      {p.desc}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-mono text-xs text-ink-soft/80">{p.type}</span>
                      <span className="material-symbols-outlined text-ink/40 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-ink">
                        chevron_right
                      </span>
                    </div>
                  </a>
                </InteractiveCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 働く環境 */}
      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-container">
          <Reveal>
            <FrostPanel className="bg-white/90">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="label-caps mb-3 text-ink-soft">ENVIRONMENT ／ 働く環境</p>
                  <h2 className="font-round text-3xl font-extrabold text-ink sm:text-4xl">
                    技術に集中できる<span className="c-colorful">環境</span>を。
                  </h2>
                </div>
                <Illust
                  name="remote-work"
                  alt="リモートで働く様子のイラスト"
                  className="h-24 w-auto animate-float motion-reduce:animate-none sm:h-32"
                />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {BENEFITS.map((b, i) => (
                  <Reveal key={b.title} delay={0.05 + i * 0.05}>
                    <div className="flex gap-4 rounded-2xl bg-paper p-5 ring-1 ring-black/5">
                      <span className="material-symbols-outlined mt-0.5 text-pop-blue">
                        {b.icon}
                      </span>
                      <div>
                        <p className="font-round text-lg font-bold text-ink">{b.title}</p>
                        <p className="mt-1 font-jp text-sm leading-relaxed text-ink-soft">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </FrostPanel>
          </Reveal>
        </div>
      </section>

      {/* 選考フロー */}
      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="label-caps mb-8 text-ink-soft">PROCESS ／ 選考フロー</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={0.06 + i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-6 ring-1 ring-black/5">
                  <span className="font-round text-3xl font-extrabold text-pop-pink">
                    {s.no}
                  </span>
                  <p className="mt-2 font-round text-xl font-bold text-ink">{s.title}</p>
                  <p className="mt-2 font-jp text-sm leading-loose text-ink-soft">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-container text-center">
          <Reveal>
            <Illust
              name="man-riding-a-rocket"
              alt="ロケットに乗る人のイラスト"
              className="mx-auto mb-6 h-28 w-auto animate-float motion-reduce:animate-none"
            />
            <h2 className="font-round text-3xl font-extrabold text-ink sm:text-4xl">
              まずは<span className="c-colorful">カジュアル</span>に話しましょう。
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-jp text-base leading-loose text-ink-soft">
              「いきなり応募はハードルが高い」という方も歓迎です。現場のエンジニアがチームの実際をお話しします。
            </p>
            <a
              href="/#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-bold text-white transition-transform hover:scale-[0.97]"
            >
              応募・カジュアル面談はこちら
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </SubpageLayout>
  )
}
