import Image from "next/image";
import Link from "next/link";

import ProductGrid from "@/components/products/ProductGrid";
import { FoundationIcon } from "@/components/shared/icons";
import type { ProductDetailEntry, ProductFeature, ProductResource } from "@/data/products";

type ProductDetailProps = {
  product: ProductDetailEntry;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <main className="min-h-screen bg-[#060f1f] text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#060f1f]/95 backdrop-blur">
        <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-[var(--kanani-brand-red-soft)]">
                <FoundationIcon className="h-5 w-5" />
              </span>
              <span className="text-xl font-black uppercase tracking-wide text-white">Kanani Services</span>
            </Link>

            <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
              <Link href="/" className="text-slate-300 transition hover:text-white">
                Home
              </Link>
              <Link href="/products" className="border-b-2 border-[var(--kanani-brand-red)] pb-1 text-white">
                Products
              </Link>
              <Link href="#" className="text-slate-300 transition hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-slate-300 transition hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <label className="hidden sm:block">
              <input
                type="search"
                placeholder="Search Materials..."
                className="h-10 rounded-lg border border-slate-700 bg-slate-900 px-4 text-sm text-slate-200 placeholder:text-slate-400 focus:border-[var(--kanani-brand-red)] focus:outline-none"
              />
            </label>
            <button type="button" className="rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-slate-300">
              <CartIcon className="h-5 w-5" />
            </button>
            <button type="button" className="rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-slate-300">
              <UserIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          {product.breadcrumbs.map((crumb, index) => {
            const isLast = index === product.breadcrumbs.length - 1;
            return (
              <div key={crumb} className="flex items-center gap-2">
                {index > 0 ? <ChevronRightIcon className="h-3 w-3 text-slate-500" /> : null}
                <span className={isLast ? "font-semibold text-[var(--kanani-brand-gold-soft)]" : ""}>{crumb}</span>
              </div>
            );
          })}
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
              <Image
                src={product.heroImage}
                alt={product.title}
                fill
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded bg-[var(--kanani-brand-red)] px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
                {product.badge}
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-black tracking-tight text-white">{product.title}</h1>
            <p className="mt-4 max-w-3xl text-xl leading-relaxed text-slate-300">{product.summary}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-lg bg-[var(--kanani-brand-blue)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--kanani-brand-red)]">
                <QuoteIcon className="h-4 w-4" />
                Get a Quote
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:border-[var(--kanani-brand-gold-soft)]">
                <ShareIcon className="h-4 w-4" />
                Share Specification
              </button>
            </div>

            <div className="mt-10 space-y-10 border-t border-slate-800 pt-10">
              <section>
                <SectionHeading colorClass="bg-[var(--kanani-brand-gold)]" title="Product Overview" />
                <p className="mt-4 leading-relaxed text-slate-300">{product.overview}</p>
                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {product.features.map((feature) => (
                    <FeatureCard key={feature.title} feature={feature} />
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading colorClass="bg-[var(--kanani-brand-red)]" title="Common Applications" />
                <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.applications.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-lg border-l-2 border-[var(--kanani-brand-gold)] bg-slate-900/60 px-4 py-3 text-slate-300"
                    >
                      <span className="h-2 w-2 rounded-full bg-[var(--kanani-brand-red-soft)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionHeading colorClass="bg-[var(--kanani-brand-blue-strong)]" title="Technical Specifications" />
                <div className="mt-6 overflow-hidden rounded-xl border border-slate-800">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#1e2a3e] text-xs uppercase tracking-wider text-[var(--kanani-brand-gold-soft)]">
                      <tr>
                        <th className="px-6 py-4">Property</th>
                        <th className="px-6 py-4">Standard Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {product.specifications.map((spec, index) => (
                        <tr key={spec.property} className={index % 2 === 1 ? "bg-slate-900/40" : ""}>
                          <td className="px-6 py-4 font-semibold text-white">{spec.property}</td>
                          <td className="px-6 py-4 text-slate-300">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/65 p-6">
              <h4 className="inline-block border-b border-[var(--kanani-brand-gold)] pb-2 text-sm font-bold uppercase tracking-widest text-white">
                Resources
              </h4>
              <div className="mt-4 space-y-3">
                {product.resources.map((resource) => (
                  <ResourceCard key={resource.title} resource={resource} />
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl bg-[var(--kanani-brand-blue)] p-7 text-white shadow-xl">
              <h4 className="text-4xl font-black leading-tight">Ready for a volume order?</h4>
              <p className="mt-4 text-sm leading-relaxed text-blue-100">
                Connect with our logistics team for bulk pricing, shipping timelines, and custom
                material sorting options.
              </p>
              <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--kanani-brand-red)] px-6 py-3 font-bold text-white transition hover:bg-red-700">
                <MailMiniIcon className="h-4 w-4" />
                Contact Sales Team
              </button>
              <div className="mt-5 border-t border-white/20 pt-4 text-sm">
                <p className="mb-2 flex items-center gap-2">
                  <PhoneMiniIcon className="h-4 w-4 text-[var(--kanani-brand-gold-soft)]" />
                  +1 (555) 012-3456
                </p>
                <p className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-[var(--kanani-brand-gold-soft)]" />
                  Mon-Fri: 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <h5 className="mb-2 flex items-center gap-2 font-bold text-white">
                <TruckMiniIcon className="h-4 w-4 text-[var(--kanani-brand-red-soft)]" />
                Global Logistics
              </h5>
              <p className="text-xs leading-relaxed text-slate-400">
                We offer multi-modal transport including containerized sea freight, rail, and heavy
                truck delivery for domestic clients.
              </p>
            </div>
          </aside>
        </div>

        <ProductGrid products={product.relatedProducts} />
      </section>

      <footer className="border-t border-slate-800 bg-[#0a1427] py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 text-slate-400 sm:px-6 md:grid-cols-4 lg:px-8">
          <div>
            <div className="mb-5 flex items-center gap-2 text-white">
              <span className="text-[var(--kanani-brand-red-soft)]">
                <FoundationIcon className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold uppercase">Kanani Services</span>
            </div>
            <p className="text-sm leading-relaxed">
              A global leader in industrial metal supply and circular economy solutions since 1998.
            </p>
          </div>
          <FooterColumn
            title="Solutions"
            links={["Recycling Streams", "Metal Processing", "Logistics Management", "Custom Sorting"]}
          />
          <FooterColumn
            title="Company"
            links={["About Us", "Careers", "Sustainability", "Investor Relations"]}
          />
          <div>
            <p className="mb-5 inline-block border-b border-[var(--kanani-brand-gold)] pb-1 text-xs font-bold uppercase tracking-widest text-white">
              Connect
            </p>
            <div className="mb-5 flex gap-3 text-slate-300">
              <SocialSquare icon="globe" />
              <SocialSquare icon="group" />
              <SocialSquare icon="at" />
            </div>
            <p className="text-xs">© 2024 Kanani Services Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ title, colorClass }: { title: string; colorClass: string }) {
  return (
    <h3 className="flex items-center gap-3 text-3xl font-bold text-white">
      <span className={`h-8 w-1.5 rounded-full ${colorClass}`} />
      {title}
    </h3>
  );
}

function FeatureCard({ feature }: { feature: ProductFeature }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--kanani-brand-red)] text-[11px] font-black uppercase text-white">
        {feature.icon === "verified" ? "V" : "E"}
      </span>
      <div>
        <h4 className="font-bold text-white">{feature.title}</h4>
        <p className="text-sm text-slate-400">{feature.description}</p>
      </div>
    </div>
  );
}

function ResourceCard({ resource }: { resource: ProductResource }) {
  const kindStyles: Record<ProductResource["kind"], string> = {
    pdf: "bg-[var(--kanani-brand-red)] text-white",
    sheet: "bg-[var(--kanani-brand-gold)] text-[#122445]",
    spec: "bg-slate-600 text-white",
  };

  return (
    <a
      href="#"
      className="group flex items-center justify-between rounded-lg border border-slate-800 bg-[#0a162b] p-4 transition hover:border-[var(--kanani-brand-red)]"
    >
      <div className="flex items-center gap-3">
        <span className={`inline-flex h-6 min-w-6 items-center justify-center rounded text-[10px] font-bold ${kindStyles[resource.kind]}`}>
          {resource.kind === "pdf" ? "PDF" : resource.kind === "sheet" ? "SDS" : "SPEC"}
        </span>
        <div>
          <p className="text-sm font-bold text-white">{resource.title}</p>
          <p className="text-xs text-slate-400">{resource.size}</p>
        </div>
      </div>
      <DownloadIcon className="h-4 w-4 text-slate-400 transition group-hover:text-[var(--kanani-brand-red-soft)]" />
    </a>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="mb-5 inline-block border-b border-[var(--kanani-brand-gold)] pb-1 text-xs font-bold uppercase tracking-widest text-white">
        {title}
      </p>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="transition hover:text-[var(--kanani-brand-red-soft)]">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialSquare({ icon }: { icon: "globe" | "group" | "at" }) {
  const map = {
    globe: <GlobeIcon className="h-4 w-4" />,
    group: <UsersIcon className="h-4 w-4" />,
    at: <AtIcon className="h-4 w-4" />,
  };

  return (
    <button
      type="button"
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 transition hover:border-[var(--kanani-brand-red)] hover:text-white"
    >
      {map[icon]}
    </button>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="m9 6 6 6-6 6" strokeWidth="2" />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M12 3v12" strokeWidth="2" />
      <path d="m7 10 5 5 5-5" strokeWidth="2" />
      <path d="M4 20h16" strokeWidth="2" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="5" y="4" width="14" height="16" rx="2" strokeWidth="2" />
      <path d="M8 8h8M8 12h8M8 16h5" strokeWidth="2" />
    </svg>
  );
}

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="18" cy="5" r="2" strokeWidth="2" />
      <circle cx="6" cy="12" r="2" strokeWidth="2" />
      <circle cx="18" cy="19" r="2" strokeWidth="2" />
      <path d="m8 12 8-6M8 12l8 6" strokeWidth="2" />
    </svg>
  );
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M3 4h2l2 11h10l2-8H7" strokeWidth="2" />
      <circle cx="10" cy="19" r="1.5" strokeWidth="2" />
      <circle cx="17" cy="19" r="1.5" strokeWidth="2" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="12" cy="8" r="3" strokeWidth="2" />
      <path d="M5 20a7 7 0 0 1 14 0" strokeWidth="2" />
    </svg>
  );
}

function MailMiniIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="2" />
      <path d="m4 8 8 6 8-6" strokeWidth="2" />
    </svg>
  );
}

function PhoneMiniIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M7 4h3l2 5-2 1a14 14 0 0 0 4 4l1-2 5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 2-2Z" strokeWidth="2" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="8" strokeWidth="2" />
      <path d="M12 8v5l3 2" strokeWidth="2" />
    </svg>
  );
}

function TruckMiniIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M2 7h11v8H2z" strokeWidth="2" />
      <path d="M13 10h4l3 3v2h-7z" strokeWidth="2" />
      <circle cx="7" cy="18" r="2" strokeWidth="2" />
      <circle cx="17" cy="18" r="2" strokeWidth="2" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" strokeWidth="2" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="9" cy="9" r="3" strokeWidth="2" />
      <circle cx="17" cy="10" r="2.5" strokeWidth="2" />
      <path d="M3 20a6 6 0 0 1 12 0M14 20a4.5 4.5 0 0 1 7 0" strokeWidth="2" />
    </svg>
  );
}

function AtIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M15 12a3 3 0 1 1-3-3c2 0 3 1.3 3 3v3c0 1 .6 1.5 1.4 1.5.8 0 1.6-.6 1.6-2.5 0-3.7-2.9-6.5-6.5-6.5S5 10.3 5 14s2.8 6.5 6.5 6.5c1.9 0 3.3-.5 4.3-1.4" strokeWidth="2" />
    </svg>
  );
}
