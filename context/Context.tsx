"use client";

import React, { createContext, ReactNode, useState } from "react";
import { ContextType } from "../types/ContextType";

export const Context = createContext<ContextType>({
  showCategory: false,
  setShowCategory: () => null,
});

export const GlobalContext: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [showCategory, setShowCategory] = useState<boolean>(false);

  return (
    <Context.Provider value={{ showCategory, setShowCategory }}>
      {children}
    </Context.Provider>
  );
};
