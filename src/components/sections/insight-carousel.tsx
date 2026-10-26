"use client";

import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import type { ArticleItem } from "@/data/site-content";
import "keen-slider/keen-slider.min.css";

type InsightCarouselProps = {
  id: string;
  eyebrow: string;
  title: string;
  items: ArticleItem[];
  ctaLabel: string;
  ctaHref: string;
};

export function InsightCarousel({
  id,
  eyebrow,
  title,
  items,
  ctaLabel,
  ctaHref,
}: InsightCarouselProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      origin: "center",
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.1,
          spacing: 16,
        },
      },
    },
  });

  return (
    <section
      id={id}
      className="section-spacing bg-white"
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <div className="mb-10 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-blue">
              {eyebrow}
            </p>
            <h2
              id={`${id}-heading`}
              className="mt-3 max-w-xl text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              {title}
            </h2>
          </div>
          <Link
            href={ctaHref}
            className="text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
          >
            {ctaLabel} →
          </Link>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {items.map((item) => (
            <article
              key={item.id}
              className="keen-slider__slide card flex flex-col overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold text-brand-midnight">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-slate">{item.excerpt}</p>
                <Link
                  href={item.link}
                  className="mt-auto text-sm font-semibold text-brand-blue transition hover:text-brand-navy"
                >
                  Baca →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            className="rounded-full border border-brand-fog bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-blue"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Slide sebelumnya"
          >
            Sebelumnya
          </button>
          <button
            type="button"
            className="rounded-full border border-brand-fog bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-blue"
            onClick={() => instanceRef.current?.next()}
            aria-label="Slide selanjutnya"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </section>
  );
}
