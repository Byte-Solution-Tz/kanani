import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="theme-shell min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black">Products</h1>
        <p className="theme-muted mt-3 max-w-2xl">
          Product catalog page placeholder. Integrate your product listing data here.
        </p>
        <Link
          href="/"
          className="btn-theme-primary mt-8 inline-flex rounded px-5 py-2.5 text-sm font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
