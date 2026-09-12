/**
 * Original layered organic-wave SVG system for Stepia.
 * Evokes the flowing teal/cyan/green energy without reproducing any third-party art.
 */

type WaveColors = { back: string; mid: string; front: string };

const BRAND: WaveColors = { back: "#56e1e2", mid: "#1dd0d4", front: "#1ed180" };

/** Full-bleed layered waves anchored to the bottom of the hero. */
export function HeroWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-x-0 bottom-0 w-full h-[58%] pointer-events-none ${className}`}
      viewBox="0 0 1440 620"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill={BRAND.back}
        fillOpacity="0.55"
        d="M0 250 C 240 160 420 360 720 320 C 1010 282 1180 150 1440 230 L1440 620 L0 620 Z"
      />
      <path
        fill={BRAND.mid}
        fillOpacity="0.85"
        d="M0 380 C 260 300 440 470 760 430 C 1060 392 1220 300 1440 360 L1440 620 L0 620 Z"
      />
      <path
        fill={BRAND.front}
        d="M0 500 C 300 440 520 560 820 525 C 1110 491 1250 440 1440 480 L1440 620 L0 620 Z"
      />
    </svg>
  );
}

/**
 * Reusable wave divider placed between sections.
 * `flip` mirrors the curve; `from`/`to` set the fill (section it sits on) and the
 * incoming section color is handled by stacking.
 */
export function WaveDivider({
  fill = "#ffffff",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative w-full leading-[0] ${className}`} aria-hidden="true">
      <svg
        className={`block w-full h-[60px] md:h-[120px] ${flip ? "rotate-180" : ""}`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill={fill}
          fillOpacity="0.4"
          d="M0 40 C 300 100 520 0 760 24 C 1010 49 1230 110 1440 50 L1440 120 L0 120 Z"
        />
        <path
          fill={fill}
          d="M0 70 C 280 120 520 20 760 44 C 1010 69 1230 120 1440 76 L1440 120 L0 120 Z"
        />
      </svg>
    </div>
  );
}
