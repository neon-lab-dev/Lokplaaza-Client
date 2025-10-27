"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import React from "react";

const TryARView = () => {
  return (
    <div className="py-14 font-Satoshi bg-primary-10">
      <Container>
        <div className=" flex flex-col  items-center justify-center gap-[92px] xl:gap-[72px] md:gap-32">
          <div>
            <Heading
              heading="NOT SURE ABOUT FITTING? TRY AR VIEW"
              title="See It In Your Space"
              alignClass="text-center"
              headingColor="text-neutral-40"
              titleColor="text-neutral-20"
            />
            <p className="text-neutral-20 text-center text-base md:text-2xl mt-4 mb-6">
             No more guesswork — visualize how our furniture will look and fit in your home using our AR tool. Simply open your camera and place the item virtually in your room.
            </p>
            <div className="flex justify-center ">
              <Button
                label="Try Now"
                bgColor="bg-success-05"
                textColor="text-success-10"
                icon={ICONS.cube}
                onClick={() => {
                  console.log("Clicked!");
                }}
              />
            </div>
          </div>

          <Image
            src={IMAGES.GotInspiration}
            alt={"shop by room"}
            className="w-[380px] h-[484px] object-cover rounded-3xl md:rounded-t-3xl xl:rounded-r-3xl"
          />
        </div>
      </Container>
    </div>
  );
};

export default TryARView;
