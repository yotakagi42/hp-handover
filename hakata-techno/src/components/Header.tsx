"use client";

// 元テーマ common.js の挙動を移植:
// - スクロールで header / #openmenu に is-active を付与
// - SP ハンバーガーで gnav is-active / header-inner is-open / overlay 追加
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const wrapper = document.querySelector<HTMLElement>(".wrapper");
      if (!wrapper || !headerRef.current) return;
      const adjust = window.innerWidth > 767 ? 100 : 60;
      const threshold =
        wrapper.getBoundingClientRect().top + window.scrollY - adjust;
      const active = window.scrollY >= threshold;
      headerRef.current.classList.toggle("is-active", active);
      document.getElementById("openmenu")?.classList.toggle("is-active", active);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      const overlay = document.createElement("div");
      overlay.className = "overlay";
      overlay.addEventListener("click", () => setIsMenuOpen(false));
      document.body.appendChild(overlay);
      return () => overlay.remove();
    }
  }, [isMenuOpen]);

  return (
    <header ref={headerRef}>
      <div className={`header-inner${isMenuOpen ? " is-open" : ""}`}>
        <a href="/" className="header-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/common/logo-hakata.svg"
            alt="博多テクノ"
            width={191}
            height={53}
          />
        </a>
        <div
          id="openmenu"
          className={isMenuOpen ? "is-open" : ""}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
        </div>
        <nav id="gnav" className={`gnav${isMenuOpen ? " is-active" : ""}`}>
          <ul className="gnav-list">
            <li>
              <a href="/profile">企業情報</a>
            </li>
            <li>
              <a href="/company">会社概要</a>
            </li>
            <li>
              <a href="/recruit">採用情報</a>
            </li>
            <li>
              <a
                href="mailto:contact@hakata-techno.tech"
                className="gnav-list-contact"
              >
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
