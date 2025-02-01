import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "O nome é obrigatório" }),
  price: z
    .number()
    .min(1, { message: "O preço é obrigatório e deve ser maior que zero" }),
  description: z.string().min(1, { message: "A descrição é obrigatória" }),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const productErrorsToRecord = (
  zodError: ReturnType<typeof productSchema.safeParse>["error"]
) => {
  return Object.fromEntries(
    Object.entries(zodError?.flatten().fieldErrors || {}).map(
      ([key, value]) => [key, value[0]]
    )
  );
};

export type TProduct = z.infer<typeof productSchema>;

export type TCreateProduct = Omit<TProduct, "id" | "createdAt" | "updatedAt">;
