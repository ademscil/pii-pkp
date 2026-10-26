"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Award,
  Shield,
  Briefcase,
  TrendingUp,
  Check,
  X,
  ArrowRight,
  BookOpen,
} from "lucide-react";

interface BenefitPillar {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  advantages: string[];
  icon: typeof Award;
}

const pillars: BenefitPillar[] = [
  {
    id: "legal",
    badge: "Otoritas Legal",
    title: "Legalitas & Hak Praktik STRI",
    headline: "Kekuatan Hukum Menandatangani Dokumen Teknis Negara",
    description:
      "Sesuai UU No. 11/2014, hanya Insinyur teregistrasi STRI yang sah menandatangani kajian teknis perizinan (PBG/SLF), dokumen DED, AMDAL, dan persetujuan keselamatan kerja proyek.",
    advantages: [
      "Perlindungan penuh terhadap tuntutan malpraktik rekayasa keteknikan",
      "Kewenangan formal memimpin komisi penilai ahli bangunan & konstruksi",
      "Diakui dalam pengadaan barang & jasa pemerintah (LPSE / LKPP)",
    ],
    icon: Shield,
  },
  {
    id: "career",
    badge: "Jenjang Karier",
    title: "Sertifikasi IPP, IPM & IPU",
    headline: "Pengakuan Kualifikasi Rekayasa Standar Nasional & Internasional",
    description:
      "Sertifikasi Insinyur Profesional membuktikan kompetensi riil Anda di mata industri, membuka peluang promosi manajerial, dan menjadi syarat wajib penugasan proyek strategis nasional.",
    advantages: [
      "Penyetaraan kualifikasi keinsinyuran tingkat regional ASEAN (ACPE)",
      "Standarisasi billing rate dan remunerasi tenaga ahli keteknikan",
      "Akses sidang majelis penilai cabang berkala setiap bulan",
    ],
    icon: Award,
  },
  {
    id: "advocacy",
    badge: "Advokasi & Jaringan",
    title: "Advokasi & Perlindungan Profesi",
    headline: "Wadah Perlindungan Hukum dan Rumah Kebangsaan Seluruh Insinyur",
    description:
      "PII hadir mendampingi anggota dalam sengketa keteknikan, investigasi kegagalan bangunan, serta mengadvokasi hak-hak insinyur lokal agar menjadi tuan rumah di tanah kepulauan sendiri.",
    advantages: [
      "Bantuan hukum dari Badan Arbitrase dan Mediasi Keteknikan PII",
      "Jejaring lintas badan kejuruan (BK Sipil, Mesin, Tambang, Elektro, dll.)",
      "Rekomendasi resmi cabang untuk penempatan komite teknis pemda",
    ],
    icon: Briefcase,
  },
  {
    id: "knowledge",
    badge: "Pengembangan Diri",
    title: "CPD & SKPK Berkelanjutan",
    headline: "Akses Pelatihan Teknologi Mutakhir & Pemenuhan Kredit SKPK",
    description:
      "Program Continuing Professional Development (CPD) rutin untuk memperbarui pengetahuan tentang transisi hijau, komputasi rekayasa AI, BIM presisi, dan regulasi keteknikan terkini.",
    advantages: [
      "Kredit SKPK resmi yang diakui untuk perpanjangan berkala STRI",
      "Diskon khusus anggota untuk workshop teknis dan sertifikasi vendor",
      "Akses publikasi jurnal ilmiah dan riset keinsinyuran Indonesia",
    ],
    icon: TrendingUp,
  },
];

export function BenefitsCarousel() {
  const [activeTab, setActiveTab] = useState<string>("legal");
  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const PillarIcon = activePillar.icon;

  return (
    <section
      id="manfaat"
      className="relative bg-slate-50 py-24 border-b border-slate-200"
      aria-labelledby="manfaat-heading"
    >
      <div className="container space-y-12">
        {/* Section Header (Clean, no kicker above heading) */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-8">
          <div>
            <h2
              id="manfaat-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Nilai Tambah & Advokasi Keanggotaan PII
            </h2>
            <p className="mt-2 text-base font-semibold text-brand-navy">
              Mengapa seluruh praktisi dan insinyur di Bangka Belitung harus berhimpun di wadah resmi.
            </p>
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
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                      {item.badge}
                    </span>
                    <h3 className="mt-0.5 text-sm font-bold text-slate-900">{item.title}</h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Showcase & Comparison (Flattened, no nested cards) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-brand-navy border border-blue-200">
                  <PillarIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    {activePillar.headline}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue mt-0.5 block">
                    {activePillar.badge}
                  </span>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-700">
                {activePillar.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
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

            {/* Quick Contrast Column (Clean CAD divider styling, no nested card) */}
            <div className="border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Komparasi Legalitas Praktik Insinyur
                </h4>
                <span className="text-xs text-slate-600">Berdasarkan Ketentuan UU 11/2014</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
                    <X className="h-4 w-4" />
                    <span>Praktisi Tanpa STRI / Non-PII</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                    Tidak memiliki hak legal menandatangani kajian teknis. Rentan sanksi
                    administratif dan pembatalan izin proyek formal.
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <Check className="h-4 w-4" />
                    <span>Insinyur Profesional Ber-STRI Aktif</span>
                  </div>
                  <p className="text-xs text-slate-700 pl-5 leading-relaxed">
                    Sah bertindak sebagai penanggung jawab proyek negara/swasta, berhak atas billing
                    rate resmi, dan dinaungi advokasi dewan kehormatan PII.
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-brand-navy pl-4 py-1 text-xs text-slate-700">
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
