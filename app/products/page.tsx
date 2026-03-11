import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#04142a] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black">Products</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Product catalog page placeholder. Integrate your product listing data here.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded bg-[#0a56aa] px-5 py-2.5 text-sm font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
