"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Download, Search, CheckCircle, Shield } from "lucide-react";

type DocItem = {
  id: string;
  title: string;
  category: "Legalitas" | "Formulir" | "Kajian Teknis";
  description: string;
  filename: string;
  filesize: string;
  href: string;
  isOfficialVerified?: boolean;
};

const docList: DocItem[] = [
  {
    id: "sk-organisasi",
    title: "Surat Keterangan Organisasi PII Cabang Pangkalpinang",
    category: "Legalitas",
    description:
      "Surat Keterangan resmi legalitas pembentukan dan kepengurusan Persatuan Insinyur Indonesia Cabang Pangkalpinang.",
    filename: "surat-keterangan-organisasi-pii-pkp.pdf",
    filesize: "92 KB (PDF)",
    href: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
    isOfficialVerified: true,
  },
  {
    id: "panduan-faip",
    title: "Panduan Pengisian Formulir Aplikasi Insinyur Profesional (FAIP)",
    category: "Formulir",
    description:
      "Format baku narasi klaim kompetensi proyek keinsinyuran dan pedoman skor SKPK untuk pengajuan sertifikasi IPP, IPM, dan IPU.",
    filename: "panduan-faip-nasional.pdf",
    filesize: "Official Portal Link",
    href: "https://updmember.pii.or.id/",
    isOfficialVerified: true,
  },
  {
    id: "blueprint-sadai",
    title: "Executive Summary: Roadmap Net-Zero Kawasan Industri Sadai",
    category: "Kajian Teknis",
    description:
      "Ringkasan eksekutif kajian keteknikan PII Pangkalpinang mengenai integrasi energi bersih dan hilirisasi rendah emisi di KI Sadai Bangka Selatan.",
    filename: "netzero-sadai-summary.pdf",
    filesize: "Publikasi Terbuka",
    href: "https://piipkp.or.id/netzero2045",
  },
  {
    id: "ad-art",
    title: "Anggaran Dasar & Anggaran Rumah Tangga (AD/ART) PII",
    category: "Legalitas",
    description:
      "Landasan hukum konstitusi organisasi PII hasil Kongres Nasional XXII untuk tata kelola cabang dan perlindungan anggota.",
    filename: "ad-art-pii-nasional.pdf",
    filesize: "Portal Pusat",
    href: "https://www.pii.or.id",
    isOfficialVerified: true,
  },
];

export function DocumentsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Semua");

  const filteredDocs = docList.filter((doc) => {
    const matchesFilter = selectedFilter === "Semua" || doc.category === selectedFilter;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section
      id="dokumen"
      className="bg-slate-50 py-24 border-b border-slate-200"
      aria-labelledby="dokumen-heading"
    >
      <div className="container space-y-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-brand-navy/20 bg-brand-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy">
              <FileText className="h-3.5 w-3.5 text-brand-navy" />
              Pusat Dokumen & Legalitas
            </div>
            <h2
              id="dokumen-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Rujukan Resmi & Berkas Publik
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            Akses dokumen hukum organisasi, berkas administrasi anggota, dan dokumen ringkasan kajian
            keteknikan yang dapat diunduh bebas oleh publik dan anggota.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              id="search-docs"
              name="searchQuery"
              type="text"
              aria-label="Cari dokumen resmi"
              placeholder="Cari dokumen (mis. Legalitas, FAIP, Sadai)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter kategori dokumen">
            {["Semua", "Legalitas", "Formulir", "Kajian Teknis"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  selectedFilter === cat
                    ? "bg-brand-navy text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredDocs.map((doc) => (
            <article
              key={doc.id}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    {doc.category}
                  </span>
                  {doc.isOfficialVerified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                      <Shield className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Legal Terverifikasi</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{doc.description}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-mono font-medium text-slate-500">{doc.filesize}</span>
                <Link
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand-navy px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-brand-blue"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Unduh Dokumen</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
