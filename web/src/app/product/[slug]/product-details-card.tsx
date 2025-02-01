import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { TProduct } from "@/schema/product";
import { formatDate, formatNumberToCurrency } from "@/utils";

type ProductDetailsCardProps = {
  data: TProduct;
};

export function ProductDetailsCard({ data }: ProductDetailsCardProps) {
  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle className="text-xl">Detalhes do produto</CardTitle>
        <CardDescription>
          Visualize informações adicionais do produto.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <label className="font-medium text-gray-700 text-sm">Nome:</label>
          <p className="mt-1 text-gray-900 text-lg">{data.name}</p>
        </div>
        <div>
          <label className="font-medium text-gray-700 text-sm">Preço:</label>
          <p className="mt-1 text-gray-900 text-lg">
            ${formatNumberToCurrency(data.price)}
          </p>
        </div>
        <div>
          <label className="font-medium text-gray-700 text-sm">
            Descrição:
          </label>
          <p className="mt-1 text-gray-900 text-lg">{data.description}</p>
        </div>
        <div className="flex justify-between gap-2">
          <div>
            <label className="font-medium text-gray-700 text-sm">
              Criado em:
            </label>
            <p className="mt-1 text-gray-900 text-lg">
              {formatDate(data.createdAt)}
            </p>
          </div>
          <div>
            <label className="font-medium text-gray-700 text-sm">
              Atualizado em:
            </label>
            <p className="mt-1 text-gray-900 text-lg">
              {data.updatedAt ? formatDate(data.updatedAt) : "Sem atualização"}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
