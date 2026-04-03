# Asset manifest — TCS Digital Solutions web

| Product slug              | Image path                         | Status      | Notes                                      |
| ------------------------- | ---------------------------------- | ----------- | ------------------------------------------ |
| epson-cw-c6000p           | `/images/products/placeholder.svg` | placeholder | Replace with approved Epson ColorWorks art |
| epson-cw-c6500a           | `/images/products/placeholder.svg` | placeholder | Replace with approved Epson ColorWorks art |
| epson-cw-c8000            | `/images/products/placeholder.svg` | placeholder | Replace with approved Epson ColorWorks art |
| afinia-l901-plus          | `/images/products/placeholder.svg` | placeholder | Replace with Afinia-approved photography   |
| afinia-l801-plus          | `/images/products/placeholder.svg` | placeholder | Replace with Afinia-approved photography   |
| afinia-f502-pigment       | `/images/products/placeholder.svg` | placeholder | Replace with Afinia-approved photography   |
| primera-lx910             | `/images/products/placeholder.svg` | placeholder | Replace with Primera-approved photography  |
| primera-lx3000-pigment    | `/images/products/placeholder.svg` | placeholder | Replace with Primera-approved photography  |
| quicklabel-ql-900         | `/images/products/placeholder.svg` | placeholder | Replace with QuickLabel-approved art       |
| quicklabel-ql-120xe       | `/images/products/placeholder.svg` | placeholder | Replace with QuickLabel-approved art       |
| vipcolor-vp-750           | `/images/products/placeholder.svg` | placeholder | Replace with VIPColor-approved photography |
| trojanlabel-t3-opx        | `/images/products/placeholder.svg` | placeholder | Replace with TrojanLabel-approved art      |
| astrojet-aj-1300          | `/images/products/placeholder.svg` | placeholder | Replace with AstroJet-approved photography |
| neuralabel-callisto       | `/images/products/placeholder.svg` | placeholder | Replace with NeuraLabel-approved art       |
| afinia-dlf-220s-dual      | `/images/products/placeholder.svg` | placeholder | Replace with Afinia finisher photography   |

**Hero / marketing**

- `public/images/hero-label-printing.jpg` — optional future asset; homepage currently uses CSS gradient + pattern (no external image dependency).

**Final image workflow**

1. Obtain manufacturer-approved or licensed photography.
2. Export WebP + fallback JPEG at 1200px wide (product cards) and 1920px (hero if used).
3. Update `data/products.ts` `image` fields to `/images/products/{slug}.webp`.
4. Set `imageStatus` to `final` in `data/products.ts`.
5. Add files under `public/images/products/`.
