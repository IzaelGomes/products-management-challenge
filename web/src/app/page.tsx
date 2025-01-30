import { DataTable } from "@/components/ui/data-table";
import { columns } from "./colums";
import { PackageSearch } from "lucide-react";
import { getProducts } from "@/services/product";
import { Input } from "@/components/ui/input";

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <div className="flex gap-2">
        <PackageSearch />
        <h1 className="mb-2 text-xl">Produtos</h1>
      </div>
      <div>
        <Input
          type="text"
          className="mb-4 max-w-sm"
          placeholder="Buscar produto"
          aria-label="Buscar Produto"
        />
        <DataTable columns={columns} data={products} />
      </div>
    </div>
  );
}
