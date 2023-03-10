"use client";

import {
  createContext, ReactNode, useCallback, useMemo,
} from "react";
import { useSearchParams } from "next/navigation";
import { FormattedDesign } from "../types/Design";

interface DesignContextProps {
  designs: FormattedDesign[]
}

export const DesignContext = createContext({} as DesignContextProps);

export const DesignProvider = ({ children, designs }: {
  children: ReactNode;
  designs: FormattedDesign[];
}) => {
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const product = searchParams.get("product");
  const page = Number(searchParams.get("page") || "1");
  const limit = 16;

  const paginateDesigns = useCallback(() => {
    const start = (page * limit) - limit;
    const end = page * limit;

    const currDesigns = [...designs];
    const paginated = currDesigns.splice(start, end);

    return paginated;
  }, [designs, page]);

  const values = useMemo(() => ({
    designs: paginateDesigns(),
  }), [paginateDesigns]);

  return (
    <DesignContext.Provider value={values}>
      {children}
    </DesignContext.Provider>
  );
};
