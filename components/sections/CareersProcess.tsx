import React from "react";

const steps = [
  {
    step: "01",
    title: "Submit Your Application",
    description:
      "Send your CV and cover letter through our contact page or careers portal.",
  },
  {
    step: "02",
    title: "Application Review",
    description:
      "Our HR team reviews applications and reaches out to qualified candidates within a few business days.",
  },
  {
    step: "03",
    title: "Interview",
    description:
      "Meet with our team to discuss your experience, goals, and how you fit into the role.",
  },
  {
    step: "04",
    title: "Offer & Onboarding",
    description:
      "Successful candidates receive an offer and begin the onboarding process with our team.",
  },
];

export default function CareersProcess() {
  return (
    <section className="py-24 theme-section-main">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left content */}
          <div>
            <p className="uppercase tracking-[0.22em] text-xs theme-muted mb-3">
              How It Works
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Application Process
            </h2>

            <p className="theme-muted max-w-md leading-relaxed">
              Our hiring process is straightforward and transparent.
              We aim to move quickly while ensuring we find the right
              fit for both the candidate and our team.
            </p>

            <div className="mt-8 p-5 rounded-lg bg-[var(--kanan-bg-soft)] border theme-border">
              <p className="font-semibold text-sm mb-1">
                Typical Timeline
              </p>

              <p className="text-sm theme-muted">
                Most candidates hear back within 5 business days.
                The full process typically takes 2–3 weeks.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-10">

            {steps.map((item, index) => (
              <div key={item.step} className="flex gap-5">

                {/* Number */}
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-[var(--kanan-brand-blue)]">
                    {item.step}
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="w-px h-12 bg-[var(--kanan-line)] mt-3" />
                  )}
                </div>

                {/* Content */}
                <div>
                  <p className="font-semibold mb-1">
                    {item.title}
                  </p>

                  <p className="text-sm theme-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}