/**
 * Original SVG motifs for Stepia — geometric flag/step/orbit imagery.
 * Authored from scratch; no third-party artwork is reproduced.
 */

/** Ascending steps motif (the "step up" brand idea). Decorative. */
export function StepsMotif({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 160" fill="none" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={10 + i * 46}
          y={150 - (i + 1) * 34}
          width="40"
          height={(i + 1) * 34}
          rx="6"
          fill={["#56e1e2", "#1dd0d4", "#1ed180", "#8be75f"][i]}
          fillOpacity={0.9}
        />
      ))}
    </svg>
  );
}

/**
 * Central orbit badge with a dashed ring and the Stepia mark — anchors the
 * Service "next stage" diagram.
 */
export function OrbitBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative grid place-items-center ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_22s_linear_infinite] motion-reduce:animate-none" aria-hidden="true">
        <circle cx="100" cy="100" r="86" fill="none" stroke="#1dd0d4" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round" />
        <circle cx="100" cy="14" r="5" fill="#eb579e" />
        <circle cx="186" cy="100" r="5" fill="#fad905" />
        <circle cx="100" cy="186" r="5" fill="#2e85ec" />
        <circle cx="14" cy="100" r="5" fill="#1ed180" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-[58%] h-[58%] rounded-full bg-white shadow-[0_18px_40px_-18px_rgba(29,208,212,0.6)] grid place-items-center">
          <span className="flex flex-col items-center gap-1">
            <span className="grid grid-cols-2 gap-[2px] w-6 h-6">
              <i className="block rounded-[2px] bg-cyan1" />
              <i className="block rounded-[2px] bg-lime1" />
              <i className="block rounded-[2px] bg-pink1" />
              <i className="block rounded-[2px] bg-blue1" />
            </span>
            <span className="font-bold text-base leading-none tracking-wide">ステピア</span>
          </span>
        </div>
      </div>
    </div>
  );
}
