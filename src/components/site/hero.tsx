"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const headline = "Ship beautiful products, faster.";
const stack = ["shadcn/ui", "Framer Motion", "Skiper UI"];

export function Hero() {
  const words = headline.split(" ");
  const [badgeHovered, setBadgeHovered] = useState(false);

  return (
    <section className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      <div className="bg-mesh pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] [background-size:32px_32px] opacity-40" />

      {/* Skiper-style expandable badge */}
      <motion.div
        layout
        onHoverStart={() => setBadgeHovered(true)}
        onHoverEnd={() => setBadgeHovered(false)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ borderRadius: 9999 }}
        className="mb-8 cursor-default overflow-hidden border border-border/60 bg-card/80 shadow-sm backdrop-blur"
      >
        <motion.div
          layout
          className="flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="size-3.5 shrink-0 text-primary" />
          <motion.span layout className="whitespace-nowrap">
            Built with
          </motion.span>
          <AnimatePresence mode="popLayout">
            {badgeHovered ? (
              <motion.div
                key="tags"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex items-center gap-1.5"
              >
                {stack.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.18 }}
                    className="whitespace-nowrap rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            ) : (
              <motion.span
                key="text"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="whitespace-nowrap"
              >
                shadcn/ui · Framer Motion · Skiper UI
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <h1 className="max-w-3xl text-balance text-center font-heading text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-2 align-top">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={
                i === words.length - 1
                  ? "inline-block bg-gradient-to-r from-primary via-primary to-chart-2 bg-clip-text text-transparent"
                  : "inline-block"
              }
            >
              {word}&nbsp;
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 max-w-xl text-balance text-center text-lg text-muted-foreground"
      >
        Corvus is a design-forward starter kit — shadcn/ui, Framer Motion and
        Skiper UI wired together with a calm, sage-toned aesthetic so you can
        build the interesting part of your product first.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
      >
        <Button
          size="lg"
          className="group"
          nativeButton={false}
          render={<Link href="#cta" />}
        >
          Get started
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          nativeButton={false}
          render={<Link href="#features" />}
        >
          Explore features
        </Button>
      </motion.div>
    </section>
  );
}
