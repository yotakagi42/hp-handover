// 下層ページ共通のシアン波ヒーロー。
import React from "react";
import { Wave } from "@/components/layout/wave";
import { Sparkle } from "@/components/layout/doodles";
import { Reveal } from "@/components/site/reveal";

export function PageHero({
  labelEn,
  title,
  lead,
  breadcrumb,
}: {
  labelEn: string;
  title: string;
  lead?: string;
  breadcrumb: string;
}) {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-accent pt-28 pb-10 text-center text-white md:pt-36 md:pb-16">
        <Sparkle className="anim-floating pointer-events-none absolute top-24 left-[14%] w-8 text-[#f5d98a]" />
        <Sparkle className="anim-floating-slow pointer-events-none absolute bottom-10 right-[16%] w-6 text-white/60" />
        <Reveal className="px-5">
          <p className="text-xs tracking-[0.3em] text-white/80">{labelEn}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-widest md:text-4xl">
            {title}
          </h1>
          {lead && (
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-loose md:text-base">
              {lead}
            </p>
          )}
          <p className="mt-6 text-[11px] tracking-widest text-white/70">
            TOP / {breadcrumb}
          </p>
        </Reveal>
      </div>
      <Wave fill="#45a6dc" variant="b" flip />
    </div>
  );
}
