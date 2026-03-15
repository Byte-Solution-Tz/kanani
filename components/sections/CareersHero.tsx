import Link from "next/link";

export default function CareersHero() {
  return (
    <section className="theme-section-brand py-24">
      <div className="max-w-6xl mx-auto px-6">

        <p className="uppercase tracking-[0.22em] text-xs text-blue-200 mb-5">
          Careers at Kanan
        </p>

        <h1 className="text-5xl font-bold text-white max-w-xl mb-6">
          Build Something That Lasts
        </h1>

        <p className="text-blue-100 max-w-lg leading-relaxed mb-8">
          At Kanan Services Limited we are building a dynamic team of
          professionals committed to excellence in scrap metals,
          steel, cement and logistics across East Africa.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#positions"
            className="btn-theme-primary px-6 py-3 rounded-full text-sm"
          >
            View Open Roles
          </a>

          <Link
            href="/contact"
            className="btn-theme-outline px-6 py-3 rounded-full text-sm"
          >
            Send Your CV
          </Link>
        </div>

      </div>
    </section>
  );
}