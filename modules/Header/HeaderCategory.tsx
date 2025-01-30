"use client";
import GetCategories from "@/service/getCategories";
import { CategoryType } from "@/types/CategoryType";
import { Skeleton } from "@heroui/skeleton";
import Link from "next/link";

const HeaderCategory = () => {
  const { categories } = GetCategories();

  return (
    <nav className="hidden containers lg:flex items-center justify-between">
      {categories.length > 0 ? (
        categories.map((item: CategoryType) => (
          <Link
            className="text-[18px] hover:text-black  duration-300 leading-[21px] text-[#545D6A]  "
            key={item.id}
            href={"/"}
          >
            {item.name}
          </Link>
        ))
      ) : (
        <Skeleton className="h-5 w-full rounded-lg" />
      )}
    </nav>
  );
};

export default HeaderCategory;
