import Link from "next/link";

import { Logo } from "./logo";

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Stats", href: "#stats" },
    { name: "Showcase", href: "#showcase" },
  ],
  connect: [
    { name: "GitHub", href: "https://github.com/renzoreyn", external: true },
    { name: "Website", href: "https://renzoreyn.dev", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div className="col-span-2 sm:col-span-1">
            <Logo />
            <p className="mt-3 max-w-[22ch] text-sm text-muted-foreground">
              A calm, sage-toned starter for your next product.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Product</p>
            <ul className="mt-3 space-y-2">
              {navigation.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Connect</p>
            <ul className="mt-3 space-y-2">
              {navigation.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Corvus. Built by{" "}
            <Link
              href="https://renzoreyn.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              renzoreyn
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
