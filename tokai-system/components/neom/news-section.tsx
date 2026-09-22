"use client";
// 最新情報セクション。カテゴリフィルタでカードを絞り込み表示する。
import React from "react";
import { Blob, CrossMark, Sparkle, Sun } from "@/components/neom/doodles";
import { Reveal } from "@/components/site/reveal";

type NewsCategory = "お知らせ" | "採用" | "イベント";
type Thumb = "sun" | "sparkle" | "blob" | "cross";

type Article = {
  date: string;
  category: NewsCategory;
  title: string;
  thumb: Thumb;
  blobVariant: 0 | 1 | 2;
};

const ARTICLES: Article[] = [
  {
    date: "2026.07.09",
    category: "イベント",
    title: "社内勉強会『現場DB設計のいろは』を開催しました",
    thumb: "sun",
    blobVariant: 0,
  },
  {
    date: "2026.07.01",
    category: "採用",
    title: "2027年新卒採用の募集を開始しました",
    thumb: "sparkle",
    blobVariant: 1,
  },
  {
    date: "2026.06.24",
    category: "お知らせ",
    title: "物流センター向け在庫管理システムの導入事例を公開",
    thumb: "blob",
    blobVariant: 2,
  },
  {
    date: "2026.06.10",
    category: "イベント",
    title: "名古屋ITもくもく会に協賛しました",
    thumb: "cross",
    blobVariant: 0,
  },
];

const FILTERS: Array<"全て" | NewsCategory> = [
  "全て",
  "お知らせ",
  "採用",
  "イベント",
];

function ThumbVisual({ article }: { article: Article }) {
  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl bg-accent-pale">
      {article.thumb === "sun" && <Sun className="w-16 text-accent" />}
      {article.thumb === "sparkle" && <Sparkle className="w-12 text-accent" />}
      {article.thumb === "blob" && (
        <Blob variant={article.blobVariant} className="w-24 text-accent" />
      )}
      {article.thumb === "cross" && <CrossMark className="w-10 text-accent" />}
      <span className="absolute bottom-2 right-3 text-xs font-bold tracking-wider text-accent/70">
        TS
      </span>
    </div>
  );
}

export function NewsSection() {
  const [filter, setFilter] = React.useState<"全て" | NewsCategory>("全て");

  const visible =
    filter === "全て"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === filter);

  return (
    <section id="news" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-sm tracking-[0.2em] text-foreground">Information</p>
          <h2 className="mt-2 text-2xl font-bold text-accent md:text-3xl">
            最新情報
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm">
          {FILTERS.map((label, index) => {
            const isActive = label === filter;
            return (
              <React.Fragment key={label}>
                {index > 0 && (
                  <span aria-hidden="true" className="text-gray-300">
                    |
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setFilter(label)}
                  className={`transition ${
                    isActive
                      ? "rounded-full bg-accent px-4 py-1 text-white"
                      : "px-2 text-foreground hover:text-accent"
                  }`}
                >
                  {label}
                </button>
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-10 flex gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
          {visible.map((article) => (
            <Reveal
              key={article.title}
              className="w-[260px] shrink-0 md:w-auto"
            >
              <article>
                <ThumbVisual article={article} />
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <span className="rounded-full bg-accent px-3 py-0.5 text-[11px] text-white">
                    {article.category}
                  </span>
                </div>
                <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-relaxed text-foreground">
                  {article.title}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <a
            href="#news"
            className="rounded-full border border-accent px-8 py-3 text-sm text-accent transition hover:bg-accent hover:text-white"
          >
            もっと見る →
          </a>
        </div>
      </div>
    </section>
  );
}
