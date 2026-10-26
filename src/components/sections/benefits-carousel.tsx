"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Scale, Award, Network, ArrowRight, Check, X } from "lucide-react";

type BenefitPillar = {
  id: string;
  title: string;
  badge: string;
  icon: typeof ShieldCheck;
  headline: string;
  description: string;
  advantages: string[];
};

const pillars: BenefitPillar[] = [
  {
    id: "legal",
    title: "Legalitas & Perlindungan Hukum",
    badge: "UU No. 11/2014",
    icon: ShieldCheck,
    headline: "Izin Praktik Sah & Perlindungan Profesi Negara",
    description:
      "Setiap insinyur penanggung jawab teknis proyek wajib mengantongi STRI. Keanggotaan PII memberikan advokasi hukum keteknikan dan jaminan legalitas dalam menandatangani dokumen teknis pemerintah/swasta.",
    advantages: [
      "Hak legal menandatangani dokumen perancangan, supervisi, dan pengujian teknis",
      "Perlindungan hukum dan mediasi etik oleh Dewan Kehormatan PII",
      "Kepatuhan regulasi Kementerian PUPR dan otoritas perizinan PBG/SLF",
    ],
  },
  {
    id: "remuneration",
    title: "Standar Remunerasi & Billing Rate",
    badge: "Kepres & INKINDO",
    icon: Scale,
    headline: "Standarisasi Imbalan Jasa & Nilai Pasar Insinyur",
    description:
      "PII menetapkan pedoman billing rate nasional bagi insinyur bersertifikat (IPP, IPM, IPU) sebagai acuan resmi pengadaan jasa konsultansi pemerintah dan industri.",
    advantages: [
      "Acuan baku minimum billing rate per jam/bulan berbasis kualifikasi SKK",
      "Peningkatan daya tawar profesional pada proyek BUMN dan multinasional",
      "Standardisasi tunjangan keahlian profesi pada struktur korporasi",
    ],
  },
  {
    id: "mobility",
    title: "Sertifikasi Internasional & Mobilitas",
    badge: "ASEAN ACPE",
    icon: Award,
    headline: "Paspor Praktik Lintas Batas Negara Asia Tenggara",
    description:
      "Gelar Insinyur Profesional Madya (IPM) memfasilitasi registrasi sebagai ASEAN Chartered Professional Engineer (ACPE) dan APEC Engineer untuk berpraktik di 10 negara ASEAN.",
    advantages: [
      "Pengakuan timbal balik kualifikasi insinyur di tingkat regional ASEAN",
      "Peluang memimpin konsorsium proyek rekayasa multinasional",
      "Akses basis data insinyur teregistrasi tingkat Asia-Pasifik",
    ],
  },
  {
    id: "ecosystem",
    title: "Jejaring Industri & Proyek Strategis",
    badge: "Ekosistem Babel",
    icon: Network,
    headline: "Konektivitas Eksklusif 14 Badan Kejuruan",
    description:
      "Bergabung dalam komunitas lebih dari 380 insinyur Bangka Belitung dari sektor pertambangan, sipil, kelautan, elektro, dan energi untuk kolaborasi bisnis rekayasa.",
    advantages: [
      "Akses tender proyek dan kemitraan konsorsium rekayasa daerah",
      "Diskon khusus workshop, lokakarya teknis ber-SKPK, dan kongres tahunan",
      "Peluang menjadi narasumber ahli pada forum kajian kebijakan pemda",
    ],
  },
];

export function BenefitsCarousel() {
  const [activeTab, setActiveTab] = useState("legal");
  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const PillarIcon = activePillar.icon;

  return (
    <section
      id="manfaat"
      className="bg-slate-50 py-24 border-b border-slate-200"
      aria-labelledby="manfaat-heading"
    >
      <div className="container space-y-12">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-brand-navy/20 bg-brand-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy">
              <Award className="h-3.5 w-3.5 text-brand-navy" />
              Nilai Tambah & Advokasi
            </div>
            <h2
              id="manfaat-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Mengapa Insinyur Harus Berhimpun di PII?
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-slate-600">
            Bukan sekadar formalitas kartu anggota. PII adalah pilar otoritas yang melindungi karier,
            menaikkan standar imbal jasa, dan menjamin legalitas praktik keinsinyuran Anda.
          </p>
        </div>

        {/* Interactive Feature Tabs */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" role="tablist">
          {pillars.map((item) => {
            const isSelected = item.id === activeTab;
            const ItemIcon = item.icon;
            return (
              <button
                key={item.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col justify-between rounded-xl p-5 text-left transition-all ${
                  isSelected
                    ? "border-2 border-brand-blue bg-white shadow-md text-brand-navy"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                <div className="space-y-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      isSelected ? "bg-brand-navy text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ItemIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {item.badge}
                    </span>
                    <h3 className="mt-0.5 text-sm font-bold text-slate-900">{item.title}</h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase & Comparison */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-navy border border-blue-200">
                  <PillarIcon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    {activePillar.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {activePillar.headline}
                  </h3>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                {activePillar.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Manfaat Nyata bagi Anggota Cabang:
                </h4>
                <ul className="space-y-2.5">
                  {activePillar.advantages.map((adv) => (
                    <li key={adv} className="flex items-start gap-3 text-sm text-slate-800">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  href="https://updmember.pii.or.id/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-navy px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-blue"
                >
                  <span>Registrasi Keanggotaan PII Sekarang</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Quick Contrast Box: Tanpa STRI vs Ber-STRI */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Komparasi Legalitas Insinyur
                </h4>
                <span className="text-xs text-slate-500">Berdasarkan Ketentuan UU 11/2014</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
                    <X className="h-4 w-4" />
                    <span>Praktisi Tanpa STRI / Non-PII</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-5">
                    Tidak memiliki hak legal menandatangani kajian teknis. Rentan sanksi
                    administratif dan pembatalan izin proyek.
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-3 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <Check className="h-4 w-4" />
                    <span>Insinyur Profesional Ber-STRI Aktif</span>
                  </div>
                  <p className="text-xs text-slate-700 pl-5">
                    Sah bertindak sebagai penanggung jawab proyek negara/swasta, berhak atas billing
                    rate resmi, dan dinaungi advokasi dewan kehormatan PII.
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4 border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-slate-900 block">Pusat Layanan Babel:</span>
                Konsultasi berkas dan checklist sertifikasi dibuka setiap hari kerja di Sekretariat
                PII Pangkalpinang.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
