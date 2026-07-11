"use client";

import NumberFlow from "@number-flow/react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as React from "react";

const stats = [
  { value: 42, suffix: "", label: "Components ready to use" },
  { value: 99, suffix: "%", label: "Lighthouse accessibility" },
  { value: 3, suffix: "kb", label: "Runtime CSS, gzipped" },
  { value: 100, suffix: "%", label: "Yours to customize" },
];

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [display, setDisplay] = React.useState(0);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 24, stiffness: 90 });

  React.useEffect(() => {
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsub;
  }, [spring]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      onViewportEnter={() => motionValue.set(value)}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-2 text-center"
    >
      <div className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        <NumberFlow value={display} suffix={suffix} />
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="relative border-y border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-6 py-20 md:grid-cols-4">
        {stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
