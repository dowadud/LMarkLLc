"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { COMPANY, telPrimaryHref } from "@/lib/company";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/products", label: "Equipment" },
  { href: "/#categories", label: "Categories" },
  { href: "/#why-us", label: "Why us" },
  { href: "/#quote", label: "Quote" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b1220]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="L Mark LLC home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={telPrimaryHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white"
          >
            <Phone className="size-4 shrink-0 text-teal-400" aria-hidden />
            <span className="hidden lg:inline">{COMPANY.phoneDisplay}</span>
          </a>
          <Button asChild size="sm" className="rounded-lg shadow-lg shadow-teal-900/30">
            <Link href="/#quote">Request a quote</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/15 p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/10 bg-[#0b1220] px-4 py-4 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-3" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={telPrimaryHref} className="text-sm font-medium text-teal-300">
            Call {COMPANY.phoneDisplay}
          </a>
          <Button asChild className="w-full">
            <Link href="/#quote" onClick={() => setOpen(false)}>
              Request a quote
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
