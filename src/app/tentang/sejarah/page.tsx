import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { aboutContent } from "@/data/site-content";

const { history } = aboutContent;

export const metadata: Metadata = {
  title: "Sejarah Perjalanan Keinsinyuran",
  description:
    "Kilas balik perjalanan Persatuan Insinyur Indonesia Cabang Pangkalpinang sejak 1974 hingga era hilirisasi dan transisi hijau.",
};

export default function SejarahPage() {
  return (
    <div className="space-y-16">
      {/* Header Section (Technical Blueprint Editorial, No AI mesh gradients) */}
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
              Sejarah PII Cabang Pangkalpinang
            </h1>
            <p className="max-w-2xl text-base text-cyan-300 font-medium">
              Lima dekade kepemimpinan profesi keinsinyuran mengawal peradaban industri dan pembangunan kepulauan Bangka Belitung.
            </p>
          </div>
          <p className="max-w-3xl text-base text-slate-300 leading-relaxed">
            {history.lead}
          </p>
        </div>
      </section>

      {/* Narrative Context (Clean max-w-prose for 65-75ch optimal line length) */}
      <section className="container max-w-prose space-y-6 text-base leading-relaxed text-slate-700">
        <div className="space-y-4">
          {history.paragraphs.map((paragraph, idx) => (
            <p key={`hist-p-${idx}`} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Historical Milestones */}
      <section className="bg-slate-50 py-16 border-t border-b border-slate-200">
        <div className="container space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Tonggak Sejarah Keinsinyuran Daerah
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Fase evolusi peranan insinyur dari era peleburan timah primer hingga hilirisasi hijau dan teknologi modern.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {history.timeline.map((item) => (
              <div
                key={item.period}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm space-y-3"
              >
                <div className="flex items-center gap-2 text-brand-navy">
                  <Clock className="h-4 w-4 text-brand-blue" />
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue tabular-nums">
                    Tahun {item.period}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
