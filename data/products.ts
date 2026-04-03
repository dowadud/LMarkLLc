/**
 * L Mark LLC — equipment catalog.
 * The 9 user-supplied hero products lead the list (featured: true).
 * Additional catalog items follow.
 */
export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  specs: { label: string; value: string }[];
  /** Public path under /public */
  image: string;
  imageStatus: "placeholder" | "final";
  /** Display price string, e.g. "$42,995" or "Starting at $3,465" */
  price?: string;
  cta: { label: string; href: string };
  featured?: boolean;
};

export const products: Product[] = [
  /* ─────────────────────────────────────────────────────────────
     FEATURED — user-supplied product photography
  ───────────────────────────────────────────────────────────── */
  {
    slug: "astrojet-aj-1300-expanded",
    name: "AstroJet AJ-1300 Expanded Width Digital Printer",
    category: "Direct-to-corrugated inkjet",
    shortDescription:
      "Base AJ-1300 configuration—1300 mm feed width, up to 27 m/min, 1200 dpi direct-to-corrugated printing with water-based sustainable inks. No labels, no plates.",
    specs: [
      { label: "Max feed width", value: "1300 mm" },
      { label: "Max print width", value: "1066 mm" },
      { label: "Max print height", value: "200 mm" },
      { label: "Max print speed", value: "27 m/min" },
      { label: "Max resolution", value: "1200 dpi" },
      { label: "Ink", value: "Pigmented and dye water-based" },
      { label: "SKU", value: "1003-0001311" },
    ],
    image: "/images/products/astrojet-aj-1300.webp",
    imageStatus: "final",
    price: "$176,200",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "astrojet-aj-1300-stacker",
    name: "AstroJet AJ-1300 Printer | Automatic Feeder | Automatic Stacker",
    category: "Direct-to-corrugated inkjet",
    shortDescription:
      "AJ-1300 with automatic feeder and stacker—built for uninterrupted high-volume corrugated runs where operator intervention needs to be as close to zero as possible.",
    specs: [
      { label: "Max feed width", value: "1300 mm" },
      { label: "Max print width", value: "1066 mm" },
      { label: "Max print speed", value: "27 m/min" },
      { label: "Max resolution", value: "1200 dpi" },
      { label: "Feed / exit", value: "Automatic feeder + automatic stacker" },
      { label: "Ink", value: "Pigmented and dye water-based" },
    ],
    image: "/images/products/astrojet-aj-1300-stacker-official.png",
    imageStatus: "final",
    price: "$249,000",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "astrojet-aj-1300-exit-table",
    name: "AstroJet AJ-1300 Printer Automatic Feeder | Exit Table",
    category: "Direct-to-corrugated inkjet",
    shortDescription:
      "AJ-1300 with automatic feeder and exit table—ideal when downstream finishing handles output or floor layout needs an open-ended delivery.",
    specs: [
      { label: "Max feed width", value: "1300 mm" },
      { label: "Max print width", value: "1066 mm" },
      { label: "Max print speed", value: "27 m/min" },
      { label: "Max resolution", value: "1200 dpi" },
      { label: "Feed / exit", value: "Automatic feeder + exit table" },
      { label: "Ink", value: "Pigmented and dye water-based" },
    ],
    image: "/images/products/astrojet-aj-1300-exit-table.png",
    imageStatus: "final",
    price: "$210,300",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "astrojet-aj-800",
    name: "AstroJet AJ-800 Direct-to-Package Printer",
    category: "Direct-to-package inkjet",
    shortDescription:
      "Direct-to-package color printing that eliminates the label entirely—ideal when speed and sustainability matter more than traditional roll-feed workflows.",
    specs: [
      { label: "Print mode", value: "Direct to package / container surface" },
      { label: "Resolution", value: "High-quality CMYK inkjet" },
      { label: "Target market", value: "Packaging lines, sustainability-driven brands" },
      { label: "Configuration", value: "Inline and standalone options" },
      { label: "Output", value: "Vivid color without label substrate cost" },
    ],
    image: "/images/products/astrojet-aj-800.png",
    imageStatus: "final",
    price: "$60,000",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "afinia-dlp-2100",
    name: "Afinia DLP-2100 High Volume Digital Label Press",
    category: "Digital label press",
    shortDescription:
      "High-volume digital label press engineered for converters and in-plant label rooms that need toner-class durability with short-run flexibility.",
    specs: [
      { label: "Technology", value: "Digital electrophotographic press" },
      { label: "Volume posture", value: "High-volume production shifts" },
      { label: "Color", value: "CMYK + optional specialty channels" },
      { label: "Substrate range", value: "Paper, film, and specialty label stocks" },
      { label: "Best for", value: "Converters, brand owners, co-packers" },
    ],
    image: "/images/products/afinia-dlp-2100.jpg",
    imageStatus: "final",
    price: "$74,995",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "afinia-dlp-2200",
    name: "Afinia DLP-2200 High Volume Digital Label Press",
    category: "Digital label press",
    shortDescription:
      "Next step up from the DLP-2100—wider web and higher throughput for operations where the job queue never stops growing.",
    specs: [
      { label: "Technology", value: "Digital electrophotographic press" },
      { label: "Web width", value: "Wider than DLP-2100 class" },
      { label: "Speed", value: "Production duty cycle" },
      { label: "Finishing", value: "Pairs with digital die-cutting workflow" },
      { label: "Applications", value: "Prime labels, regulated industries, retail" },
    ],
    image: "/images/products/afinia-dlp-2200.jpg",
    imageStatus: "final",
    price: "$85,000",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "afinia-x350",
    name: "Afinia X350 Digital Roll to Roll Press",
    category: "Roll-to-roll press",
    shortDescription:
      "Digital roll-to-roll press that bridges desktop output and industrial scale—high-color fidelity for demanding brand-owner specs.",
    specs: [
      { label: "Configuration", value: "Roll-to-roll digital press" },
      { label: "Print width", value: "Up to 8.5 in (216 mm)" },
      { label: "Ink", value: "CMYK aqueous system" },
      { label: "Resolution", value: "Up to 1600 dpi" },
      { label: "Target", value: "Craft brands, nutraceuticals, specialty foods" },
    ],
    image: "/images/products/afinia-x350.webp",
    imageStatus: "final",
    price: "$80,995",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "epson-cw-c6500a",
    name: "Epson ColorWorks CW-C6500A Color Inkjet Label Printer",
    category: "Industrial inkjet",
    shortDescription:
      "Wide-web industrial color label printer delivering 8-inch print paths for ingredient panels, multilingual labels, and bold retail graphics.",
    specs: [
      { label: "Max print width", value: "8 in (203 mm) class" },
      { label: "Finish options", value: "Gloss / matte model families" },
      { label: "Ink technology", value: "PrecisionCore, pigment options" },
      { label: "Integration", value: "SAP / ERP-friendly drivers" },
      { label: "Ideal volumes", value: "Growing SKU mixes, contract packers" },
    ],
    image: "/images/products/epson-cw-c6500a-official.jpg",
    imageStatus: "final",
    price: "Starting at $3,465",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "quicklabel-ql-435",
    name: "QuickLabel QL-435 Compact A3 Digital Inkjet Label Press",
    category: "Production inkjet",
    shortDescription:
      "Compact A3 digital inkjet label press delivering production speed in a space-efficient footprint—great for varied SKU environments.",
    specs: [
      { label: "Format", value: "A3 inkjet digital press" },
      { label: "Resolution", value: "Up to 1200 dpi" },
      { label: "Speed", value: "Production inkjet class" },
      { label: "Media range", value: "Paper and film label stocks" },
      { label: "Fit", value: "Mid-size manufacturing, private label" },
    ],
    image: "/images/products/quicklabel-ql-435.webp",
    imageStatus: "final",
    price: "$42,995",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "trojanlabel-t2",
    name: "Trojan Label T2 High Volume Digital Label Press",
    category: "High-volume digital press",
    shortDescription:
      "High-volume digital label press known for vivid color and industrial uptime—the T2 is a flagship system for serious label converters.",
    specs: [
      { label: "Technology", value: "High-speed inkjet roll-to-roll" },
      { label: "Print width", value: "8.5 in (216 mm) class" },
      { label: "Resolution", value: "Up to 1600 dpi" },
      { label: "Ink options", value: "Dye / pigment (configuration dependent)" },
      { label: "Applications", value: "Beverage, food, chemical, cosmetic" },
    ],
    image: "/images/products/trojanlabel-t2.jpg",
    imageStatus: "final",
    price: "$67,195",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "trojanlabel-t2-l",
    name: "Trojan T2-L Printer Flexible Laminator Packaging Digital Press",
    category: "Print & laminate press",
    shortDescription:
      "Integrated printing and flexible lamination in one pass—ideal for premium labels that need surface protection without a second machine.",
    specs: [
      { label: "Configuration", value: "Print + flexible laminator inline" },
      { label: "Print width", value: "8.5 in (216 mm) class" },
      { label: "Lamination", value: "Flexible film laminating system" },
      { label: "Applications", value: "Premium labels, wine, cosmetic, outdoor" },
      { label: "Benefit", value: "One-pass print + protection" },
    ],
    image: "/images/products/trojanlabel-t2-l.webp",
    imageStatus: "final",
    price: "$78,395",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },

  /* ─────────────────────────────────────────────────────────────
     ADDITIONAL CATALOG
  ───────────────────────────────────────────────────────────── */
  {
    slug: "afinia-l901-plus",
    name: "Afinia L901 Plus Industrial Inline Color Label Printer",
    category: "Memjet color",
    shortDescription:
      "Memjet-powered speed for shops that need brilliant color now—excellent when batch sizes change daily and artwork revs never stop.",
    specs: [
      { label: "Ink capacity", value: "250 mL tanks (CMYK)" },
      { label: "Speed posture", value: "High IPS class (media dependent)" },
      { label: "Print width", value: "8.5 in (216 mm)" },
      { label: "Resolution", value: "1600 × 1600 dpi class" },
      { label: "Workflow fit", value: "Short runs, versioning, promo packs" },
    ],
    image: "/images/products/afinia-l901-plus.jpg",
    imageStatus: "placeholder",
    price: "$14,250",
    cta: { label: "Request a quote", href: "/#quote" },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 6): Product[] {
  const featured = products.filter((p) => p.featured);
  return featured.slice(0, limit);
}
