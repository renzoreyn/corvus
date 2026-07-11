"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ProgressiveBlur } from "@/components/ui/skiper-ui/skiper41";
import { TextRoll } from "@/components/ui/skiper-ui/skiper58";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

const links = [
  { name: "Features", href: "#features" },
  { name: "Stats", href: "#stats" },
  { name: "Showcase", href: "#showcase" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <ProgressiveBlur
        position="top"
        height="6rem"
        blurAmount="6px"
        backgroundColor="transparent"
        className="!absolute"
      />
      <div
        className={cn(
          "absolute inset-0 -z-10 transition-all duration-500",
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent",
        )}
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <TextRoll className="text-sm font-medium normal-case tracking-normal">
                {l.name}
              </TextRoll>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={<Link href="#cta" />}
          >
            Get started
          </Button>

          <Sheet>
            <SheetTrigger
              render={<Button size="icon" variant="ghost" className="md:hidden" />}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-6">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-lg font-medium text-foreground"
                  >
                    {l.name}
                  </Link>
                ))}
                <Button nativeButton={false} render={<Link href="#cta" />}>
                  Get started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
