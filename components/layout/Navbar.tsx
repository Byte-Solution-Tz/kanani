"use client";

import Link from "next/link";
import { useState } from "react";

const productMenu = [
  {
    title: "Scrap Materials",
    href: "/products?category=scrap",
    items: [
      { label: "Heavy Melting Scrap (HMS)", href: "/products/heavy-melting-scrap-hms" },
      { label: "Cast Iron & Structural Scrap", href: "/products/cast-iron-structural-scrap" },
      {
        label: "Reliable Scrap Metal Purchasing",
        href: "/products/reliable-scrap-metal-purchasing",
      },
      { label: "Efficient Scrap Processing", href: "/products/efficient-scrap-processing" },
    ],
  },
  {
    title: "Steel Products",
    href: "/products?category=steel",
    items: [
      {
        label: "TMT Bars & Reinforcement Steel",
        href: "/products/tmt-bars-reinforcement-steel",
      },
      {
        label: "Iron Sheets (Mabati) & Roofing Materials",
        href: "/products/iron-sheets-mabati-roofing-materials",
      },
      {
        label: "Structural Steel, Beams & Sections",
        href: "/products/structural-steel-beams-sections",
      },
    ],
  },
  {
    title: "Cement Supply",
    href: "/products?category=cement",
    items: [
      {
        label: "Dangote Cement (Authorized Distributor)",
        href: "/products/dangote-cement-authorized-distributor",
      },
      { label: "Bulk & Bagged Cement Supply", href: "/products/bulk-bagged-cement-supply" },
      {
        label: "Large Inventory in Secure Warehouses",
        href: "/products/secure-warehouse-cement-stock",
      },
      { label: "Fast & Reliable Delivery", href: "/products/fast-reliable-cement-delivery" },
    ],
  },
  {
    title: "Hardware Suppliers",
    href: "/products?category=hardware",
    items: [
      { label: "Timber & Construction Wood", href: "/products/timber-construction-wood" },
      { label: "Marine & Gypsum Boards", href: "/products/marine-gypsum-boards" },
      { label: "Roofing & Finishing Materials", href: "/products/roofing-finishing-materials" },
      {
        label: "Complete Range of Building Hardware",
        href: "/products/complete-range-building-hardware",
      },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
          <Link href="/#about" className="transition hover:text-[var(--kanani-brand-gold-soft)]">
            About Us
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <Link
              href="/products"
              onFocus={() => setIsProductsOpen(true)}
              className={`rounded px-3 py-2 transition ${
                isProductsOpen
                  ? "bg-[var(--kanani-brand-red)] text-white"
                  : "hover:text-[var(--kanani-brand-gold-soft)]"
              }`}
            >
              Products
            </Link>

            {isProductsOpen ? (
              <div className="absolute left-1/2 top-full z-50 w-[min(95vw,1100px)] -translate-x-1/2 pt-3">
                <div className="rounded border border-slate-200 bg-white p-7 shadow-[0_22px_55px_rgba(16,34,70,0.18)]">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {productMenu.map((section) => (
                      <div key={section.title}>
                        <Link
                          href={section.href}
                          onClick={() => setIsProductsOpen(false)}
                          className="text-xl font-semibold text-[var(--kanani-brand-red)]"
                        >
                          {section.title}
                        </Link>
                        <ul className="mt-4 space-y-2.5">
                          {section.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                onClick={() => setIsProductsOpen(false)}
                                className="text-sm text-[var(--kanani-muted-strong)] transition hover:text-[var(--kanani-brand-blue)]"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <Link href="/#industries" className="transition hover:text-[var(--kanani-brand-gold-soft)]">
            Industries
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
              href="/#about"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-semibold text-[var(--kanani-text)]"
            >
              About Us
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
