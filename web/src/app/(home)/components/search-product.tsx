"use client";

import { useQueryParams } from "@/hooks/useQueyParams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

export function SearchBar() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { setQueryParam, removeQueryParam, getQueryParam } = useQueryParams();
  const handleSearchProduct = () => {
    if (searchRef.current?.value) {
      setQueryParam("name", searchRef.current.value);
    } else {
      removeQueryParam("name");
    }
  };

  return (
    <div className="flex gap-3">
      <Input
        type="text"
        className="mb-4 max-w-sm"
        placeholder="Buscar produto"
        aria-label="Buscar produto"
        defaultValue={getQueryParam("name")?.toString()}
        ref={searchRef}
      />
      <Button onClick={handleSearchProduct}>Buscar </Button>
    </div>
  );
}
