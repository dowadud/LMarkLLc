import type { Metadata } from "next";
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
import { COMPANY, SITE, telPrimaryHref } from "@/lib/company";
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
      {/* Hero — inspired by enterprise dual-CTA pattern (21st.dev) */}
      <section className="relative overflow-hidden bg-[#0b1220] pb-20 pt-10 sm:pb-28 sm:pt-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-teal-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-[90px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal-200">
              <span className="size-1.5 rounded-full bg-teal-400" />
              {SITE.name}
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Print color labels
              <span className="block text-teal-300">on your timeline—not your vendor&apos;s</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Bring vivid, compliant labels in-house with industrial inkjet, pigment paths, and finishing that track
              your SKU churn—backed by specialists who speak ERP, GHS-minded workflows, and tight registration.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild size="lg" className="rounded-xl shadow-lg shadow-teal-900/40">
                <Link href="/products">
                  Browse equipment
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-white/25 bg-white/5 text-white hover:bg-white/10">
                <Link href="/#quote">Request a quote</Link>
              </Button>
              <a
                href={telPrimaryHref}
                className="text-center text-sm font-medium text-slate-400 hover:text-white sm:ml-2 sm:text-left"
              >
                Call {COMPANY.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up lg:pl-4" style={{ animationDelay: "120ms" }}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl shadow-black/50">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(45,212,191,0.15),transparent_55%)]" />
              <div className="absolute inset-8 flex flex-col justify-end rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">Featured focus</p>
                <p className="mt-2 text-2xl font-bold text-white">Epson · Afinia · QuickLabel · TrojanLabel</p>
                <p className="mt-2 text-sm text-slate-300">
                  Curated catalog of production-ready printers and finishers—specs tuned for real plant conditions.
                </p>
              </div>
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
