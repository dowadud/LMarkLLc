import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Cpu,
  Layers3,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { QuoteSection } from "@/components/quote-section";
import { Button } from "@/components/ui/button";
import { COMPANY, telPrimaryHref } from "@/lib/company";
import { getFeaturedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Color label printers & on-demand production",
  description:
    "Industrial color label systems, inks, and finishing—built for teams that need compliant, vivid labels without excess inventory.",
  alternates: { canonical: "/" },
};

const categories = [
  {
    title: "Industrial inkjet",
    desc: "Epson ColorWorks-class engines for durable prime labels, cartons, and logistics.",
    icon: Cpu,
  },
  {
    title: "High-speed color",
    desc: "Memjet and production inkjet lines when artwork changes faster than lead times.",
    icon: Sparkles,
  },
  {
    title: "Finishing & cutting",
    desc: "Digital die cutting to retire hard tooling for short runs and endless SKUs.",
    icon: Layers3,
  },
  {
    title: "Supplies & media",
    desc: "Matched stocks and inks so color, adhesion, and scan rates stay predictable.",
    icon: Boxes,
  },
];

const why = [
  {
    title: "Right-sized systems",
    body: "We map duty cycle, media, and software to hardware—no oversize printers eating floor space.",
    icon: BadgeCheck,
  },
  {
    title: "Integration fluency",
    body: "Drivers, spoolers, and labeling suites (BarTender, NiceLabel, and more) are part of the conversation from day one.",
    icon: Cpu,
  },
  {
    title: "Operational resilience",
    body: "Pigment vs dye, GHS-adjacent workflows, and outdoor durability—addressed before you sign a PO.",
    icon: ShieldCheck,
  },
  {
    title: "Logistics that keep pace",
    body: "Fast fulfillment on consumables and hardware options that align with how your plant actually runs.",
    icon: Truck,
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts(11);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#080f1c] pb-24 pt-28 sm:pb-32 sm:pt-32">
        {/* dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* ambient orbs */}
        <div className="animate-glow pointer-events-none absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-teal-500/20 blur-[120px]" />
        <div className="animate-glow pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" style={{ animationDelay: "2s" }} />
        <div className="animate-glow pointer-events-none absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full bg-teal-600/10 blur-[80px]" style={{ animationDelay: "1s" }} />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          {/* Left — copy */}
          <div>
            {/* badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 overflow-hidden rounded-full border border-teal-400/25 bg-teal-400/8 px-4 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-teal-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-200">
                Industrial Label Systems · Albemarle, NC
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
              Professional printing,
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
                priced to perform.
              </span>
            </h1>

            <p className="animate-fade-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              Industrial inkjet, digital label presses, and direct-to-package systems—fully spec&apos;d, fairly priced, and
              shipped from Albemarle, NC.
            </p>

            <div className="animate-fade-up delay-300 mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg" className="rounded-xl bg-teal-600 text-white shadow-xl shadow-teal-900/50 hover:bg-teal-500">
                <Link href="/products">
                  Browse equipment
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10">
                <Link href="/#quote">Get a quote</Link>
              </Button>
              <a
                href={telPrimaryHref}
                className="text-center text-sm font-medium text-slate-400 transition hover:text-teal-300 sm:ml-1 sm:text-left"
              >
                Call {COMPANY.phoneDisplay}
              </a>
            </div>

            {/* stat chips */}
            <div className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-4">
              {[
                { val: "12+", label: "Printer models" },
                { val: "$3,465", label: "Starting price" },
                { val: "$249K", label: "Pro configurations" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <p className="text-xl font-extrabold text-white">{s.val}</p>
                  <p className="text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — product image showcase */}
          <div className="animate-slide-right delay-200 relative flex justify-center lg:justify-end">
            {/* glow ring */}
            <div className="absolute inset-8 rounded-3xl bg-teal-500/15 blur-3xl" />

            {/* main card */}
            <div className="animate-float relative w-full max-w-md rounded-3xl bg-white p-5 shadow-2xl shadow-black/40">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-50">
                <Image
                  src="/images/products/astrojet-aj-1300-stacker-official.png"
                  alt="AstroJet AJ-1300 | Automatic Feeder | Automatic Stacker"
                  fill
                  unoptimized
                  priority
                  sizes="(max-width:1024px) 90vw, 44vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="mt-4 flex items-end justify-between px-1">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-teal-600">AstroJet</p>
                  <p className="mt-0.5 text-base font-bold text-slate-900">AJ-1300 | Feeder + Stacker</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wide">List price</p>
                  <p className="text-2xl font-extrabold text-slate-900">$249,000</p>
                </div>
              </div>
            </div>

            {/* floating stat — bottom left */}
            <div className="animate-fade-up delay-500 absolute -bottom-4 -left-2 sm:-left-8 rounded-2xl border border-teal-400/20 bg-[#0b1a2f] px-4 py-3 shadow-xl backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-400">Also available</p>
              <p className="mt-1 text-sm font-bold text-white">AJ-800 · AJ-1300 Exit Table</p>
              <p className="text-xs text-slate-400">Starting at $60,000</p>
            </div>

            {/* floating stat — top right */}
            <div className="animate-fade-up delay-600 absolute -right-2 -top-4 sm:-right-6 rounded-2xl border border-white/10 bg-[#0b1a2f] px-4 py-3 shadow-xl backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-400">Free shipping</p>
              <p className="mt-0.5 text-sm font-bold text-white">Orders over $199</p>
            </div>
          </div>
        </div>
      </section>


      {/* Featured products */}
      <section className="bg-[var(--background)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">Top equipment</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Printers teams spec first
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Nine flagship systems spanning industrial inkjet, digital label presses, and roll-to-roll—each
                with structured specs to speed technical review.
              </p>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-xl border-slate-300">
              <Link href="/products">View full catalog</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">Categories</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Solutions by workflow</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Start from what you manufacture—we narrow hardware, inks, and finishing to match compliance, durability,
            and line speed.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition hover:border-teal-200 hover:shadow-md"
              >
                <c.icon className="size-9 text-teal-600" aria-hidden />
                <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why-us" className="scroll-mt-24 bg-[var(--background)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">Why teams choose us</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Built for production reality</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {why.map((w) => (
              <div key={w.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <w.icon className="size-6" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />
    </div>
  );
}
