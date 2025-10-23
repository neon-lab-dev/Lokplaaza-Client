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
          <div className=" w-full xl:w-[60%]">
            <Heading
              heading="Luxury Collection"
              title="Designs that Define Style"
              alignClass="text-center xl:text-right"
            />
            <p className="text-neutral-20 text-center xl:text-right text-base md:text-2xl mt-4 mb-9 md:mt-3 md:mb-4">
              Whether you’re styling a cozy bedroom, a productive office, or a
              welcoming living room — we’ve made it easy. Browse furniture and
              décor tailored for every room in your home or workspace.
            </p>
            <div className="flex justify-center xl:justify-end">
              <Button
                label="Explore By Room"
                bgColor="bg-success-05"
                textColor="text-success-10"
                icon={ICONS.rightArrow}
                onClick={() => {
                  console.log("Clicked!");
                }}
              />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-baseline w-full xl:w-[40%] ">
            <Image
              src={IMAGES.ShopByRoom}
              alt={"shop by room"}
              className="w-full h-[414px] md:h-[476px] xl:h-[674px] xl:w-[529px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VirtualWalk;
