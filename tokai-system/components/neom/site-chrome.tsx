// 宮路工業所(miyaji-kougyousho.jp)トレースのサイト外装。
// 白ヘッダー + 右上レッドCTA、フッターは写真×ネイビーの2分割構成で再現する。
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NAV_ITEMS = [
  { href: "/#concept", label: "コンセプト" },
  { href: "/#reason", label: "強み" },
  { href: "/#strength", label: "事業内容" },
  { href: "/company", label: "会社概要" },
] as const;

const MAIL_HREF = "mailto:contact@tokai-system.net";

function Hamburger({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
    >
      <span
        className={`h-px w-5 bg-accent transition-transform ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
      />
      <span
        className={`h-px w-5 bg-accent transition-transform ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
      />
    </button>
  );
}

export function NeomHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 z-50 h-16 w-full border-b border-black/5 bg-white/95 backdrop-blur md:h-20">
        <div className="mx-auto flex h-full max-w-6xl items-center px-5 md:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={30} height={30} />
            <span className="text-sm font-bold tracking-wide text-accent md:text-base">
              株式会社東海システム
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a
              href={MAIL_HREF}
              className="bg-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-dark"
            >
              お問い合わせ
            </a>
          </nav>
          <div className="ml-auto md:hidden">
            <Hamburger isOpen={isMenuOpen} onClick={() => setIsMenuOpen((v) => !v)} />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <nav className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white md:hidden">
          <button
            type="button"
            aria-label="メニューを閉じる"
            onClick={closeMenu}
            className="absolute right-5 top-6 flex size-10 flex-col items-center justify-center gap-1.5"
          >
            <span className="h-px w-5 translate-y-[3.5px] rotate-45 bg-accent" />
            <span className="h-px w-5 -translate-y-[3.5px] -rotate-45 bg-accent" />
          </button>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-lg text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={MAIL_HREF}
            onClick={closeMenu}
            className="mt-2 bg-red px-8 py-3 text-lg font-bold text-white"
          >
            お問い合わせ
          </a>
        </nav>
      )}
    </>
  );
}

export function FloatingContact() {
  return (
    <a
      href={MAIL_HREF}
      className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-2 bg-red px-3 py-6 text-white transition-colors hover:bg-red-dark"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
      <span
        className="text-sm tracking-widest"
        style={{ writingMode: "vertical-rl" }}
      >
        メール相談
      </span>
    </a>
  );
}

export function NeomFooter() {
  return (
    <footer>
      <div className="grid md:grid-cols-2">
        <div className="relative flex min-h-[220px] items-center overflow-hidden bg-accent-dark px-6 py-14 text-white md:px-12">
          <Image
            src="/images/footer-metal-workshop.jpg"
            alt=""
            fill
            sizes="50vw"
            className="object-cover opacity-30"
          />
          <div className="relative">
            <p className="text-sm leading-relaxed md:text-base">
              精密板金・金属加工についての
              <br />
              ご相談・お見積りはお気軽にどうぞ。
            </p>
            <p className="mt-5 text-xs leading-relaxed text-white/80">
              名古屋本社:〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号
              <br />
              第2森ビル401
              <br />
              東京本社:東京都渋谷区恵比寿
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 bg-accent px-6 py-14 text-center text-white">
          <p className="text-2xl font-bold tracking-widest">CONTACT US</p>
          <p className="text-sm text-white/80">お問い合わせ</p>
          <a
            href={MAIL_HREF}
            className="bg-red px-8 py-3 text-sm font-bold text-white transition hover:bg-red-dark"
          >
            メールでのお問い合わせ
          </a>
        </div>
      </div>

      <nav className="border-b border-black/5 bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-2 px-6 text-sm text-foreground/80">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </a>
          ))}
          <a href={MAIL_HREF} className="hover:text-accent">
            お問い合わせ
          </a>
        </div>
      </nav>

      <div className="bg-accent-dark py-6 text-center text-white">
        <p className="text-sm font-bold tracking-widest">株式会社東海システム</p>
        <p className="mt-2 text-[11px] opacity-80">
          © 2026 Tokai System Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
