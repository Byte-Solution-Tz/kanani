import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { categories } from "@/data/categories";
import { categoryLabels, isProductCategory, products } from "@/data/products";

type ProductsPageProps = {
  searchParams: Promise<{ category?: string; q?: string }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const heroImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA1UOSNBIk4TnSSMwddbR92xfHyfrdnCLBar08u7GuBXN-4prYnH7YUhfpHgQBjLvZS_woZ91ADURqViJPFWHuRp0HBdLM3RyqUCMjMaxMeeuRIzUfJmLkgB9shxL1pnl3A3CkWBj3si9cWUcQIkAZEj7yn9-Sdn3Ry9wSBjbyjTKsw8LGUP3Z0I8tWyvarvo2zFwU2MUFj0ag8IKY628Fl6OtctDqsSCyytof-fxbmelEhqJXTshIwPcNetr7xoXaTfivXLVUU6-GH";
  const { category: categoryParam, q } = await searchParams;
  const selectedCategory = categoryParam && isProductCategory(categoryParam) ? categoryParam : "all";
  const query = q?.trim() ?? "";
  const queryLower = query.toLowerCase();

  const categoryItems = [
    {
      id: "all",
      title: "All Products",
      description: "Browse every category in one place.",
      count: products.length,
    },
    ...categories.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      count: products.filter((product) => product.category === item.id).length,
    })),
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const searchSource = `${product.name} ${product.description} ${product.spec}`.toLowerCase();
    const searchMatch = queryLower.length === 0 || searchSource.includes(queryLower);
    return categoryMatch && searchMatch;
  });

  const categoryTitle = selectedCategory === "all" ? "All Products" : categoryLabels[selectedCategory];

  return (
    <main className="theme-shell min-h-screen">
      <Navbar />

      <section className="relative h-[36vh] min-h-[250px] overflow-hidden sm:h-[42vh]">
        <Image
          src={heroImage}
          alt="Excavator and construction machinery at an industrial site"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(7,22,52,0.55)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(7,22,52,0.82)] to-transparent" />
        <div className="relative mx-auto flex h-full w-full max-w-7xl items-end px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8 lg:pb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Kanani Services</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Products
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
              Browse construction and industrial materials, then filter quickly by category before
              opening each product detail page.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--kanani-line)] bg-white px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-sm text-[var(--kanani-muted-strong)]">
          <span className="font-semibold text-[var(--kanani-text)]">Position:</span> Home &gt;
          Products
          {selectedCategory !== "all" ? (
            <span>
              {" "}
              &gt;{" "}
              <span className="font-semibold text-[var(--kanani-brand-blue)]">
                {categoryLabels[selectedCategory]}
              </span>
            </span>
          ) : null}
        </div>
      </section>

      <section className="theme-section-deep border-b border-[var(--kanani-line)] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black tracking-tight text-[var(--kanani-text)] sm:text-5xl">
            Product Catalog
          </h2>
          <p className="theme-muted mt-4 max-w-3xl text-base leading-7 sm:text-lg">
            Filter products by category and click any product to open its details page. This
            catalog currently uses practical placeholder data while full technical sheets are being
            compiled.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {categoryItems.map((item) => {
              const href = item.id === "all" ? "/products" : `/products?category=${item.id}`;
              const isActive = selectedCategory === item.id;

              return (
                <Link
                  key={item.id}
                  href={href}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-[var(--kanani-brand-blue)] bg-[var(--kanani-brand-blue)] text-white"
                      : "border-[var(--kanani-line)] bg-white text-[var(--kanani-text)] hover:border-[var(--kanani-brand-red-soft)] hover:text-[var(--kanani-brand-red)]"
                  }`}
                >
                  {item.title} ({item.count})
                </Link>
              );
            })}
          </div>

          <form action="/products" className="mt-6 flex max-w-xl items-center gap-3">
            {selectedCategory !== "all" ? (
              <input type="hidden" name="category" value={selectedCategory} />
            ) : null}
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search products, specs, keywords..."
              className="h-11 w-full rounded-full border border-[var(--kanani-line)] bg-white px-4 text-sm text-[var(--kanani-text)] placeholder:text-[var(--kanani-muted)] focus:border-[var(--kanani-brand-blue)] focus:outline-none"
            />
            <button type="submit" className="btn-theme-primary rounded-full px-6 py-2.5 text-sm font-semibold">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-3xl font-bold text-[var(--kanani-text)]">{categoryTitle}</h2>
              <p className="theme-muted mt-1 text-sm">
                Showing {filteredProducts.length} product{filteredProducts.length === 1 ? "" : "s"}
                {query ? ` for "${query}"` : ""}.
              </p>
            </div>
            <Link href="/" className="btn-theme-outline rounded-full px-5 py-2.5 text-sm font-semibold">
              Back to Home
            </Link>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="theme-panel rounded-2xl border border-[var(--kanani-line)] p-8 text-center">
              <h3 className="text-xl font-bold text-[var(--kanani-text)]">No products found</h3>
              <p className="theme-muted mt-2">
                Try another keyword or clear the filter to view all listed products.
              </p>
              <Link
                href="/products"
                className="btn-theme-primary mt-5 inline-flex rounded-full px-6 py-2.5 text-sm font-semibold"
              >
                Clear Filter
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.slug}
                  className="theme-panel overflow-hidden rounded-2xl border border-[var(--kanani-line)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <span className="badge-theme rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
                      {categoryLabels[product.category]}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-[var(--kanani-text)]">{product.name}</h3>
                    <p className="theme-muted mt-2 text-sm leading-6">{product.description}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[var(--kanani-brand-blue)]">
                      {product.spec}
                    </p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="btn-theme-blue mt-5 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold"
                    >
                      View Product Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
