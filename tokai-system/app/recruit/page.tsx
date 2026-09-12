import type { Metadata } from "next";
import {
  GlobalHeader,
  FloatingContact,
  GlobalFooter,
} from "@/components/layout/site-chrome";
import { PageHero } from "@/components/layout/page-hero";
import { Wave } from "@/components/layout/wave";
import { CrossMark, DotArc, Sparkle } from "@/components/layout/doodles";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "採用情報 | 株式会社東海システム",
  description:
    "株式会社東海システムの採用情報。「現場で使える」を一緒に届ける人を募集しています。年収レンジ・勤務地・選考の流れを具体的に公開しています。",
};

const POSITIONS = [
  {
    tags: ["正社員", "名古屋", "経験者歓迎"],
    title: "システムエンジニア（受託開発）",
    body: "製造・物流向け業務システムの要件定義〜開発・テスト。Java / C# / Web中心。",
    rows: [
      { label: "想定年収", value: "400〜650万円" },
      { label: "勤務地", value: "名古屋本社／近隣お客様先" },
      { label: "勤務時間", value: "9:00–18:00" },
      { label: "必須", value: "プログラミング実務1年以上" },
      { label: "歓迎", value: "製造系業務知識、SQL" },
      { label: "雇用形態", value: "正社員" },
    ],
  },
  {
    tags: ["正社員", "クラウド歓迎"],
    title: "インフラエンジニア",
    body: "サーバー・ネットワーク構築、クラウド移行、監視運用。",
    rows: [
      { label: "想定年収", value: "420〜700万円" },
      { label: "勤務地", value: "名古屋／東海圏" },
      { label: "勤務時間", value: "9:00–18:00" },
      { label: "必須", value: "インフラ実務1年以上" },
      { label: "歓迎", value: "AWS / Azure、Linux" },
      { label: "雇用形態", value: "正社員" },
    ],
  },
  {
    tags: ["正社員", "東海圏"],
    title: "SESエンジニア",
    body: "お客様先での開発・テスト・運用。希望とスキルでマッチング。",
    rows: [
      { label: "想定年収", value: "380〜620万円" },
      { label: "勤務地", value: "東海圏お客様先" },
      { label: "勤務時間", value: "お客様先準拠" },
      { label: "必須", value: "IT実務または学習実績" },
      { label: "歓迎", value: "コミュニケーション力" },
      { label: "雇用形態", value: "正社員" },
    ],
  },
];

const BENEFITS = [
  {
    title: "各種保険・手当",
    body: "社会保険完備、交通費支給、資格取得支援。",
  },
  {
    title: "成長支援",
    body: "書籍・学習コンテンツ補助、社内勉強会。",
  },
  {
    title: "労働時間",
    body: "残業目安は月20時間前後。有給取得を推奨しています。",
  },
];

const PROCESS = [
  { no: "01", title: "エントリー", body: "メールで応募" },
  { no: "02", title: "書類選考", body: "1週間以内に連絡" },
  { no: "03", title: "面接", body: "1〜2回 オンライン可" },
  { no: "04", title: "内定", body: "条件提示・入社" },
];

export default function RecruitPage() {
  return (
    <div className="bg-white text-foreground overflow-x-clip">
      <GlobalHeader />
      <FloatingContact />
      <main>
        <PageHero
          labelEn="RECRUIT"
          title="採用情報"
          lead="「現場で使える」を一緒に届ける人を募集しています。年収レンジ・勤務地・選考の流れを具体的に公開しています。"
          breadcrumb="採用情報"
        />

        {/* Message */}
        <section className="relative overflow-hidden py-14 text-center md:py-20">
          <Sparkle className="anim-floating pointer-events-none absolute top-10 left-[16%] w-8 text-[#f5d98a]" />
          <Reveal className="mx-auto max-w-2xl px-5">
            <p className="text-sm font-bold tracking-[0.2em] text-accent">
              Message
            </p>
            <h2 className="mt-4 text-xl font-bold leading-relaxed text-accent md:text-3xl">
              相手の業務を理解して動ける人を
            </h2>
            <p className="mt-5 text-sm leading-loose md:text-base">
              受託・インフラ・SESいずれでも、技術だけでなく現場の言葉を聞けることを大切にしています。
            </p>
          </Reveal>
        </section>

        {/* Positions */}
        <section className="relative bg-base-gray">
          <Wave
            fill="#ececec"
            className="absolute -top-[1px] left-0 w-full -translate-y-[calc(100%-1px)]"
          />
          <CrossMark className="anim-floating pointer-events-none absolute right-[10%] top-16 hidden w-8 text-accent/40 md:block" />
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <Reveal>
              <p className="text-sm font-bold tracking-[0.2em] text-accent">
                Positions
                <span className="ml-3 text-xs tracking-normal text-foreground/60">
                  募集職種
                </span>
              </p>
            </Reveal>
            <div className="mt-8 space-y-8">
              {POSITIONS.map((position, i) => (
                <Reveal key={position.title} delay={i * 0.08}>
                  <article className="relative rounded-3xl bg-white p-7 shadow-sm md:p-9">
                    <div className="flex flex-wrap gap-2">
                      {position.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent-pale px-3 py-1 text-[11px] font-bold text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-accent md:text-xl">
                      {position.title}
                    </h3>
                    <p className="mt-2 text-sm leading-loose">{position.body}</p>
                    <dl className="mt-5 overflow-hidden rounded-xl border border-accent/30">
                      {position.rows.map((row, j) => (
                        <div
                          key={row.label}
                          className={`flex flex-col gap-1 px-5 py-3 md:flex-row md:gap-6 ${
                            j > 0 ? "border-t border-dotted border-gray-300" : ""
                          }`}
                        >
                          <dt className="shrink-0 text-sm font-bold text-accent md:w-24">
                            {row.label}
                          </dt>
                          <dd className="text-sm">{row.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Wave fill="#ececec" flip />
        </section>

        {/* Benefits */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <DotArc className="anim-floating-slow pointer-events-none absolute left-[6%] top-20 hidden w-40 text-accent/40 md:block" />
          <div className="mx-auto max-w-5xl px-5">
            <Reveal>
              <p className="text-center text-sm font-bold tracking-[0.2em] text-accent">
                Benefits
                <span className="ml-3 text-xs tracking-normal text-foreground/60">
                  働き方・制度
                </span>
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {BENEFITS.map((benefit, i) => (
                <Reveal key={benefit.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl border border-accent/30 bg-white p-7 text-center">
                    <h3 className="font-bold text-accent">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-loose">{benefit.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative overflow-hidden bg-accent text-white">
          <Wave
            fill="#45a6dc"
            variant="c"
            className="absolute -top-[1px] left-0 w-full -translate-y-[calc(100%-1px)]"
          />
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-24">
            <Reveal>
              <p className="text-center text-sm font-bold tracking-[0.2em]">
                Process
                <span className="ml-3 text-xs tracking-normal text-white/70">
                  選考フロー
                </span>
              </p>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              {PROCESS.map((step, i) => (
                <Reveal key={step.no} variant="pon" delay={i * 0.1}>
                  <div className="rounded-3xl bg-white/10 p-6 text-center backdrop-blur-sm">
                    <span className="font-mono text-2xl font-bold">
                      {step.no}
                    </span>
                    <h3 className="mt-2 font-bold">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/85">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} className="mt-12 text-center">
              <p className="text-sm">
                応募先：
                <a
                  href="mailto:contact@tokai-system.net"
                  className="underline underline-offset-4"
                >
                  contact@tokai-system.net
                </a>
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:contact@tokai-system.net"
                  className="rounded-full bg-white px-8 py-3 text-sm font-bold text-accent transition hover:scale-[1.03] hover:opacity-90"
                >
                  メールで応募
                </a>
                <a
                  href="/company"
                  className="rounded-full border border-white px-8 py-3 text-sm font-bold text-white transition hover:scale-[1.03] hover:bg-white/10"
                >
                  会社概要を見る
                </a>
              </div>
              <p className="mt-5 text-xs text-white/80">
                カジュアル面談からでも構いません。
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
