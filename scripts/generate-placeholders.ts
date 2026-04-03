/**
 * Run once to regenerate public/images/products/*.svg for each product.
 * Usage: npx tsx scripts/generate-placeholders.ts
 */
import fs from "fs";
import path from "path";
import { products } from "../data/products";

const OUT = path.resolve(__dirname, "../public/images/products");
fs.mkdirSync(OUT, { recursive: true });

const COLORS: Record<string, { bg: string; accent: string; icon: string }> = {
  "Industrial inkjet": { bg: "#0f2744", accent: "#0ea5e9", icon: "🖨" },
  "Memjet color":      { bg: "#14142b", accent: "#a78bfa", icon: "🎨" },
  "Toner-class durability": { bg: "#1a2e05", accent: "#84cc16", icon: "🛡" },
  "Desktop color":     { bg: "#1c1404", accent: "#f59e0b", icon: "🖥" },
  "Production inkjet": { bg: "#0f1f2e", accent: "#38bdf8", icon: "⚡" },
  "Roll-to-roll color":{ bg: "#1e0a2e", accent: "#c084fc", icon: "🎞" },
  "Wide-web inkjet":   { bg: "#0c2030", accent: "#22d3ee", icon: "📐" },
  "High-contrast industrial": { bg: "#1a0a00", accent: "#fb923c", icon: "📦" },
  "Digital finishing": { bg: "#0a1a10", accent: "#4ade80", icon: "✂" },
};

function makeSVG(name: string, category: string): string {
  const c = COLORS[category] ?? { bg: "#12202e", accent: "#14b8a6", icon: "🖨" };
  const brandLine = name.split(" ").slice(0, 2).join(" ");
  const modelLine = name.split(" ").slice(2).join(" ") || "";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" role="img" aria-label="${name}">
  <rect width="800" height="600" fill="${c.bg}"/>
  <rect x="0" y="0" width="800" height="4" fill="${c.accent}" opacity="0.9"/>
  <rect x="0" y="596" width="800" height="4" fill="${c.accent}" opacity="0.4"/>
  <text x="400" y="220" text-anchor="middle" fill="${c.accent}" font-family="system-ui,sans-serif" font-size="80" opacity="0.25">${c.icon}</text>
  <rect x="100" y="260" width="600" height="2" fill="${c.accent}" opacity="0.2"/>
  <text x="400" y="320" text-anchor="middle" fill="#ffffff" font-family="system-ui,sans-serif" font-size="34" font-weight="700">${brandLine}</text>
  ${modelLine ? `<text x="400" y="360" text-anchor="middle" fill="${c.accent}" font-family="system-ui,sans-serif" font-size="26" font-weight="600">${modelLine}</text>` : ""}
  <text x="400" y="410" text-anchor="middle" fill="#94a3b8" font-family="system-ui,sans-serif" font-size="16" font-weight="500" letter-spacing="3">${category.toUpperCase()}</text>
  <text x="400" y="520" text-anchor="middle" fill="#475569" font-family="system-ui,sans-serif" font-size="13">Image pending — replace in public/images/products/</text>
</svg>`;
}

for (const p of products) {
  const svg = makeSVG(p.name, p.category);
  const file = path.join(OUT, `${p.slug}.svg`);
  fs.writeFileSync(file, svg, "utf8");
  console.log(`  ✓  ${p.slug}.svg`);
}
console.log(`\n${products.length} SVGs written to ${OUT}`);
