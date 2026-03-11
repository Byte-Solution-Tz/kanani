import Link from "next/link";

import { FoundationIcon, SearchIcon } from "@/components/shared/icons";

export default function Navbar() {
  return (
    <header className="theme-header sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[var(--kanani-brand-blue)] text-[var(--kanani-brand-gold-soft)]">
            <FoundationIcon className="h-4 w-4" />
          </div>
          <div className="leading-none">
            <p className="text-base font-black tracking-wide">KANANI</p>
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--kanani-brand-gold-soft)]">
              Services Limited
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-xs font-semibold md:flex">
          <a href="#" className="transition hover:text-[var(--kanani-brand-gold-soft)]">
            Home
          </a>
          <a href="#products" className="transition hover:text-[var(--kanani-brand-gold-soft)]">
            Products
          </a>
          <a href="#industries" className="transition hover:text-[var(--kanani-brand-gold-soft)]">
            Industries
          </a>
          <a href="#about" className="transition hover:text-[var(--kanani-brand-gold-soft)]">
            About Us
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="hidden text-slate-500 transition hover:text-[var(--kanani-brand-blue)] md:inline-flex"
            type="button"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
          <Link
            href="/contact"
            className="btn-theme-primary rounded px-3 py-2 text-xs font-semibold transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
