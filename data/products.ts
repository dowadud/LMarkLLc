/**
 * Curated equipment catalog (15 items). Names align with manufacturer model lines;
 * descriptions and positioning copy are original for this site.
 */
export type Product = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  specs: { label: string; value: string }[];
  /** Public path under /public — use placeholder until final photography is approved */
  image: string;
  imageStatus: "placeholder" | "final";
  cta: { label: string; href: string };
  featured?: boolean;
};

export const products: Product[] = [
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
      { label: "Connectivity", value: "USB, Ethernet; Wi‑Fi on select SKUs" },
      { label: "Typical roles", value: "Cartons, chemical drum secondary, logistics" },
    ],
    image: "/images/products/epson-cw-c6000p.jpg",
    imageStatus: "placeholder",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
  },
  {
    slug: "epson-cw-c6500a",
    name: "Epson ColorWorks CW-C6500A",
    category: "Industrial inkjet",
    shortDescription:
      "Wider web color printing for labels that need extra real estate—ingredient blocks, multilingual panels, and bold brand marks without sending art out.",
    specs: [
      { label: "Max print width", value: "8 in (203 mm) class" },
      { label: "Finish options", value: "Matte / gloss media families" },
      { label: "Durability focus", value: "Smudge and water resistance with matched supplies" },
      { label: "Integration", value: "SAP/ERP-friendly drivers and spooling" },
      { label: "Ideal volumes", value: "Growing SKU mixes, contract packers" },
    ],
    image: "/images/products/epson-cw-c6500a.jpg",
    imageStatus: "placeholder",
    cta: { label: "Request a quote", href: "/#quote" },
    featured: true,
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
    featured: true,
  },
  {
    slug: "afinia-l901-plus",
    name: "Afinia L901 Plus",
    category: "Memjet color",
    shortDescription:
      "Memjet-powered speed for shops that need brilliant color now—not next week. Excellent when batch sizes change daily and artwork revs never stop.",
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
    featured: true,
  },
  {
    slug: "afinia-l801-plus",
    name: "Afinia L801 Plus",
    category: "Memjet color",
    shortDescription:
      "Balanced throughput for brands moving off outsourced flexo—keeps color consistent while you right-size inventory and tighten lead times.",
    specs: [
      { label: "Print width", value: "8.5 in (216 mm)" },
      { label: "Ink system", value: "Separate high-capacity tanks" },
      { label: "Resolution", value: "1600 × 800 / 1600 × 1600 dpi modes" },
      { label: "Footprint", value: "Bench / worktable friendly" },
      { label: "Sweet spot", value: "Craft brands, nutraceuticals, specialty foods" },
    ],
    image: "/images/products/afinia-l801-plus.jpg",
    imageStatus: "placeholder",
    cta: { label: "Learn more", href: "/products/afinia-l801-plus" },
  },
  {
    slug: "afinia-f502-pigment",
    name: "Afinia F502 (Pigment)",
    category: "Toner-class durability",
    shortDescription:
      "Pigment route for UV and moisture exposure—think bath & body, outdoor goods, and any line where dye inks are a risk.",
    specs: [
      { label: "Ink type", value: "Pigment CMYK" },
      { label: "Print width", value: "8.5 in (216 mm)" },
      { label: "Resolution", value: "Up to 1600 dpi" },
      { label: "Media", value: "Matched synthetic and paper stocks" },
      { label: "Ideal use", value: "Durability-first prime labels" },
    ],
    image: "/images/products/afinia-f502-pigment.jpg",
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
    slug: "primera-lx3000-pigment",
    name: "Primera LX3000 (Pigment)",
    category: "Desktop color",
    shortDescription:
      "Pigment tanks for longer outdoor and chemical-adjacent jobs while staying in a desktop envelope—great bridge between office and plant floor.",
    specs: [
      { label: "Ink", value: "Pigment CMYK tanks" },
      { label: "Print width", value: "8 in (203 mm)" },
      { label: "Durability", value: "Water- and UV-resistant with approved media" },
      { label: "Software", value: "BarTender and NiceLabel friendly" },
      { label: "Roles", value: "Compliance-minded small batches" },
    ],
    image: "/images/products/primera-lx3000-pigment.png",
    imageStatus: "placeholder",
    cta: { label: "Request a quote", href: "/#quote" },
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
    featured: true,
  },
  {
    slug: "quicklabel-ql-120xe",
    name: "QuickLabel QL-120Xe",
    category: "Production inkjet",
    shortDescription:
      "Narrow-web agility for table-top workflows that still demand industrial reliability—ideal when you need color but not a full wide system.",
    specs: [
      { label: "Print width", value: "4.16 in (106 mm) class" },
      { label: "Resolution", value: "Up to 1200 × 1200 dpi" },
      { label: "Footprint", value: "Compact for cell-based lines" },
      { label: "Consumables", value: "CMYK cartridge systems" },
      { label: "Ideal for", value: "Samples, pilot lines, clinical-style labeling" },
    ],
    image: "/images/products/quicklabel-ql-120xe.png",
    imageStatus: "placeholder",
    cta: { label: "Learn more", href: "/products/quicklabel-ql-120xe" },
  },
  {
    slug: "vipcolor-vp-750",
    name: "VIPColor VP-750",
    category: "Roll-to-roll color",
    shortDescription:
      "VIPColor roll systems emphasize approachable operation with vivid retail-ready output—strong when packaging refreshes outpace your vendor queue.",
    specs: [
      { label: "Print width", value: "8.5 in (216 mm) class" },
      { label: "Resolution", value: "Up to 1600 dpi" },
      { label: "Speed", value: "High IPS class (media dependent)" },
      { label: "Ink", value: "Aqueous dye / pigment paths (SKU dependent)" },
      { label: "Teams", value: "Retail brands, co-packers, 3PL value-add" },
    ],
    image: "/images/products/vipcolor-vp-750.jpg",
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
    featured: true,
  },
  {
    slug: "astrojet-aj-1300",
    name: "AstroJet AJ-1300",
    category: "Industrial inkjet",
    shortDescription:
      "High-speed inkjet line for operations that measure output in linear feet—pair with finishing for a complete in-house label cell.",
    specs: [
      { label: "Web width", value: "12.75 in (324 mm) class" },
      { label: "Resolution", value: "Up to 1600 dpi" },
      { label: "Positioning", value: "Production floor, integrated workflows" },
      { label: "Markets", value: "Logistics, industrial, contract convertors" },
      { label: "Notes", value: "Media and RIP choices affect final certification paths" },
    ],
    image: "/images/products/astrojet-aj-1300.png",
    imageStatus: "placeholder",
    cta: { label: "Learn more", href: "/products/astrojet-aj-1300" },
  },
  {
    slug: "neuralabel-callisto",
    name: "NeuraLabel Callisto",
    category: "High-contrast industrial",
    shortDescription:
      "Toner-class durability for harsh scanning environments—when barcodes must read through dust, glare, and warehouse handling stress.",
    specs: [
      { label: "Technology", value: "LED electrophotographic (toner)" },
      { label: "Durability", value: "High smear/scuff resistance on matched stocks" },
      { label: "Color posture", value: "Spot and process strategies (configuration dependent)" },
      { label: "Ideal tasks", value: "GHS-minded drum labels, rack labels, asset tags" },
      { label: "Integration", value: "Windows driver ecosystem" },
    ],
    image: "/images/products/neuralabel-callisto.png",
    imageStatus: "placeholder",
    cta: { label: "Request a quote", href: "/#quote" },
  },
  {
    slug: "afinia-dlf-220s-dual",
    name: "Afinia DLF-220S Dual Plotter Cutter",
    category: "Digital finishing",
    shortDescription:
      "Plot, cut, and finish short runs without hard tooling—pairs with inkjet printers to close the loop from PDF to stacked, ready-to-apply labels.",
    specs: [
      { label: "Max media width", value: "7.87 in (200 mm)" },
      { label: "Function", value: "Digital die cutting / finishing" },
      { label: "Configuration", value: "Dual plotter option for complex paths" },
      { label: "Pairing", value: "Afinia and other roll-fed color engines" },
      { label: "Outcome", value: "Reduced die lead time, faster prototyping" },
    ],
    image: "/images/products/afinia-dlf-220s-dual.jpg",
    imageStatus: "placeholder",
    cta: { label: "Learn more", href: "/products/afinia-dlf-220s-dual" },
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(limit = 6): Product[] {
  const featured = products.filter((p) => p.featured);
  return featured.slice(0, limit);
}
