"use client";

import Link from "next/link";
import { useState } from "react";
import { business } from "@/lib/business";
import { Icon } from "./Icon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms/", label: "Rooms" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-asphalt text-concrete border-b border-white/10">
      <div className="mx-auto max-w-6xl px-5 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-baseline gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="font-display text-xl md:text-2xl tracking-wide text-concrete">
            Sterlingone
          </span>
          <span className="hidden sm:inline text-amber text-[0.65rem] uppercase tracking-[0.15em]">
            Hospitality
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-concrete/90 hover:text-amber transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${business.phone.href}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-sm bg-amber text-asphalt font-mono text-xs font-semibold uppercase tracking-wide px-3 py-2 hover:bg-amber-dim transition-colors"
            aria-label={`Call ${business.name} now`}
          >
            <Icon name="phone" className="w-4 h-4" />
            Call Now
          </a>
          <a
            href={`tel:${business.phone.href}`}
            className="sm:hidden inline-flex items-center justify-center rounded-full bg-amber text-asphalt p-2"
            aria-label={`Call ${business.name} now`}
          >
            <Icon name="phone" className="w-5 h-5" />
          </a>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 text-concrete"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/10 bg-asphalt px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base font-medium text-concrete/90 hover:text-amber border-b border-white/5 last:border-b-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
