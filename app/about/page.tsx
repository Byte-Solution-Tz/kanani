import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MilestonesSlider, { type MilestoneItem } from "@/components/sections/MilestonesSlider";
import { BuildingIcon, FoundationIcon, ToolsIcon, TruckIcon } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "About Us | Kanani Services Limited",
  description:
    "Learn who Kanan is, our mission, core values, and key milestones in our growth journey.",
};

const coreValues = [
  {
    title: "Reliability First",
    description:
      "We commit to consistent stock availability and dependable delivery windows for active projects.",
    icon: TruckIcon,
  },
  {
    title: "Integrity in Supply",
    description:
      "We operate with transparent pricing, honest communication, and accountability in every order.",
    icon: FoundationIcon,
  },
  {
    title: "Quality & Safety",
    description:
      "We prioritize compliant materials and responsible handling to support safe, long-lasting outcomes.",
    icon: ToolsIcon,
  },
  {
    title: "Partnership Mindset",
    description:
      "We build long-term relationships with contractors, developers, and industrial buyers across East Africa.",
    icon: BuildingIcon,
  },
];

const milestones: MilestoneItem[] = [
  {
    year: "2009",
    title: "Scrap Metal Operations",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXCIN_i77zC2-U6_pSxIX_jIWnn5zQqABlqV7w_8UdcWw2HXLMDe2a73D8Or-2IRYkJRC6GHrUY4t-WFreb6bUseOi39Hr67iCRZcklQs2a9qmcTxvjqHCOWNE--m4YeRYtYclINCrZOgke0LkpP82FyVa-g4bIgCvUBnU8HWYCpnpIR5KV1OPfDeTxPMESDdq0t2KHFHyZfWwcqVbnKVte3zgl0ASGW_u-KQ5A7SHn5aGLsB5NePe93gP1aomVcVG4gbBizeHxnWI",
    caption: "Kanan began operations in scrap metal sourcing and processing.",
  },
  {
    year: "2011",
    title: "Plastics Recycling",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsEtlepplJ6mw_D9ug1ecMZ0ky9FKF7P69nu6JCPeAsN0aWUCXe7C2jA_xpBll6ZQzmeNmBxFq7jGWSNTDuYY_SfhNMlqE6KtxLohM-1ulZKjgE4w6TWmtr6d5ePukAcIYpKI5h-NlNm2r-gZAy29QXuYoaup6Ie10Yb28RZYDewkQ1Qn7NkZm9FveGe4W-2jkVPnwg-ioRyA7nLlt5nA5UtT-btUOHWORQzMJRjd6VHDc4OfNd-tHzgVghVqRxVi2Ni71DU5KzSZt",
    caption: "Expanded into plastics recycling with structured sorting and reprocessing lines.",
  },
  {
    year: "2017",
    title: "Logistics Expansion",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvAn9SbafEwGUsve5C8c_aSCYGWPeuQlttatT-Jm70yjBqxyk6MSUam91zGe5UNbgLKcVB4WbouGDjYjJyhCgllssvQC1H51yCqldsUcBug5pclS7JeIzAr7SOepz05taYzGpzP36-5uN8hSr40a-eCpS5e-ztiA6QspO9ntwFMYpgzPIwjS23VYcTvwx3e6NjQ_VTyqwaiOFKMpbUg7oyv23NotfSCXvQXJN2zo8Q00eS7S6jjHHolsU-RaCMXcwxtDvQd6cjuLj",
    caption: "Scaled logistics capabilities to support larger and time-sensitive supply contracts.",
  },
  {
    year: "2019",
    title: "Industrial Recycling Area",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3PZYE8vS1VsCZESjsBmRxj9AgcIH2WNiCgJJypcSY4xyw4sCwl3__lF3kQYXcBE4VOJZmN7FdR7vvfnSl2vsRbKOPYkt2xmmF5A7GaJajUGVSX_dZTZ1XwcqMTeS9sbE_RByQNREFn8s5Cej4AfEuVj795vrTvZLxbX0bCwk3bkrqu2C0prDiUf0hLValAGimB_jqWHXgzsadM-9Y8Y31N6oduqpxVPOc-ShM6oN_kDAPBiX6NliQphyhrnMD4KReh5bkaStNuY7N",
    caption: "Expanded industrial area dedicated to higher-volume recycling operations.",
  },
  {
    year: "2021",
    title: "Hardware Supply Added",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCz8Tddr83Lrz8iEd5qRFd_HPiHMLwGa1YXbt6vSCsjNZprNlJu_BVsZx1-DifX-q8OnrWJKJTg10yasEdoOam0siHjJO_s2XlPIwLZd6QGI4e3aG_yRWW2e0Il54UdTm-QZDClkx2yhv_Ais0NV-hTrSfUsu4hMift0OYNRRXJqdJvBYS-W5p7AeELYDpTHq0fGWSeVwnxwd5I2JlLm4TdF5M89VVjaeExcXg0k7UNVtVSMaSVi8Bf_D9hHKxhgUzEVitRNy3CW212",
    caption: "Launched hardware supply lines to serve construction and industrial buyers end-to-end.",
  },
  {
    year: "2023",
    title: "Logistics Trucks Fleet",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahCr8hFHGKBMe7VLmP2oKg7gBdEM1lo2fQr7FxD0WktDO9498N1xGRAMHbQb-rPAL0HzcZTCJ3d2PQzzz0qN1erPJh6bC608p2EPk0a3iNEd5wUEjaAu-S9bSExOktHSRo-6F1m9xuzgTewkO0u8e5b57vbI586oMpvbQLwep500w6PqG9aUdncCRf1mQrKf2kUp5uoQ9MZKGrpJh0L7CmvDjNzWjevJiHWsTYXk_wsXsarSmrhSxHLNux8PuHzzYmekvk9S9hao",
    caption: "Added logistics trucks to improve dispatch control and last-mile reliability.",
  },
  {
    year: "2025",
    title: "Own Office & Industry Site",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvAn9SbafEwGUsve5C8c_aSCYGWPeuQlttatT-Jm70yjBqxyk6MSUam91zGe5UNbgLKcVB4WbouGDjYjJyhCgllssvQC1H51yCqldsUcBug5pclS7JeIzAr7SOepz05taYzGpzP36-5uN8hSr40a-eCpS5e-ztiA6QspO9ntwFMYpgzPIwjS23VYcTvwx3e6NjQ_VTyqwaiOFKMpbUg7oyv23NotfSCXvQXJN2zo8Q00eS7S6jjHHolsU-RaCMXcwxtDvQd6cjuLj",
    caption: "Opened our own office and industry facility to support long-term growth.",
  },
];

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
            {coreValues.map((value) => (
              <article
                key={value.title}
                className="theme-panel rounded-2xl border border-[var(--kanani-line)] p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--kanani-bg-soft)] text-[var(--kanani-brand-blue)]">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-[var(--kanani-text)]">{value.title}</h3>
                <p className="theme-muted mt-3 text-sm leading-7">{value.description}</p>
              </article>
            ))}
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
            <MilestonesSlider milestones={milestones} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
