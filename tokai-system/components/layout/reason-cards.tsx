// 「選ばれる理由」セクション。グレー背景に白の丸角カードを千鳥配置し、
// 幾何ドゥードルを散らして手描き感を演出する。
import React from "react";
import { Reveal } from "@/components/site/reveal";
import { Wave } from "@/components/layout/wave";
import { Blob, CrossMark, DotArc } from "@/components/layout/doodles";

const REASONS = [
  {
    no: "01",
    title: ["東海圏の現場に、", "とことん詳しい。"],
    body: "製造・物流のやり方を踏まえた提案を行います。机上の理想だけを押し付けません。生産管理・在庫・受発注など、現場で本当に使われるシステムに強みがあります。",
    align: "left" as const,
  },
  {
    no: "02",
    title: ["開発とインフラを、", "分断しない。"],
    body: "アプリと基盤を同じ視点で設計し、運用まで見据えます。障害時の切り分けまで一社で完結。『どこに聞けばいいか分からない』をなくします。",
    align: "right" as const,
  },
  {
    no: "03",
    title: ["担当が、", "頻繁に変わらない。"],
    body: "定着を重視した体制づくり。引き継ぎのたびに現場が止まることを避け、長いお付き合いの中で現場の変化に寄り添い続けます。",
    align: "left" as const,
  },
];

export function ReasonCards() {
  return (
    <section id="reason" className="relative bg-base-gray py-20 md:py-28">
      <Wave
        fill="#ececec"
        className="absolute -top-[1px] left-0 w-full -translate-y-[calc(100%-1px)]"
      />

      <Blob
        variant={1}
        className="pointer-events-none absolute right-[6%] top-24 h-72 w-72 text-white/70"
      />
      <DotArc className="anim-floating-slow pointer-events-none absolute right-[8%] top-32 h-24 w-64 text-accent/50" />
      <CrossMark className="anim-floating pointer-events-none absolute left-[10%] top-1/2 h-10 w-10 text-accent/40" />
      <CrossMark className="pointer-events-none absolute right-[14%] bottom-24 h-8 w-8 text-accent/30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.2em] text-accent">
            Why Choose Us
            <span className="ml-3 text-xs tracking-normal text-foreground/60">
              選ばれる理由
            </span>
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight text-accent md:text-4xl">
            「まっすぐな仕事」を、
            <br />
            そのまま信頼のカタチへ。
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-loose text-foreground/80">
            株式会社東海システムは、現場との信頼をなにより大切に、長く続く支援を約束します。
          </p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {REASONS.map((reason, index) => (
            <Reveal
              key={reason.no}
              delay={0.05 * index}
              className={
                reason.align === "right"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >
              <div className="relative w-full max-w-[520px] rounded-3xl bg-white p-8 pt-10 shadow-sm">
                <Reveal
                  variant="pon"
                  delay={0.3}
                  className="absolute -top-6 left-8"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-lg font-bold text-white shadow-sm">
                    {reason.no}
                  </span>
                </Reveal>
                <h3 className="text-xl font-bold leading-snug text-accent md:text-2xl">
                  {reason.title[0]}
                  <br />
                  {reason.title[1]}
                </h3>
                <p className="mt-4 text-sm leading-loose text-foreground/80">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
