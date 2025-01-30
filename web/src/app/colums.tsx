"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate, formatNumberToCurrency } from "@/utils";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  price: number;
  createdAt: string;
  updatedAt: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row }) => {
      return <div>{formatNumberToCurrency(row.getValue("price"))}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Data",
    cell: ({ row }) => {
      return <div>{formatDate(row.getValue("createdAt"))}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Atualizado em",
    cell: ({ row }) => {
      return <div>{formatDate(row.getValue("updatedAt"))}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0 w-8 h-8">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Atualizar</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Deletar</DropdownMenuItem>
            <DropdownMenuItem>Detalhes</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
