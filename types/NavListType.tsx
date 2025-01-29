import { ReactNode } from "react";

export interface NavListType {
  id: number;
  title: string;
  path: string;
  icon: ReactNode | null;
}
