"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@/components/Button";
import Image from "next/image";
import { IMAGE_API } from "@/hooks/getEnv";
import { getBanners } from "@/service/getBanner";
import { BannerType } from "@/types/BannerType";
import { Skeleton } from "@heroui/skeleton";
import { Pagination } from "swiper/modules";

const Hero = () => {
  const { banners, isLoading } = getBanners();

  return (
    <div className="bg-[#dedede] mb-[33px] sm:mb-[100px]">
      <div className="containers">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {isLoading ? (
            <Skeleton className="absolute top-5 w-full h-[400px] rounded-lg" />
          ) : (
            banners.map((item: BannerType) => (
              <SwiperSlide
                className="pt-[37px] pb-[63px] sm:pt-[145px] relative sm:pb-[150px]"
                key={item.id}
              >
                <div className="w-full sm:w-[40%] lg:w-[596px]">
                  <h2 className="font-bold text-[22px] sm:text-[44px] leading-[26.4px] sm:leading-[52.8px] sm:mb-[6px]">
                    {item.name}
                  </h2>
                  <p className="font-normal text-[11px] text-[#545D6A] mb-[22px] sm:text-[16px]">
                    {item.description}
                  </p>
                  <Button
                    extraClass="!text-[12px] !py-[12px] !w-[161px]"
                    type="button"
                    title="Batafsil"
                  />
                </div>
                <Image
                  className="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bottom-0 absolute sm:top-0 sm:bottom-0 sm:my-auto right-5"
                  src={`${IMAGE_API}/${item.image}`}
                  style={{ width: "500px", height: "300px" }}
                  alt="Brand Img"
                  width={500}
                  height={300}
                  priority
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
