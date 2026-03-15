import Link from "next/link";

export default function CareersCTA() {
  return (
    <section className="py-20 theme-section-main">
      <div className="max-w-4xl mx-auto px-6">

        <div className="theme-panel-soft rounded-2xl px-10 py-14 text-center">

          <p className="uppercase tracking-[0.22em] text-xs text-blue-200 mb-4">
            Don't see a fit?
          </p>

          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make an Impact?
          </h2>

          <p className="text-blue-100 max-w-lg mx-auto mb-8">
            If you believe you'd be a great fit but don't see your role listed,
            we would still love to hear from you.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              href="/contact"
              className="btn-theme-primary px-6 py-3 rounded-full text-sm"
            >
              Send Your CV
            </Link>

            <Link
              href="/"
              className="btn-theme-outline px-6 py-3 rounded-full text-sm"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}