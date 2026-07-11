"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="relative mx-auto max-w-6xl px-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="bg-mesh relative overflow-hidden rounded-3xl border border-border/60 px-8 py-20 text-center"
      >
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Start building with Corvus
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
          Clone it, drop in your logo.svg, and ship something that feels
          considered from the first pixel.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="group"
            nativeButton={false}
            render={<Link href="#" />}
          >
            Get started
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
