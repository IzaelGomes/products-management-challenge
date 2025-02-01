import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductForm from "../components/product-form";
import { createProductAction } from "@/actions/create-product-action";

export function ProductFormCard() {
  return (
    <Card className="w-[650px]">
      <CardHeader>
        <CardTitle className="text-xl">Produto</CardTitle>
        <CardDescription>
          Preencha as informações logo abaixo e crie um novo produto.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProductForm action={createProductAction} />
      </CardContent>
      <CardFooter className="flex justify-end"></CardFooter>
    </Card>
  );
}
