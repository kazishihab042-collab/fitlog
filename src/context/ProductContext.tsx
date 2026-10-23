"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { IProduct, IproductContext } from "@/types/product.type";

const ProductContext = createContext<IproductContext | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [planlist, setPlanlist] = useState<IProduct[]>([]);
  const [savedlist, setSavedlist] = useState<IProduct[]>([]);

  const value: IproductContext = {
    planlist,
    setPlanlist,
    savedlist,
    setSavedlist,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("Maybe you have not wrapped the app in the provider.");
  }

  return context;
}
