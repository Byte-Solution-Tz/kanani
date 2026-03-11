import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/products/ProductGrid";
import type { ProductDetailEntry, ProductFeature, ProductResource } from "@/data/products";

type ProductDetailProps = {
  product: ProductDetailEntry;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <main className="theme-shell min-h-screen">
      <Navbar />

      <section className="border-b border-[var(--kanani-line)] bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-[var(--kanani-muted)]">
            {product.breadcrumbs.map((crumb, index) => {
              const isLast = index === product.breadcrumbs.length - 1;
              return (
                <div key={crumb} className="flex items-center gap-2">
                  {index > 0 ? <ChevronRightIcon className="h-3 w-3 text-slate-400" /> : null}
                  <span className={isLast ? "font-semibold text-[var(--kanani-brand-blue)]" : ""}>{crumb}</span>
                </div>
              );
            })}
          </nav>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-[var(--kanani-line)] bg-slate-100 shadow-[var(--kanani-shadow-soft)]">
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

            <h1 className="mt-6 text-4xl font-black tracking-tight text-[var(--kanani-text)] sm:text-5xl">
              {product.title}
            </h1>
            <p className="theme-muted mt-4 max-w-3xl text-lg leading-relaxed">{product.summary}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-theme-blue inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold"
              >
                <QuoteIcon className="h-4 w-4" />
                Get a Quote
              </Link>
              <button
                type="button"
                className="btn-theme-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold"
              >
                <ShareIcon className="h-4 w-4" />
                Share Specification
              </button>
            </div>

            <div className="mt-10 space-y-10 border-t border-[var(--kanani-line)] pt-10">
              <section>
                <SectionHeading colorClass="bg-[var(--kanani-brand-gold)]" title="Product Overview" />
                <p className="theme-muted mt-4 leading-relaxed">{product.overview}</p>
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
                      className="flex items-center gap-3 rounded-xl border border-[var(--kanani-line)] bg-white px-4 py-3 text-[var(--kanani-muted-strong)]"
                    >
                      <span className="h-2 w-2 rounded-full bg-[var(--kanani-brand-red-soft)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionHeading colorClass="bg-[var(--kanani-brand-blue-strong)]" title="Technical Specifications" />
                <div className="mt-6 overflow-hidden rounded-xl border border-[var(--kanani-line)] bg-white">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[var(--kanani-brand-blue)] text-xs uppercase tracking-wider text-white">
                      <tr>
                        <th className="px-6 py-4">Property</th>
                        <th className="px-6 py-4">Standard Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--kanani-line)]">
                      {product.specifications.map((spec, index) => (
                        <tr key={spec.property} className={index % 2 === 1 ? "bg-[var(--kanani-bg-soft)]/60" : ""}>
                          <td className="px-6 py-4 font-semibold text-[var(--kanani-text)]">{spec.property}</td>
                          <td className="px-6 py-4 text-[var(--kanani-muted-strong)]">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="theme-panel rounded-2xl border border-[var(--kanani-line)] p-6">
              <h4 className="inline-block border-b border-[var(--kanani-brand-gold)] pb-2 text-sm font-bold uppercase tracking-widest text-[var(--kanani-text)]">
                Resources
              </h4>
              <div className="mt-4 space-y-3">
                {product.resources.map((resource) => (
                  <ResourceCard key={resource.title} resource={resource} />
                ))}
              </div>
            </div>

            <div className="theme-section-brand relative overflow-hidden rounded-2xl p-7 shadow-[var(--kanani-shadow-soft)]">
              <h4 className="text-3xl font-black leading-tight text-white">Ready for a volume order?</h4>
              <p className="mt-4 text-sm leading-relaxed text-blue-100">
                Connect with our logistics team for bulk pricing, shipping timelines, and custom
                material sorting options.
              </p>
              <Link
                href="/contact"
                className="btn-theme-primary mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold"
              >
                <MailMiniIcon className="h-4 w-4" />
                Contact Sales Team
              </Link>
              <div className="mt-5 border-t border-white/20 pt-4 text-sm text-white">
                <p className="mb-2 flex items-center gap-2">
                  <PhoneMiniIcon className="h-4 w-4 text-[var(--kanani-brand-gold-soft)]" />
                  +255 745 120 612
                </p>
                <p className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-[var(--kanani-brand-gold-soft)]" />
                  Mon-Fri: 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="theme-panel rounded-2xl border border-[var(--kanani-line)] p-6">
              <h5 className="mb-2 flex items-center gap-2 font-bold text-[var(--kanani-text)]">
                <TruckMiniIcon className="h-4 w-4 text-[var(--kanani-brand-red-soft)]" />
                Global Logistics
              </h5>
              <p className="text-xs leading-relaxed text-[var(--kanani-muted-strong)]">
                We offer multi-modal transport including containerized sea freight, rail, and heavy
                truck delivery for domestic clients.
              </p>
            </div>
          </aside>
        </div>

        <div className="mx-auto max-w-7xl">
          <ProductGrid products={product.relatedProducts} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SectionHeading({ title, colorClass }: { title: string; colorClass: string }) {
  return (
    <h3 className="flex items-center gap-3 text-3xl font-bold text-[var(--kanani-text)]">
      <span className={`h-8 w-1.5 rounded-full ${colorClass}`} />
      {title}
    </h3>
  );
}

function FeatureCard({ feature }: { feature: ProductFeature }) {
  return (
    <div className="theme-panel flex items-start gap-4 rounded-xl border border-[var(--kanani-line)] p-4">
      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--kanani-brand-red)] text-[11px] font-black uppercase text-white">
        {feature.icon === "verified" ? "V" : "E"}
      </span>
      <div>
        <h4 className="font-bold text-[var(--kanani-text)]">{feature.title}</h4>
        <p className="text-sm text-[var(--kanani-muted)]">{feature.description}</p>
      </div>
    </div>
  );
}

function ResourceCard({ resource }: { resource: ProductResource }) {
  const kindStyles: Record<ProductResource["kind"], string> = {
    pdf: "bg-[var(--kanani-brand-red)] text-white",
    sheet: "bg-[var(--kanani-brand-gold)] text-[#122445]",
    spec: "bg-[var(--kanani-brand-blue)] text-white",
  };

  return (
    <a
      href="#"
      className="group flex items-center justify-between rounded-lg border border-[var(--kanani-line)] bg-white p-4 transition hover:border-[var(--kanani-brand-red-soft)]"
    >
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-6 min-w-6 items-center justify-center rounded text-[10px] font-bold ${kindStyles[resource.kind]}`}
        >
          {resource.kind === "pdf" ? "PDF" : resource.kind === "sheet" ? "SDS" : "SPEC"}
        </span>
        <div>
          <p className="text-sm font-bold text-[var(--kanani-text)]">{resource.title}</p>
          <p className="text-xs text-[var(--kanani-muted)]">{resource.size}</p>
        </div>
      </div>
      <DownloadIcon className="h-4 w-4 text-[var(--kanani-muted)] transition group-hover:text-[var(--kanani-brand-red-soft)]" />
    </a>
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
