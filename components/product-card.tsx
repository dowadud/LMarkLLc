import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";

type Props = { product: Product; priority?: boolean };

export function ProductCard({ product, priority }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={product.image}
          alt=""
          fill
          unoptimized
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-contain p-6 transition group-hover:scale-[1.02]"
          priority={priority}
        />
        <span className="sr-only">{product.name}</span>
      </Link>
      <div className="flex flex-1 flex-col p-5 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{product.category}</p>
        <h3 className="mt-1 text-lg font-bold tracking-tight text-slate-900">
          <Link href={`/products/${product.slug}`} className="hover:text-teal-800">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">{product.shortDescription}</p>
        {product.price && (
          <p className="mt-3 text-xl font-bold text-slate-900">
            {product.price}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href={product.cta.href}
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:text-teal-900"
          >
            {product.cta.label}
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-medium text-slate-500 hover:text-slate-800"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
