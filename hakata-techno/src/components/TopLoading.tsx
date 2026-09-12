"use client";

// トップページのローディング演出。初回訪問 or リロード時のみ、紺背景にロゴを短く見せてフェードで明ける。
// 再訪問時はスキップして即 KV をアクティブ化。sessionStorage の hasVisitedTop で判定。
import { useEffect } from "react";

export default function TopLoading() {
  useEffect(() => {
    const loading = document.querySelector<HTMLElement>(".loading");
    const kv = document.querySelector<HTMLElement>(".indexkv");
    if (!loading || !kv) return;

    const showTimer = setTimeout(() => {
      document.querySelector(".loading-inner")?.classList.add("is-show");
    }, 500);

    const nav = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming | undefined;
    const isReload = nav?.type === "reload";
    const hasVisited = sessionStorage.getItem("hasVisitedTop");

    const timers: ReturnType<typeof setTimeout>[] = [showTimer];

    if (!hasVisited || isReload) {
      loading.style.display = "block";

      const DELAY = 1600;

      timers.push(setTimeout(() => kv.classList.add("is-active"), DELAY + 200));
      timers.push(
        setTimeout(() => {
          loading.style.transition = "opacity .6s ease";
          loading.style.opacity = "0";
          timers.push(setTimeout(() => (loading.style.display = "none"), 600));
          if (!isReload) sessionStorage.setItem("hasVisitedTop", "true");
        }, DELAY)
      );
    } else {
      loading.style.display = "none";
      kv.classList.add("is-active");
    }

    return () => timers.forEach(clearTimeout);
  }, []);

  return null;
}
