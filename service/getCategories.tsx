"use client";
import { instance } from "@/hooks/instance";
import { useEffect, useState } from "react";

export const getCategories = () => {
  const params = { page: 1, limit: 1000 };
  const [data, setData] = useState([]);

  useEffect(() => {
    instance()
      .get("/category", { params })
      .then((res) => setData(res.data.categories));
  }, []);

  return data;
};
