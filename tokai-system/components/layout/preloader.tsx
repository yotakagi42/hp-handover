// paceスタイルのプリローダー（loading-start/finish実測値の簡略版）。
// JS非依存のCSSアニメーションのみで構成し、1.5秒で必ず消えるフェイルセーフとする。
import React from "react";

export function Preloader() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-accent [animation:kill-loader_1.5s_ease_forwards]"
    >
      <p className="overflow-hidden text-xl font-bold tracking-widest text-white md:text-3xl">
        <span className="inline-block [animation:loader-in_0.9s_cubic-bezier(0.16,1,0.3,1)_both]">
          現場が、動き出す。
        </span>
      </p>
    </div>
  );
}
