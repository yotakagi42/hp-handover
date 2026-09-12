// 手描き風ドゥードル（点線アーチ・きらめき・バツ印・太陽）の簡易SVG。
// 実サイトのキャラクターイラストは流用しない（権利物のため幾何アクセントのみ再現）。
import React from "react";

export function DotArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" aria-hidden="true" className={className}>
      <path
        d="M10,70 Q100,-30 190,60"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="0.1 18"
      />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <path
        d="M20 2 C22 12 28 18 38 20 C28 22 22 28 20 38 C18 28 12 22 2 20 C12 18 18 12 20 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CrossMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M5 5 L19 19 M19 5 L5 19"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Sun({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className={className}>
      <circle cx="40" cy="40" r="12" fill="currentColor" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 40 + Math.cos(angle) * 20;
        const y1 = 40 + Math.sin(angle) * 20;
        const x2 = 40 + Math.cos(angle) * 32;
        const y2 = 40 + Math.sin(angle) * 32;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function Blob({
  className = "",
  variant = 0,
}: {
  className?: string;
  variant?: 0 | 1 | 2;
}) {
  const paths = [
    "M43.9,-64.6 C57.8,-56.2 70.4,-44.6 76.1,-29.9 C81.8,-15.2 80.6,2.6 74.3,17.6 C68,32.6 56.7,44.8 43.4,54.4 C30.1,64 14.9,71 -0.7,72 C-16.3,73 -32.6,68 -45.5,58.2 C-58.4,48.4 -67.9,33.8 -72.4,17.6 C-76.9,1.4 -76.4,-16.4 -68.9,-30.4 C-61.4,-44.4 -46.9,-54.6 -32.4,-62.8 C-17.9,-71 -3.4,-77.2 5.7,-75.2 C14.8,-73.2 29.9,-73 43.9,-64.6 Z",
    "M38.2,-58.7 C51.2,-51.1 64.5,-42.4 71.2,-29.8 C77.9,-17.2 78,-0.7 73.5,13.5 C69,27.7 59.9,39.6 48.4,49.9 C36.9,60.2 23,68.9 7.5,71.1 C-8,73.3 -25.1,69 -38.5,59.6 C-51.9,50.2 -61.6,35.7 -67.2,19.6 C-72.8,3.5 -74.3,-14.2 -67.8,-27.8 C-61.3,-41.4 -46.8,-50.9 -32.7,-58.2 C-18.6,-65.5 -4.9,-70.6 4.4,-77.4 C13.7,-84.2 25.2,-66.3 38.2,-58.7 Z",
    "M47.1,-67.2 C60.2,-59.3 69.3,-45 73.9,-29.7 C78.5,-14.4 78.6,1.9 73.4,15.9 C68.2,29.9 57.7,41.6 45.4,51.9 C33.1,62.2 19,71.1 3.2,70.9 C-12.6,70.7 -30.1,61.4 -43.6,50.1 C-57.1,38.8 -66.6,25.5 -70.4,10.4 C-74.2,-4.7 -72.3,-21.6 -64.2,-34.7 C-56.1,-47.8 -41.8,-57.1 -27.5,-64.6 C-13.2,-72.1 1.1,-77.8 15.6,-76.7 C30.1,-75.6 34,-75.1 47.1,-67.2 Z",
  ];
  return (
    <svg viewBox="-100 -100 200 200" aria-hidden="true" className={className}>
      <path d={paths[variant]} fill="currentColor" />
    </svg>
  );
}
