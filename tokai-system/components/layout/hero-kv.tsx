"use client";
import { motion } from "framer-motion";
import React from "react";
import { Wave } from "@/components/layout/wave";
import { Blob, CrossMark, DotArc, Sparkle, Sun } from "@/components/layout/doodles";
import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroKv() {
  return (
    <section className="relative h-screen min-h-[640px] max-h-[900px] overflow-hidden bg-[linear-gradient(135deg,#0f2b3d_0%,#1b4a66_45%,#2c7fb0_100%)]">
      {/* 21st.dev/Aceternity Wavy Background: シアンの波が流れ続けるアニメーション背景 */}
      <WavyBackground
        containerClassName="pointer-events-none absolute inset-0 h-full justify-normal"
        backgroundFill="#0f2b3d"
        colors={["#45a6dc", "#2c7fb0", "#7cc0e8", "#b7dcf2", "#1b4a66"]}
        speed="slow"
        waveOpacity={0.45}
        blur={8}
      />

      {/* 設備感を出す薄い格子パターン */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* 四隅のブロブで有機的な波フレームを作る */}
      <Blob
        variant={0}
        className="pointer-events-none absolute -top-24 -left-28 w-[320px] text-[#45a6dc] opacity-90"
      />
      <Blob
        variant={2}
        className="pointer-events-none absolute -top-16 -right-24 w-[240px] text-[#45a6dc] opacity-80"
      />
      <Blob
        variant={1}
        className="pointer-events-none absolute -bottom-28 -left-20 w-[260px] text-[#45a6dc] opacity-80"
      />
      <Blob
        variant={2}
        className="pointer-events-none absolute -bottom-24 -right-28 w-[300px] text-[#45a6dc] opacity-90"
      />

      {/* 上下の波フレーム */}
      <Wave
        fill="#45a6dc"
        variant="b"
        flip
        className="pointer-events-none absolute inset-x-0 top-0"
      />
      <Wave
        fill="#45a6dc"
        variant="a"
        className="pointer-events-none absolute inset-x-0 bottom-0"
      />

      {/* ドゥードル散らし */}
      <DotArc className="anim-floating-slow pointer-events-none absolute top-[18%] left-[12%] w-[110px] text-white/50" />
      <Sparkle className="anim-floating pointer-events-none absolute top-[24%] right-[16%] w-[44px] text-[#b7dcf2]" />
      <Sun className="anim-floating-slow pointer-events-none absolute bottom-[26%] left-[16%] w-[72px] text-[#b7dcf2]/70" />
      <CrossMark className="pointer-events-none absolute top-[38%] right-[10%] hidden w-[40px] text-white/40 md:block" />
      <Sparkle className="anim-floating pointer-events-none absolute bottom-[32%] right-[20%] w-[36px] text-white/60" />
      <DotArc className="pointer-events-none absolute bottom-[18%] right-[8%] w-[90px] text-[#b7dcf2]/50" />

      {/* 中央コピー */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center text-white"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-3xl font-bold leading-relaxed tracking-widest md:text-5xl">
          <span className="inline-block">現場が、</span>
          <span className="inline-block">止まらないように。</span>
        </h1>
        <p className="mt-4 text-sm tracking-[0.3em] md:text-base">
          Keep the shop floor running.
        </p>
        <span className="mx-auto my-5 block h-px w-16 bg-white/70" />
        <p className="text-base md:text-lg">株式会社東海システム</p>
      </motion.div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-24 left-1/2 z-10 md:bottom-28">
        <svg
          width="26"
          height="40"
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
