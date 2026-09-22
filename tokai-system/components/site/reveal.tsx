"use client";
// neomトレースの入場アニメーション。実測値: 基本=1.2s translateY(20px)、
// clip系=0.8s clip-path inset、pon=0.6s scale(0)→1、sprout=0.8s 揺れ付きポップ。
import {
  motion,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";
import React from "react";

type RevealVariant = "up" | "clip-right" | "clip-left" | "pon" | "sprout";

const VARIANTS: Record<
  RevealVariant,
  {
    initial: TargetAndTransition;
    visible: TargetAndTransition;
    transition: Transition;
  }
> = {
  up: {
    initial: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
  "clip-right": {
    initial: { clipPath: "inset(0 100% 0 0)" },
    visible: { clipPath: "inset(0 0% 0 0)" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  "clip-left": {
    initial: { clipPath: "inset(0 0 0 100%)" },
    visible: { clipPath: "inset(0 0 0 0%)" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  pon: {
    initial: { opacity: 0, y: 50, scale: 0 },
    visible: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  sprout: {
    initial: { opacity: 0, y: 50, scale: 0, rotate: 4 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: [4, -2, 6, -4, 2, 0],
    },
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}) {
  const config = VARIANTS[variant];
  return (
    <motion.div
      className={className}
      style={
        variant === "pon" || variant === "sprout"
          ? { transformOrigin: "50% 100%" }
          : undefined
      }
      initial={config.initial}
      whileInView={config.visible}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...config.transition, delay }}
    >
      {children}
    </motion.div>
  );
}
