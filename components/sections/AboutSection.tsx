import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="theme-section-main py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDNzj-7PN4GH7yns-6TIn-b3U3mp5wL3e-B8z9Jj4nvnKKGKPMClBsbvds0wxIkk3fCgqPpz7JMlkZH9TbYct5b0gVQgjEqRSRx1z1R6Q9Sf-Y41RGNypo0maY6-KUjY8p1Hhbrp9p0y-kagjlDRokUrkFWWpIQpNfrtRZcOmIbY_ebJlhUZMBVtbA6SC-BZO1pMV1qGzulEL6HTQXQmXZFuGVBvGh9rBryhN3wEfgmWDyM2T3p3Tujv0bK-2JOETT9QDMPdc_FgGr"
            alt="Warehouse shelves filled with construction supplies"
            width={900}
            height={600}
            className="theme-border h-full max-h-[430px] w-full rounded-lg border object-cover"
          />
          <div className="absolute -bottom-5 right-0 rounded bg-[var(--kanani-brand-blue)] px-7 py-5 shadow-lg shadow-black/20 sm:right-5">
            <p className="text-3xl font-black text-white">14+</p>
            <p className="text-xs text-slate-200">Years of Experience</p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-widest text-slate-500">Who We Are</p>
          <div className="mt-2 h-[2px] w-28 bg-[var(--kanani-brand-red)] sm:w-40" />
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
            Professional Supply Solutions for Large-Scale Projects
          </h2>
          <p className="theme-muted mt-6 max-w-xl">
            Kanan Services Limited is a premier provider of essential construction material and
            industrial supplies. We pride ourselves on being a reliable partner for large-scale
            developers and independent contractors alike.
          </p>
          <p className="theme-muted mt-4 max-w-xl">
            Ensuring quality and consistency in every delivery is our core mission. From massive
            structural steel components to specialized hardware, we source only the best materials
            to support project safety and durability.
          </p>

          <Link
            href="/about"
            className="btn-theme-blue mt-8 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold"
          >
            About Us
          </Link>

          {/* <div className="theme-border mt-10 grid max-w-lg grid-cols-2 gap-6 border-t pt-6">
            <div>
              <p className="text-3xl font-black">500+</p>
              <p className="theme-muted text-sm">Global Partners</p>
            </div>
            <div>
              <p className="text-3xl font-black">24/7</p>
              <p className="theme-muted text-sm">Logistics Support</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
