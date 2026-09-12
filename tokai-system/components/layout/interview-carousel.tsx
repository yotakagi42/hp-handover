"use client";
// 社員インタビューのカルーセル。Swiper不使用でtranslateXによる送り、デスクトップ2枚/モバイル1枚表示・ループ。
import { motion } from "framer-motion";
import React from "react";
import { Blob, DotArc } from "@/components/layout/doodles";
import { Reveal } from "@/components/site/reveal";

type Interview = {
  years: string;
  initials: string;
  title: string;
  body: string;
  blobVariant: 0 | 1 | 2;
};

const INTERVIEWS: Interview[] = [
  {
    years: "エンジニア歴3年",
    initials: "M.K",
    title: "未経験から、現場の戦力へ。",
    body: "前職は製造オペレーター。ITは完全未経験でした。最初は動作チェックやテスト業務からスタート。分からないことはすぐに聞ける環境があり、少しずつできることが増えました。今では受発注システムの改修を任されています。",
    blobVariant: 0,
  },
  {
    years: "エンジニア歴12年",
    initials: "T.S",
    title: "開発も基盤も、両方見られる面白さ。",
    body: "前職では業務範囲が限られていましたが、東海システムはアプリとインフラを分断しません。障害対応で切り分けまで自分でできるようになり、エンジニアとしての視野が広がりました。",
    blobVariant: 1,
  },
  {
    years: "エンジニア歴7年",
    initials: "A.Y",
    title: "同じ現場と、長く付き合う。",
    body: "担当がころころ変わらないので、現場の人と信頼関係が築けます。『あなたに頼みたい』と言われたときが、いちばんのやりがいです。",
    blobVariant: 2,
  },
];

function InterviewSlide({ interview }: { interview: Interview }) {
  return (
    <div className="flex w-full shrink-0 flex-col items-center gap-8 px-4 md:w-1/2 md:flex-row md:items-start">
      <div className="relative flex h-56 w-56 shrink-0 items-center justify-center rounded-full bg-accent-pale md:h-64 md:w-64">
        <Blob
          variant={interview.blobVariant}
          className="anim-floating-slow absolute inset-0 h-full w-full text-accent/60"
        />
        <span className="relative text-5xl font-bold text-accent">
          {interview.initials}
        </span>
      </div>
      <div className="max-w-sm">
        <p className="border-b border-accent pb-2 text-sm text-foreground/70">
          {interview.years}
        </p>
        <h3 className="mt-4 text-xl font-bold text-accent">{interview.title}</h3>
        <p className="mt-4 text-sm leading-loose text-foreground/80">
          {interview.body}
        </p>
      </div>
    </div>
  );
}

export function InterviewCarousel() {
  const [index, setIndex] = React.useState(0);
  const count = INTERVIEWS.length;

  const prev = () => setIndex((current) => (current - 1 + count) % count);
  const next = () => setIndex((current) => (current + 1) % count);

  // デスクトップは2枚同時に見えるため、末尾まわり込みを埋める複製を後ろに足す。
  const slides = [...INTERVIEWS, ...INTERVIEWS.slice(0, 2)];

  return (
    <section id="interview" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-[0.2em] text-accent md:text-4xl">
            Interview
          </h2>
          <p className="mt-2 text-sm text-foreground">社員の声</p>
        </Reveal>

        <div className="mt-14 overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 50}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {slides.map((interview, slideIndex) => (
              <InterviewSlide
                key={`${interview.initials}-${slideIndex}`}
                interview={interview}
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-10 flex justify-end gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="前のインタビュー"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-pale text-accent transition hover:scale-105"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 5 L8 12 L15 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="次のインタビュー"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white transition hover:scale-105"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 5 L16 12 L9 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <DotArc className="mt-4 w-[120px] text-accent/50" />
      </div>
    </section>
  );
}
