import { getProduct } from "@/services/api/product";
import { UpdateProductCard } from "./update-product-card";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const productId = (await params).slug;
  const product = await getProduct(productId);

  return (
    <div className="flex justify-center">
      <UpdateProductCard data={product} />
    </div>
  );
}
