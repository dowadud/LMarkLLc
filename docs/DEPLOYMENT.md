# Deployment — Vercel + Hostinger DNS

## Vercel

1. Push this repository to GitHub (see root `README.md`).
2. In [Vercel](https://vercel.com), **Add New Project** → import the GitHub repo.
3. Framework preset: **Next.js**. Build command: `npm run build`, output: default (`.next`).
4. Add environment variable:
   - `NEXT_PUBLIC_SITE_URL` = your production URL (e.g. `https://www.yourdomain.com` or the `*.vercel.app` URL until the domain is connected).
5. Deploy. Confirm the production deployment loads `/`, `/products`, and a sample `/products/[slug]`.

## Connect a domain managed in Hostinger to Vercel

Vercel hosts the site; DNS stays at Hostinger.

### 1) Add the domain in Vercel

1. Project → **Settings** → **Domains**.
2. Add `yourdomain.com` and `www.yourdomain.com` (recommended).
3. Vercel shows the DNS records it expects (often **A** for apex and **CNAME** for `www`). Use the exact values from the dashboard—they can differ by project.

### 2) Typical Hostinger DNS records

Vercel may show **A**, **AAAA**, **CNAME**, or **ALIAS/CNAME flattening** depending on apex vs `www` and product updates. **Always copy the exact targets from:** Project → **Settings** → **Domains** → your domain → DNS instructions. Official reference: [Vercel Domains documentation](https://vercel.com/docs/projects/domains).

**Pattern (verify in dashboard):**

**Apex (root domain, e.g. `yourdomain.com`)**

- **Type:** A (and sometimes AAAA)  
- **Name / Host:** `@` (or blank, per Hostinger)  
- **Points to / Value:** the IP(s) Vercel lists for your project  
- **TTL:** 300 or Auto.

**www subdomain**

- **Type:** CNAME  
- **Name / Host:** `www`  
- **Target / Value:** the hostname Vercel lists (often `cname.vercel-dns.com` or a project-specific target)  
- **TTL:** 300 or Auto.

### 3) Remove conflicts

- Remove or disable **other A records** on `@` pointing to old hosting.
- Remove conflicting **CNAME** on `www` (e.g. old parking or builder targets).
- Keep **MX** and other mail records unless you know they must change (do not delete MX unless migrating email).

### 4) Wait for propagation

DNS can take minutes to 48 hours. In Vercel, the domain shows **Valid** when correct.

### 5) HTTPS

Vercel provisions certificates automatically after DNS validates.

## Environment variables

| Variable                 | Required | Description                          |
| ------------------------ | -------- | ------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`   | Optional | Canonical base URL for metadata/SEO  |

No server secrets are required for the static marketing + mailto quote flow in this repo.
