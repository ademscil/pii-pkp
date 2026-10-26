import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Target, Compass, CheckCircle2 } from "lucide-react";
import { aboutContent } from "@/data/site-content";

const { vision } = aboutContent;

export const metadata: Metadata = {
  title: "Visi & Misi Organisasi",
  description:
    "Arah strategis dan komitmen Persatuan Insinyur Indonesia Cabang Pangkalpinang menuju transformasi keinsinyuran modern.",
};

export default function VisiMisiPage() {
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
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Visi dan Misi Organisasi
            </h1>
            <p className="max-w-2xl text-base text-cyan-300 font-medium">
              Landasan idealisme dan pedoman aksi Persatuan Insinyur Indonesia Cabang Pangkalpinang.
            </p>
          </div>
        </div>
      </section>

      {/* Visi Panel */}
      <section className="container max-w-4xl space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-brand-navy">
            <Target className="h-5 w-5 text-brand-blue" />
            <h2 className="text-xl font-bold text-slate-900">Visi Utama</h2>
          </div>
          <p className="text-xl font-semibold text-slate-800 leading-relaxed">
            &ldquo;{vision.vision}&rdquo;
          </p>
        </div>
      </section>

      {/* Misi Section */}
      <section className="bg-slate-50 py-16 border-t border-b border-slate-200">
        <div className="container max-w-4xl space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Compass className="h-6 w-6 text-brand-blue" />
              <span>Misi Strategis Cabang</span>
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Tiga pilar akselerasi untuk mewujudkan insinyur berdaya saing dan berintegritas tinggi.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {vision.missions.map((mission, idx) => (
              <div
                key={mission}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-brand-blue border border-blue-200 tabular-nums">
                  0{idx + 1}
                </span>
                <p className="text-sm font-medium text-slate-700 leading-relaxed">{mission}</p>
              </div>
            ))}
          </div>

          {/* Ethics Pledge Footer */}
          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex items-start gap-4">
            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">
                Prinsip Luhur Catur Karsa Sapta Dharma Insinyur Indonesia
              </h3>
              <p className="max-w-prose text-xs text-slate-600 leading-relaxed">
                Seluruh aktivitas dan layanan cabang berakar pada kepatuhan kode etik keinsinyuran: mengutamakan keselamatan, kesehatan, dan kesejahteraan masyarakat, bersikap jujur dan adil, serta terus meningkatkan kompetensi profesi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
