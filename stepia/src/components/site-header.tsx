"use client";

import { Logo } from "@/components/logo";

const NAV = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICE", href: "#service" },
  { label: "WORKS", href: "#works" },
  { label: "MEMBER", href: "#member" },
  { label: "COMPANY", href: "#company" },
  { label: "RECRUIT", href: "#recruit" },
  { label: "CONTACT", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-[1000] pointer-events-none">
      <div className="flex items-start justify-between px-5 md:px-8 pt-5 md:pt-7">
        <a
          href="#top"
          className="pointer-events-auto inline-flex p-[3px] rounded-full bg-[linear-gradient(40deg,#56e1e2_5%,#e1f975_95%)] shadow-[0_8px_30px_rgba(29,208,212,0.25)]"
        >
          <span className="flex items-center h-12 md:h-[3.4rem] pl-4 pr-6 rounded-full bg-white">
            <Logo wordClassName="text-2xl md:text-[1.7rem] tracking-wide" />
          </span>
        </a>

        <div className="pointer-events-auto flex items-center gap-4 md:gap-6">
          <a
            href="#recruit"
            className="hidden md:flex items-center h-11 px-5 rounded-full bg-ink text-white overflow-hidden"
          >
            <span className="font-barlow text-[13px] tracking-widest">
              <span className="ticker-inline">WE ARE HIRING ! ✊ </span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 font-barlow text-[13px] tracking-[0.18em] text-ink/80">
            {NAV.map((n) => (
              <a key={n.href} className="navlink" href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-ink/70">
            <a
              href="#"
              aria-label="X"
              className="w-9 h-9 grid place-items-center rounded-full border border-ink/15 hover:bg-ink hover:text-white transition"
            >
              𝕏
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 grid place-items-center rounded-full border border-ink/15 hover:bg-ink hover:text-white transition"
            >
              ◎
            </a>
          </div>
          <a
            href="#about"
            aria-label="メニュー"
            className="lg:hidden w-11 h-11 grid place-items-center rounded-full bg-ink text-white"
          >
            ☰
          </a>
        </div>
      </div>
    </header>
  );
}
