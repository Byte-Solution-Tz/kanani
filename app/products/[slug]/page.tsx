import ProductDetail from "@/components/products/ProductDetail";
import { getProductDetailBySlug } from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductDetailBySlug(slug);

  return (
    <ProductDetail product={{ ...product, slug }} />
  );
}
