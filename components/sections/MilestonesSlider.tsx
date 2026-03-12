"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MilestoneItem } from "@/data/about";

type MilestonesSliderProps = {
  milestones: MilestoneItem[];
  autoAdvanceMs?: number;
};

export default function MilestonesSlider({ milestones, autoAdvanceMs = 4300 }: MilestonesSliderProps) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (milestones.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % milestones.length);
    }, autoAdvanceMs);

    return () => window.clearInterval(timer);
  }, [autoAdvanceMs, milestones.length]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const firstSlide = rail.querySelector<HTMLElement>("[data-slide]");
    if (!firstSlide) {
      return;
    }

    const railStyles = window.getComputedStyle(rail);
    const gapValue = railStyles.columnGap || railStyles.gap || "0";
    const gap = Number.parseFloat(gapValue) || 0;
    const step = firstSlide.offsetWidth + gap;

    rail.scrollTo({ left: activeIndex * step, behavior: "smooth" });
  }, [activeIndex]);

  const goTo = (index: number) => {
    const total = milestones.length;
    if (total === 0) {
      return;
    }
    setActiveIndex((index + total) % total);
  };

  return (
    <section>
      <div className="relative">
        <div className="absolute left-[11%] right-[11%] top-[5.2rem] hidden border-t-2 border-[var(--kanani-line)] md:block" />

        <div
          ref={railRef}
          className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {milestones.map((milestone) => (
            <article key={`${milestone.year}-${milestone.title}`} data-slide className="min-w-[90%] sm:min-w-[72%] md:min-w-[calc((100%-3rem)/3)]">
              <div className="pb-8 text-center">
                <p className="text-4xl font-black text-[var(--kanani-brand-red)]">{milestone.year}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--kanani-muted-strong)]">{milestone.title}</p>
                <span className="mt-4 inline-flex h-3.5 w-3.5 rounded-full bg-[var(--kanani-brand-red)] md:hidden" />
                <span className="absolute left-1/2 top-[4.45rem] hidden h-7 w-7 -translate-x-1/2 rounded-full border-[6px] border-[var(--kanani-brand-red)] bg-white shadow-[0_0_0_4px_rgba(253,17,21,0.2)] md:block" />
              </div>

              <div className="theme-panel overflow-hidden rounded-2xl border border-[var(--kanani-line)] bg-white p-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    sizes="(min-width: 768px) 32vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="px-3 pb-4 pt-5 text-center text-base font-semibold leading-7 text-[var(--kanani-text)]">
                  {milestone.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="View previous milestone"
          className="btn-theme-outline rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider"
        >
          Prev
        </button>

        <div className="flex items-center gap-2">
          {milestones.map((milestone, index) => (
            <button
              key={`${milestone.year}-dot`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${milestone.year} milestone`}
              className={`h-2.5 w-7 rounded-full transition ${
                index === activeIndex
                  ? "bg-[var(--kanani-brand-red)]"
                  : "bg-[color-mix(in_srgb,var(--kanani-brand-red)_22%,white)] hover:bg-[color-mix(in_srgb,var(--kanani-brand-red)_45%,white)]"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="View next milestone"
          className="btn-theme-outline rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider"
        >
          Next
        </button>
      </div>
    </section>
  );
}
