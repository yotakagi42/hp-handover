"use client";

// 21st.dev の Animated Hero パターンを移植:
// キーワードが縦フリップで入れ替わるタイトル + 行ごとのブラー付きフェードアップ。
import { useEffect, useState } from "react";

const WORDS = ["可能性", "キャリア", "挑戦心", "好奇心"];

export default function HeroTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 非表示タブでは新規CSSアニメーションが開始されず0%で固まるため、表示中のみ切り替える
    const timer = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % WORDS.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-copy">
      <h1 className="hero-copy-main">
        <span className="hero-line hero-line-1">
          あなたの
          <span className="hero-word" key={index}>
            {WORDS[index]}
          </span>
          が、
        </span>
        <span className="hero-line hero-line-2">空へ広がる。</span>
      </h1>
      <p className="hero-copy-sub hero-line hero-line-3">
        博多から世界へ。最先端のクラウド技術と、
        <br className="pc" />
        一人ひとりを大切にする文化で、エンジニアの新しいスタンダードをつくる。
      </p>
      <a href="/recruit" className="hero-copy-cta hero-line hero-line-4">
        採用情報をみる<span className="icon-arrow-right"></span>
      </a>
    </div>
  );
}
