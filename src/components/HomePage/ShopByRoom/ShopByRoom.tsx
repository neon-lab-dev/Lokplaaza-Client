"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";

const ShopByRoom = () => {
  return (
    <div className="pt-[76px] xl:py-[216px] font-Satoshi bg-neutral-10">
      <Container>
        <div className=" flex flex-col xl:flex-row items-center justify-between gap-11 xl:gap-5 md:gap-[162px]">
          <div className=" w-full xl:w-[60%]">
            <Heading
              heading="Luxury Collection"
              title="Designs that Define Style"
              alignClass="text-left"
            />
            <p className="text-neutral-20 text-base md:text-2xl mt-4 mb-9 md:mt-3 md:mb-4">
              Whether you’re styling a cozy bedroom, a productive office, or a
              welcoming living room — we’ve made it easy. Browse furniture and
              décor tailored for every room in your home or workspace.
            </p>
            <Button
              label="Explore By Room"
              bgColor="bg-success-05"
              textColor="text-success-10"
              icon={ICONS.rightArrow}
              onClick={() => {console.log("Clicked!")}}
            />
          </div>
          <div className="flex flex-col xl:flex-row items-center justify-baseline w-full xl:w-[40%] ">
            <div className=" xl:hidden w-[65%] xl:w-[237px] h-[27px] bg-neutral-15 rounded-t-3xl"></div>
            <div className=" xl:hidden w-[80%] xl:w-[284px] h-[27px] bg-neutral-35 rounded-t-3xl"></div>
            <div className="hidden xl:flex xl:h-[237px] xl:w-[27px] bg-neutral-15 rounded-l-3xl"></div>
            <div className="hidden xl:flex xl:h-[284px] xl:w-[27px] bg-neutral-35 rounded-l-3xl"></div>
            <Image src={IMAGES.ShopByRoom} alt={"shop by room"} className="w-full h-[380px] xl:size-[380px] object-cover rounded-t-3xl xl:rounded-3xl" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShopByRoom;
