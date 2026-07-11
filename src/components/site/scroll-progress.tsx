"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";
import * as React from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  const clamped = useTransform(scrollYProgress, (v) => Math.min(Math.max(v, 0), 1));
  const asPercent = useTransform(clamped, (v) => Math.round(v * 100));

  useMotionValueEvent(asPercent, "change", (v) => {
    setPercent(v);
    setVisible(v > 2);
  });

  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  return (
    <motion.button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.25 }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full border border-border/60 bg-card/80 text-primary shadow-lg backdrop-blur"
    >
      <span className="sr-only">{percent}% scrolled</span>
      <svg className="absolute inset-0 size-12 -rotate-90" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r={radius}
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          className="text-border"
        />
        <motion.circle
          cx="24"
          cy="24"
          r={radius}
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={{ pathLength: clamped }}
        />
      </svg>
      <ArrowUp className="size-4" />
    </motion.button>
  );
}
