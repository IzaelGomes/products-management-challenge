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

type DeleteProductDialogProps = {
  productId: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function DeleteProductDialog({
  productId,
  isOpen,
  onOpenChange,
}: DeleteProductDialogProps) {
  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
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
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => await deletePostAction(productId)}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
