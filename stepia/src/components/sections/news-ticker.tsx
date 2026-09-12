const ITEMS = [
  "2025/02/02 ｜ 代表登壇『DX Leaders Conference 2025』レポートを公開しました",
  "2025/01/20 ｜ 新オフィス（東池袋）移転のお知らせ",
  "2024/12/10 ｜ 顧客継続率 98% を達成しました",
];

export function NewsTicker() {
  return (
    <section className="border-y border-ink/10 bg-white/60 backdrop-blur">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center gap-6 h-16 overflow-hidden">
        <span className="font-marcellus text-xl shrink-0">News</span>
        <div className="overflow-hidden relative flex-1">
          <div className="ticker-track gap-12 text-sm text-ink/70">
            {[...ITEMS, ...ITEMS].map((t, i) => (
              <span key={i} aria-hidden={i >= ITEMS.length}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <a
          href="#contact"
          className="hidden md:inline font-barlow text-xs tracking-widest text-ink/50 hover:text-cyan1 shrink-0"
        >
          VIEW MORE →
        </a>
      </div>
    </section>
  );
}
