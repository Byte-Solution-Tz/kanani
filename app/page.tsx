import Image from "next/image";
import Link from "next/link";

const categoryCards = [
  {
    title: "Scrap Materials",
    description:
      "High-quality recycled metals for industrial recycling and manufacturing processes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL3XeE0oMhxaJHoPJNqEDXc6X7_lKUT7_qz9eUtXpoXo-FMoovrQ6S7frdIuJjB0EqbhuKlaoxRwEoAo9t5VkBF538aNVgKUQ9MSXjqH9SmqqRRQEiMRkbyhFNTmGzyAJc7JIW3Q0yqtWoEkFOeOpzYzO89uYYI2smjQ51CQQQPXflZvmwfWS-ACIVnIN4rcj7-j6unph18hInngIhgvwlvQsMk3KKmLwfYpJKrrLNpWm2KxTFhQi_IC8SPKVEqaYb2DokfDUSaS2z",
  },
  {
    title: "Steel Products",
    description:
      "Structural steel, rebars, and beams for robust infrastructure and building projects.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvAn9SbafEwGUsve5C8c_aSCYGWPeuQlttatT-Jm70yjBqxyk6MSUam91zGe5UNbgLKcVB4WbouGDjYjJyhCgllssvQC1H51yCqldsUcBug5pclS7JeIzAr7SOepz05taYzGpzP36-5uN8hSr40a-eCpS5e-ztiA6QspO9ntwFMYpgzPIwjS23VYcTvwx3e6NjQ_VTyqwaiOFKMpbUg7oyv23NotfSCXvQXJN2zo8Q00eS7S6jjHHolsU-RaCMXcwxtDvQd6cjuLj",
  },
  {
    title: "Cement Supply",
    description:
      "Premium grade Portland cement and specialized mixes for all construction needs.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7ahCr8hFHGKBMe7VLmP2oKg7gBdEM1lo2fQr7FxD0WktDO9498N1xGRAMHbQb-rPAL0HzcZTCJ3d2PQzzz0qN1erPJh6bC608p2EPk0a3iNEd5wUEjaAu-S9bSExOktHSRo-6F1m9xuzgTewkO0u8e5b57vbI586oMpvbQLwep500w6PqG9aUdncCRf1mQrKf2kUp5uoQ9MZKGrpJh0L7CmvDjNzWjevJiHWsTYXk_wsXsarSmrhSxHLNux8PuHzzYmekvk9S9hao",
  },
  {
    title: "Hardware Supplies",
    description:
      "Complete range of industrial fasteners, tools, and construction essentials.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCz8Tddr83Lrz8iEd5qRFd_HPiHMLwGa1YXbt6vSCsjNZprNlJu_BVsZx1-DifX-q8OnrWJKJTg10yasEdoOam0siHjJO_s2XlPIwLZd6QGI4e3aG_yRWW2e0Il54UdTm-QZDClkx2yhv_Ais0NV-hTrSfUsu4hMift0OYNRRXJqdJvBYS-W5p7AeELYDpTHq0fGWSeVwnxwd5I2JlLm4TdF5M89VVjaeExcXg0k7UNVtVSMaSVi8Bf_D9hHKxhgUzEVitRNy3CW212",
  },
];

const benefits = [
  {
    title: "Reliable Supply",
    description:
      "Seamless logistics chain ensuring timely delivery regardless of project scale.",
    icon: TruckIcon,
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct sourcing from manufacturers allows us to offer market-leading rates.",
    icon: WalletIcon,
  },
  {
    title: "Bulk Availability",
    description:
      "Large-scale inventory capacity to support mega-projects without shortage.",
    icon: BoxesIcon,
  },
  {
    title: "Industrial Expertise",
    description:
      "Expert consultants who understand technical industrial specifications.",
    icon: ToolsIcon,
  },
];

const industries = [
  { title: "Construction Companies", icon: BuildingIcon },
  { title: "Developers", icon: LandscapeIcon },
  { title: "Manufacturers", icon: FactoryIcon },
  { title: "Industrial Buyers", icon: CraneIcon },
];

export default function HomePage() {
  return (
    <main className="theme-shell">
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
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--kanani-brand-gold-soft)]" /> ISO 9001 CERTIFIED SUPPLIER
            </p>

            <h1 className="text-4xl font-black leading-[1.03] tracking-tight sm:text-5xl lg:text-7xl">
              Trusted Supplier of <span className="theme-gold">Cement, Steel</span>, Scrap
              <br />
              &amp; Hardware
            </h1>

            <p className="mt-6 max-w-2xl text-base text-slate-200 sm:text-lg">
              Reliable supply solutions for contractors, developers, and industrial buyers across
              the region. Delivering excellence since 2005.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="btn-theme-primary inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-bold transition"
              >
                View Products
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="btn-theme-gold rounded px-6 py-3 text-sm font-bold transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              <p className="text-3xl font-black">15+</p>
              <p className="text-xs text-slate-200">Years of Experience</p>
            </div>
          </div>

          <div>
            <p className="theme-gold text-xs font-extrabold uppercase tracking-[0.2em]">Who We Are</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              Professional Supply Solutions for Large-Scale Projects
            </h2>
            <p className="theme-muted mt-6 max-w-xl">
              Kanani Services Limited is a premier provider of essential construction material and
              industrial supplies. We pride ourselves on being a reliable partner for large-scale
              developers and independent contractors alike.
            </p>
            <p className="theme-muted mt-4 max-w-xl">
              Ensuring quality and consistency in every delivery is our core mission. From massive
              structural steel components to specialized hardware, we source only the best
              materials to support project safety and durability.
            </p>

            <div className="theme-border mt-10 grid max-w-lg grid-cols-2 gap-6 border-t pt-6">
              <div>
                <p className="text-3xl font-black">500+</p>
                <p className="theme-muted text-sm">Global Partners</p>
              </div>
              <div>
                <p className="text-3xl font-black">24/7</p>
                <p className="theme-muted text-sm">Logistics Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="theme-section-deep py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-black sm:text-5xl">Our Product Categories</h2>
            <p className="theme-muted mt-4">
              Premium materials sourced from industry-leading manufacturers to meet the highest
              standards of construction and engineering.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categoryCards.map((category) => (
              <article
                key={category.title}
                className="theme-panel theme-border group overflow-hidden rounded border transition hover:-translate-y-1 hover:border-[color:rgba(215,173,85,0.42)]"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold">{category.title}</h3>
                  <p className="theme-muted mt-2 min-h-14 text-xs leading-5">{category.description}</p>
                  <Link
                    href="/products"
                    className="theme-gold mt-3 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider"
                  >
                    View Category
                    <ArrowRightIcon className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-section-brand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black sm:text-5xl">Why Choose Kanani Services</h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-[var(--kanani-brand-gold-soft)]" />
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded bg-white/15 text-[var(--kanani-brand-gold-soft)]">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-extrabold">{benefit.title}</h3>
                <p className="mx-auto mt-2 max-w-56 text-sm text-blue-50/95">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="theme-section-main py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="theme-gold text-xs font-extrabold uppercase tracking-[0.2em]">Our Reach</p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">Industries We Serve</h2>
            </div>
            <p className="theme-muted max-w-sm text-sm">
              Specialized supply solutions tailored for diverse industrial and development sectors.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry.title}
                className="theme-panel theme-border rounded border p-6 transition hover:border-[color:rgba(215,173,85,0.42)]"
              >
                <industry.icon className="h-6 w-6 text-[var(--kanani-brand-gold-soft)]" />
                <h3 className="mt-4 text-lg font-extrabold">{industry.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <footer className="relative mt-24 bg-[linear-gradient(145deg,#1f3f63_0%,#173857_55%,#123250_100%)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative -top-12 z-10 rounded-[2.5rem] border border-white/10 bg-[#1a3a57] px-6 py-8 shadow-[0_18px_40px_rgba(4,20,43,0.32)] md:px-10">
            <div className="grid gap-6 md:grid-cols-3 md:gap-4">
              <div className="flex items-center gap-4 border-white/10 md:border-r md:pr-8">
                <PinIcon className="h-11 w-11 text-white/90" />
                <div>
                  <p className="text-xl font-bold leading-tight">Location:</p>
                  <p className="mt-2 text-base text-white/80">Industrial Area, Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-white/10 md:border-r md:px-8">
                <MailIcon className="h-11 w-11 text-white/90" />
                <div>
                  <p className="text-xl font-bold leading-tight">Email:</p>
                  <p className="mt-2 text-base text-white/80">info@kanani.co.ke</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:pl-8">
                <PhoneIcon className="h-11 w-11 text-white/90" />
                <div>
                  <p className="text-xl font-bold leading-tight">Phone:</p>
                  <p className="mt-2 text-base text-white/80">+254 700 000 000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="-mt-2 grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-white/10 pb-8 md:border-0 md:pr-8 lg:border-r lg:pb-0">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--kanani-brand-red)] text-white">
                  <FoundationIcon className="h-5 w-5" />
                </div>
                <p className="text-3xl font-extrabold">Kanani</p>
              </div>
              <p className="mt-6 text-base leading-8 text-white/80">
                Reliable industrial supply partner for construction and infrastructure projects
                across East Africa.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <SocialDot label="f" />
                <SocialDot label="t" />
                <SocialDot label="in" />
                <SocialDot label="p" />
                <SocialDot label="v" />
              </div>
            </div>

            <div>
              <p className="text-3xl font-semibold">Navigation</p>
              <ul className="mt-8 space-y-4 text-base text-white/80">
                <li>- About us</li>
                <li>- Contact us</li>
                <li>- Product Catalog</li>
                <li>- Recent Post</li>
              </ul>
            </div>

            <div>
              <p className="text-3xl font-semibold">All Services</p>
              <ul className="mt-8 space-y-4 text-base text-white/80">
                <li>- Cement Supply</li>
                <li>- Steel Products</li>
                <li>- Hardware Supplies</li>
                <li>- Scrap Materials</li>
              </ul>
            </div>

            <div>
              <p className="text-3xl font-semibold">Newsletter</p>
              <p className="mt-8 text-base leading-8 text-white/80">
                Subscribe for stock updates, price alerts, and project supply insights from Kanani
                Services.
              </p>
              <div className="mt-8 flex items-center justify-between gap-4 rounded-lg border border-white/12 bg-white/10 px-5 py-4">
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full bg-transparent text-base text-white placeholder:text-white/65 focus:outline-none"
                />
                <button type="button" aria-label="Send newsletter request" className="text-white/80">
                  <MailIcon className="h-8 w-8" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 py-8 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
            <p>
              Copyright © <span className="text-[var(--kanani-brand-red-soft)]">2026</span> | All
              Rights Reserved.
            </p>
            <div className="flex items-center gap-5">
              <a href="#">Term and Service</a>
              <span className="text-[var(--kanani-brand-red-soft)]">||</span>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FoundationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M3 10h18" strokeWidth="2" />
      <path d="M5 10V6l7-3 7 3v4" strokeWidth="2" />
      <path d="M7 10v7M12 10v7M17 10v7" strokeWidth="2" />
      <path d="M4 20h16" strokeWidth="2" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <path d="m20 20-4-4" strokeWidth="2" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M5 12h14" strokeWidth="2" />
      <path d="m13 6 6 6-6 6" strokeWidth="2" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" strokeWidth="1.8" />
      <path d="M10 4h4" strokeWidth="1.8" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path
        d="M7.8 3.8 5 6.6c-1 1 0 3.9 2.3 6.2s5.2 3.3 6.2 2.3l2.8-2.8c.4-.4.4-1 0-1.4l-2-2a1 1 0 0 0-1.4 0l-1.3 1.2c-.8-.3-1.8-1.1-2.6-2-.9-.9-1.7-1.8-2-2.6l1.2-1.3a1 1 0 0 0 0-1.4l-2-2a1 1 0 0 0-1.4 0Z"
        strokeWidth="1.8"
      />
      <path d="M15.5 4.5a7 7 0 0 1 4 4" strokeWidth="1.8" />
      <path d="M14.5 8a4.5 4.5 0 0 1 2 2" strokeWidth="1.8" />
    </svg>
  );
}

function SocialDot({ label }: { label: string }) {
  return (
    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-white/20 px-1 text-xs font-bold lowercase text-white/90">
      {label}
    </span>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M2 7h11v8H2z" strokeWidth="2" />
      <path d="M13 10h4l3 3v2h-7z" strokeWidth="2" />
      <circle cx="7" cy="18" r="2" strokeWidth="2" />
      <circle cx="17" cy="18" r="2" strokeWidth="2" />
    </svg>
  );
}

function WalletIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="2" />
      <path d="M15 12h6" strokeWidth="2" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function BoxesIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="3" y="4" width="7" height="7" strokeWidth="2" />
      <rect x="14" y="4" width="7" height="7" strokeWidth="2" />
      <rect x="8.5" y="13" width="7" height="7" strokeWidth="2" />
    </svg>
  );
}

function ToolsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="m4 20 6-6" strokeWidth="2" />
      <path d="M13 7a3 3 0 0 1 4-4l-2 2 3 3 2-2a3 3 0 0 1-4 4L7 19l-3 1 1-3 8-8Z" strokeWidth="2" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <rect x="4" y="3" width="16" height="18" strokeWidth="2" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" strokeWidth="2" />
    </svg>
  );
}

function LandscapeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M2 18h20" strokeWidth="2" />
      <path d="m5 18 5-7 4 5 3-4 2 6" strokeWidth="2" />
    </svg>
  );
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M3 21V9l6 3V9l6 3V6l6 3v12H3Z" strokeWidth="2" />
      <path d="M7 21v-3M11 21v-3M15 21v-3" strokeWidth="2" />
    </svg>
  );
}

function CraneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M5 20V4h2v16" strokeWidth="2" />
      <path d="M7 6h12l-3 3" strokeWidth="2" />
      <path d="M16 9v6" strokeWidth="2" />
      <rect x="14" y="15" width="4" height="4" strokeWidth="2" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
      <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" strokeWidth="2" />
      <circle cx="12" cy="10" r="2.5" strokeWidth="2" />
    </svg>
  );
}
