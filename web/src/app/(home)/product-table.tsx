import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatNumberToCurrency } from "@/utils";
import { ProductTableItemMenu } from "@/app/(home)/components/product-table-item-menu";
import { TProduct } from "@/schema/product";

type ProductTableProps = {
  data?: TProduct[];
};

export function ProductTable({ data }: ProductTableProps) {
  return (
    <Table>
      <TableCaption>Lista de produtos.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nome</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Criado em</TableHead>
          <TableHead className="text-left">Atualizado em</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell className="font-medium">
              {formatNumberToCurrency(product.price)}
            </TableCell>
            <TableCell>{formatDate(product.createdAt)}</TableCell>
            <TableCell>
              {product.updatedAt
                ? formatDate(product.updatedAt)
                : "sem atualização"}
            </TableCell>
            <TableCell className="text-right">
              <ProductTableItemMenu product={product} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
