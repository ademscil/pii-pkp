"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, BookOpen, Clock, ArrowRight, Shield } from "lucide-react";
import { aboutContent } from "@/data/site-content";

const { history, vision, board } = aboutContent;

const epochs = [
  {
    period: "1974 - 1999",
    title: "Pondasi Rekayasa Tambang & Pelabuhan",
    description:
      "Perintisan wadah komunikasi insinyur di Pangkalpinang yang didominasi keahlian penambangan timah lepas pantai, rekayasa peleburan, dan infrastruktur pelabuhan era awal.",
    milestones: [
      "Pengukuhan komisariat cabang pertama di Pulau Bangka",
      "Kajian stabilitas kapal keruk mangkok dan alur muara Baturusa",
      "Penyusunan kode keselamatan tambang darat dan laut",
    ],
  },
  {
    period: "2000 - 2023",
    title: "Otonomi Daerah & Akselerasi Sipil",
    description:
      "Transformasi peran cabang dalam mengawal pembangunan provinsi baru Kepulauan Bangka Belitung: tata ruang ibukota Pangkalpinang, jalan arteri, dan jembatan penghubung.",
    milestones: [
      "Kajian teknis Jembatan Emas (Bascule Bridge) sistem hidraulik",
      "Perumusan masterplan drainase dan kolam retensi DAS Rangkui",
      "Kerjasama pembentukan Program Profesi Insinyur (PPI) bersama universitas",
    ],
  },
  {
    period: "2024 - 2027",
    title: "Hilirisasi Hijau & Transformasi Digital",
    description:
      "Kepengurusan periode berjalan fokus pada transisi energi bersih, PLTS terapung kolong pascatambang, hilirisasi pasir kuarsa/REE, dan integrasi STRI.",
    milestones: [
      "Rilis roadmap dekarbonisasi industri Sadai",
      "Klinik pendampingan sertifikasi mandiri di sekretariat cabang",
      "Audit keteknikan ketahanan iklim pesisir Pangkalpinang",
    ],
  },
];

export function AboutSection() {
  const [activeEpochIndex, setActiveEpochIndex] = useState(2);
  const [activeBoardTab, setActiveBoardTab] = useState(0);

  const selectedEpoch = epochs[activeEpochIndex];
  const selectedBoardSection = board.sections[activeBoardTab] || board.sections[0];

  return (
    <section
      id="sejarah"
      className="bg-white py-24 border-b border-slate-200"
      aria-labelledby="sejarah-heading"
    >
      <div className="container space-y-16">
        {/* Section 1: Historical Timeline with Interactive Epoch Navigator */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-md border border-brand-navy/20 bg-brand-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy">
              <BookOpen className="h-3.5 w-3.5 text-brand-navy" />
              Jejak Pengabdian Keinsinyuran
            </div>
            <h2
              id="sejarah-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Setengah Abad Menempa Peradaban Bangka Belitung
            </h2>
            <p className="text-lg font-medium text-slate-700 leading-relaxed">
              {history.lead}
            </p>
            <div className="space-y-4 text-sm leading-relaxed text-slate-600">
              {history.paragraphs.map((p, idx) => (
                <p key={`hist-p-${idx}`}>{p}</p>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href="/tentang/sejarah"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-brand-blue"
              >
                <span>Telusuri Arsip Sejarah Lengkap</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive Epoch Timeline Widget */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-navy" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Linimasa Fase Perkembangan
                </h3>
              </div>
              <span className="text-xs font-mono font-semibold text-brand-blue">
                Fase {activeEpochIndex + 1} dari 3
              </span>
            </div>

            {/* Epoch Selector Buttons */}
            <div className="mt-5 grid grid-cols-3 gap-2" role="group" aria-label="Pilih era sejarah">
              {epochs.map((ep, idx) => {
                const isActive = idx === activeEpochIndex;
                return (
                  <button
                    key={ep.period}
                    type="button"
                    onClick={() => setActiveEpochIndex(idx)}
                    className={`rounded-xl p-3 text-left transition-all ${
                      isActive
                        ? "border border-brand-navy bg-white shadow-sm"
                        : "border border-slate-200 bg-slate-100/60 text-slate-600 hover:bg-white"
                    }`}
                  >
                    <span
                      className={`block text-xs font-bold ${
                        isActive ? "text-brand-blue" : "text-slate-600"
                      }`}
                    >
                      {ep.period}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Epoch Details */}
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                  {selectedEpoch.period}
                </span>
                <h4 className="mt-1 text-lg font-bold text-slate-900">{selectedEpoch.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {selectedEpoch.description}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Capaian Rekayasa Kunci:
                </span>
                <ul className="mt-2 space-y-2">
                  {selectedEpoch.milestones.map((m) => (
                    <li key={m} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Visi-Misi & Interactive Organization Board Explorer */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] border-t border-slate-200 pt-16">
          {/* Visi Misi Card */}
          <div className="rounded-2xl border border-slate-200 bg-brand-navy p-8 text-white shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                <Shield className="h-3.5 w-3.5 text-cyan-400" />
                Visi & Nilai Organisasi
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">{vision.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">{vision.vision}</p>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Misi Strategis:
                </span>
                <ul className="space-y-2.5">
                  {vision.missions.map((m, idx) => (
                    <li key={m} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] font-bold text-cyan-400">
                        {idx + 1}
                      </span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800">
              <Link
                href="/tentang/visi-misi"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white"
              >
                <span>Baca Rumusan Lengkap Visi-Misi</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Interactive Organization Board Explorer */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2 text-brand-navy">
                <Users className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Struktur Kepengurusan Cabang (2024–2027)
                </span>
              </div>
              <h3 className="mt-1 text-xl font-bold text-slate-900">{board.title}</h3>
            </div>

            {/* Board Section Switcher Tabs */}
            <div className="mt-4 flex flex-wrap gap-2 border-b border-slate-100 pb-3" role="tablist">
              {board.sections.map((sec, idx) => {
                const isActive = idx === activeBoardTab;
                return (
                  <button
                    key={sec.heading}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveBoardTab(idx)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                      isActive
                        ? "bg-brand-navy text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {sec.heading}
                  </button>
                );
              })}
            </div>

            {/* Board Members Cards */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {selectedBoardSection.people.map((person, idx) => (
                <div
                  key={`${selectedBoardSection.heading}-${person.name}-${idx}`}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-slate-200"
                >
                  <p className="font-bold text-sm text-slate-900">{person.name || person.role}</p>
                  {person.role && person.name && (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                      {person.role}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-600">
                Masa Bakti: SK Pengurus Pusat PII 2024–2027
              </span>
              <Link
                href="/tentang/struktur"
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-navy"
              >
                <span>Susunan Lengkap</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
