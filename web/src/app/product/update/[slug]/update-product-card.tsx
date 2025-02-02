import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductForm from "../../components/product-form";
import { updateProductAction } from "@/actions/update-product-action";
import { TProduct } from "@/schema/product";

type UpdateProductCardProps = {
  data: TProduct;
};

export function UpdateProductCard({ data }: UpdateProductCardProps) {
  return (
    <Card className="w-[650px]">
      <CardHeader>
        <CardTitle className="text-xl">Produto</CardTitle>
        <CardDescription>
          Atualize as informações do {data.name} selecionado
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProductForm defaultData={data} action={updateProductAction} />
      </CardContent>
    </Card>
  );
}
