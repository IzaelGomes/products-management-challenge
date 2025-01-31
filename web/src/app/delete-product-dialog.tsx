"use client";

import { deletePostAction } from "@/actions/delete-product-action";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useState } from "react";

type DeleteProductDialogProps = {
  id: string;
};

export default function DeleteProductDialog({ id }: DeleteProductDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
        <div onClick={() => setIsOpen(true)}>Deletar</div>
      </DropdownMenuItem>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Tem certeza que deseja deletar esse produto?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Essa ação não pode ser desfeita, irá deletar permanentemente o
              produto.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={async () => await deletePostAction(id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
