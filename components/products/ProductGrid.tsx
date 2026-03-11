import type { RelatedProduct } from "@/data/products";

import ProductCard from "@/components/products/ProductCard";

type ProductGridProps = {
  title?: string;
  products: RelatedProduct[];
};

export default function ProductGrid({
  title = "Related Industrial Products",
  products,
}: ProductGridProps) {
  return (
    <section className="mt-20 border-t border-[var(--kanani-line)] pt-10">
      <h3 className="mb-8 text-3xl font-bold text-[var(--kanani-text)]">{title}</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((item) => (
          <ProductCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
