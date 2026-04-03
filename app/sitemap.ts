import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.LMarkLLC.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const root = base.replace(/\/$/, "");
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${root}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${root}/products`, changeFrequency: "weekly", priority: 0.9 },
  ];
  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${root}/products/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticRoutes, ...productRoutes];
}
