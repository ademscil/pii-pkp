"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Filter,
} from "lucide-react";
import { agenda } from "@/data/site-content";

const categories = ["Semua", "Sidang Profesi", "Pelatihan", "Musyawarah", "Webinar"];

export function AgendaSlider() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredAgenda =
    selectedCategory === "Semua"
      ? agenda
      : agenda.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="agenda"
      className="relative bg-slate-50 py-24 border-b border-slate-200"
      aria-labelledby="agenda-heading"
    >
      <div className="container space-y-10">
        {/* Header (Clean, no kicker above heading) */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-8">
          <div>
            <h2
              id="agenda-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Agenda Resmi & Sidang Profesi
            </h2>
            <p className="mt-2 text-base font-semibold text-brand-navy">
              Sidang majelis penilai, lokakarya SKPK, dan musyawarah cabang keinsinyuran.
            </p>
          </div>
          <div className="max-w-md text-sm text-slate-600 space-y-2">
            <p>
              Seluruh agenda seminar dan pelatihan PII terakreditasi dengan perolehan Satuan Kredit
              Pengembangan Keprofesian (SKPK) resmi untuk pemenuhan sertifikasi.
            </p>
            <Link
              href="https://www.instagram.com/pii_pangkalpinang/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-brand-blue hover:text-brand-navy"
            >
              <span>Update Harian via Instagram Resmi</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter kategori agenda">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mr-2">
            <Filter className="h-3.5 w-3.5" />
            <span>Kategori:</span>
          </div>
          {categories.map((cat) => {
            const isSelected = cat === selectedCategory;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
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

        {/* Agenda Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAgenda.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="rounded-md bg-brand-navy/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {item.category}
                  </span>
                  <span className="rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-slate-800 backdrop-blur-sm">
                    {item.mode}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <Calendar className="h-3.5 w-3.5 text-brand-blue" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <MapPin className="h-3.5 w-3.5 text-slate-500 mt-0.5 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    <Award className="h-3.5 w-3.5" />
                    <span>SKPK Terakreditasi</span>
                  </div>

                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-navy"
                  >
                    <span>RSVP / Info</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
