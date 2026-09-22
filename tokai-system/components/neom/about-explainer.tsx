// 「小ロット・短納期」「精密板金加工」を噛み砕くQ&Aセクション。
// グレー背景に白カード、ネイビーのQバッジというフラットな構成。
import React from "react";
import { Reveal } from "@/components/site/reveal";

function QBadge() {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-accent text-xl font-bold text-white">
      Q
    </span>
  );
}

function CompareBox({
  label,
  toned,
  caption,
}: {
  label: string;
  toned: boolean;
  caption: string;
}) {
  const boxBase =
    "flex flex-col items-center border px-3 py-2 text-xs font-bold";
  const box = toned
    ? `${boxBase} border-accent text-accent`
    : `${boxBase} border-gray-300 text-gray-500`;
  const arrow = toned ? "text-red" : "text-gray-400";
  return (
    <div
      className={`border p-4 ${
        toned ? "border-accent bg-accent-pale" : "border-gray-300 bg-white"
      }`}
    >
      <p
        className={`text-center text-xs font-bold ${
          toned ? "text-accent" : "text-gray-500"
        }`}
      >
        {label}
      </p>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className={box}>図面</span>
        <span className={`text-lg ${arrow}`} aria-hidden="true">
          {toned ? "⇄" : "→"}
        </span>
        <span className={box}>仕上がり</span>
      </div>
      {toned && (
        <p className="mt-2 text-center text-[11px] text-red" aria-hidden="true">
          ↻ 加工・検品
        </p>
      )}
      <p
        className={`mt-3 text-xs leading-relaxed ${
          toned ? "text-accent" : "text-gray-500"
        }`}
      >
        {caption}
      </p>
    </div>
  );
}

export function AboutExplainer() {
  return (
    <section id="about" className="bg-base-gray py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <QBadge />
            <h2 className="text-lg font-bold leading-snug text-accent md:text-2xl">
              「小ロット・短納期」に対応できる理由は？
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-6 max-w-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="grid gap-4 md:grid-cols-2">
              <CompareBox
                label="よくある外注加工"
                toned={false}
                caption="決まった型・ロットのみ対応。急な仕様変更に弱い"
              />
              <CompareBox
                label="東海システムの加工体制"
                toned
                caption="切断から仕上げまで社内一貫、小ロットにも柔軟対応"
              />
            </div>

            <div className="mt-6 space-y-4 text-sm leading-loose text-foreground/80 md:text-base">
              <p>
                「小ロット・短納期」とは、量産品だけでなく、一点ものや試作品にもきめ細かく対応できる体制のことです。
              </p>
              <p>
                東海システムは、切断・曲げ・溶接・仕上げまでを社内で一貫して受け持ちます。工程間の調整が速く、納期の遅れが起こりません。
              </p>
              <p>
                試作・補修部品から量産の前段階まで。毎日仕様が変わる現場の要望にこそ、私たちの技術があります。
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 flex items-center gap-4">
            <QBadge />
            <h2 className="text-lg font-bold leading-snug text-accent md:text-2xl">
              「精密板金加工」ってなに？
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-6 max-w-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="space-y-4 text-sm leading-loose text-foreground/80 md:text-base">
              <p>
                精密板金加工とは、金属の板材をレーザーやシャーリングで切断し、曲げ加工や溶接を経て、図面通りの形状に仕上げる加工方法です。
              </p>
              <p>
                東海システムでは、現場ごとの仕様に合わせて加工方法を選定し、検品まで責任を持って対応します。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
