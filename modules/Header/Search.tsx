"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import debounce from "@/hooks/debounce";
import { SearchIcon } from "@/icons";
import GetCategories from "@/service/getCategories";
import { CategoryType } from "@/types/CategoryType";
import { Skeleton } from "@heroui/skeleton";
import React, { ChangeEvent, useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string | null>("empty");

  const name = debounce(searchValue, 1000);
  const { categories, isLoading } = GetCategories(name);

  function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    if ((e.target as HTMLInputElement).value) {
      setSearchValue((e.target as HTMLInputElement).value);
    } else {
      setSearchValue("empty");
    }
  }

  return (
    <form className="w-[518px] relative">
      <Input
        onBlur={() => setTimeout(() => setSearchValue("empty"), 500)}
        onChange={handleSearchChange}
        extraClass="py-[15px] px-[2px] text-[10px] sm:py-[17px] sm:px-[20px] sm:text-[14px]"
        type="text"
        placeholder="What are you looking for?"
      />
      <Button
        extraClass="py-[12px] px-[10px] sm:py-[16px] sm:px-[20px] absolute top-0 right-0 h-full"
        iconPosition="left"
        icon={
          <SearchIcon classList="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
        }
        type="submit"
      />
      <ul
        className={`${
          searchValue == "empty" && "h-0 opacity-0"
        } z-50 duration-300 overflow-hidden ${
          isLoading && "px-5"
        } absolute w-full bg-white top-[67px] pt-[39px] pb-[10px] shadow-md`}
      >
        {isLoading ? (
          <Skeleton className="h-5 w-full rounded-lg" />
        ) : (
          categories.map((item: CategoryType) => (
            <li
              key={item.id}
              className="py-[17px] cursor-pointer hover:bg-[#BEFFF3] duration-300 pl-[40px] border-b-[1.5px] border-slate-300"
            >
              {item.name}
            </li>
          ))
        )}
      </ul>
    </form>
  );
};

export default Search;
