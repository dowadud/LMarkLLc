"use client";

import { useMemo, useState } from "react";
import { COMPANY } from "@/lib/company";
import { Button } from "@/components/ui/button";

export function QuoteSection() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [equipment, setEquipment] = useState("");
  const [notes, setNotes] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Equipment quote request");
    const body = encodeURIComponent(
      [
        `Name: ${name || "—"}`,
        `Company: ${company || "—"}`,
        `Equipment interest: ${equipment || "—"}`,
        "",
        notes || "Additional details:",
      ].join("\n"),
    );
    return `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
  }, [company, name, equipment, notes]);

  return (
    <section id="quote" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">Quote</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tell us what you print—we&apos;ll match the system
            </h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Share your media, widths, durability needs, and software environment. Our team routes you to the
              right printer, inks, and finishing path—without a one-size-fits-all SKU push.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                Media samples and certification goals (food contact, GHS-adjacent, outdoor)
              </li>
              <li className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                ERP, WMS, or art pipeline constraints (BarTender, NiceLabel, custom)
              </li>
              <li className="flex gap-2">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
                Target daily footage or labels-per-shift for right-sized hardware
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-inner sm:p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="q-name" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Name
                </label>
                <input
                  id="q-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-teal-600/30 focus:ring-2"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="q-co" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Company
                </label>
                <input
                  id="q-co"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-teal-600/30 focus:ring-2"
                  autoComplete="organization"
                />
              </div>
              <div>
                <label htmlFor="q-eq" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Equipment or application
                </label>
                <input
                  id="q-eq"
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                  placeholder="e.g. 8″ color + GHS drum secondary"
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-teal-600/30 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="q-notes" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Notes
                </label>
                <textarea
                  id="q-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-teal-600/30 focus:ring-2"
                />
              </div>
              <Button asChild size="lg" className="w-full rounded-xl sm:w-auto">
                <a href={mailto}>Email quote request</a>
              </Button>
              <p className="text-xs text-slate-500">
                Opens your email client with a pre-filled message to {COMPANY.email}. Prefer phone? Call{" "}
                <a className="font-medium text-teal-800 hover:underline" href="tel:+17044866258">
                  {COMPANY.phoneDisplay}
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
