// 宮路工業所トレースのヒーロー: 全面写真 + 斜めカット + 左下寄せの大見出し。
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export function HeroKv() {
  return (
    <section className="relative h-screen min-h-[560px] max-h-[860px] overflow-hidden bg-accent-dark">
      <div className="absolute inset-0 clip-diagonal-down-lg">
        <Image
          src="/images/hero-welding-sparks.jpg"
          alt="金属加工工場での溶接作業"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-accent-dark/90 via-accent-dark/40 to-accent-dark/10" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-24 text-white md:px-10 md:pb-32"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-xs tracking-[0.35em] text-white/80 md:text-sm">
          Precision in every cut, pride in every weld.
        </p>
        <h1 className="mt-4 text-[1.6rem] font-bold leading-snug tracking-wide md:text-5xl md:leading-relaxed">
          「技術」と「現場力」で
          <br />
          ものづくりの未来を拓く
        </h1>
        <span className="mt-6 block h-1 w-16 bg-red" />
        <p className="mt-6 text-base md:text-lg">株式会社東海システム</p>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <svg
          width="24"
          height="36"
          viewBox="0 0 26 40"
          fill="none"
          aria-hidden="true"
          className="text-white/70 [animation:scroll-hint_1.6s_ease-in-out_infinite]"
        >
          <rect
            x="1.5"
            y="1.5"
            width="23"
            height="37"
            rx="11.5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="13" cy="11" r="3" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
