"use client";
import { instance } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

export const getBrands = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: brands = [], isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: () =>
      instance()
        .get("/brand")
        .then((res) => res.data.brands),
  });
  return { brands, isLoading };
};
