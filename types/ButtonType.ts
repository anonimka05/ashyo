import { MouseEventHandler, ReactNode } from "react";

export interface ButtonType {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  title?: string;
  extraClass?: string;
  type: "submit" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  loading?: ReactNode;
}
