// 宮路工業所のABOUT US(写真+テキストの2カラム)をトレース。
import Image from "next/image";
import React from "react";
import { Reveal } from "@/components/site/reveal";

export function IntroStatement() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-0 md:grid-cols-2">
        <Reveal className="relative aspect-[4/3] w-full md:aspect-auto md:h-[440px]">
          <Image
            src="/images/about-welding-workshop.jpg"
            alt="金属加工工場の作業風景"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal className="px-6 py-14 md:px-14 md:py-0">
          <p className="text-sm font-bold tracking-[0.25em] text-accent">
            ABOUT US
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
            確かな技術で、
            <br />
            ものづくりの未来を拓く。
          </h2>
          <span className="mt-5 block h-1 w-14 bg-red" />
          <p className="mt-6 text-sm leading-loose text-foreground/80 md:text-base">
            私たちは、板金加工から溶接・仕上げまで金属加工に関わる工程を一貫して手がけ、小ロット・短納期のご要望にもきめ細やかに対応することで、お客様のものづくりを支えます。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
