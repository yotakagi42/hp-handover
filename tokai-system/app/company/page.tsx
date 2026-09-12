import type { Metadata } from "next";
import {
  GlobalHeader,
  FloatingContact,
  GlobalFooter,
} from "@/components/layout/site-chrome";
import { PageHero } from "@/components/layout/page-hero";
import { Wave } from "@/components/layout/wave";
import { DotArc, Sun } from "@/components/layout/doodles";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社東海システム",
  description:
    "株式会社東海システムの会社概要。名古屋・名駅を拠点に、東海圏のITパートナーとして事業を展開しています。",
};

const COMPANY_ROWS = [
  { label: "社名", value: "株式会社東海システム" },
  { label: "代表者", value: "代表取締役 松本" },
  { label: "事業内容", value: "SES事業" },
  {
    label: "所在地",
    value: "〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号 第2森ビル401",
  },
  { label: "メール", value: "contact@tokai-system.net" },
];

export default function CompanyPage() {
  return (
    <div className="bg-white text-foreground overflow-x-clip">
      <GlobalHeader />
      <FloatingContact />
      <main>
        <PageHero
          labelEn="COMPANY"
          title="会社概要"
          lead="名古屋・名駅を拠点に、東海圏のITパートナーとして事業を展開しています。"
          breadcrumb="会社概要"
        />

        {/* 会社情報テーブル */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <Sun className="anim-floating pointer-events-none absolute top-10 right-[8%] hidden w-14 text-[#f5d98a] md:block" />
          <div className="mx-auto max-w-3xl px-5">
            <Reveal>
              <dl className="overflow-hidden rounded-3xl border border-accent/30 bg-white shadow-sm">
                {COMPANY_ROWS.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex flex-col gap-1 px-6 py-4 md:flex-row md:gap-6 ${
                      i > 0 ? "border-t border-dotted border-gray-300" : ""
                    }`}
                  >
                    <dt className="shrink-0 text-sm font-bold text-accent md:w-32">
                      {row.label}
                    </dt>
                    <dd className="text-sm leading-relaxed">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* 代表挨拶 */}
        <section className="relative overflow-hidden bg-base-gray">
          <Wave
            fill="#ececec"
            className="absolute -top-[1px] left-0 w-full -translate-y-[calc(100%-1px)]"
          />
          <DotArc className="anim-floating-slow pointer-events-none absolute right-[10%] top-16 hidden w-40 text-accent/40 md:block" />
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
            <Reveal delay={0.1}>
              <p className="text-sm font-bold tracking-[0.2em] text-accent">
                Message
                <span className="ml-3 text-xs tracking-normal text-foreground/60">
                  代表挨拶
                </span>
              </p>
              <h2 className="mt-4 text-xl font-bold leading-relaxed text-accent md:text-2xl">
                派手な言葉より、納期と品質。
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-loose">
                <p>
                  東海システムは、製造・物流の現場が安心して動ける仕組みをつくる会社です。担当が変わっても続く関係。名古屋から、誠実に積み上げていきます。
                </p>
                <p>
                  現場には、紙や口頭で回っている知恵がたくさんあります。それを無理に理想論へ置き換えず、使う人が「これなら続けられる」と思える形に落とす。それが私たちの仕事です。
                </p>
                <p className="font-bold">代表取締役 松本</p>
              </div>
            </Reveal>
          </div>
          <Wave fill="#ececec" flip />
        </section>

        {/* CTA */}
        <section className="py-16 text-center md:py-24">
          <Reveal>
            <h2 className="text-xl font-bold tracking-widest text-accent md:text-3xl">
              一緒に、現場を前へ進めませんか。
            </h2>
            <p className="mt-4 text-sm text-foreground/70">
              採用・お取引のご相談はこちらから。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/recruit"
                className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-white transition hover:scale-[1.03] hover:bg-[#2c7fb0]"
              >
                採用情報を見る
              </a>
              <a
                href="mailto:contact@tokai-system.net"
                className="rounded-full border border-accent px-8 py-3 text-sm font-bold text-accent transition hover:scale-[1.03] hover:bg-accent hover:text-white"
              >
                お問い合わせ
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <GlobalFooter />
    </div>
  );
}
