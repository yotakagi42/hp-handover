// 「止まらない仕組み」「SES」を吹き出しQ&Aで噛み砕くセクション。
// シアン全面に白カードを浮かせ、比較図で導入後も育つ開発モデルを対比する。
import React from "react";
import { Reveal } from "@/components/site/reveal";
import { Wave } from "@/components/layout/wave";
import { Blob, CrossMark, Sparkle } from "@/components/layout/doodles";

function QBadge() {
  return (
    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl font-bold text-accent shadow-sm">
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
    "flex flex-col items-center rounded-md border px-3 py-2 text-xs font-bold";
  const box = toned
    ? `${boxBase} border-accent text-accent`
    : `${boxBase} border-gray-300 text-gray-500`;
  const arrow = toned ? "text-accent" : "text-gray-400";
  return (
    <div
      className={`rounded-xl border p-4 ${
        toned ? "border-accent bg-accent-pale/40" : "border-gray-300"
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
        <span className={box}>現場</span>
        <span className={`text-lg ${arrow}`} aria-hidden="true">
          {toned ? "⇄" : "→"}
        </span>
        <span className={box}>システム</span>
      </div>
      {toned && (
        <p className="mt-2 text-center text-[11px] text-accent" aria-hidden="true">
          ↻ 運用・改善
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
    <section id="about" className="relative bg-accent py-20 md:py-28">
      <Wave
        fill="#45a6dc"
        variant="b"
        className="absolute -top-[1px] left-0 w-full -translate-y-[calc(100%-1px)]"
      />

      <Blob
        variant={2}
        className="pointer-events-none absolute -left-16 top-32 h-80 w-80 text-white/15"
      />
      <Sparkle className="anim-floating pointer-events-none absolute right-[12%] top-24 h-8 w-8 text-white/60" />
      <CrossMark className="anim-floating-slow pointer-events-none absolute left-[8%] bottom-40 h-8 w-8 text-white/50" />
      <Sparkle className="pointer-events-none absolute right-[20%] bottom-24 h-6 w-6 text-white/40" />

      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="flex items-center gap-4">
            <QBadge />
            <h2 className="text-xl font-bold tracking-widest text-white md:text-3xl">
              「止まらない仕組み」ってなに？
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative mt-8 max-w-2xl rounded-3xl bg-white p-8 md:p-10">

            <div className="grid gap-4 md:grid-cols-2">
              <CompareBox
                label="よくあるシステム開発"
                toned={false}
                caption="作って納品したら終わり。現場が変わると合わなくなる"
              />
              <CompareBox
                label="東海システムの開発"
                toned
                caption="運用しながら現場に合わせて育てる"
              />
            </div>

            <div className="mt-6 space-y-4 text-sm leading-loose text-foreground/80 md:text-base">
              <p>
                「止まらない仕組み」とは、導入して終わりのシステムではなく、現場の変化に合わせて育ち続ける仕組みのことです。
              </p>
              <p>
                東海システムは、要件定義から運用・監視までを一貫して受け持ちます。障害が起きても切り分けが速く、現場の手が止まりません。
              </p>
              <p>
                生産ライン・物流センター・受発注。毎日動き続ける場所にこそ、私たちの仕事があります。
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 flex items-center gap-4">
            <QBadge />
            <h2 className="text-xl font-bold tracking-widest text-white md:text-3xl">
              「SES」ってなに？
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative mt-8 max-w-2xl rounded-3xl bg-white p-8 md:p-10">
            <div className="space-y-4 text-sm leading-loose text-foreground/80 md:text-base">
              <p>
                SESとは、エンジニアがお客様先のプロジェクトに参加し、開発や運用を支援する働き方です。
              </p>
              <p>
                東海システムでは『とりあえず人数』のアサインはしません。希望とスキル、そして定着率を大切にしたマッチングで、現場で続く人を届けます。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
