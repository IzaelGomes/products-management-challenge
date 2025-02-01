"use client";

import { useState } from "react";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import DeleteProductDialog from "@/app/(home)/components/delete-product-dialog";
import { TProduct } from "@/schema/product";

type ProductTableItemMenuProps = {
  product: TProduct;
};
export const ProductTableItemMenu = ({
  product,
}: ProductTableItemMenuProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-0 w-8 h-8">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => setIsDeleteModalOpen(true)}>
            Deletar
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href={`/product/${product.id}`}>Detalhes</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Atualizar</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DeleteProductDialog
        isOpen={isDeleteModalOpen}
        productId={product.id}
        onOpenChange={setIsDeleteModalOpen}
      />
    </>
  );
};
