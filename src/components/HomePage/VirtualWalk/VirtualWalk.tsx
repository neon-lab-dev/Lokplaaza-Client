"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import React from "react";

const VirtualWalk = () => {
  return (
    <div className="py-14 xl:py-[122px] font-Satoshi bg-neutral-10">
      <Container>
        <div className=" flex flex-col xl:flex-row-reverse items-center justify-center gap-11 xl:gap-5 md:gap-[162px]">
          <div className=" w-full xl:w-[40%]">
            <Heading
              heading="VIRTUAL WALK"
              title="Step Inside Without Stepping Out"
              alignClass="text-right md:text-center xl:text-right"
            />
            <p className="text-neutral-20 text-right md:text-center xl:text-right text-base md:text-2xl mt-4 mb-9 md:mt-3 md:mb-4">
              Take a 360° virtual tour of our store and experience our furniture up close. Explore designs, textures, and layouts — all from the comfort of your home.
            </p>
            <div className="flex justify-end md:justify-center xl:justify-end">
              <Button
                label="Start Virtual Walk"
                bgColor="bg-success-05"
                textColor="text-success-10"
                icon={ICONS.rightArrow}
                onClick={() => {
                  console.log("Clicked!");
                }}
              />
            </div>
          </div>
          <div className="relative flex flex-col xl:flex-row items-center justify-baseline w-full xl:w-[60%] ">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-neutral-60 flex items-center justify-center w-full h-[414px] md:h-[476px] xl:h-[674px] xl:w-[529px] rounded-3xl">
              <Image
              src={ICONS.walk360degree}
              alt={"shop by room"}
              className="w-[120px] h-[108px]" 
            />
            </div>
            <Image
              src={IMAGES.shopView}
              alt={"shop by room"}
              className="w-full h-[414px] md:h-[476px] xl:h-[674px] xl:w-[529px] object-cover  rounded-3xl" 
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VirtualWalk;
