"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "react";

const ProductContext = createContext<any>(null);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [planlist, setPlanlist] = useState<any[]>([]);
  const [savedlist, setSavedlist] = useState<any[]>([]);

  const value = {
    planlist,
    setPlanlist,
    savedlist,
    setSavedlist,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductContext;
