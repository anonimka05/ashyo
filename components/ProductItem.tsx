import { IMAGE_API, IMAGE_API_V2 } from "@/hooks/getEnv";
import Image from "next/image";
import React, { FC } from "react";
import { BasketCartIcon, CompareIcon, LikeIcon } from "@/icons";
import { ProductItemType } from "@/types/ProductType";
import Button from "./Button";

const ProductItem: FC<{ item: ProductItemType; V2?: boolean }> = ({
  item,
  V2,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleLikeClick(id: string | number) {}

  return V2 ? (
    <div className="w-full sm:w-[273px] product-item duration-300">
      <div className="bg-[#EBEFF3] relative rounded-[8px] mb-[16px] flex items-center justify-center h-[280px]">
        <Image
          className="product-img duration-300"
          style={{ width: "202px", height: "202px" }}
          src={`${IMAGE_API_V2}${item.image}`}
          width={202}
          height={202}
          alt="Product img"
          priority
        />
      </div>
      <p className="text-[18px] font-normal leading-[19px] text-[#545D6A] line-clamp-1 mb-[28px]">
        {item.name}
      </p>
      <div className="flex justify-between">
        <strong className="text-[20px] leading-[26px] font-bold">
          {item.price} usz
        </strong>
        <div className="flex gap-[10px]">
          <Button
            icon={<CompareIcon />}
            extraClass="!w-[52px] !h-[44px] !p-0 !bg-transparent border-[2px] border-[#EBEFF3]"
            type="button"
            iconPosition="left"
          />
          <Button
            icon={<BasketCartIcon />}
            extraClass="!w-[52px] !h-[44px] !p-0 !text-red z-"
            type="button"
            iconPosition="left"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full sm:w-[273px] relative product-item duration-300">
      <div className="bg-[#EBEFF3] relative rounded-[8px] mb-[16px] flex items-center justify-center h-[280px]">
        <Image
          className="product-img duration-300"
          style={{ width: "202px", height: "202px" }}
          src={`${IMAGE_API}/${item.image}`}
          width={202}
          height={202}
          alt="Product img"
          priority
        />
      </div>
      <p className="text-[18px] font-normal leading-[19px] text-[#545D6A] line-clamp-1 mb-[28px]">
        {item.name}
      </p>
      <div className="flex justify-between">
        <strong className="text-[20px] leading-[26px] font-bold">
          {item.price} usz
        </strong>
        <div className="flex gap-[10px] ">
          <Button
            extraClass="!w-[52px] !h-[44px] !p-0 !bg-transparent !bg-scale-400 border-[2px] border-[#EBEFF3]"
            type="button"
            icon={<CompareIcon />}
            iconPosition="left"
          />
          <Button
            extraClass="!w-[52px] !h-[44px] !p-0 text-white !z-999"
            type="button"
            icon={<BasketCartIcon />}
            iconPosition="left"
          />
        </div>
      </div>
      <button
        onClick={() => handleLikeClick(item.id)}
        className="absolute top-[20px] right-[20px] "
      >
        {" "}
        <LikeIcon />{" "}
      </button>
    </div>
  );
};

export default ProductItem;
