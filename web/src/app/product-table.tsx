import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteProductDialog from "./delete-product-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/services/api/api";
import { formatDate, formatNumberToCurrency } from "@/utils";
import Link from "next/link";

type ProductTableProps = {
  data: TProduct[];
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
        {data.map((product) => (
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="p-0 w-8 h-8">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DeleteProductDialog id={product.id} />
                  <DropdownMenuItem>
                    <Link href={`/product/${product.id}`}>Detalhes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Atualizar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
