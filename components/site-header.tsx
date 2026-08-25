"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#who-we-are", label: "About" },
  { href: "#vision-mission", label: "Vision & Mission" },
  { href: "#what-we-do", label: "What We Do" },
  { href: "#values", label: "Our Values" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="container flex h-[72px] items-center justify-between">
        <a href="#top" className="shrink-0">
          <LogoMark />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.9rem] font-medium text-ink/70 transition-colors hover:text-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#join"
            className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink-dark transition-colors hover:bg-gold-light"
          >
            Join Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-ink/10 bg-paper transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0">
          <nav className="container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[0.95rem] font-medium text-ink/80 hover:bg-green/5 hover:text-green"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink-dark"
            >
              Darapo Eko Wa — Join Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
