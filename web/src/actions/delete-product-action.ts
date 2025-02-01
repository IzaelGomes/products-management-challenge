"use server";

import { deleteProduct } from "@/services/api/product";
import { revalidateTag } from "next/cache";

export async function deletePostAction(id: string) {
  try {
    await deleteProduct(id);
  } catch (error) {
    console.log({ error });
  }

  revalidateTag("products");
}
