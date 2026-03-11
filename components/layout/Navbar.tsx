"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="theme-header sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-black tracking-[0.12em] text-[var(--kanani-brand-blue)]">
          KANANI
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-semibold md:flex">
          <Link href="/" className="transition hover:text-[var(--kanani-brand-gold-soft)]">
            Home
          </Link>
          <Link href="/products" className="transition hover:text-[var(--kanani-brand-gold-soft)]">
            Products
          </Link>
          <Link href="/#industries" className="transition hover:text-[var(--kanani-brand-gold-soft)]">
            Industries
          </Link>
          <Link href="/#about" className="transition hover:text-[var(--kanani-brand-gold-soft)]">
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="btn-theme-primary hidden rounded px-3 py-2 text-xs font-semibold transition md:inline-flex"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-[var(--kanani-line)] bg-white text-[var(--kanani-brand-blue)] md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeWidth="2" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-[var(--kanani-line)] bg-white md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-[var(--kanani-text)]"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-[var(--kanani-text)]"
            >
              Products
            </Link>
            <Link
              href="/#industries"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-[var(--kanani-text)]"
            >
              Industries
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-[var(--kanani-text)]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn-theme-primary mt-2 inline-flex w-full justify-center rounded px-4 py-2.5 text-sm font-semibold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
