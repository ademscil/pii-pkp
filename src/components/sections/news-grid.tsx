"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Eye, Filter } from "lucide-react";
import { news } from "@/data/site-content";

const categories = ["Semua", "Kajian Strategis", "Sertifikasi", "Ekosistem Industri", "Organisasi"];

export function NewsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredNews =
    selectedCategory === "Semua"
      ? news
      : news.filter((item) => item.category === selectedCategory);

  const isAll = selectedCategory === "Semua";
  const featured = filteredNews[0] || news[0];
  const sideArticles = isAll
    ? filteredNews.slice(1)
    : filteredNews.length > 1
      ? filteredNews.slice(1)
      : news.filter((item) => item.id !== featured.id).slice(0, 3);

  return (
    <section
      id="berita"
      className="relative bg-white py-24 border-b border-slate-200"
      aria-labelledby="berita-heading"
    >
      <div className="container space-y-10">
        {/* Header (Clean, no kicker above heading) */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-8">
          <div>
            <h2
              id="berita-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Kabar Keteknikan Bangka Belitung
            </h2>
            <p className="mt-2 text-base font-semibold text-brand-navy">
              Warta resmi, kajian lapangan, dan opini kepakaran insinyur daerah.
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            Publikasi resmi hasil survei teknis, opini insinyur cabang, regulasi praktik profesi,
            dan dinamika ekosistem hilirisasi di Kepulauan Bangka Belitung.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter kategori berita">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-600 mr-2">
            <Filter className="h-3.5 w-3.5" />
            <span>Topik:</span>
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
                    : "border border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Layout: Lead Article + Side Columns */}
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Featured Lead Article */}
          <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition hover:border-slate-300 hover:shadow-md">
            <div>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-200">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-md bg-brand-navy/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {featured.category}
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-brand-blue" />
                    {featured.date}
                  </span>
                  {featured.views && (
                    <span className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5 text-slate-500" />
                      <span className="tabular-nums">{featured.views}</span> pembaca
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors leading-snug">
                  {featured.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">{featured.excerpt}</p>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0">
              <Link
                href={featured.link}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-brand-blue"
              >
                <span>Baca Telaah Lengkap</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          {/* Secondary Articles List */}
          <div className="space-y-4">
            {!isAll && filteredNews.length === 1 && (
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100">
                Warta Keteknikan Terkait
              </div>
            )}
            {sideArticles.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col sm:flex-row gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] sm:w-44 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 180px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <span className="text-brand-blue font-bold">{item.category}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>

                    <h4 className="mt-1 text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-navy pt-1"
                  >
                    <span>Baca</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
