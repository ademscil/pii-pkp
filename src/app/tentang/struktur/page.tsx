import type { Metadata } from "next";
import { aboutContent } from "@/data/site-content";

const { board } = aboutContent;

export const metadata: Metadata = {
  title: "Struktur Pengurus PII Pangkalpinang",
};

export default function StrukturPage() {
  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-br from-brand-midnight via-brand-blue/60 to-brand-midnight py-20 text-white">
        <div className="container space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Tentang Kami
          </p>
          <h1 className="text-4xl font-semibold sm:text-5xl">
            {board.title}
          </h1>
          <p className="max-w-3xl text-base text-white/75">
            Susunan kepengurusan masa bakti 2024–2027 yang memimpin kolaborasi insinyur Pangkalpinang.
          </p>
        </div>
      </section>

      <section className="container space-y-10 pb-20">
        {board.sections.map((section) => (
          <div key={section.heading} className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue/80">
              {section.heading}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {section.people.map((person, idx) => (
                <div
                  key={`${section.heading}-${person.name}-${idx}`}
                  className="rounded-[24px] border border-brand-fog bg-white p-5 shadow-sm"
                >
                  <p className="text-base font-semibold text-brand-midnight">
                    {person.name || person.role}
                  </p>
                  {person.role && person.name && (
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-600 font-medium">
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
