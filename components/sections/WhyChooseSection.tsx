import Link from "next/link";

import { ArrowRightIcon, BoxesIcon, ToolsIcon, TruckIcon, WalletIcon } from "@/components/shared/icons";

const benefits = [
  {
    title: "Company Profile",
    description:
      "A reliable construction and industrial supply company focused on quality delivery and operational excellence.",
    icon: TruckIcon,
  },
  {
    title: "Company Culture",
    description:
      "We build long-term partnerships through transparency, consistency, and a client-first way of working.",
    icon: WalletIcon,
  },
  {
    title: "Research & Development",
    description:
      "Our team continuously improves sourcing, quality control, and logistics efficiency to serve large projects better.",
    icon: BoxesIcon,
  },
  {
    title: "Regional Reach",
    description:
      "We support contractors, developers, and industrial buyers across Tanzania with dependable supply solutions.",
    icon: ToolsIcon,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#eef0f3] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="text-sm uppercase tracking-wide text-slate-500">Company Profile</p>
            <div className="mt-3 h-1 w-48 bg-[var(--kanani-brand-red)]" />
            <h2 className="mt-4 text-4xl font-black text-[var(--kanani-text)] sm:text-5xl">Why Choose Us</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base leading-8 text-[var(--kanani-muted-strong)]">
              Kanani Services delivers professional construction and industrial supply support with
              a strong focus on quality, consistency, and responsive customer service. We combine
              reliable sourcing, technical understanding, and logistics capability to keep projects
              moving without delays.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="relative border border-white/70 bg-white px-7 py-8 shadow-[0_10px_24px_rgba(16,34,70,0.06)]"
            >
              <span className="absolute left-5 top-5 h-12 w-12 rounded-full bg-[rgba(227,31,47,0.15)]" />
              <div className="relative mb-6 flex h-12 w-12 items-center justify-center text-[var(--kanani-brand-red)]">
                <benefit.icon className="h-9 w-9" />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--kanani-text)]">{benefit.title}</h3>
              <p className="mt-4 text-base leading-8 text-[var(--kanani-muted-strong)]">{benefit.description}</p>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 text-base font-medium text-[var(--kanani-muted-strong)] transition hover:text-[var(--kanani-brand-red)]"
              >
                Read More
                <ArrowRightIcon className="h-4 w-4 text-[var(--kanani-brand-gold)]" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
