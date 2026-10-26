import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Users, ShieldCheck } from "lucide-react";
import { aboutContent } from "@/data/site-content";

const { board } = aboutContent;

export const metadata: Metadata = {
  title: "Struktur Pengurus Cabang 2024–2027",
  description:
    "Susunan kepengurusan definitif Persatuan Insinyur Indonesia Cabang Pangkalpinang berdasarkan SK Pengurus Pusat PII.",
};

export default function StrukturPage() {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <section className="relative bg-slate-900 py-20 text-white border-b border-slate-800">
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0055A4_1px,transparent_1px),linear-gradient(to_bottom,#0055A4_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="relative container space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Beranda Utama</span>
          </Link>
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {board.title}
            </h1>
            <p className="max-w-3xl text-base text-cyan-300 font-medium">
              Masa Bakti 2024–2027 — Mengemban amanah konsolidasi insinyur, penegakan etika profesi, dan kemitraan strategis pembangunan daerah.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-md bg-slate-800/80 px-3 py-1.5 text-xs text-slate-300 border border-slate-700">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Ditetapkan melalui Surat Keputusan Resmi Pengurus Pusat PII</span>
          </div>
        </div>
      </section>

      {/* Board Roster Sections */}
      <section className="container max-w-5xl space-y-12 pb-20">
        {board.sections.map((section) => (
          <div key={section.heading} className="space-y-4">
            <div className="border-b-2 border-brand-navy pb-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Users className="h-5 w-5 text-brand-blue" />
                <span>{section.heading}</span>
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {section.people.map((person, idx) => (
                <div
                  key={`${section.heading}-${person.name}-${idx}`}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-slate-300 transition"
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
          </div>
        ))}
      </section>
    </div>
  );
}
