import type { Metadata } from "next";
import Link from "next/link";
import { aboutContent } from "@/data/site-content";

const { history } = aboutContent;

export const metadata: Metadata = {
  title: "Sejarah PII Pangkalpinang",
  description:
    "Kilas balik perjalanan Persatuan Insinyur Indonesia Cabang Pangkalpinang sejak 1974 hingga transformasi terkini.",
};

export default function SejarahPage() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-midnight via-brand-blue/60 to-brand-midnight text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(57,160,245,0.35),transparent_60%)]" />
        <div className="relative container flex flex-col gap-6 py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Tentang Kami
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            Sejarah PII Cabang Pangkalpinang
          </h1>
          <p className="max-w-2xl text-lg text-white/80">{history.lead}</p>
          <Link
            href="/"
            className="inline-flex w-fit items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            ← Kembali ke beranda
          </Link>
        </div>
      </section>

      <section className="container space-y-6 text-base leading-relaxed text-brand-slate">
        {history.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="bg-brand-fog py-16">
        <div className="container space-y-8">
          <h2 className="text-2xl font-semibold text-brand-midnight">
            Tonggak Perjalanan
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {history.timeline.map((item) => (
              <div
                key={item.period}
                className="rounded-[28px] border border-brand-fog bg-white p-6 shadow-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-blue/80">
                  {item.period}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-midnight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700">
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
