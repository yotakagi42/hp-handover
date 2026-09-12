// 有機的な波形のセクション境界。正弦波でない非対称のうねりを共通化する。
// 使い方: 前セクションの末尾に <Wave fill="#45a6dc" /> を置くと次セクション色へ波でつながる。
import React from "react";

const PATHS = {
  a: "M0,64 C240,120 480,8 760,40 C1040,72 1240,128 1440,72 L1440,160 L0,160 Z",
  b: "M0,96 C180,40 420,140 720,96 C1020,52 1260,24 1440,88 L1440,160 L0,160 Z",
  c: "M0,48 C260,128 560,32 880,80 C1160,122 1320,60 1440,96 L1440,160 L0,160 Z",
} as const;

export function Wave({
  fill,
  variant = "a",
  flip = false,
  className = "",
}: {
  fill: string;
  variant?: keyof typeof PATHS;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full h-[80px] md:h-[140px] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path d={PATHS[variant]} fill={fill} />
    </svg>
  );
}
