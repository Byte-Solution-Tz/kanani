import { BoxesIcon, ToolsIcon, TruckIcon, WalletIcon } from "@/components/shared/icons";

const benefits = [
  {
    title: "Reliable Supply",
    description:
      "Seamless logistics chain ensuring timely delivery regardless of project scale.",
    icon: TruckIcon,
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct sourcing from manufacturers allows us to offer market-leading rates.",
    icon: WalletIcon,
  },
  {
    title: "Bulk Availability",
    description:
      "Large-scale inventory capacity to support mega-projects without shortage.",
    icon: BoxesIcon,
  },
  {
    title: "Industrial Expertise",
    description:
      "Expert consultants who understand technical industrial specifications.",
    icon: ToolsIcon,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="theme-section-brand py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black sm:text-5xl">Why Choose Kanani Services</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[var(--kanani-brand-gold-soft)]" />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded bg-white/15 text-[var(--kanani-brand-gold-soft)]">
                <benefit.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-extrabold">{benefit.title}</h3>
              <p className="mx-auto mt-2 max-w-56 text-sm text-blue-50/95">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
