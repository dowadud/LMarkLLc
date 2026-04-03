/**
 * Download product images for L Mark LLC catalog.
 * Requires: node >= 18, playwright (auto-installed via npx)
 *
 * Run from Terminal.app (not inside Cursor):
 *   cd ~/Desktop/tcs-digitalsolutions-web
 *   npx playwright install chromium --with-deps
 *   node scripts/download-product-images.mjs
 *
 * Images are saved to public/images/products/{slug}.jpg
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import { fileURLToPath } from "url";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/images/products");
fs.mkdirSync(OUT, { recursive: true });

// Products: [slug, searchName, preferredUrl]
const PRODUCTS = [
  ["epson-cw-c6000p",     "Epson ColorWorks CW-C6000P",       "https://epson.com/Epson-ColorWorks-CW-C6000P/p/C11CJ22201"],
  ["epson-cw-c6500a",     "Epson ColorWorks CW-C6500A",       "https://epson.com/Epson-ColorWorks-C6500/p/C11CH77201"],
  ["epson-cw-c8000",      "Epson ColorWorks CW-C8000",        "https://epson.com/Epson-ColorWorks-C8000/p/C11CJ22401"],
  ["afinia-l901-plus",    "Afinia L901 Plus label printer",   "https://afinia.com/label-printers/l901-plus/"],
  ["afinia-l801-plus",    "Afinia L801 Plus label printer",   "https://afinia.com/label-printers/l801-plus/"],
  ["afinia-f502-pigment", "Afinia F502 pigment label printer","https://afinia.com/label-printers/f502/"],
  ["primera-lx910",       "Primera LX910 label printer",      "https://www.primera.com/label-printer-lx910.html"],
  ["primera-lx3000-pigment","Primera LX3000 label printer",   "https://www.primera.com/label-printer-lx3000.html"],
  ["quicklabel-ql-900",   "QuickLabel QL-900 label printer",  "https://www.quicklabel.com/printers/ql-900"],
  ["quicklabel-ql-120xe", "QuickLabel QL-120Xe label printer","https://www.quicklabel.com/printers/ql-120xe"],
  ["vipcolor-vp-750",     "VIPColor VP750 label printer",     "https://www.vipcolor.com/vp750"],
  ["trojanlabel-t3-opx",  "TrojanLabel T3-OPX label printer", "https://tcsdigitalsolutions.com/trojan-t3-opx/"],
  ["astrojet-aj-1300",    "AstroJet AJ-1300 label printer",   "https://tcsdigitalsolutions.com/aj-1300/"],
  ["neuralabel-callisto", "NeuraLabel Callisto label printer", "https://tcsdigitalsolutions.com/neuralabel-callisto-printer/"],
  ["afinia-dlf-220s-dual","Afinia DLF-220S finisher",         "https://afinia.com/finishers/dlf-220s-dual/"],
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith("https") ? https : http;
    const req = proto.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    });
    req.on("error", reject);
  });
}

async function getProductImage(browser, slug, name, url) {
  const outFile = path.join(OUT, `${slug}.jpg`);
  if (fs.existsSync(outFile)) {
    console.log(`  ✓ [skip] ${slug}.jpg already exists`);
    return true;
  }

  const page = await browser.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
    await page.waitForTimeout(2000);

    // Find the largest product image on the page
    const imageUrl = await page.evaluate(() => {
      const candidates = [];
      document.querySelectorAll("img").forEach((img) => {
        const src = img.currentSrc || img.src;
        if (!src || src.startsWith("data:") || src.includes("logo") || src.includes("icon") || src.includes("badge")) return;
        const rect = img.getBoundingClientRect();
        const area = rect.width * rect.height;
        if (area > 5000) candidates.push({ src, area });
      });
      candidates.sort((a, b) => b.area - a.area);
      return candidates[0]?.src ?? null;
    });

    if (!imageUrl) throw new Error("No suitable image found");
    const absUrl = imageUrl.startsWith("http") ? imageUrl : new URL(imageUrl, url).href;
    console.log(`  → ${slug}: ${absUrl.substring(0, 80)}`);
    await download(absUrl, outFile);
    console.log(`  ✓ saved ${slug}.jpg`);
    return true;
  } catch (e) {
    // Fallback: screenshot the product area
    console.log(`  ⚠ image extract failed (${e.message}), taking page screenshot…`);
    try {
      const screenshotPath = path.join(OUT, `${slug}.png`);
      await page.screenshot({ path: screenshotPath, clip: { x: 0, y: 0, width: 800, height: 600 } });
      console.log(`  ✓ screenshot saved ${slug}.png`);
      return true;
    } catch (e2) {
      console.log(`  ✗ ${slug} failed completely: ${e2.message}`);
      return false;
    }
  } finally {
    await page.close();
  }
}

(async () => {
  console.log(`\nDownloading product images → ${OUT}\n`);
  // Use arm64 binary if x64 path is missing (Apple Silicon Macs)
  const arm64Path = "/Users/nadhirwadud/Library/Caches/ms-playwright/chromium-1217/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";
  const launchOpts = { headless: false };
  if (!process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH && require("fs").existsSync(arm64Path)) {
    launchOpts.executablePath = arm64Path;
  }
  const browser = await chromium.launch(launchOpts);
  let ok = 0;
  for (const [slug, name, url] of PRODUCTS) {
    process.stdout.write(`[${slug}] `);
    const success = await getProductImage(browser, slug, name, url);
    if (success) ok++;
  }
  await browser.close();
  console.log(`\nDone: ${ok}/${PRODUCTS.length} images saved to ${OUT}`);
  console.log("Now run: ./scripts/push-to-github.sh");
})();
