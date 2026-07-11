import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ScrollProgress } from "@/components/site/scroll-progress";
import { SquircleFilter } from "@/components/squircle-filter";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/skiper-ui/skiper101";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corvus",
  description: "A design-forward boilerplate with a calm, sage-toned aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <TooltipProvider>
            <SquircleFilter />
            {children}
            <ScrollProgress />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
