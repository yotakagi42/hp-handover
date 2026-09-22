// 最終CTAメッセージ。全面写真+ネイビーの半透明オーバーレイで宮路工業所の
// 「製缶加工についてのご相談は」バンドに寄せる。
import Image from "next/image";
import React from "react";
import { Reveal } from "@/components/site/reveal";

export function BottomMessage() {
  return (
    <section id="contact" className="relative h-[420px] overflow-hidden">
      <Image
        src="/images/hero-welding-sparks.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-accent-dark/80" />

      <div className="absolute inset-0 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 md:px-8">
        <Reveal className="text-white">
          <p className="text-sm tracking-[0.3em] text-white/80">Next Step</p>
          <h2 className="mt-5 text-2xl font-bold leading-relaxed tracking-wide md:text-4xl">
            「かたちにする」を、
            <br />
            支える誇りを。
          </h2>
          <p className="mt-5 text-sm leading-loose">
            切断・曲げ・溶接による精密な金属加工で、
            <br />
            お客様の「かたちにしたい」を支え続けます。
            <br />
            東海システムと、ものづくりの未来を。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:contact@tokai-system.net"
              className="bg-red px-8 py-3 font-bold text-white transition hover:bg-red-dark"
            >
              メールで相談する
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
