import Link from "next/link";

import {
  ArrowRightIcon,
  BuildingIcon,
  CraneIcon,
  FactoryIcon,
  LandscapeIcon,
} from "@/components/shared/icons";

const industries = [
  {
    title: "Construction Companies",
    icon: BuildingIcon,
    description:
      "Bulk cement, reinforcement steel, and hardware delivered on schedule for active site operations.",
    stat: "120+ Contractors Served",
  },
  {
    title: "Developers",
    icon: LandscapeIcon,
    description:
      "End-to-end material sourcing for residential, mixed-use, and commercial development projects.",
    stat: "50+ Developments Supplied",
  },
  {
    title: "Manufacturers",
    icon: FactoryIcon,
    description:
      "Stable industrial raw material and scrap supply chains managed with quality and consistency.",
    stat: "30+ Manufacturing Partners",
  },
  {
    title: "Industrial Buyers",
    icon: CraneIcon,
    description:
      "Flexible procurement for steel, cement, hardware, and specialty industrial requirements.",
    stat: "Tanzania-Wide Coverage",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="theme-section-main py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="text-sm uppercase tracking-wide text-slate-500">Our Reach</p>
            <div className="mt-3 h-1 w-40 bg-[var(--kanani-brand-red)]" />
            <h2 className="mt-4 text-4xl font-black leading-tight text-[var(--kanani-text)] sm:text-5xl">
              Industries We Serve
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-8 text-[var(--kanani-muted-strong)]">
              Specialized supply support tailored for diverse industrial and construction sectors.
              We combine sourcing discipline, reliable logistics, and responsive communication to
              keep projects moving.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="theme-panel rounded-xl border border-[var(--kanani-line)] px-5 py-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--kanani-bg-soft)] text-[var(--kanani-brand-blue)]">
                <industry.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-black text-[var(--kanani-text)]">{industry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--kanani-muted-strong)]">{industry.description}</p>
              <span className="mt-5 inline-flex items-center rounded-full bg-[var(--kanani-bg-soft)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--kanani-brand-blue)]">
                {industry.stat}
              </span>
            </article>
          ))}
        </div>

        <div className="theme-panel mt-12 flex flex-col items-start justify-between gap-4 rounded-xl border border-[var(--kanani-line)] px-6 py-6 md:flex-row md:items-center">
          <div>
            <p className="text-2xl font-black text-[var(--kanani-text)]">Need a custom supply plan?</p>
            <p className="mt-1 text-sm text-[var(--kanani-muted)]">
              Share your project scope and we will tailor delivery schedules and product mix.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-theme-blue inline-flex items-center gap-2 rounded px-5 py-2.5 text-sm font-bold"
          >
            Talk to Our Team
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
