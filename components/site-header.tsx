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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080f1c]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Logo — fade in on mount */}
        <Link
          href="/"
          aria-label="L Mark LLC home"
          className="animate-fade-up opacity-0 [animation-fill-mode:forwards]"
          style={{ animationDelay: "50ms" }}
        >
          <Logo />
        </Link>

        {/* Desktop nav with animated underline */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "animate-fade-up opacity-0 [animation-fill-mode:forwards]",
                "group relative text-sm font-medium text-slate-300 transition-colors hover:text-white",
              )}
              style={{ animationDelay: `${100 + i * 60}ms` }}
            >
              {item.label}
              {/* slide-in underline on hover */}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-teal-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA area */}
        <div
          className="animate-fade-up opacity-0 [animation-fill-mode:forwards] hidden items-center gap-3 md:flex"
          style={{ animationDelay: "380ms" }}
        >
          <a
            href={telPrimaryHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <Phone className="size-4 shrink-0 text-teal-400" aria-hidden />
            <span className="hidden lg:inline">{COMPANY.phoneDisplay}</span>
          </a>
          <Button
            asChild
            size="sm"
            className="rounded-lg bg-teal-600 shadow-lg shadow-teal-900/40 transition-all hover:bg-teal-500 hover:shadow-teal-700/50"
          >
            <Link href="/#quote">Request a quote</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex rounded-lg border border-white/15 p-2 text-white transition hover:border-teal-400/40 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-white/10 bg-[#080f1c] transition-all duration-300 md:hidden",
          open ? "max-h-96 py-4" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-3 px-4" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-teal-300"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a href={telPrimaryHref} className="text-sm font-medium text-teal-300">
            Call {COMPANY.phoneDisplay}
          </a>
          <Button asChild className="w-full rounded-lg bg-teal-600 hover:bg-teal-500">
            <Link href="/#quote" onClick={() => setOpen(false)}>
              Request a quote
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
