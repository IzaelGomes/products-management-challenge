import { TCreateProduct, TProduct } from "@/schema/product";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (name?: string) => {
  const products = await fetch(
    `${baseUrl}/product?${name ? `name=${name}` : ""}`,
    {
      // revalidate tag for caching
      next: {
        tags: ["products"],
      },
    }
  );
  const data = (await products.json()) as TProduct[];

  return data;
};

export const deleteProduct = async (id: string) => {
  await fetch(`${baseUrl}/product/${id}`, {
    method: "DELETE",
  });
};

export const getProduct = async (id: string) => {
  const product = await fetch(`${baseUrl}/product/${id}`);
  const data = (await product.json()) as TProduct;

  return data;
};

export const createProduct = async (product: TCreateProduct) => {
  await fetch(`${baseUrl}/product/`, {
    body: JSON.stringify(product),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateProduct = async (
  product: Omit<TProduct, "createdAt" | "updatedAt">
) => {
  await fetch(`${baseUrl}/product/${product.id}`, {
    body: JSON.stringify(product),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
