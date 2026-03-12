import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentType } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MilestonesSlider from "@/components/sections/MilestonesSlider";
import { BuildingIcon, FoundationIcon, ToolsIcon, TruckIcon } from "@/components/shared/icons";
import { aboutCoreValues, aboutMilestones, type AboutCoreValueIcon } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us | Kanani Services Limited",
  description:
    "Learn who Kanan is, our mission, core values, and key milestones in our growth journey.",
};

const coreValueIconMap: Record<AboutCoreValueIcon, ComponentType<{ className?: string }>> = {
  truck: TruckIcon,
  foundation: FoundationIcon,
  tools: ToolsIcon,
  building: BuildingIcon,
};

export default function AboutPage() {
  return (
    <main className="theme-shell min-h-screen">
      <Navbar />

      <section className="theme-section-brand relative overflow-hidden px-4 py-18 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_70%_at_80%_5%,rgba(255,255,255,0.2),transparent_62%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">About Kanan</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built to Keep Construction and Industrial Projects Moving
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100">
            Kanan, operating as Kanani Services Limited, delivers dependable material supply for
            contractors, developers, and industrial buyers. Our model combines strong sourcing,
            practical logistics, and long-term customer support.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/products" className="btn-theme-primary rounded-full px-6 py-2.5 text-sm font-semibold">
              Explore Products
            </Link>
            <Link href="/contact" className="btn-theme-blue rounded-full px-6 py-2.5 text-sm font-semibold">
              Contact Team
            </Link>
          </div>
        </div>
      </section>

      <section className="theme-section-main px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <article className="theme-panel rounded-2xl border border-[var(--kanani-line)] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--kanani-muted)]">Who We Are</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-[var(--kanani-text)] sm:text-4xl">
              A trusted sourcing and logistics partner for East African projects
            </h2>
            <p className="theme-muted mt-5 text-sm leading-7 sm:text-base">
              We support both independent contractors and large organizations with responsive supply
              planning, transparent procurement, and dependable dispatch. Our team is structured to
              reduce material delays so your project timeline stays on track.
            </p>
            <p className="theme-muted mt-4 text-sm leading-7 sm:text-base">
              From bagged cement to reinforcement steel and site hardware, we focus on practical
              execution and accountable service across every order cycle.
            </p>
          </article>

          <article className="theme-section-deep rounded-2xl border border-[var(--kanani-line)] p-7 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--kanani-muted)]">Our Mission</p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-[var(--kanani-text)] sm:text-4xl">
              Deliver quality materials reliably, safely, and on schedule
            </h2>
            <p className="theme-muted mt-5 text-sm leading-7 sm:text-base">
              Our mission is to be the most dependable industrial and construction material partner
              in our markets by combining verified supply channels, disciplined inventory handling,
              and proactive customer communication.
            </p>
            <div className="mt-6 rounded-xl border border-[var(--kanani-line)] bg-white p-4">
              <p className="text-sm font-semibold text-[var(--kanani-text)]">
                Operating Focus:
                <span className="ml-1 font-normal text-[var(--kanani-muted-strong)]">
                  Quality consistency, timely delivery, and commercial fairness.
                </span>
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="theme-section-deep border-y border-[var(--kanani-line)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--kanani-muted)]">Core Values</p>
          <h2 className="mt-4 text-3xl font-black text-[var(--kanani-text)] sm:text-4xl">What Guides Us</h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutCoreValues.map((value) => {
              const Icon = coreValueIconMap[value.icon];

              return (
                <article
                  key={value.title}
                  className="theme-panel rounded-2xl border border-[var(--kanani-line)] p-6"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--kanani-bg-soft)] text-[var(--kanani-brand-blue)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-[var(--kanani-text)]">{value.title}</h3>
                  <p className="theme-muted mt-3 text-sm leading-7">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="theme-section-main px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--kanani-muted)]">
            Our Journey
          </p>
          <h2 className="mt-4 text-3xl font-black text-[var(--kanani-text)] sm:text-5xl">
            Milestones That Shaped Us
          </h2>
          <p className="theme-muted mt-4 max-w-3xl text-sm leading-7 sm:text-base">
            Our growth has been driven by operational discipline and customer trust, expanding from
            focused trading to integrated supply for construction and industry.
          </p>

          <div className="mt-10">
            <MilestonesSlider milestones={aboutMilestones} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
