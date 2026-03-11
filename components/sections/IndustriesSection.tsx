import { BuildingIcon, CraneIcon, FactoryIcon, LandscapeIcon } from "@/components/shared/icons";

const industries = [
  { title: "Construction Companies", icon: BuildingIcon },
  { title: "Developers", icon: LandscapeIcon },
  { title: "Manufacturers", icon: FactoryIcon },
  { title: "Industrial Buyers", icon: CraneIcon },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="theme-section-main py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="theme-gold text-xs font-extrabold uppercase tracking-[0.2em]">Our Reach</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Industries We Serve</h2>
          </div>
          <p className="theme-muted max-w-sm text-sm">
            Specialized supply solutions tailored for diverse industrial and development sectors.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="theme-panel theme-border rounded border p-6 transition hover:border-[color:rgba(215,173,85,0.42)]"
            >
              <industry.icon className="h-6 w-6 text-[var(--kanani-brand-gold-soft)]" />
              <h3 className="mt-4 text-lg font-extrabold">{industry.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
