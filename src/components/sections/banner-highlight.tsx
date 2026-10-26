"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Lightbulb,
  Cpu,
  Anchor,
  Droplets,
} from "lucide-react";

interface StrategicInitiative {
  id: string;
  category: string;
  title: string;
  lead: string;
  focusArea: string;
  focusDetail: string;
  subFocus: string;
  disciplines: string[];
  recommendations: string[];
  docUrl: string;
  docLabel: string;
  image: string;
  icon: typeof Lightbulb;
}

const initiatives: StrategicInitiative[] = [
  {
    id: "tata-ruang-drainase",
    category: "Tata Ruang & Permukiman",
    title: "Masterplan Drainase & Mitigasi Banjir Perkotaan",
    lead:
      "Pengurus Cabang PII bersinergi mendukung Pemerintah Kota Pangkalpinang dalam penataan sistem drainase perkotaan terintegrasi dengan pendekatan zero run-off guna mereduksi risiko genangan air.",
    focusArea: "Fokus Kerja",
    focusDetail: "Sinergi Pemkot Pangkalpinang",
    subFocus: "Bidang Tata Ruang & Kawasan",
    disciplines: ["Perencanaan Wilayah & Kota (PWK)", "Teknik Pengairan & Hidrologi", "Teknik Lingkungan"],
    recommendations: [
      "Penerapan metode zero run-off pada perencanaan drainase kota",
      "Penataan daerah tangkapan air dan sempadan sungai perkotaan",
      "Kajian teknis bersama pemangku kepentingan jasa konstruksi daerah",
    ],
    docUrl: "/#berita",
    docLabel: "Baca Warta Terkait",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    icon: Droplets,
  },
  {
    id: "konstruksi-arsitektur",
    category: "Arsitek & Konstruksi Sipil",
    title: "Standar Keandalan Bangunan Gedung & Keselamatan Konstruksi",
    lead:
      "Pengawalan standar teknis keselamatan konstruksi, pemenuhan persyaratan Persetujuan Bangunan Gedung (PBG), Sertifikat Laik Fungsi (SLF), dan penegakan kode etik keinsinyuran di wilayah Pangkalpinang.",
    focusArea: "Pengampu Bidang",
    focusDetail: "Arsitektur & Sipil",
    subFocus: "Standar K3 & Keandalan Bangunan",
    disciplines: ["Teknik Sipil Struktur", "Arsitektur", "Manajemen Konstruksi"],
    recommendations: [
      "Peningkatan kepatuhan terhadap standar keselamatan dan kesehatan kerja (K3)",
      "Pendampingan teknis penilaian keandalan bangunan gedung daerah",
      "Pemberdayaan tenaga ahli konstruksi bersertifikasi di Pangkalpinang",
    ],
    docUrl: "/tentang/struktur",
    docLabel: "Lihat Susunan Pengurus",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    icon: Cpu,
  },
  {
    id: "sertifikasi-stri",
    category: "Sertifikasi & Registrasi",
    title: "Percepatan Surat Tanda Registrasi Insinyur (STRI)",
    lead:
      "Fasilitasi para sarjana teknik dan praktisi keinsinyuran di Pangkalpinang dalam memproses Formulir Aplikasi Insinyur Profesional (FAIP) guna memperoleh izin praktik resmi STRI sesuai amanat UU No. 11/2014.",
    focusArea: "Regulasi Yuridis",
    focusDetail: "UU No. 11 Tahun 2014",
    subFocus: "Mandat Registrasi Hukum",
    disciplines: ["Seluruh Badan Kejuruan PII", "Praktisi Industri & Konsultan"],
    recommendations: [
      "Asistensi pengisian SIMPOK dan portofolio keinsinyuran FAIP",
      "Sosialisasi kewajiban hukum STRI bagi seluruh penanggung jawab teknik",
      "Koordinasi regional Korwil Sumatera III bersama Pengurus Pusat PII",
    ],
    docUrl: "https://www.pii.or.id/layanan/sertifikasi",
    docLabel: "Portal Sertifikasi PII",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    icon: Lightbulb,
  },
  {
    id: "pkb-kerjasama",
    category: "Pendidikan & Kerjasama",
    title: "Pengembangan Keprofesian Berkelanjutan (PKB/SKPK)",
    lead:
      "Penyelenggaraan pelatihan, webinar, dan lokakarya terakreditasi melalui Sistem Informasi Jasa Konstruksi Terintegrasi (SIKI) guna memastikan pemenuhan nilai kredit SKK dan resertifikasi insinyur.",
    focusArea: "Akreditasi",
    focusDetail: "SIKI LPJK Terintegrasi",
    subFocus: "Kredit SKPK Berkelanjutan",
    disciplines: ["Pendidikan Profesi Keinsinyuran", "Kerjasama Antar Lembaga"],
    recommendations: [
      "Integrasi webinar teknis dengan perolehan kredit SKK SIKI resmi",
      "Kemitraan strategis dengan perguruan tinggi dan dinas teknis",
      "Pembinaan calon insinyur muda melalui Program Profesi Insinyur (PPI)",
    ],
    docUrl: "/#agenda",
    docLabel: "Lihat Agenda Resmi",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    icon: Anchor,
  },
];

export function BannerHighlight() {
  const [activeId, setActiveId] = useState<string>("tata-ruang-drainase");
  const activeInitiative = initiatives.find((i) => i.id === activeId) || initiatives[0];
  const IconComponent = activeInitiative.icon;

  return (
    <section
      id="inisiatif"
      className="relative bg-slate-950 py-24 text-white overflow-hidden border-t border-b border-slate-800"
      aria-labelledby="inisiatif-heading"
    >
      {/* Precision Blueprint Grid Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#39A0F5_1px,transparent_1px),linear-gradient(to_bottom,#39A0F5_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative container">
        {/* Section Header (Clean, no kicker above heading) */}
        <div className="flex flex-col gap-4 border-b border-slate-800 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="inisiatif-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Fokus Strategis & Program Kerja Cabang
            </h2>
            <p className="mt-2 text-base font-semibold text-cyan-400">
              Empat pilar keinsinyuran Pengurus Cabang PII Kota Pangkalpinang Periode 2024–2027.
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-300">
            Berdasarkan amanat UU No. 11 Tahun 2014 dan SK Pengurus, PII Cabang Pangkalpinang
            mendedikasikan kepakaran teknik untuk kemitraan pembangunan kota dan pembinaan
            profesionalisme insinyur daerah.
          </p>
        </div>

        {/* Interactive Initiative Selector Tabs */}
        <div className="mt-8 flex flex-wrap gap-3" role="tablist">
          {initiatives.map((item) => {
            const isSelected = item.id === activeId;
            const ItemIcon = item.icon;
            return (
              <button
                key={item.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setActiveId(item.id)}
                className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-xs font-semibold tracking-wide transition-all ${
                  isSelected
                    ? "border-cyan-400 bg-cyan-950 text-cyan-300 shadow-sm"
                    : "border-slate-800 bg-slate-800/40 text-slate-300 hover:border-slate-700 hover:text-white"
                }`}
              >
                <ItemIcon className="h-4 w-4" />
                <span>{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Panel (Flattened layout, no nested cards) */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-10 backdrop-blur-sm">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <IconComponent className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {activeInitiative.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mt-1">
                    {activeInitiative.category}
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-300">
                {activeInitiative.lead}
              </p>

              {/* Metric / Focus Callout (Clean hairline CAD border, not a nested box) */}
              <div className="border-l-2 border-cyan-400 pl-5 py-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {activeInitiative.focusArea}
                </span>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-2xl font-extrabold text-cyan-400">
                    {activeInitiative.focusDetail}
                  </span>
                  <span className="text-xs text-slate-300">{activeInitiative.subFocus}</span>
                </div>
              </div>

              {/* Recommendations List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Pokok Arahan Kerja Cabang:
                </h4>
                <ul className="space-y-2">
                  {activeInitiative.recommendations.map((rec) => (
                    <li key={rec} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Disciplines Involved */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Disiplin Kejuruan Terlibat:
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {activeInitiative.disciplines.map((disc) => (
                    <span
                      key={disc}
                      className="rounded-md border border-slate-700 bg-slate-900/60 px-2.5 py-1 text-xs font-medium text-slate-200"
                    >
                      {disc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={activeInitiative.docUrl}
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
                >
                  <span>{activeInitiative.docLabel}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://wa.me/6281806701775?text=Halo%20Pengurus%20PII%20Pangkalpinang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-white"
                >
                  <span>Kontak Sekretariat Cabang</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Photo Preview */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-xl">
              <Image
                src={activeInitiative.image}
                alt={activeInitiative.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200">
                <span className="font-semibold text-white">PII Cabang Pangkalpinang</span> — Wilayah
                Provinsi Kepulauan Bangka Belitung
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
