"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Search, Shield } from "lucide-react";

interface OfficialDocument {
  id: string;
  title: string;
  category: "Legalitas" | "Formulir";
  description: string;
  filesize: string;
  updatedAt: string;
  href: string;
  isOfficialVerified: boolean;
}

const documentList: OfficialDocument[] = [
  {
    id: "sk-organisasi",
    title: "Surat Keterangan Organisasi PII Cabang Pangkalpinang",
    category: "Legalitas",
    description:
      "Dokumen legalitas formal cabang mengenai pengesahan kepengurusan dan penetapan nama domain resmi piipkp.or.id.",
    filesize: "92 KB (PDF)",
    updatedAt: "Dokumen Resmi Cabang",
    href: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
    isOfficialVerified: true,
  },
  {
    id: "uu-11-2014",
    title: "Undang-Undang RI Nomor 11 Tahun 2014 tentang Keinsinyuran",
    category: "Legalitas",
    description:
      "Rujukan yuridis primer mengenai penyelenggaraan keinsinyuran, registrasi keinsinyuran, syarat STRI, dewan insinyur, dan standar layanan profesi.",
    filesize: "Portal JDIH BPK",
    updatedAt: "Dokumen Negara",
    href: "https://peraturan.bpk.go.id/Details/38580/uu-no-11-tahun-2014",
    isOfficialVerified: true,
  },
  {
    id: "pp-25-2019",
    title: "Peraturan Pemerintah RI Nomor 25 Tahun 2019",
    category: "Legalitas",
    description:
      "Peraturan pelaksanaan UU Keinsinyuran mengenai registrasi insinyur, Program Profesi Insinyur, dan Pengembangan Keprofesian Berkelanjutan (PKB).",
    filesize: "Portal JDIH BPK",
    updatedAt: "Dokumen Negara",
    href: "https://peraturan.bpk.go.id/Details/107056/pp-no-25-tahun-2019",
    isOfficialVerified: true,
  },
  {
    id: "panduan-faip",
    title: "Panduan Sertifikasi Insinyur Profesional & Formulir FAIP",
    category: "Formulir",
    description:
      "Pedoman resmi tata cara pengisian Formulir Aplikasi Insinyur Profesional (FAIP) untuk penilaian Insinyur Profesional (IPP/IPM/IPU) PII Pusat.",
    filesize: "Portal PII Pusat",
    updatedAt: "PII Pusat",
    href: "https://www.pii.or.id/layanan/sertifikasi",
    isOfficialVerified: true,
  },
];

export function DocumentsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Semua");

  const filteredDocs = documentList.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedFilter === "Semua" || doc.category === selectedFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="dokumen"
      className="bg-slate-50 py-24 border-b border-slate-200"
      aria-labelledby="dokumen-heading"
    >
      <div className="container space-y-10">
        {/* Header (Clean, no kicker above heading) */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-8">
          <div>
            <h2
              id="dokumen-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Rujukan Resmi & Berkas Publik
            </h2>
            <p className="mt-2 text-base font-semibold text-brand-navy">
              Pusat arsip regulasi keinsinyuran, formulir FAIP, dan surat keputusan organisasi.
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            Akses dokumen hukum organisasi, berkas administrasi anggota, dan dokumen ringkasan kajian
            keteknikan yang dapat diunduh bebas oleh publik dan anggota.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              id="search-docs"
              name="searchQuery"
              type="text"
              aria-label="Cari dokumen resmi"
              placeholder="Cari dokumen (mis. Legalitas, UU Keinsinyuran, FAIP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-blue"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter kategori dokumen">
            {["Semua", "Legalitas", "Formulir"].map((cat) => (
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
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                    {doc.category}
                  </span>
                  {doc.isOfficialVerified && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
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
                <span className="text-xs font-semibold text-slate-600 tabular-nums">{doc.filesize}</span>
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
