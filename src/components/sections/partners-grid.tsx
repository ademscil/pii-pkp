"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Filter } from "lucide-react";
import { partners } from "@/data/site-content";

const categories = ["Semua Mitra", "Pemerintah & BUMN", "Industri Strategis", "Perguruan Tinggi"];

export function PartnersGrid() {
  const [selectedCat, setSelectedCat] = useState("Semua Mitra");

  const filteredPartners = partners.filter((p) => {
    if (selectedCat === "Semua Mitra") return true;
    if (selectedCat === "Pemerintah & BUMN") {
      return (
        p.name.includes("Timah") ||
        p.name.includes("Pelindo") ||
        p.name.includes("Pindad") ||
        p.name.includes("KTA")
      );
    }
    if (selectedCat === "Industri Strategis") {
      return (
        p.name.includes("Konstruksi") ||
        p.name.includes("Tripatra") ||
        p.name.includes("Cirebon") ||
        p.name.includes("Corridor") ||
        p.name.includes("Nginovasi") ||
        p.name.includes("DQC")
      );
    }
    if (selectedCat === "Perguruan Tinggi") {
      return (
        p.name.includes("Universitas") ||
        p.name.includes("Polman") ||
        p.name.includes("Bangka Belitung")
      );
    }
    return true;
  });

  return (
    <section
      id="mitra"
      className="bg-slate-50 py-24 border-b border-slate-200"
      aria-labelledby="mitra-heading"
    >
      <div className="container space-y-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-brand-navy/20 bg-brand-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy">
              <Building2 className="h-3.5 w-3.5 text-brand-navy" />
              Sinergi Quadruple Helix
            </div>
            <h2
              id="mitra-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Jejaring Mitra & Kolaborasi Industri
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            Kolaborasi erat bersama badan usaha milik negara, pemerintah daerah, asosiasi industri,
            dan perguruan tinggi teknik untuk mengawal kemajuan rekayasa Bangka Belitung.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter kategori mitra">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mr-2">
            <Filter className="h-3.5 w-3.5" />
            <span>Sektor:</span>
          </div>
          {categories.map((cat) => {
            const isSelected = cat === selectedCat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-brand-navy text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid Logos with fixed aspect ratio to prevent CLS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPartners.map((partner) => {
            const isCover =
              partner.name.includes("Konstruksi") ||
              partner.name.includes("Pelindo") ||
              partner.name.includes("Tripatra") ||
              partner.name.includes("Cirebon") ||
              partner.name.includes("Green") ||
              partner.name.includes("Nginovasi") ||
              partner.name.includes("DQC") ||
              partner.name.includes("Polman");

            return (
              <Link
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-md"
                aria-label={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={240}
                  height={120}
                  sizes="(max-width: 1024px) 160px, 220px"
                  style={{ aspectRatio: "2 / 1" }}
                  className={
                    isCover
                      ? "h-full w-full object-cover transition group-hover:scale-105"
                      : "h-20 w-44 object-contain transition group-hover:scale-110"
                  }
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
