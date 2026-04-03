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
  cta: { label: string; href: string };
  featured?: boolean;
};

export const products: Product[] = [
  /* ─────────────────────────────────────────────────────────────
     FEATURED — user-supplied product photography
  ───────────────────────────────────────────────────────────── */
  {
    slug: "astrojet-aj-1300",
    name: "AstroJet AJ-1300",
    category: "Industrial inkjet",
    shortDescription:
      "Full-production inkjet platform with automatic feeder and stacker—designed for high-volume continuous runs where downtime is not an option.",
    specs: [
      { label: "Web width", value: "12.75 in (324 mm) class" },
      { label: "Resolution", value: "Up to 1600 dpi" },
      { label: "Feed / exit", value: "Automatic feeder + stacker configuration" },
      { label: "Markets", value: "Logistics, industrial, contract convertors" },
      { label: "Integration", value: "ERP / WMS print-engine compatible" },
    ],
    image: "/images/products/astrojet-aj-1300.webp",
    imageStatus: "final",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "astrojet-aj-800",
    name: "AstroJet AJ-800",
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
    image: "/images/products/astrojet-aj-800.webp",
    imageStatus: "final",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "afinia-dlp-2100",
    name: "Afinia DLP-2100",
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
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "afinia-dlp-2200",
    name: "Afinia DLP-2200",
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
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "afinia-x350",
    name: "Afinia X350",
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
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "epson-cw-c6500a",
    name: "Epson ColorWorks CW-C6500A",
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
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "quicklabel-ql-435",
    name: "QuickLabel QL-435",
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
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "trojanlabel-t2",
    name: "TrojanLabel T2",
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
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "trojanlabel-t2-l",
    name: "TrojanLabel T2-L",
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
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },

  /* ─────────────────────────────────────────────────────────────
     ADDITIONAL CATALOG
  ───────────────────────────────────────────────────────────── */
  {
    slug: "epson-cw-c6000p",
    name: "Epson ColorWorks CW-C6000P",
    category: "Industrial inkjet",
    shortDescription:
      "Peel-and-present color label engine built for steady mid-volume runs, barcode clarity, and GHS-minded durability when paired with approved media.",
    specs: [
      { label: "Max print width", value: "4.25 in (108 mm)" },
      { label: "Resolution", value: "Up to 1200 dpi class" },
      { label: "Ink technology", value: "PrecisionCore printhead, pigment options" },
      { label: "Connectivity", value: "USB, Ethernet; Wi-Fi on select SKUs" },
      { label: "Typical roles", value: "Cartons, chemical drum secondary, logistics" },
    ],
    image: "/images/products/epson-cw-c6000p.jpg",
    imageStatus: "placeholder",
    cta: { label: "Request a quote", href: "/#quote" },
  },
  {
    slug: "epson-cw-c8000",
    name: "Epson ColorWorks CW-C8000",
    category: "Industrial inkjet",
    shortDescription:
      "High-duty cycle color label production with headroom for demanding shifts—built for teams that cannot afford ribbon changeovers or preprint delays.",
    specs: [
      { label: "Throughput posture", value: "High-volume CMYK pipeline" },
      { label: "Max print width", value: "8 in (203 mm) class" },
      { label: "Ink families", value: "Gloss / matte black strategies for contrast" },
      { label: "Controls", value: "Operator LCD, remote monitoring patterns" },
      { label: "Best for", value: "Food, beverage, chemical, contract manufacturing" },
    ],
    image: "/images/products/epson-cw-c8000.jpg",
    imageStatus: "placeholder",
    cta: { label: "Request a quote", href: "/#quote" },
  },
  {
    slug: "afinia-l901-plus",
    name: "Afinia L901 Plus",
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
    cta: { label: "Request a quote", href: "/#quote" },
  },
  {
    slug: "primera-lx910",
    name: "Primera LX910",
    category: "Desktop color",
    shortDescription:
      "Compact color engine for prototypes, seasonal drops, and private-label pilots—minimal floor space, maximum flexibility for fast-moving SKUs.",
    specs: [
      { label: "Print technology", value: "Inkjet color" },
      { label: "Print width", value: "Up to 8 in (203 mm)" },
      { label: "Resolution", value: "4800 dpi class" },
      { label: "Connectivity", value: "USB and Ethernet" },
      { label: "Ideal teams", value: "R&D, microbreweries, boutique cosmetics" },
    ],
    image: "/images/products/primera-lx910.png",
    imageStatus: "placeholder",
    cta: { label: "Learn more", href: "/products/primera-lx910" },
  },
  {
    slug: "quicklabel-ql-900",
    name: "QuickLabel QL-900",
    category: "Production inkjet",
    shortDescription:
      "Workhorse color inkjet for manufacturers that live in changeovers—swap art, keep registration tight, and feed continuous or fanfold efficiently.",
    specs: [
      { label: "Print width", value: "8.64 in (219 mm) class" },
      { label: "Resolution", value: "Up to 1200 dpi" },
      { label: "Speed posture", value: "Production-oriented throughput" },
      { label: "Inks", value: "Dye or pigment strategies (configuration dependent)" },
      { label: "Fit", value: "Mid-line automation, private label" },
    ],
    image: "/images/products/quicklabel-ql-900.png",
    imageStatus: "placeholder",
    cta: { label: "Request a quote", href: "/#quote" },
  },
  {
    slug: "trojanlabel-t3-opx",
    name: "TrojanLabel T3-OPX",
    category: "Wide-web inkjet",
    shortDescription:
      "Wide-web inkjet for labels that refuse to shrink—perfect when your artwork demands panoramic graphics or multi-panel storytelling.",
    specs: [
      { label: "Print width", value: "12.75 in (324 mm) class" },
      { label: "Resolution", value: "Up to 1600 dpi" },
      { label: "Ink", value: "Aqueous dye / pigment options" },
      { label: "Throughput", value: "Designed for industrial duty cycles" },
      { label: "Best for", value: "Beverage, industrial chemical, wide graphics" },
    ],
    image: "/images/products/trojanlabel-t3-opx.png",
    imageStatus: "placeholder",
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
