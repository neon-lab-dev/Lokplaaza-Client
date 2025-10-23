import { ICONS } from "@/assets";
import Image from "next/image";
import React from "react";

const HotSellersCard = ({ data }: any) => {
  const { image, title, price } = data;

  return (
    <div className="rounded-3xl size-[182px] font-Satoshi">
      <div className="relative h-[146px] flex flex-col justify-end">
        <Image
          src={image}
          alt={title}
          className="absolute top-0 right-0 left-0 rounded-t-3xl h-[146px] w-full object-cover "
        />
        <div className="flex items-center gap-2 z-1 px-4 ">
          <h2 className="text-white font-bold mb-2.5  ">{title} </h2>
          {/* <Image src={ICONS.rightArrow} alt="right arr" className="six6" /> */}
        </div>
      </div>
      <div className="bg-primary-10 px-4 py-2.5 rounded-b-3xl">
        <p className="text-center text-[13px] font-bold text-neutral-20">
          Starting at {price} /-
        </p>
      </div>
    </div>
  );
};

export default HotSellersCard;
