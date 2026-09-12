const WORD = "NEXT STAGE";

export function MarqueeBand() {
  const seq = Array.from({ length: 8 });
  return (
    <section
      aria-hidden="true"
      className="overflow-hidden bg-[linear-gradient(90deg,#1dd0d4,#1ed180,#8be75f)] py-5 md:py-7 select-none"
    >
      <div className="marquee-track">
        {[0, 1].map((g) => (
          <span key={g} className="inline-flex items-center">
            {seq.map((_, i) => (
              <span key={i} className="inline-flex items-center font-marcellus text-white text-2xl md:text-4xl">
                <span className="px-6 md:px-10">{WORD}</span>
                <span className="text-white/70 text-lg md:text-2xl">✶</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}
