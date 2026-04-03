# L Mark LLC — marketing site

Polished, conversion-focused Next.js site showcasing **15 curated label printers and finishing systems**, with original copy, structured product data, and placeholder imagery until manufacturer-approved assets arrive.

## Stack

- **Next.js** 15 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** v4
- **Radix Slot** + **class-variance-authority** + **lucide-react** (UI primitives aligned with shadcn-style patterns)
- **Deployment:** Vercel (see [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md))

## Local development

```bash
cd tcs-digitalsolutions-web
npm install
cp .env.example .env.local   # optional: set NEXT_PUBLIC_SITE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description      |
| -------------- | ---------------- |
| `npm run dev`  | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint`  | ESLint |

## Project structure

- `app/` — routes (`/`, `/products`, `/products/[slug]`)
- `components/` — layout, product cards, quote section, `ui/button`
- `data/products.ts` — structured catalog (15 items) + `imageStatus`
- `docs/ASSET_MANIFEST.md` — image replacement tracker
- `docs/DEPLOYMENT.md` — Vercel + Hostinger DNS steps
- `public/images/products/` — product imagery (currently placeholder SVG)

## Push to GitHub (use Git — not the website uploader)

If GitHub says **“file too big”** or **“try under 100 files”**, you are probably using **Repository → Add file → Upload files** in the browser. That flow is only for tiny uploads; it is **not** how you publish a Next.js app.

Do this instead:

1. Open **Terminal.app** on your Mac (recommended; Cursor’s terminal may block `git init` on some setups).
2. Run:

   ```bash
   cd /path/to/tcs-digitalsolutions-web
   ./scripts/push-to-github.sh
   ```

   Or set the remote yourself and `git push -u origin main`.

`node_modules/` and `.next/` are **gitignored** and are **not** pushed (hundreds of MB stay on your machine; CI/Vercel runs `npm install`).

## Deployment

1. Push to GitHub with **git push** (see above).
2. Import the repo in Vercel (Next.js defaults).
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
4. Follow **Hostinger DNS** instructions in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Skills system alignment

Build decisions follow the owner playbook in `skills_system.md`: **21st.dev** inspiration for hero/CTA structure, **Vercel** for deployment, structured data pipeline via `data/products.ts` and `docs/ASSET_MANIFEST.md`, and premium, intentional UI hierarchy.

## License

Private / all rights reserved — confirm with the business owner before open-sourcing.
