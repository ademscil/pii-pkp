"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
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
  metricLabel: string;
  metricValue: string;
  subMetric: string;
  disciplines: string[];
  recommendations: string[];
  docUrl: string;
  image: string;
  icon: typeof Lightbulb;
}

const initiatives: StrategicInitiative[] = [
  {
    id: "plts-kolong",
    category: "Transisi Energi & Pascatambang",
    title: "Pemanfaatan Kolong Pascatambang untuk PLTS Terapung",
    lead:
      "Studi kelayakan teknis pemanfaatan ribuan hektar kolong bekas tambang timah di Bangka Belitung sebagai floating solar PV untuk menyuplai energi bersih kawasan industri.",
    metricLabel: "Potensi Daya Terpasang",
    metricValue: "450 MWp",
    subMetric: "Di 87 Kolong Prioritas",
    disciplines: ["Teknik Elektro", "Teknik Lingkungan", "Teknik Sipil Air"],
    recommendations: [
      "Stabilitas jangkar apung terhadap fluktuasi muka air kolong",
      "Karakteristik korosi panel akibat keasaman air pascatambang (pH 4-5)",
      "Interkoneksi jaringan transmisi 150 kV sistem Bangka",
    ],
    docUrl: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
    image: "/partners/green-corridor.jpg",
    icon: Lightbulb,
  },
  {
    id: "hilirisasi-pasir",
    category: "Hilirisasi Mineral & REE",
    title: "Rantai Pasok Pasir Kuarsa & Logam Tanah Jarang (Monasit)",
    lead:
      "Penyusunan peta jalan keteknikan pengolahan monasit dan ilmenit sisa hasil tambang timah menjadi bahan baku magnet permanen untuk rantai pasok industri masa depan.",
    metricLabel: "Nilai Tambah Hilirisasi",
    metricValue: "18.4x",
    subMetric: "Dari Komoditas Mentah ke Produk Akhir",
    disciplines: ["Teknik Metalurgi", "Teknik Kimia", "Teknik Pertambangan"],
    recommendations: [
      "Standardisasi pemisahan radioaktif alami (NORM) monasit",
      "Pembangunan smelter presisi ramah lingkungan di Sadai",
      "Kemitraan riset bersama perguruan tinggi vokasi kepulauan",
    ],
    docUrl: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
    image: "/partners/cirebon-power.png",
    icon: Cpu,
  },
  {
    id: "pelabuhan-pangkalbalam",
    category: "Infrastruktur Maritim & Logistik",
    title: "Kajian Alur Pelayaran & Dermaga Pangkal Balam",
    lead:
      "Solusi rekayasa sedimentasi alur Sungai Baturusa dan rencana relokasi dermaga peti kemas untuk menurunkan biaya logistik pulau Bangka yang selama ini terhambat pasang surut.",
    metricLabel: "Efisiensi Biaya Logistik",
    metricValue: "28%",
    subMetric: "Penurunan Turnaround Time Kapal",
    disciplines: ["Teknik Kelautan", "Teknik Sipil Transportasi", "Geodesi"],
    recommendations: [
      "Pengerukan periodik berbasis simulasi hidrodinamika arus muara",
      "Kajian opsi pelabuhan laut dalam di Tanjung Gunung / Sadai",
      "Integrasi jalur darat angkutan barang lingkar perkotaan",
    ],
    docUrl: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
    image: "/partners/pelindo.png",
    icon: Anchor,
  },
  {
    id: "drainase-perkotaan",
    category: "Tata Air & Ketahanan Iklim",
    title: "Masterplan Pengendalian Banjir Kota Pangkalpinang",
    lead:
      "Perancangan sistem polder, kolam retensi, dan restorasi sempadan Sungai Rangkui untuk melindungi pusat niaga dan permukiman warga dari banjir rob dan hujan ekstrem.",
    metricLabel: "Reduksi Luas Genangan",
    metricValue: "72%",
    subMetric: "Periode Ulang Debit 25 Tahunan",
    disciplines: ["Teknik Pengairan", "Planologi (PWK)", "Teknik Lingkungan"],
    recommendations: [
      "Pembangunan pintu pasang-surut otomatis di muara Sungai Rangkui",
      "Revitalisasi kolong retensi sebagai ruang terbuka hijau publik",
      "Penetapan garis sempadan tegas bebas okupasi bangunan liar",
    ],
    docUrl: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
    image: "/partners/jaya-konstruksi.png",
    icon: Droplets,
  },
];

export function BannerHighlight() {
  const [activeId, setActiveId] = useState<string>("plts-kolong");
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
              Blueprint Rekayasa Bangka Belitung 2045
            </h2>
            <p className="mt-2 text-base font-semibold text-cyan-400">
              Kajian keteknikan strategis, hilirisasi mineral, dan transisi energi kepulauan.
            </p>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-300">
            PII Cabang Pangkalpinang memimpin forum kajian independen untuk memecahkan persoalan
            struktural daerah melalui rekayasa teknologi, hilirisasi mineral, dan ketahanan iklim.
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

              {/* Metric Callout (Clean hairline CAD border, not a nested box) */}
              <div className="border-l-2 border-cyan-400 pl-5 py-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {activeInitiative.metricLabel}
                </span>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-cyan-400 tabular-nums">
                    {activeInitiative.metricValue}
                  </span>
                  <span className="text-xs text-slate-300">{activeInitiative.subMetric}</span>
                </div>
              </div>

              {/* Recommendations List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Pokok Rekomendasi Tim Ahli PII:
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
                >
                  <Download className="h-4 w-4" />
                  <span>Unduh Dokumen Kajian Publik</span>
                </Link>
                <Link
                  href="https://wa.me/6281806701775?text=Halo%20PII%20Pangkalpinang,%20saya%20tertarik%20bergabung%20dalam%20pokja%20kajian%20teknis%20daerah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:text-white"
                >
                  <span>Gabung Pokja Kajian</span>
                  <ArrowRight className="h-4 w-4" />
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
                <span className="font-semibold text-white">Studi Lapangan PII PKP</span> — Wilayah
                Strategis Bangka Belitung
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
