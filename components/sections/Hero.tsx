import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/shared/icons";

export default function Hero() {
  return (
    <section className="relative min-h-[83vh] overflow-hidden text-white">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1UOSNBIk4TnSSMwddbR92xfHyfrdnCLBar08u7GuBXN-4prYnH7YUhfpHgQBjLvZS_woZ91ADURqViJPFWHuRp0HBdLM3RyqUCMjMaxMeeuRIzUfJmLkgB9shxL1pnl3A3CkWBj3si9cWUcQIkAZEj7yn9-Sdn3Ry9wSBjbyjTKsw8LGUP3Z0I8tWyvarvo2zFwU2MUFj0ag8IKY628Fl6OtctDqsSCyytof-fxbmelEhqJXTshIwPcNetr7xoXaTfivXLVUU6-GH"
        alt="Construction site with cranes and structural concrete"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="hero-fade absolute inset-x-0 bottom-0 h-28" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-20 sm:px-6 lg:min-h-[83vh] lg:px-8">
        <div className="max-w-3xl">
          <p className="badge-theme mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em]">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--kanani-brand-gold-soft)]" />
            ISO 9001 CERTIFIED SUPPLIER
          </p>

          <h1 className="text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-7xl">
            Trusted Supplier of <span className="theme-gold">Cement, Steel</span>, Scrap
            <br />
            &amp; Hardware
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slate-200 sm:text-lg">
            Reliable supply solutions for contractors, developers, and industrial buyers across the
            region. Delivering excellence since 2005.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="btn-theme-primary inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-bold transition"
            >
              View Products
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-theme-gold rounded px-6 py-3 text-sm font-bold transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
