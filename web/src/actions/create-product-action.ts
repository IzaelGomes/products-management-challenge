"use server";

import { ProductFormAction } from "@/app/product/components/product-form";
import { productSchema } from "@/schema/product";
import { createProduct } from "@/services/api/product";

const createProductSchema = productSchema.pick({
  description: true,
  name: true,
  price: true,
});

export const createProductAction: ProductFormAction = async (
  _prevState: unknown,
  formData: FormData
) => {
  const rawData = {
    name: formData.get("name"),
    price: formData.get("price"),
    description: formData.get("description"),
  };

  const validatedData = createProductSchema.safeParse({
    name: rawData.name,
    price: Number(rawData.price),
    description: rawData.description,
  });

  if (!validatedData.success) {
    return {
      error: validatedData.error.flatten().fieldErrors,
    };
  }

  try {
    await createProduct(validatedData.data);
    return { data: validatedData.data };
  } catch {
    return { error: { message: "Erro ao criar o produto." } };
  }
};
