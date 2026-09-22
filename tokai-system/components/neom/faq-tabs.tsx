"use client";
// カテゴリタブでQ/Aリストを切り替えるFAQセクション。クリック駆動でタブ内容をフェード差し替えする。
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Reveal } from "@/components/site/reveal";

type QaItem = { q: string; a: string };
type FaqCategory = { label: string; items: QaItem[] };

const CATEGORIES: FaqCategory[] = [
  {
    label: "会社について",
    items: [
      {
        q: "東海システムはどんな会社ですか？",
        a: "AGVをはじめとする自律型の搬送システムとAIを活用し、物流現場の課題解決に取り組む会社です。",
      },
      {
        q: "どんな業界のお客様が多いですか？",
        a: "製造業・物流業のお客様が中心です。AGVによる搬送自動化や運用の最適化など、毎日動き続ける現場を多く手がけています。",
      },
      {
        q: "会社の雰囲気は？",
        a: "落ち着いた現場主義です。派手さより、使う人の手に馴染む仕事を大切にするメンバーが集まっています。",
      },
    ],
  },
  {
    label: "仕事内容",
    items: [
      {
        q: "入社後はどんな仕事から始まりますか？",
        a: "動作チェックやテスト、運用補助など、現場を知る仕事からスタートし、少しずつ設計・構築へ広げていきます。",
      },
      {
        q: "ハードウェアとソフトウェア、どちらも経験できますか？",
        a: "はい。AGVの機構設計とAIによるソフトウェア開発を分断しない体制のため、希望に応じて両方の経験を積むことができます。",
      },
      {
        q: "配属先はどのように決まりますか？",
        a: "希望とスキル、プロジェクトとの相性を重ねて決定します。会社都合だけのアサインは行いません。",
      },
    ],
  },
  {
    label: "働き方",
    items: [
      {
        q: "残業はどのくらいありますか？",
        a: "案件によりますが、月平均20時間前後を目安に管理しています。",
      },
      {
        q: "勤務地はどこですか？",
        a: "原則として一都三県（東京・神奈川・埼玉・千葉）、または愛知・静岡・岐阜・三重です。遠方への出張・常駐は、本人の同意のうえで決定します。",
      },
      {
        q: "担当変更は頻繁にありますか？",
        a: "定着を重視しており、頻繁な担当変更は行いません。引き継ぎのたびに現場が止まることを避けるためです。",
      },
    ],
  },
  {
    label: "採用について",
    items: [
      {
        q: "未経験でも応募できますか？",
        a: "基礎学習の実績と意欲があれば、ポテンシャル採用の対象です。まずはカジュアル面談からどうぞ。",
      },
      {
        q: "選考の流れを教えてください。",
        a: "カジュアル面談→書類選考→面接（1〜2回）→内定が基本です。お気軽にご相談ください。",
      },
      {
        q: "面談はオンラインでも可能ですか？",
        a: "可能です。遠方の方やお忙しい方は、オンラインでの面談からスタートできます。",
      },
    ],
  },
];

function Badge({ label }: { label: "Q" | "A" }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent text-sm font-bold text-accent">
      {label}
    </span>
  );
}

export function FaqTabs() {
  const [active, setActive] = React.useState(0);
  const items = CATEGORIES[active].items;

  return (
    <section id="faq" className="bg-base-gray py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="text-center">
          <p className="text-sm tracking-[0.2em] text-foreground">FAQ</p>
          <h2 className="mt-2 text-2xl font-bold text-accent md:text-4xl">
            よくある質問
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category, index) => {
            const isActive = index === active;
            return (
              <button
                key={category.label}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-full px-8 py-3 text-sm font-bold transition ${
                  isActive
                    ? "bg-accent text-white"
                    : "bg-white text-foreground hover:bg-accent-pale"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {items.map((item, index) => (
                <li
                  key={item.q}
                  className={`py-7 ${
                    index < items.length - 1
                      ? "border-b border-dotted border-gray-400"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Badge label="Q" />
                    <p className="font-bold text-foreground">{item.q}</p>
                  </div>
                  <div className="mt-4 flex items-start gap-4">
                    <Badge label="A" />
                    <p className="text-sm leading-loose text-foreground/80">
                      {item.a}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
