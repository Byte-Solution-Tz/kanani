"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type CategoryItem = {
  key: string;
  title: string;
  heroTitle: string;
  description: string;
  image: string;
};

const categories: CategoryItem[] = [
  {
    key: "scrap",
    title: "Scrap Materials",
    heroTitle: "Scrap Materials",
    description:
      "High-quality recycled metals sorted for foundries, fabricators, and industrial reuse. Consistent grading and dependable logistics for bulk orders.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL3XeE0oMhxaJHoPJNqEDXc6X7_lKUT7_qz9eUtXpoXo-FMoovrQ6S7frdIuJjB0EqbhuKlaoxRwEoAo9t5VkBF538aNVgKUQ9MSXjqH9SmqqRRQEiMRkbyhFNTmGzyAJc7JIW3Q0yqtWoEkFOeOpzYzO89uYYI2smjQ51CQQQPXflZvmwfWS-ACIVnIN4rcj7-j6unph18hInngIhgvwlvQsMk3KKmLwfYpJKrrLNpWm2KxTFhQi_IC8SPKVEqaYb2DokfDUSaS2z",
  },
  {
    key: "steel",
    title: "Steel Products",
    heroTitle: "Steel Products",
    description:
      "Structural steel, rebars, and beams for high-strength projects. Designed for contractors and developers requiring quality-controlled material supply.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvAn9SbafEwGUsve5C8c_aSCYGWPeuQlttatT-Jm70yjBqxyk6MSUam91zGe5UNbgLKcVB4WbouGDjYjJyhCgllssvQC1H51yCqldsUcBug5pclS7JeIzAr7SOepz05taYzGpzP36-5uN8hSr40a-eCpS5e-ztiA6QspO9ntwFMYpgzPIwjS23VYcTvwx3e6NjQ_VTyqwaiOFKMpbUg7oyv23NotfSCXvQXJN2zo8Q00eS7S6jjHHolsU-RaCMXcwxtDvQd6cjuLj",
  },
  {
    key: "cement",
    title: "Cement Supply",
    heroTitle: "Cement Supply",
    description:
      "Premium Portland cement and specialized blends for foundation, structural, and finishing works. Available for both bulk and bagged requirements.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahCr8hFHGKBMe7VLmP2oKg7gBdEM1lo2fQr7FxD0WktDO9498N1xGRAMHbQb-rPAL0HzcZTCJ3d2PQzzz0qN1erPJh6bC608p2EPk0a3iNEd5wUEjaAu-S9bSExOktHSRo-6F1m9xuzgTewkO0u8e5b57vbI586oMpvbQLwep500w6PqG9aUdncCRf1mQrKf2kUp5uoQ9MZKGrpJh0L7CmvDjNzWjevJiHWsTYXk_wsXsarSmrhSxHLNux8PuHzzYmekvk9S9hao",
  },
  {
    key: "hardware",
    title: "Hardware Supplies",
    heroTitle: "Hardware Supplies",
    description:
      "Complete range of construction and industrial hardware including fasteners, fittings, and essential site tools to support every project stage.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCz8Tddr83Lrz8iEd5qRFd_HPiHMLwGa1YXbt6vSCsjNZprNlJu_BVsZx1-DifX-q8OnrWJKJTg10yasEdoOam0siHjJO_s2XlPIwLZd6QGI4e3aG_yRWW2e0Il54UdTm-QZDClkx2yhv_Ais0NV-hTrSfUsu4hMift0OYNRRXJqdJvBYS-W5p7AeELYDpTHq0fGWSeVwnxwd5I2JlLm4TdF5M89VVjaeExcXg0k7UNVtVSMaSVi8Bf_D9hHKxhgUzEVitRNy3CW212",
  },
];

export default function ProductCategories() {
  const [activeKey, setActiveKey] = useState(categories[0].key);

  const activeItem = useMemo(
    () => categories.find((item) => item.key === activeKey) ?? categories[0],
    [activeKey],
  );

  return (
    <section id="products" className="theme-section-deep py-0">
      <div className="w-full">
        <div className="overflow-hidden border-y border-[#d8deea] bg-white">
          <div className="grid grid-cols-[112px_1fr] lg:grid-cols-[260px_1fr_1.35fr]">
            <aside className="row-span-2 bg-[var(--kanani-brand-red)] py-6 text-white lg:row-span-1 lg:py-12">
              <ul>
                {categories.map((item) => {
                  const isActive = item.key === activeItem.key;

                  return (
                    <li key={item.key}>
                      <button
                        type="button"
                        onClick={() => setActiveKey(item.key)}
                        className={`relative w-full px-2 py-5 text-left text-sm transition sm:px-4 sm:text-base lg:px-8 ${
                          isActive ? "bg-white/10 font-semibold" : "hover:bg-white/8"
                        }`}
                      >
                        {item.title}
                        {isActive ? (
                          <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rotate-45 bg-[var(--kanani-brand-red)]" />
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </aside>

            <div className="bg-[#f5f6f8] px-4 py-6 sm:px-6 sm:py-8 lg:col-start-2 lg:px-12 lg:py-16">
              <p className="text-sm uppercase tracking-widest text-slate-500">Products</p>
              <div className="mt-2 h-[2px] w-28 bg-[var(--kanani-brand-red)] sm:w-40" />
              <h2 className="mt-4 text-5xl font-bold tracking-tight text-slate-800 sm:text-6xl">
                What can we offer
              </h2>

              <h3 className="mt-8 text-5xl font-medium text-slate-900 sm:mt-10 sm:text-6xl">
                {activeItem.heroTitle}
              </h3>
              <p className="mt-4 max-w-xl text-xl leading-relaxed text-slate-600 sm:text-2xl">
                {activeItem.description}
              </p>

              <Link
                href="/products"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--kanani-brand-blue)] px-8 py-3 text-base font-medium text-white transition hover:brightness-110 sm:mt-10 sm:px-12 sm:py-4 sm:text-lg"
              >
                View Detail
              </Link>
            </div>

            <div className="relative min-h-[180px] sm:min-h-[240px] lg:col-start-3 lg:row-start-1 lg:min-h-[320px]">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
