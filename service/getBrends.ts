/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { instance, instanceV2 } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

export const getBrands = () => {
  const { data: brands = [], isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: () =>
      instance()
        .get("/brand")
        .then((res) => res.data.brands),
  });
  return { brands, isLoading };
};

export const getBrandsV2 = () => {
  const { data: brands = [], isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: () =>
      instanceV2()
        .get("/brands/all")
        .then((res) => res.data),
  });
  return { brands, isLoading };
};
