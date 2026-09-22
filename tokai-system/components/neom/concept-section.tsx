// VISIONステートメント。宮路工業所の落ち着いたグレー背景バンドに寄せた中央揃えテキスト。
import React from "react";
import { Reveal } from "@/components/site/reveal";

export function ConceptSection() {
  return (
    <section id="concept" className="bg-base-gray py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <Reveal>
          <p className="text-sm font-bold tracking-[0.25em] text-accent">
            VISION
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-relaxed text-accent md:text-4xl">
            確かな板金・金属加工技術で、
            <br />
            世界のものづくりの現場を
            <br />
            支え続ける
          </h2>
          <span className="mx-auto mt-6 block h-1 w-14 bg-red" />
        </Reveal>

        <div className="mt-8 space-y-6 text-sm leading-loose text-foreground/80 md:text-base">
          <Reveal delay={0}>
            <p>
              切断・曲げ・溶接・仕上げまで、金属加工に関わる幅広い工程に対応し、小ロット・特注品にもきめ細かく応えることで、お客様のものづくり現場が抱える課題を解決することを目指します。
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-bold text-accent">
              私たちは、常に一歩先の技術を見据え、お客様のビジネスの成長を力強くサポートするリーディングカンパニーであり続けます。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
