import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Equipment catalog",
  description: "Fifteen curated color label printers and finishing systems with structured specifications.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <div className="bg-[var(--background)] pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">Catalog</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Equipment & systems</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Spec summaries are starting points for scoping—final throughput, ink chemistry, and certification paths depend
          on your media, artwork, and facility requirements.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 6} />
          ))}
        </div>
      </div>
    </div>
  );
}
