"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TProduct } from "@/schema/product";
import { useActionState } from "react";

type Product = Pick<TProduct, "id" | "name" | "price" | "description">;

export type ProductFormAction = (
  prevState: unknown,
  formData: FormData
) => Promise<
  | { data?: Product }
  | {
      error?: {
        [key: string]: string;
      };
    }
>;

type ProductFormProps = {
  defaultData?: TProduct;
  action: ProductFormAction;
};

export default function ProductForm({ defaultData, action }: ProductFormProps) {
  const [state, formAction, isPending] = useActionState(action, null);

  const getDefaultValue = (key: keyof Product) => {
    if (state && "data" in state) return state.data?.[key];

    return defaultData?.[key];
  };

  const getError = (key: keyof Product) => {
    if (state && "error" in state) return state.error?.[key];
    return null;
  };

  const buttonSubmitText = () => {
    if (defaultData) {
      return isPending ? "Atualizando" : "Atualizar";
    }
    return isPending ? "Criando" : "Criar";
  };

  return (
    <form action={formAction}>
      <input type="hidden" value={getDefaultValue("id")} name="id" />

      <div>
        <Label className="font-medium text-gray-700 text-sm" htmlFor="name">
          Nome
        </Label>
        <Input name="name" id="name" defaultValue={getDefaultValue("name")} />
        {getError("name") && (
          <p className="text-red-500 text-sm">{getError("name")}</p>
        )}
      </div>

      <div className="mt-3">
        <Label className="font-medium text-gray-700 text-sm" htmlFor="price">
          Preço
        </Label>
        <Input
          name="price"
          type="number"
          id="price"
          className="max-w-[80px]"
          defaultValue={getDefaultValue("price")}
        />
        {getError("price") && (
          <p className="text-red-500 text-sm">{getError("price")}</p>
        )}
      </div>

      <div className="mt-3 font-medium text-gray-700 text-sm">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          name="description"
          id="description"
          defaultValue={getDefaultValue("description")}
        />
        {getError("description") && (
          <p className="text-red-500 text-sm">{getError("description")}</p>
        )}
      </div>

      <div className="flex justify-end mt-3">
        <Button disabled={isPending} type="submit">
          {buttonSubmitText()}
        </Button>
      </div>
    </form>
  );
}
