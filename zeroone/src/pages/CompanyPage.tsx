import Reveal from '../components/Reveal'
import Illust from '../components/Illust'
import FrostPanel from '../components/FrostPanel'
import SubpageLayout from '../components/SubpageLayout'

const PROFILE = [
  { label: '社名', value: '株式会社Zeroone（Zeroone Inc.）' },
  { label: '代表者', value: '代表取締役 佐々木 凌希' },
  {
    label: '所在地',
    value: '東京都品川区南大井6丁目17-10 大森レインボービル8階',
  },
  {
    label: '事業内容',
    value:
      'システムエンジニアリングサービス（SES）／ 受託開発 ／ クラウドインフラ構築・運用 ／ セキュリティコンサルティング',
  },
  { label: '主要取引先', value: '大手SIer・金融・製造・スタートアップ各社' },
]

const VALUES = [
  {
    icon: 'flag',
    title: 'MISSION',
    jp: 'ゼロから、イチを。',
    desc: 'まだ世にない「1」を、技術の力で生み出す。それが私たちの出発点であり、社名の由来です。',
  },
  {
    icon: 'visibility',
    title: 'VISION',
    jp: '技術で選ばれる集団に。',
    desc: '規模ではなく技術力と誠実さで指名される、日本発のグローバルエンジニアリング企業を目指します。',
  },
  {
    icon: 'handshake',
    title: 'VALUE',
    jp: '手を動かし、誠実に。',
    desc: '議論より試作、肩書きよりアウトプット。顧客にも仲間にも、常に正直であることを約束します。',
  },
]

export default function CompanyPage() {
  return (
    <SubpageLayout
      labelEn="COMPANY ／ 会社概要"
      title={
        <>
          <span className="c-colorful">Zeroone</span> について。
        </>
      }
      lead="ゼロを起点に、まだ世にない「1」を生み出す。Zeroone は、次世代のシステムエンジニアリングを再定義する SES グローバル集団です。"
    >
      {/* ミッション・ビジョン・バリュー */}
      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={0.06 + i * 0.08}>
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-black/5">
                  <span className="material-symbols-outlined text-pop-blue">{v.icon}</span>
                  <p className="label-caps mt-4 text-ink-soft">{v.title}</p>
                  <p className="mt-1 font-round text-2xl font-extrabold text-ink">{v.jp}</p>
                  <p className="mt-3 font-jp text-sm leading-loose text-ink-soft">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 会社概要テーブル */}
      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-container">
          <Reveal>
            <FrostPanel className="bg-white/90">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="label-caps mb-3 text-ink-soft">PROFILE ／ 会社概要</p>
                  <h2 className="font-round text-3xl font-extrabold text-ink sm:text-4xl">
                    会社情報
                  </h2>
                </div>
                <Illust
                  name="presentation"
                  alt="プレゼンテーションのイラスト"
                  className="h-24 w-auto animate-float motion-reduce:animate-none sm:h-28"
                />
              </div>
              <dl className="divide-y divide-black/5">
                {PROFILE.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-12 sm:gap-6"
                  >
                    <dt className="label-caps pt-0.5 text-ink-soft sm:col-span-3">
                      {row.label}
                    </dt>
                    <dd className="font-jp text-sm leading-loose text-ink sm:col-span-9 sm:text-base">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </FrostPanel>
          </Reveal>
        </div>
      </section>

      {/* アクセス */}
      <section className="px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-container">
          <Reveal>
            <p className="label-caps mb-8 text-ink-soft">ACCESS ／ アクセス</p>
          </Reveal>
          <div className="grid grid-cols-1">
            <Reveal delay={0.06}>
              <div className="h-full max-w-md rounded-3xl bg-white p-7 ring-1 ring-black/5">
                <p className="font-round text-xl font-bold text-ink">東京本社</p>
                <p className="mt-3 font-jp text-sm leading-loose text-ink-soft">
                  東京都品川区南大井6丁目17-10 大森レインボービル8階
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 lg:px-10">
        <div className="mx-auto max-w-container text-center">
          <Reveal>
            <h2 className="font-round text-3xl font-extrabold text-ink sm:text-4xl">
              次の一手を、<span className="c-colorful">Zeroone</span>と。
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-bold text-white transition-transform hover:scale-[0.97]"
              >
                お問い合わせ
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
              <a
                href="/recruit"
                className="rounded-full bg-white px-8 py-4 font-bold text-ink shadow-sm ring-1 ring-black/5 transition-colors hover:bg-ink hover:text-white"
              >
                採用情報を見る
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </SubpageLayout>
  )
}
