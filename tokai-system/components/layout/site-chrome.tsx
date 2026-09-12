// サイト外装（静的+固定ヘッダー・縦書きメール相談タブ・フッター）。東海システムのパレット（accent #45a6dc / dark #2c7fb0）。
// 東海システムのパレット（accent #45a6dc / dark #2c7fb0）に差し替えて再現する。
"use client";
import Image from "next/image";
import React from "react";

const NAV_ITEMS = [
  { href: "/#concept", label: "コンセプト" },
  { href: "/#reason", label: "強み" },
  { href: "/#strength", label: "事業内容" },
  { href: "/#faq", label: "FAQ" },
  { href: "/company", label: "会社概要" },
  { href: "/recruit", label: "採用情報" },
] as const;

const MAIL_HREF = "mailto:contact@tokai-system.net";

function Hamburger({
  isOpen,
  onClick,
  dark = false,
}: {
  isOpen: boolean;
  onClick: () => void;
  dark?: boolean;
}) {
  const barColor = dark ? "bg-[#06202e]" : "bg-white";
  return (
    <button
      type="button"
      aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      aria-expanded={isOpen}
      onClick={onClick}
      className="flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
    >
      <span
        className={`h-px w-5 transition-transform ${barColor} ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
      />
      <span
        className={`h-px w-5 transition-transform ${barColor} ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
      />
    </button>
  );
}

export function GlobalHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="absolute top-0 z-30 flex h-20 w-full items-center px-5 md:px-10">
        <a href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={32} height={32} />
          <span className="text-base font-bold tracking-wide text-white">
            株式会社東海システム
          </span>
        </a>
        <nav className="ml-auto hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white transition-opacity hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto md:hidden">
          <Hamburger isOpen={isMenuOpen} onClick={() => setIsMenuOpen((v) => !v)} />
        </div>
      </header>

      <header
        className={`fixed top-0 z-50 h-16 w-full bg-white/90 shadow-sm backdrop-blur transition-transform duration-[600ms] ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center px-5 md:px-8">
          <a href="/" className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={32} height={32} />
            <span className="text-base font-bold tracking-wide text-[#06202e]">
              株式会社東海システム
            </span>
          </a>
          <nav className="ml-auto hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#06202e] transition-opacity hover:opacity-70"
              >
                {item.label}
              </a>
            ))}
            <a
              href={MAIL_HREF}
              className="rounded-full bg-accent px-5 py-2 text-sm text-white transition-colors hover:bg-[#2c7fb0]"
            >
              お問い合わせ
            </a>
          </nav>
          <div className="ml-auto md:hidden">
            <Hamburger
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
              dark
            />
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
            <span className="h-px w-5 translate-y-[3.5px] rotate-45 bg-[#06202e]" />
            <span className="h-px w-5 -translate-y-[3.5px] -rotate-45 bg-[#06202e]" />
          </button>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-lg text-[#06202e]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={MAIL_HREF}
            onClick={closeMenu}
            className="mt-2 rounded-full bg-accent px-6 py-2.5 text-lg text-white"
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
      className="fixed right-0 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-2 rounded-l-2xl bg-[#2c7fb0] px-3 py-6 text-white transition-colors hover:bg-accent"
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

export function GlobalFooter() {
  return (
    <footer className="bg-accent py-16 text-center text-white">
      <Image
        src="/logo.png"
        alt=""
        width={48}
        height={48}
        className="mx-auto drop-shadow-[0_0_2px_rgba(255,255,255,0.6)]"
      />
      <p className="mt-4 font-bold tracking-widest">株式会社東海システム</p>
      <p className="mt-3 text-xs leading-relaxed">
        〒450-0002 愛知県名古屋市中村区名駅4丁目24番5号
        <br />
        第2森ビル401
      </p>
      <nav className="mt-6 flex flex-wrap justify-center divide-x divide-white/40 text-sm">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-3 underline underline-offset-4"
          >
            {item.label}
          </a>
        ))}
        <a href={MAIL_HREF} className="px-3 underline underline-offset-4">
          お問い合わせ
        </a>
      </nav>
      <p className="mt-10 px-6 text-left text-[11px] opacity-80">
        © 2026 株式会社東海システム
      </p>
    </footer>
  );
}
