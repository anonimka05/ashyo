import Button from "@/components/Button";
import { ArrowIcon, MenuIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Search from "./Search";
import Actions from "./Actions";

const HeaderMain = () => {
  return (
    <div className="containers !py-[27px] !pt-[64px]  sm:!py-[30px]">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center">
          <Image
            className="scale-[1.5]"
            style={{ width: "48px", height: "48px" }}
            src={"/ashyo.svg"}
            alt={"Site Logo"}
            width={48}
            height={48}
            priority
          />
          <span className="text-[39px] font-extrabold leading-[42.19px] text-[#134E9B]">
            Ashyo
          </span>
        </Link>
        <div className="hidden xl:flex items-center gap-[10px]">
          <Button
            extraClass="!py-[18px]"
            type="button"
            title="Kategoriya"
            iconPosition="right"
            icon={<ArrowIcon />}
          />
          <Search />
        </div>
        <div className="flex items-center gap-[20px]">
          <Actions />
          <button className="xl:hidden">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
