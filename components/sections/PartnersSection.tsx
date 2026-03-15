import Image from "next/image";

import { partners } from "@/data/partners";

export default function PartnersSection() {
  return (
    <section id="partners" className="theme-section-main py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-wide text-slate-500">Our Network</p>
          <div className="mt-3 mx-auto h-1 w-40 bg-[var(--kanan-brand-red)]" />
          <h2 className="mt-4 text-4xl font-black leading-tight text-[var(--kanan-text)] sm:text-5xl">
            Trusted Partners
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center rounded-xl border border-[var(--kanan-line)] bg-white p-8 transition-all duration-300 hover:border-[var(--kanan-brand-blue)] hover:shadow-[0_10px_30px_rgba(1,72,187,0.15)]"
            >
              <div className="relative h-20 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
