"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Cpu, Anchor, Waves, ArrowRight, Download } from "lucide-react";

type Initiative = {
  id: string;
  category: string;
  title: string;
  lead: string;
  metricLabel: string;
  metricValue: string;
  subMetric: string;
  icon: typeof Compass;
  image: string;
  recommendations: string[];
  disciplines: string[];
  docUrl: string;
};

const initiatives: Initiative[] = [
  {
    id: "plts-kolong",
    category: "Transisi Energi & Pascatambang",
    title: "Pemanfaatan Kolong Pascatambang untuk PLTS Terapung",
    lead: "Kajian komprehensif rekayasa sipil, lingkungan, dan kelistrikan untuk memanfaatkan ratusan hektare kolong air bekas tambang timah menjadi pembangkit listrik tenaga surya terapung rendah evaporasi.",
    metricLabel: "Potensi Energi Bersih",
    metricValue: "180+ MWp",
    subMetric: "Meliputi 14 titik kolong strategis di Bangka & Belitung",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    recommendations: [
      "Studi kestabilan penjangkaran (mooring system) terhadap fluktuasi muka air kolong",
      "Analisis kualitas air dan pencegahan degradasi pH asam akibat struktur penunjang",
      "Integrasi interkoneksi gardu induk PLN wilayah Bangka",
    ],
    disciplines: ["Teknik Elektro", "Teknik Sipil Keairan", "Teknik Lingkungan", "Teknik Material"],
    docUrl: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
  },
  {
    id: "hilirisasi-ree",
    category: "Metalurgi & Material Maju",
    title: "Hilirisasi Pasir Kuarsa & Logam Tanah Jarang (REE)",
    lead: "Pengawalan roadmap pengolahan mineral monasit dan pasir kuarsa lokal Bangka Belitung menjadi bahan baku semikonduktor, panel surya, dan magnet permanen bernilai tambah tinggi.",
    metricLabel: "Nilai Tambah Ekonomi",
    metricValue: "12x Lipat",
    subMetric: "Dibandingkan ekspor bahan mentah tanpa pemurnian",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    recommendations: [
      "Desain smelter ramah lingkungan dengan emisi karbon minimal di KI Sadai",
      "Penerapan teknologi ekstraksi hidrometalurgi untuk mineral ikutan timah",
      "Standardisasi keselamatan radiasi dan pengelolaan tailing bersertifikat",
    ],
    disciplines: ["Teknik Metalurgi", "Teknik Kimia", "Teknik Fisika", "Teknik Industri"],
    docUrl: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
  },
  {
    id: "pelabuhan-pangkalbalam",
    category: "Infrastruktur & Maritim",
    title: "Revitalisasi & Pengerukan Alur Pelabuhan Pangkal Balam",
    lead: "Solusi rekayasa sedimentasi muara sungai Baturusa guna meningkatkan kapasitas sandar kapal kargo, memperlancar rantai pasok logistik kepulauan, dan menekan disparitas harga barang.",
    metricLabel: "Peningkatan Arus Kontainer",
    metricValue: "45% Efisiensi",
    subMetric: "Mengurangi waktu tunggu kapal (dwelling time) dari 36 jam ke 12 jam",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    recommendations: [
      "Pemasangan groin dan jetty pemandu arus muara untuk mencegah sedimentasi berulang",
      "Pengerukan berkala alur pelayaran dengan kapal keruk hidraulik terukur",
      "Rekomendasi relokasi terminal curah ke pelabuhan laut dalam Tanjung Gunung",
    ],
    disciplines: ["Teknik Kelautan", "Teknik Sipil Transportasi", "Hidrografi", "Teknik Logistik"],
    docUrl: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
  },
  {
    id: "drainase-perkotaan",
    category: "Resiliensi Bencana & Tata Kota",
    title: "Masterplan Drainase Kota & Retensi Pasang Surut",
    lead: "Audit keteknikan tata air permukaan Pangkalpinang untuk memitigasi banjir tahunan akibat kombinasi curah hujan ekstrem dan pasang air laut (rob) di DAS Rangkui dan Pedindang.",
    metricLabel: "Area Terproteksi",
    metricValue: "1.200 Ha",
    subMetric: "Kawasan pemukiman dan sentra perdagangan Pasar Pagi aman banjir",
    icon: Waves,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    recommendations: [
      "Pembangunan kolam retensi multifungsi terintegrasi ruang terbuka hijau",
      "Pemasangan pintu air otomatis berpenggerak solar panel dengan sensor telemetri",
      "Normalisasi penampang basah sungai tanpa mengorbankan ekosistem mangrove",
    ],
    disciplines: ["Teknik Sumber Daya Air", "Perencanaan Wilayah & Kota", "Teknik Geodesi"],
    docUrl: "/documents/surat-keterangan-organisasi-pii-pkp.pdf",
  },
];

export function BannerHighlight() {
  const [activeId, setActiveId] = useState<string>("plts-kolong");
  const activeInitiative = initiatives.find((i) => i.id === activeId) || initiatives[0];
  const IconComponent = activeInitiative.icon;

  return (
    <section
      id="inisiatif"
      className="relative bg-slate-900 py-24 text-white overflow-hidden"
      aria-labelledby="inisiatif-heading"
    >
      {/* Precision Blueprint Grid Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#39A0F5_1px,transparent_1px),linear-gradient(to_bottom,#39A0F5_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative container">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-b border-slate-800 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              <Compass className="h-3.5 w-3.5 text-cyan-400" />
              Kajian Keteknikan Strategis Daerah
            </div>
            <h2
              id="inisiatif-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Blueprint Rekayasa Bangka Belitung 2045
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-400">
            PII Pangkalpinang memimpin forum kajian independen untuk memecahkan persoalan
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
                    ? "border-cyan-400 bg-cyan-950/80 text-cyan-300 shadow-lg shadow-cyan-950/50"
                    : "border-slate-800 bg-slate-800/40 text-slate-400 hover:border-slate-700 hover:text-white"
                }`}
              >
                <ItemIcon className="h-4 w-4" />
                <span>{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Detail Card */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-800/50 p-6 md:p-10 backdrop-blur-sm">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <IconComponent className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {activeInitiative.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {activeInitiative.title}
                  </h3>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-300">
                {activeInitiative.lead}
              </p>

              {/* Metric Callout */}
              <div className="rounded-xl border border-slate-700/60 bg-slate-900/80 p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {activeInitiative.metricLabel}
                </span>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-cyan-400">
                    {activeInitiative.metricValue}
                  </span>
                  <span className="text-xs text-slate-400">{activeInitiative.subMetric}</span>
                </div>
              </div>

              {/* Recommendations List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Pokok Rekomendasi Tim Ahli PII:
                </h4>
                <ul className="space-y-2">
                  {activeInitiative.recommendations.map((rec) => (
                    <li key={rec} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineering Disciplines Involved */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Disiplin Kejuruan Terlibat:
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {activeInitiative.disciplines.map((disc) => (
                    <span
                      key={disc}
                      className="rounded-md border border-slate-700 bg-slate-900/60 px-2.5 py-1 text-xs font-medium text-slate-300"
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
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300">
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
