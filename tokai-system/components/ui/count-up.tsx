"use client";
// 21st.dev / Magic UI の NumberTicker 相当。ビューポート進入時に0から実数値へスプリングで到達する。
import React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function CountUp({
  value,
  useGrouping = false,
  className,
}: {
  value: number;
  useGrouping?: boolean;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 120 });
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  React.useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  React.useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString("ja-JP", {
          useGrouping,
        });
      }
    });
    return unsubscribe;
  }, [springValue, useGrouping]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("ja-JP", { useGrouping })}
    </span>
  );
}
