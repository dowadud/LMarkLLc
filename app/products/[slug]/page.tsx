import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductBySlug, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="bg-[var(--background)] pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal-800 hover:text-teal-950"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to catalog
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:aspect-[4/3]">
            <Image
              src={product.image}
              alt=""
              fill
              unoptimized
              className="object-contain p-8"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
            <span className="sr-only">{product.name}</span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">{product.category}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{product.shortDescription}</p>

            {product.price && (
              <p className="mt-5 text-3xl font-extrabold text-slate-900">{product.price}</p>
            )}

            <div className="mt-8">
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900">Key specifications</h2>
              <dl className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
                {product.specs.map((s) => (
                  <div key={s.label} className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-slate-500">{s.label}</dt>
                    <dd className="text-sm text-slate-900 sm:col-span-2">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-xl">
                <Link href={product.cta.href}>{product.cta.label}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-slate-300">
                <Link href="/products">Compare more systems</Link>
              </Button>
            </div>

            {product.imageStatus === "placeholder" && (
              <p className="mt-6 text-xs text-slate-500">
                Photography shown is a placeholder. See <code className="rounded bg-slate-100 px-1">docs/ASSET_MANIFEST.md</code>{" "}
                for replacement workflow.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
