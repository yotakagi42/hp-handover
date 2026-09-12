import React from "react";
import { Blob, DotArc, Sun } from "@/components/layout/doodles";
import { Reveal } from "@/components/site/reveal";

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="relative overflow-hidden bg-white pt-20 pb-28 md:pt-28 md:pb-40"
    >
      {/* 左右のブロブ装飾（トレース元のブロブ形写真の代替） */}
      <div className="pointer-events-none absolute top-10 left-0 hidden md:block">
        <Blob variant={0} className="w-[280px] text-accent-pale" />
        <Blob
          variant={2}
          className="absolute top-16 left-24 w-[140px] text-accent opacity-70"
        />
      </div>
      <div className="pointer-events-none absolute bottom-8 right-0 hidden md:block">
        <Blob variant={1} className="w-[280px] text-accent-pale" />
        <Blob
          variant={0}
          className="absolute bottom-16 right-24 w-[140px] text-accent opacity-70"
        />
      </div>
      <Sun className="anim-floating pointer-events-none absolute top-16 right-[10%] hidden w-16 text-[#f5d98a] md:block" />
      <DotArc className="pointer-events-none absolute bottom-16 left-[8%] hidden w-[180px] text-accent/40 md:block" />

      <div className="relative z-10 mx-auto max-w-xl px-5">
        <Reveal delay={0}>
          <p className="text-sm font-bold tracking-[0.25em] text-accent">
            CONCEPT
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-relaxed tracking-widest text-accent md:text-4xl">
            現場の知恵を、
            <br />
            もっと動く形に、
            <br />
            もっと確かに。
          </h2>
        </Reveal>

        <div className="mt-8 space-y-6 text-sm leading-loose md:text-base">
          <Reveal delay={0}>
            <p>
              株式会社東海システムが大切にしているのは、現場の紙や口頭で回っている知恵を、無理に理想論へ置き換えず、運用できる形に落とすことです。
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              業務システムも、インフラも、常駐支援も。開発と基盤を分断せず、障害時の切り分けまで見据えて設計します。
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              限界を決めるのはもう終わり。
              <br />
              <span className="text-accent">
                東海システムは、現場の可能性を最大限に引き出すパートナーです。
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
