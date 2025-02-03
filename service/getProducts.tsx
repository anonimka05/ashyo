/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { instance, instanceV2 } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

export const getProducts = (API: string, id?: string | null, V2?: boolean) => {
  const params = { page: 1, limit: 1000, categoryId: id ? id : null };

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["product_item"],
    queryFn: () =>
      (V2 ? instanceV2() : instance())
        .get(API, { params })
        .then((res) => res.data?.productItems),
  });
  return { products, isLoading };
};

export const getProductsV2 = (
  minPrice?: number,
  maxPrice?: number,
  brandId?: number | null,
  categoryId?: string | undefined
) => {
  const params = {
    page: 1,
    limit: 1000,
    min_price: minPrice ? minPrice : null,
    max_price: maxPrice ? maxPrice : null,
    brand_id: brandId ? brandId : null,
    category_id: categoryId ? categoryId : null,
  };

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["product_v2", minPrice, maxPrice, brandId, categoryId],
    queryFn: () =>
      instanceV2()
        .get("/products", { params })
        .then((res) => res.data.items),
  });
  return { products, isLoading };
};
