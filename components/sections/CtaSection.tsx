import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="theme-section-main pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="theme-panel-soft theme-border flex flex-col items-center justify-between gap-8 rounded-lg border px-6 py-10 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-black sm:text-4xl">Need construction materials for your project?</h2>
            <p className="mt-2 text-sm text-blue-100">
              Contact Kanani Services Limited today for a detailed quote and consulting.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-theme-gold whitespace-nowrap rounded px-6 py-3 text-sm font-bold transition"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
