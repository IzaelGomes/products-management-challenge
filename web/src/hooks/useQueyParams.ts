"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export function useQueryParams() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getQueryParam = useCallback(
    (key: string) => {
      return searchParams.get(key)?.toString() || "";
    },
    [searchParams]
  );

  const setQueryParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  const removeQueryParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);
      router.push(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  return {
    getQueryParam,
    setQueryParam,
    removeQueryParam,
  };
}
