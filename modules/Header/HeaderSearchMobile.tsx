"use client";
import Button from "@/components/Button";
import Search from "./Search";
import { ArrowIcon } from "@/icons";
import { Context } from "@/context/Context";
import { useContext } from "react";

const HeaderSearchMobile = () => {
  const { setShowCategory, showCategory } = useContext(Context);

  return (
    <div className="px-[20px] flex items-center justify-center lg:mt-[20px] gap-[10px] xl:hidden">
      <Button
        onClick={() => setShowCategory(true)}
        type={"button"}
        title="Kategoriya"
        iconPosition="right"
        icon={<ArrowIcon classList={`${showCategory && "rotate-[-180deg]"}`} />}
        extraClass="!px-[20px] !gap-[10px] text-[12px] !py-[12px] sm:!py-[18px]"
      />
      <Search />
    </div>
  );
};

export default HeaderSearchMobile;
