import { getProduct } from "@/services/api/product";
import ProductForm from "../../components/product-form";
import { updateProductAction } from "@/actions/update-product-action";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const productId = (await params).slug;
  const product = await getProduct(productId);

  return (
    <div>
      <ProductForm defaultData={product} action={updateProductAction} />
    </div>
  );
}
