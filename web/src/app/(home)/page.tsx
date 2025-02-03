import { PackageSearch } from "lucide-react";
import { getProducts } from "@/services/api/product";
import { ProductTable } from "./product-table";
import { SearchBar } from "./components/search-product";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const query = (await searchParams).name;

  const products = await getProducts(query?.toString());

  return (
    <div>
      <div className="flex gap-2">
        <PackageSearch />
        <h1 className="mb-2 text-xl">Produtos</h1>
      </div>
      <div>
        <SearchBar />
        <ProductTable data={products} />
      </div>
    </div>
  );
}
