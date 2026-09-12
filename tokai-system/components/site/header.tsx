"use client";
import Image from "next/image";
import React from "react";

const NAV_ITEMS = [
  { href: "#services", label: "事業内容" },
  { href: "#strengths", label: "強み" },
  { href: "#company", label: "会社概要" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0f14]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={23}
            className="drop-shadow-[0_0_1px_rgba(255,255,255,0.4)]"
          />
          <span className="text-sm font-semibold tracking-wide text-white">
            株式会社東海システム
          </span>
          <span className="hidden font-mono text-[10px] tracking-[0.2em] text-zinc-500 md:inline">
            TOKAI SYSTEM
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#45a6dc] px-5 py-2 text-sm font-medium text-[#06202e] transition-colors hover:bg-[#6dbde8]"
          >
            お問い合わせ
          </a>
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
          className="ml-auto flex size-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-5 bg-white transition-transform ${isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-white transition-transform ${isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/10 bg-[#0a0f14] px-5 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-sm text-zinc-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 block rounded-full bg-[#45a6dc] px-5 py-2.5 text-center text-sm font-medium text-[#06202e]"
          >
            お問い合わせ
          </a>
        </nav>
      )}
    </header>
  );
}
