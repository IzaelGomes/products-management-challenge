"use server";

import { ProductFormAction } from "@/app/product/components/product-form";
import { productErrorsToRecord, productSchema } from "@/schema/product";
import { updateProduct } from "@/services/api/product";

const updateProductSchema = productSchema.pick({
  id: true,
  description: true,
  name: true,
  price: true,
});

export const updateProductAction: ProductFormAction = async (
  _prevState: unknown,
  formData: FormData
) => {
  const rawData = {
    name: formData.get("name"),
    price: formData.get("price"),
    description: formData.get("description"),
    id: formData.get("id"),
  };

  const validatedData = updateProductSchema.safeParse({
    name: rawData.name,
    price: Number(rawData.price),
    description: rawData.description,
    id: rawData.id,
  });

  if (!validatedData.success) {
    return {
      error: productErrorsToRecord(validatedData.error),
    };
  }

  try {
    await updateProduct(validatedData.data);
    return { data: validatedData.data };
  } catch {
    return { error: { message: "Erro ao criar o produto." } };
  }
};
