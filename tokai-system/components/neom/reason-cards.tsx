// 「選ばれる理由」セクション。白背景に、赤いトップボーダーの角丸なしカードを並べる
// フラットな製造業サイトのトンマナで再現する。
import React from "react";
import { Reveal } from "@/components/site/reveal";

const REASONS = [
  {
    no: "01",
    title: ["ものづくりの現場に、", "とことん詳しい。"],
    body: "板金加工の知見を活かした提案を行います。机上の理想だけを押し付けません。現場で本当に使われる仕上がりに強みがあります。",
  },
  {
    no: "02",
    title: ["図面から納品まで、", "分断しない。"],
    body: "切断・曲げ・溶接・仕上げを同じ視点で設計し、加工から検品まで見据えます。工程間のやり取りまで一社で完結。『どこに聞けばいいか分からない』をなくします。",
  },
  {
    no: "03",
    title: ["担当が、", "頻繁に変わらない。"],
    body: "定着を重視した体制づくり。引き継ぎのたびに現場が止まることを避け、長いお付き合いの中で現場の変化に寄り添い続けます。",
  },
];

export function ReasonCards() {
  return (
    <section id="reason" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
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

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.no} delay={0.05 * index}>
              <div className="h-full border-t-4 border-red bg-base-gray p-8">
                <span className="text-3xl font-bold text-accent/30">
                  {reason.no}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-snug text-accent md:text-xl">
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
