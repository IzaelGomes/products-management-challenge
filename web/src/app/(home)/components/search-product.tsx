"use client";

import { useQueryParams } from "@/hooks/useQueyParams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";

export function SearchBar() {
  const { setQueryParam, removeQueryParam } = useQueryParams();

  const handleSearch = (_prevState: unknown, formData: FormData) => {
    const searchTerm = formData.get("search") as string;

    if (searchTerm) {
      setQueryParam("name", searchTerm);
    } else {
      removeQueryParam("name");
    }

    return { search: searchTerm };
  };

  const [state, searchProductAction, isPending] = useActionState(
    handleSearch,
    null
  );

  return (
    <form action={searchProductAction} className="flex gap-3">
      <Input
        type="text"
        name="search"
        className="mb-4 max-w-sm"
        placeholder="Buscar produto"
        aria-label="Buscar produto"
        defaultValue={state?.search}
      />
      <Button disabled={isPending}>Buscar </Button>
    </form>
  );
}
