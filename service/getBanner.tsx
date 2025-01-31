"use client";
import { instance } from "@/hooks/instance";
import { useQuery } from "@tanstack/react-query";

export const getBanners = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: banners = [], isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: () =>
      instance()
        .get("/banner")
        .then((res) => res.data.banners),
  });
  return { banners, isLoading };
};
