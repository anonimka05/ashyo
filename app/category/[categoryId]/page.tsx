"use client";
import ProductFilter from "@/components/ProductFilter";
import { getProductsV2 } from "@/service/getProducts";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const idCategory = Array.isArray(categoryId) ? categoryId[0] : categoryId;

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [brandId, setBrandId] = useState<number | null>(null);

  const { products, isLoading } = getProductsV2(
    minPrice,
    maxPrice,
    brandId,
    idCategory
  );
  console.log(products, isLoading);

  return (
    <div className="containers flex justify-between gap-[20px]">
      <ProductFilter
        setBrandId={setBrandId}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
    </div>
  );
};

export default CategoryProducts;
