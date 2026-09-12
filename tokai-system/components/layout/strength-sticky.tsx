"use client";

// 事業内容セクション。左のstickyサイドバーが、右の詳細ブロックのスクロール位置に
// 追従してハイライトを切り替える。rootMargin で画面中央付近のブロックをアクティブ扱いにする。
import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/reveal";
import { Blob } from "@/components/layout/doodles";

type Strength = {
  no: string;
  label: string;
  nav: string;
  title: [string, string];
  body: string;
  items: { term: string; desc: string }[];
};

const STRENGTHS: Strength[] = [
  {
    no: "01",
    label: "SYSTEM DEV",
    nav: "業務システム開発",
    title: ["現場の業務を、", "そのまま動くシステムに。"],
    body: "生産管理・在庫・受発注など、製造・物流の業務システムを要件定義から運用まで一貫対応。現場の紙や口頭で回っている知恵を、運用できる形に落とします。",
    items: [
      { term: "生産・在庫管理", desc: "ラインの実績収集から在庫の見える化まで" },
      { term: "受発注・EDI", desc: "取引先とつながる受発注の仕組みづくり" },
      { term: "業務Web", desc: "現場で毎日使われる社内システムの開発" },
    ],
  },
  {
    no: "02",
    label: "INFRA",
    nav: "ITインフラ",
    title: ["アプリの下の、", "止まらない基盤づくり。"],
    body: "サーバー・ネットワーク構築からクラウド移行、監視まで。アプリと基盤を別会社視点で分断せず、障害時の切り分けまで見据えた設計を行います。",
    items: [
      { term: "サーバー・NW構築", desc: "オンプレからクラウドまで環境に合わせて設計" },
      { term: "クラウド移行", desc: "段階移行で現場を止めない引っ越しを" },
      { term: "24時間監視", desc: "異常の予兆をつかみ、障害の芽を先に摘む" },
    ],
  },
  {
    no: "03",
    label: "SES",
    nav: "SES・常駐支援",
    title: ["現場で続く人を、", "現場へ届ける。"],
    body: "お客様先での開発・インフラ・運用支援。希望とスキル、定着率を意識したマッチングで、『とりあえず人数』ではなく現場で続く人を届けます。参画後のフォローも大切にしています。",
    items: [
      { term: "マッチング", desc: "希望・スキル・現場の相性を重ねて選定" },
      { term: "参画後フォロー", desc: "定期面談で現場との齟齬を早期に解消" },
      { term: "キャリア支援", desc: "資格取得支援と社内勉強会でスキルを更新" },
    ],
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
          <h2 className="text-3xl font-bold tracking-[0.2em] text-accent md:text-4xl">
            Strength
          </h2>
          <p className="mt-2 text-xs tracking-widest text-foreground/60">
            事業内容
          </p>
        </Reveal>

        <div className="mt-16 md:grid md:grid-cols-[280px_1fr] md:gap-12">
          <nav className="hidden md:block">
            <ul className="sticky top-24 space-y-8 self-start">
              {STRENGTHS.map((strength, index) => {
                const active = index === activeIndex;
                return (
                  <li key={strength.no}>
                    <button
                      type="button"
                      onClick={() => scrollToBlock(index)}
                      className={`flex flex-col items-start text-left transition-opacity duration-300 ${
                        active ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <span
                        className={`text-4xl font-bold transition-colors duration-300 ${
                          active ? "text-accent" : "text-foreground"
                        }`}
                      >
                        {strength.no}
                      </span>
                      <span
                        className={`mt-2 rounded-full px-3 py-0.5 text-xs font-bold tracking-wider transition-colors duration-300 ${
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
                      <dl className="mt-6 rounded-xl border border-accent p-6">
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

                    <div className="relative mt-8 hidden h-60 w-60 shrink-0 items-center justify-center md:mt-0 md:flex">
                      <Blob
                        variant={(index % 3) as 0 | 1 | 2}
                        className="absolute inset-0 h-full w-full text-accent-pale"
                      />
                      <span className="relative text-4xl font-bold text-accent">
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
