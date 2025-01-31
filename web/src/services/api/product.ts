import { TProduct } from "./api";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async () => {
  const products = await fetch(`${baseUrl}/product`, {
    // revalidate tag for caching
    next: {
      tags: ["products"],
    },
  });
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

export const createProduct = async (product: TProduct) => {
  await fetch(`${baseUrl}/product`, {
    body: JSON.stringify(product),
    method: "POST",
  });
};

export const updateProduct = async (product: TProduct) => {
  await fetch(`${baseUrl}/product/${product.id}`, {
    body: JSON.stringify(product),
    method: "PUT",
  });
};
