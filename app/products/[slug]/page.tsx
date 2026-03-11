import Link from "next/link";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-[#04142a] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black">{slug.replace(/-/g, " ")}</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Product detail page placeholder. Connect this route to your product data and detailed
          specification content.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-flex rounded bg-[#0a56aa] px-5 py-2.5 text-sm font-semibold"
        >
          Back to Products
        </Link>
      </div>
    </main>
  );
}
