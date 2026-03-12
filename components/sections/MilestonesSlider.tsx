"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { MilestoneItem } from "@/data/about";

type MilestonesSliderProps = {
  milestones: MilestoneItem[];
  autoAdvanceMs?: number;
};

export default function MilestonesSlider({ milestones, autoAdvanceMs = 4600 }: MilestonesSliderProps) {
  const [itemsPerView, setItemsPerView] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateViewport = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
        return;
      }

      if (window.innerWidth >= 640) {
        setItemsPerView(2);
        return;
      }

      setItemsPerView(1);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, milestones.length - itemsPerView),
    [itemsPerView, milestones.length],
  );
  const clampedActiveIndex = Math.min(activeIndex, maxIndex);

  useEffect(() => {
    if (maxIndex === 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, autoAdvanceMs);

    return () => window.clearInterval(timer);
  }, [autoAdvanceMs, maxIndex]);

  const slideWidth = 100 / Math.max(1, itemsPerView);
  const translate = (clampedActiveIndex * 100) / Math.max(1, itemsPerView);

  return (
    <section>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-[8%] right-[8%] top-[5.1rem] hidden border-t-2 border-[#d0d4d9] md:block" />

        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${translate}%)` }}
        >
          {milestones.map((milestone) => (
            <article
              key={`${milestone.year}-${milestone.title}`}
              className="shrink-0 px-2"
              style={{ width: `${slideWidth}%` }}
            >
              <div className="pb-7 text-center">
                <p className="text-4xl font-black text-[#bf7474]">{milestone.year}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--kanani-muted-strong)]">{milestone.title}</p>
                <span className="mt-4 inline-flex h-7 w-7 items-center justify-center rounded-full border-[6px] border-[#bf7474] bg-white shadow-[0_0_0_4px_rgba(116,191,159,0.24)]" />
              </div>

              <div className="theme-panel relative overflow-hidden rounded-2xl border border-[#c87c7c] bg-white p-3">
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-[#c87c7c] bg-white" />

                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 96vw"
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

      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={`milestone-page-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to milestone view ${index + 1}`}
            className={`h-2.5 rounded-full transition ${
              index === clampedActiveIndex ? "w-9 bg-[#bf7474]" : "w-6 bg-[#c5d1ce] hover:bg-[#9fc7b9]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
