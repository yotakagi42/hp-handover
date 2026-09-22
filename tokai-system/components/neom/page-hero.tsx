// 下層ページ共通のヒーロー。ネイビー背景 + 斜めカットで宮路工業所トンマナに揃える。
import React from "react";
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
      <div className="relative bg-accent pb-14 pt-20 text-center text-white clip-diagonal-down md:pb-20 md:pt-28">
        <Reveal className="px-5">
          <p className="text-xs tracking-[0.3em] text-white/80">{labelEn}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-wide md:text-4xl">
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
    </div>
  );
}
