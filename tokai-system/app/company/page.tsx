import type { Metadata } from "next";
import {
  NeomHeader,
  FloatingContact,
  NeomFooter,
} from "@/components/neom/site-chrome";
import { PageHero } from "@/components/neom/page-hero";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "会社概要 | 株式会社東海システム",
  description:
    "株式会社東海システムの会社概要。切断・曲げ・溶接から仕上げまで、確かな技術でものづくりを支えています。",
};

const COMPANY_ROWS = [
  { label: "社名", value: "株式会社東海システム" },
  { label: "代表者", value: "代表取締役 松本悠吾" },
  { label: "事業内容", value: "精密板金・金属加工事業(切断・曲げ加工・溶接・仕上げ)" },
  {
    label: "名古屋本社",
    value: "〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号 第2森ビル401",
  },
  {
    label: "東京本社",
    value: "東京都渋谷区恵比寿",
  },
  { label: "メール", value: "contact@tokai-system.net" },
];

export default function CompanyPage() {
  return (
    <div className="bg-white text-foreground overflow-x-clip">
      <NeomHeader />
      <FloatingContact />
      <main className="pt-16 md:pt-20">
        <PageHero
          labelEn="COMPANY"
          title="会社概要"
          lead="切断・曲げ・溶接から仕上げまで、確かな技術でものづくりを支えています。"
          breadcrumb="会社概要"
        />

        {/* 会社情報テーブル */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5">
            <Reveal>
              <dl className="border border-accent/20 bg-white">
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
        <section className="bg-base-gray">
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
              <span className="mt-5 block h-1 w-14 bg-red" />
              <div className="mt-6 space-y-4 text-sm leading-loose">
                <p>
                  東海システムは、ものづくりの現場が求める「かたち」を、確かな技術で仕上げる会社です。担当が変わっても続く関係を、誠実に積み上げていきます。
                </p>
                <p>
                  現場には、紙や口頭で回っている知恵がたくさんあります。それを無理に理想論へ置き換えず、使う人が「これなら続けられる」と思える形に落とす。それが私たちの仕事です。
                </p>
                <p className="font-bold">代表取締役 松本悠吾</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center md:py-24">
          <Reveal>
            <h2 className="text-xl font-bold tracking-wide text-accent md:text-3xl">
              一緒に、現場を前へ進めませんか。
            </h2>
            <p className="mt-4 text-sm text-foreground/70">
              お取引のご相談はこちらから。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:contact@tokai-system.net"
                className="bg-red px-8 py-3 text-sm font-bold text-white transition hover:bg-red-dark"
              >
                お問い合わせ
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <NeomFooter />
    </div>
  );
}
