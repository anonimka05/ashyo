"use client";
import { instance } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

const GetCategories = (name?: string | null) => {
  const params = { page: 1, limit: 1000, name: name ? name : null };
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories", name],

    queryFn: () =>
      instance()
        .get("category", { params })
        .then((res) => res.data.categories),
  });

  return { categories, isLoading };
};

export default GetCategories;
