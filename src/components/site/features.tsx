"use client";

import { motion } from "framer-motion";
import {
  Feather,
  MousePointerClick,
  Palette,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Sage-toned design tokens",
    description:
      "A calm color system inspired by iPhone 17 Sage, dialed in OKLCH for accurate light and dark rendering.",
    span: "md:col-span-2",
  },
  {
    icon: Zap,
    title: "Framer Motion everywhere",
    description:
      "Entrance transitions, hover states, and scroll-linked animations are wired in from the first commit.",
    span: "",
  },
  {
    icon: Feather,
    title: "Skiper UI components",
    description:
      "Progressive blur, text-roll navigation, squircle masks and animated counters, pulled straight from the registry.",
    span: "",
  },
  {
    icon: ShieldCheck,
    title: "shadcn/ui foundation",
    description:
      "Accessible, unstyled primitives backed by Base UI, themed to match. Buttons, sheets, dialogs, tabs and more, all styled to feel at home.",
    span: "md:col-span-2",
  },
  {
    icon: MousePointerClick,
    title: "Intuitive by default",
    description:
      "Sensible focus states, motion that respects reduced-motion, and layouts that hold up on any screen.",
    span: "",
  },
  {
    icon: Sparkles,
    title: "Make it yours",
    description:
      "Swap the colors, drop in your logo, rename everything. One config file of changes and it already feels like home.",
    span: "",
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-32">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Everything wired up, nothing in the way
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground"
        >
          A real boilerplate, not a template. Take what you need, leave what you
          don&apos;t.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -4 }}
            className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-7 shadow-sm transition-colors hover:border-primary/40 ${feature.span}`}
          >
            <div className="squircle mb-5 flex size-11 items-center justify-center bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
              <feature.icon className="size-5" strokeWidth={1.75} />
            </div>
            <h3 className="text-base font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
