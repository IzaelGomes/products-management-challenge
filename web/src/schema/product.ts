import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string({
    required_error: "O nome é obrigatório",
    invalid_type_error: "Nome inválido",
  }),
  price: z.number({
    required_error: "O preço é obrigatório",
    invalid_type_error: "preço inválido",
  }),
  description: z.string({
    required_error: "A descrição é obrigatório",
    invalid_type_error: "descrição inválida",
  }),
  createdAt: z.string({
    required_error: "A descrição é obrigatório",
    invalid_type_error: "descrição inválida",
  }),
  updatedAt: z.string({
    required_error: "A descrição é obrigatório",
    invalid_type_error: "descrição inválida",
  }),
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
