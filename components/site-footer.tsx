import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, SITE, telPrimaryHref } from "@/lib/company";

const footerLinks = [
  { href: "/products", label: "Equipment catalog" },
  { href: "/#quote", label: "Request a quote" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#070b12] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">{SITE.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              Authorized color label printer solutions, supplies, and integration support for teams that
              print on demand—not months in advance.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400/90">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-teal-500" aria-hidden />
                <span>
                  {COMPANY.addressLine1}
                  <br />
                  {COMPANY.city}, {COMPANY.region} {COMPANY.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-teal-500" aria-hidden />
                <a href={telPrimaryHref} className="hover:text-white">
                  {COMPANY.phoneDisplay}
                </a>
                <span className="text-slate-600">·</span>
                <a href="tel:+17622086985" className="hover:text-white">
                  {COMPANY.phoneAltDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-teal-500" aria-hidden />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-400/90">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-slate-800 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="text-slate-600">Georgia · Nationwide shipping available</p>
        </div>
      </div>
    </footer>
  );
}
