"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  GraduationCap,
  HardHat,
  Briefcase,
  FileCheck,
} from "lucide-react";

interface Pathway {
  id: string;
  role: string;
  title: string;
  subtitle: string;
  actionText: string;
  actionHref: string;
  badge: string;
  icon: typeof HardHat;
  highlights: string[];
}

const pathways: Pathway[] = [
  {
    id: "graduate",
    role: "Lulusan Baru / Calon Insinyur",
    title: "Jalur Program Profesi Insinyur (PPI)",
    subtitle:
      "Untuk sarjana teknik (S.T.) yang ingin mengambil gelar profesi resmi Insinyur (Ir.) melalui perkuliahan reguler atau rekognisi pembelajaran lampau (RPL).",
    actionText: "Panduan PPI & RPL Cabang",
    actionHref: "https://registrasi.pii.or.id/layanan/sertifikasi",
    badge: "Tahap Awal",
    icon: GraduationCap,
    highlights: ["Gelar Profesi Insinyur (Ir.)", "Kerja sama Perguruan Tinggi", "Bimbingan Portofolio Awal"],
  },
  {
    id: "practitioner",
    role: "Praktisi & Tenaga Ahli (>= 3 Thn)",
    title: "Sertifikasi Insinyur Profesional (SIP)",
    subtitle:
      "Raih pengakuan jenjang Insinyur Profesional Pratama (IPP) dan Madya (IPM) melalui pengisian Formulir Aplikasi Insinyur Profesional (FAIP).",
    actionText: "Mulai Pengisian FAIP",
    actionHref: "https://simpore.pii.or.id/",
    badge: "Karier Profesional",
    icon: Briefcase,
    highlights: ["Sertifikat IPP / IPM Berstandar", "SKPK / CPD Keinsinyuran", "Verifikasi Majelis Penilai"],
  },
  {
    id: "consultant",
    role: "Konsultan Utama & Pimpinan Proyek",
    title: "Insinyur Utama (IPU) & Legalitas STRI",
    subtitle:
      "Pemenuhan kewajiban Surat Tanda Registrasi Insinyur (STRI) untuk penandatanganan dokumen teknis resmi negara dan otoritas keinsinyuran tertinggi.",
    actionText: "Verifikasi Legalitas STRI",
    actionHref: "https://updmember.pii.or.id/",
    badge: "Otoritas Legal",
    icon: Award,
    highlights: ["Sertifikasi Insinyur Utama (IPU)", "Surat Tanda Registrasi (STRI)", "Penilai Majelis Cabang"],
  },
];

export function HeroSlider() {
  const [activePathway, setActivePathway] = useState<string>("practitioner");
  const selectedPathway = pathways.find((p) => p.id === activePathway) || pathways[1];
  const PathwayIcon = selectedPathway.icon;

  return (
    <section
      id="beranda"
      className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800"
      aria-label="Beranda Utama PII Pangkalpinang"
    >
      {/* Precision Blueprint Grid Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0055A4_1px,transparent_1px),linear-gradient(to_bottom,#0055A4_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative container py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          {/* Main Hero Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
              Persatuan Insinyur Indonesia Cabang Pangkalpinang
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
                Mengawal Kedaulatan Rekayasa Keteknikan Bangka Belitung.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Organisasi profesi resmi di bawah naungan UU No. 11 Tahun 2014. Mewadahi insinyur
                lintas disiplin, mempercepat sertifikasi kompetensi (IPP, IPM, IPU), legalitas STRI,
                dan memimpin kajian rekayasa strategis kepulauan.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="https://updmember.pii.or.id/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-blue-600 hover:shadow-xl"
              >
                <span>Daftar Anggota / Perpanjang KTA</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#layanan"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 hover:text-white"
              >
                <FileCheck className="h-4 w-4 text-cyan-400" />
                <span>Simulasi Sertifikasi</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Pathway Selector */}
          <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-6 md:p-8 backdrop-blur-md shadow-2xl">
            <div className="border-b border-slate-700/80 pb-4">
              <h2 className="text-xl font-bold text-white">
                Panduan Karier & Jalur Kompetensi Insinyur
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Pilih profil pengalaman Anda untuk menemukan alur sertifikasi resmi:
              </p>
            </div>

            {/* Role Buttons */}
            <div className="mt-5 grid grid-cols-3 gap-2" role="group" aria-label="Pilih profil pengalaman">
              {pathways.map((item) => {
                const isActive = item.id === activePathway;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActivePathway(item.id)}
                    className={`rounded-xl p-2.5 text-center transition-all ${
                      isActive
                        ? "border border-cyan-400 bg-cyan-950/80 text-cyan-300 font-bold shadow-md"
                        : "border border-slate-700 bg-slate-900/40 text-slate-300 hover:text-white hover:border-slate-600 font-medium"
                    }`}
                  >
                    <span className="block text-xs leading-tight font-semibold">{item.role.split(" ")[0]}</span>
                    <span className="block text-xs text-slate-300 mt-0.5">{item.badge}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Pathway Details (Flattened, no nested card border) */}
            <div className="mt-6 space-y-4 border-t border-slate-700/60 pt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <PathwayIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{selectedPathway.title}</h3>
                  <span className="text-xs text-cyan-400 font-medium">{selectedPathway.role}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">
                {selectedPathway.subtitle}
              </p>

              <div className="border-t border-slate-800 pt-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Fokus Pembinaan Cabang:
                </span>
                <ul className="mt-2 space-y-1.5">
                  {selectedPathway.highlights.map((hl) => (
                    <li key={hl} className="flex items-center gap-2 text-xs text-slate-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  href={selectedPathway.actionHref}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-400"
                >
                  <span>{selectedPathway.actionText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Data Blueprint Bar */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-slate-800 pt-8 sm:grid-cols-4">
          <div className="border-l-2 border-cyan-500 pl-4">
            <span className="block text-2xl font-black text-white sm:text-3xl tabular-nums">380+</span>
            <span className="block text-xs font-medium text-slate-300 uppercase tracking-wider mt-1">
              Insinyur Terdaftar
            </span>
          </div>
          <div className="border-l-2 border-cyan-500 pl-4">
            <span className="block text-2xl font-black text-white sm:text-3xl tabular-nums">14</span>
            <span className="block text-xs font-medium text-slate-300 uppercase tracking-wider mt-1">
              Badan Kejuruan Aktif
            </span>
          </div>
          <div className="border-l-2 border-cyan-500 pl-4">
            <span className="block text-2xl font-black text-white sm:text-3xl tabular-nums">100%</span>
            <span className="block text-xs font-medium text-slate-300 uppercase tracking-wider mt-1">
              Kepatuhan UU 11/2014
            </span>
          </div>
          <div className="border-l-2 border-cyan-500 pl-4">
            <span className="block text-2xl font-black text-white sm:text-3xl tabular-nums">4 Sektor</span>
            <span className="block text-xs font-medium text-slate-300 uppercase tracking-wider mt-1">
              Kajian Strategis Daerah
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
