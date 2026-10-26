import type { Metadata } from "next";
import { aboutContent } from "@/data/site-content";

const { vision } = aboutContent;

export const metadata: Metadata = {
  title: "Visi & Misi PII Pangkalpinang",
};

export default function VisiMisiPage() {
  return (
    <div className="space-y-16">
      <section className="bg-white py-20">
        <div className="container space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue/80">
            Tentang Kami
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold text-brand-midnight sm:text-5xl">
            Visi dan Misi Cabang PII Pangkalpinang
          </h1>
          <p className="max-w-3xl text-base text-brand-slate">
            {vision.vision}
          </p>
        </div>
      </section>

      <section className="bg-brand-fog py-16">
        <div className="container grid gap-8 md:grid-cols-2">
          {vision.missions.map((mission, idx) => (
            <div
              key={mission}
              className="rounded-[28px] border border-brand-fog bg-white p-6 shadow-card"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue">
                Misi {idx + 1}
              </span>
              <p className="mt-3 text-base text-brand-midnight/90">{mission}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
