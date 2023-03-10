"use client";

import {
  createContext, ReactNode, useCallback, useMemo,
} from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FormattedDesign } from "../types/Design";

interface DesignContextProps {
  designs: FormattedDesign[];
  handleChangeCategory: (c: number) => void;
  handleChangeProduct: (p: number) => void;
  handleChangeSearch: (s: string) => void;
  handleChangePage: (p: number) => void;
  total: number;
}

export const DesignContext = createContext({} as DesignContextProps);

function normalizeString(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function checkProductMatch(design: FormattedDesign, product: number) {
  return design.product.id === product;
}

function checkCategoryMatch(design: FormattedDesign, category: number) {
  return !!design.categories.find(({ id }) => id === category);
}

function checkSearchMatch(design: FormattedDesign, search: string) {
  return normalizeString(design.title).includes(normalizeString(search))
    || normalizeString(design.tags || "").includes(normalizeString(search));
}

export const DesignProvider = ({ children, designs }: {
  children: ReactNode;
  designs: FormattedDesign[];
}) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const category = Number(searchParams.get("category"));
  const product = Number(searchParams.get("product"));
  const search = searchParams.get("search") || undefined;
  const page = Number(searchParams.get("page") || "1");
  const limit = 16;

  const handleUpdateURL = useCallback((type: "category" | "product" | "search" | "page", value: string | number) => {
    const params = new URLSearchParams();

    if (category && type !== "category") {
      params.append("category", category.toString());
    }

    if (product && type !== "product") {
      params.append("product", product.toString());
    }

    if (search && type !== "search") {
      params.append("search", search);
    }

    if (page > 1 && type !== "page") {
      params.append("page", page.toString());
    }

    params.append(type, value.toString());

    router.push(`?${params.toString()}`);
  }, [category, page, product, router, search]);

  const handleChangeCategory = useCallback(
    (c: number) => handleUpdateURL("category", c),
    [handleUpdateURL],
  );

  const handleChangeProduct = useCallback(
    (p: number) => handleUpdateURL("product", p),
    [handleUpdateURL],
  );

  const handleChangeSearch = useCallback(
    (s: string) => handleUpdateURL("search", s),
    [handleUpdateURL],
  );

  const handleChangePage = useCallback(
    (p: number) => handleUpdateURL("page", p),
    [handleUpdateURL],
  );

  const filteredDesigns = designs.filter((design) => {
    const isProductMatch = product ? checkProductMatch(design, product) : true;
    const isCategoryMatch = category ? checkCategoryMatch(design, category) : true;
    const isSearchMatch = search ? checkSearchMatch(design, search) : true;

    return isProductMatch && isCategoryMatch && isSearchMatch;
  });

  const paginateDesigns = useCallback(() => {
    const start = (page * limit) - limit;
    const end = page * limit;

    const currDesigns = [...filteredDesigns];
    const paginated = currDesigns.splice(start, end);

    return paginated;
  }, [filteredDesigns, page]);

  const subsettedDesigns = paginateDesigns();

  const values = useMemo(() => ({
    designs: subsettedDesigns,
    total: filteredDesigns.length,
    handleChangeCategory,
    handleChangeProduct,
    handleChangeSearch,
    handleChangePage,
  }), [
    subsettedDesigns,
    filteredDesigns,
    handleChangeCategory,
    handleChangeProduct,
    handleChangeSearch,
    handleChangePage,
  ]);

  return (
    <DesignContext.Provider value={values}>
      {children}
    </DesignContext.Provider>
  );
};
