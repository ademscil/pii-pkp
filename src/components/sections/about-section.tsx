"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import { aboutContent } from "@/data/site-content";

const { history, vision, board } = aboutContent;

const epochs = [
  {
    period: "1974–1999",
    title: "Era Perintisan Pertambangan & Peleburan",
    description:
      "Tonggak awal konsolidasi para insinyur tambang, metalurgi, dan mesin di Pulau Bangka saat mengoperasikan pusat peleburan timah terbesar di Mentok dan instalasi pendukung logistik perkapalan.",
    milestones: [
      "Pembentukan komisariat kerja insinyur pertambangan timah",
      "Standardisasi keselamatan kerja peleburan timah Mentok",
      "Pembangunan jaringan transmisi PLTD terisolasi pertama di Bangka",
    ],
  },
  {
    period: "2000–2019",
    title: "Era Otonomi Daerah & Koridor Industri",
    description:
      "Transformasi pasca pembentukan Provinsi Kepulauan Bangka Belitung. Insinyur sipil, geodesi, dan kelautan memimpin perencanaan masterplan bandara, pelabuhan, jembatan, dan kawasan industri regional.",
    milestones: [
      "Masterplan pengembangan Pelabuhan Pangkal Balam & Tanjung Kalian",
      "Perancangan Jembatan Emas (baskule bridge) ikon rekayasa Babel",
      "Perumusan zonasi kawasan industri terpadu Sadai (KIK Sadai)",
    ],
  },
  {
    period: "2020–2045+",
    title: "Era Hilirisasi Maju & Rekayasa Hijau",
    description:
      "Fokus pada transisi energi terbarukan, reklamasi kolong pascatambang berdaya guna, hilirisasi logam tanah jarang (REE), serta penegakan etika profesi insinyur bersertifikasi STRI.",
    milestones: [
      "Riset PLTS Terapung di kolong pascatambang timah",
      "Peta jalan hilirisasi mineral monasit & silika bernilai tambah tinggi",
      "Integrasi sertifikasi STRI dengan izin PBG dan tata ruang daerah",
    ],
  },
];

export function AboutSection() {
  const [activeEpochIndex, setActiveEpochIndex] = useState(0);
  const [activeBoardTab, setActiveBoardTab] = useState(0);

  const selectedEpoch = epochs[activeEpochIndex];
  const selectedBoardSection = board.sections[activeBoardTab] || board.sections[0];

  return (
    <section
      id="tentang"
      className="relative bg-white py-24 border-b border-slate-200"
      aria-labelledby="sejarah-heading"
    >
      <div className="container space-y-20">
        {/* Section 1: History & Epoch Timeline */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2
              id="sejarah-heading"
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Setengah Abad Menempa Peradaban Bangka Belitung
            </h2>
            <p className="text-base font-semibold text-brand-navy">
              Jejak dedikasi keinsinyuran sejak masa perintisan tambang timah hingga hilirisasi hijau.
            </p>
            <p className="text-base font-medium text-slate-700 leading-relaxed">
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

          {/* Interactive Epoch Timeline Widget (Clean, no nested card clutter) */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-navy" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Linimasa Fase Perkembangan
                </h3>
              </div>
              <span className="text-xs font-semibold text-brand-blue tabular-nums">
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
                        isActive ? "text-brand-blue" : "text-slate-700"
                      }`}
                    >
                      {ep.period}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Epoch Details (Flattened layout with top border) */}
            <div className="mt-6 border-t border-slate-200 pt-5 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                  {selectedEpoch.period}
                </span>
                <h4 className="mt-1 text-lg font-bold text-slate-900">{selectedEpoch.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {selectedEpoch.description}
                </p>
              </div>

              <div className="border-t border-slate-200/80 pt-3">
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

        {/* Section 2: Visi-Misi & Organization Board */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] border-t border-slate-200 pt-16">
          {/* Visi Misi Panel */}
          <div className="rounded-2xl bg-brand-navy p-8 text-white shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Visi & Nilai Organisasi PII</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">{vision.vision}</p>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Misi Strategis:
                </span>
                <ul className="space-y-2.5">
                  {vision.missions.map((m, idx) => (
                    <li key={m} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-bold text-cyan-400 tabular-nums">
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
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    {sec.heading}
                  </button>
                );
              })}
            </div>

            {/* Board Members List (Editorial divided roster, zero nested cards) */}
            <div className="mt-6 divide-y divide-slate-100 border-t border-b border-slate-100">
              {selectedBoardSection.people.map((person, idx) => (
                <div
                  key={`${selectedBoardSection.heading}-${person.name}-${idx}`}
                  className="flex items-center justify-between py-3 px-1 transition hover:bg-slate-50"
                >
                  <span className="font-semibold text-sm text-slate-900">{person.name || person.role}</span>
                  {person.role && person.name && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                      {person.role}
                    </span>
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
