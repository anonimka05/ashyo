"use client";

import { CategoryType } from "@/types/CategoryType";
import Link from "next/link";
import { Skeleton } from "@heroui/skeleton";
import { getCategories } from "@/service/getCategories";

function HeaderCategory() {
  const categoryList: CategoryType[] = getCategories();

  return (
    <nav className="hidden containers lg:felx items-center justify-between">
      {categoryList.length > 0 ? (
        categoryList.map((item: CategoryType) => (
          <Link
            className="text-[18px] leading-[21px] text-[#545D6A]"
            key={item.id}
            href={"/"}
          >
            {item.name}
          </Link>
        ))
      ) : (
        <Skeleton className="w-5 h-full rounded-lg" />
      )}
    </nav>
  );
}

export default HeaderCategory;
