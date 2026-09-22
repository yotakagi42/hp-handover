"use client";

// 事業内容セクション。左のstickyサイドバーが、右の詳細ブロックのスクロール位置に
// 追従してハイライトを切り替える。写真は各加工工程に合わせたものを使用。
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/reveal";

type Strength = {
  no: string;
  label: string;
  nav: string;
  title: [string, string];
  body: string;
  items: { term: string; desc: string }[];
  image: string;
};

const STRENGTHS: Strength[] = [
  {
    no: "01",
    label: "CUTTING",
    nav: "切断加工",
    title: ["精密な切断で、", "図面通りの形状を。"],
    body: "レーザー加工・シャーリングなど、金属板の切断加工を、素材や板厚に合わせて最適な方法で行います。",
    items: [
      { term: "レーザー切断", desc: "複雑な形状・小径穴にも対応した精密切断" },
      { term: "シャーリング加工", desc: "直線切断による効率的な材料取り" },
      { term: "材料選定", desc: "用途に応じた鋼材・アルミ等の選定サポート" },
    ],
    image: "/images/strength-laser-cutting.jpg",
  },
  {
    no: "02",
    label: "BENDING",
    nav: "曲げ加工",
    title: ["精度が、", "仕上がりを決める。"],
    body: "プレスブレーキによる曲げ加工で、寸法精度の高い部品形状を実現します。",
    items: [
      { term: "ベンディング加工", desc: "複数回曲げにも対応した精密プレス加工" },
      { term: "寸法検査", desc: "曲げ角度・寸法の全数管理" },
      { term: "試作対応", desc: "一点ものの試作にも柔軟に対応" },
    ],
    image: "/images/strength-press-brake.jpg",
  },
  {
    no: "03",
    label: "WELDING & FINISH",
    nav: "溶接・仕上げ",
    title: ["丁寧な溶接で、", "現場に寄り添う。"],
    body: "溶接から研磨・仕上げまで、品質管理のもと、お客様の求める仕上がりを実現します。",
    items: [
      { term: "溶接加工", desc: "アーク溶接・TIG溶接など用途に応じた溶接" },
      { term: "研磨・仕上げ", desc: "バリ取り・表面仕上げまで対応" },
      { term: "品質検査", desc: "溶接部・仕上げ状態の検品体制" },
    ],
    image: "/images/strength-welding-finish.jpg",
  },
];

export function StrengthSticky() {
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index ?? 0,
            );
            setActiveIndex(index);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    for (const block of blockRefs.current) {
      if (block) observer.observe(block);
    }
    return () => observer.disconnect();
  }, []);

  const scrollToBlock = (index: number) => {
    blockRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="strength" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="text-sm font-bold tracking-[0.2em] text-accent">
            Strength
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            事業内容
          </h2>
        </Reveal>

        <div className="mt-16 md:grid md:grid-cols-[260px_1fr] md:gap-12">
          <nav className="hidden md:block">
            <ul className="sticky top-24 space-y-8 self-start">
              {STRENGTHS.map((strength, index) => {
                const active = index === activeIndex;
                return (
                  <li key={strength.no}>
                    <button
                      type="button"
                      onClick={() => scrollToBlock(index)}
                      className={`flex flex-col items-start border-l-4 pl-4 text-left transition-colors duration-300 ${
                        active ? "border-red" : "border-transparent"
                      }`}
                    >
                      <span
                        className={`text-3xl font-bold transition-colors duration-300 ${
                          active ? "text-accent" : "text-foreground/40"
                        }`}
                      >
                        {strength.no}
                      </span>
                      <span
                        className={`mt-2 px-3 py-0.5 text-xs font-bold tracking-wider transition-colors duration-300 ${
                          active
                            ? "bg-accent text-white"
                            : "bg-gray-200 text-foreground/70"
                        }`}
                      >
                        {strength.label}
                      </span>
                      <span className="mt-2 text-sm font-bold text-foreground">
                        {strength.nav}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-24">
            {STRENGTHS.map((strength, index) => (
              <div
                key={strength.no}
                data-index={index}
                ref={(el) => {
                  blockRefs.current[index] = el;
                }}
                className="scroll-mt-24"
              >
                <Reveal>
                  <div className="md:flex md:items-start md:gap-8">
                    <div className="md:flex-1">
                      <h3 className="text-2xl font-bold leading-snug text-foreground md:text-3xl">
                        {strength.title[0]}
                        <br />
                        <span className="text-accent">{strength.title[1]}</span>
                      </h3>
                      <p className="mt-5 text-sm leading-loose text-foreground/80 md:text-base">
                        {strength.body}
                      </p>
                      <dl className="mt-6 border border-accent/30 p-6">
                        {strength.items.map((item, i) => (
                          <div
                            key={item.term}
                            className={i > 0 ? "mt-3" : undefined}
                          >
                            <dt className="text-sm font-bold text-accent">
                              {item.term}：
                            </dt>
                            <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
                              {item.desc}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="relative mt-8 hidden h-60 w-60 shrink-0 overflow-hidden md:mt-0 md:block">
                      <Image
                        src={strength.image}
                        alt={strength.nav}
                        fill
                        sizes="240px"
                        className="object-cover"
                      />
                      <span className="absolute bottom-0 right-0 bg-accent px-3 py-1 text-2xl font-bold text-white">
                        {strength.no}
                      </span>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
