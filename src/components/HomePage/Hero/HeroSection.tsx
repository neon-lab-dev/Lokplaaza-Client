import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Navbar from "@/components/Shared/Navbar/Navbar";
import OfferAnnouncement from "@/components/Shared/OfferAnnouncement/OfferAnnouncement";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <OfferAnnouncement />
      <div className="relative h-fit font-Satoshi">
        <Image
          src={IMAGES.heroSofa}
          alt={"hero section"}
          className="hidden md:flex absolute top-0 right-0 h-full z-[-1] object-cover"
        />
        <Image
          src={IMAGES.heroSofaSmall}
          alt={"hero section"}
          className="absolute flex  md:hidden top-0 right-0 h-full z-[-1] object-cover"
        />
        <Container>
          <div className="flex flex-col items-center justify-center">
            <Navbar />
            <div className="space-y-6">
              <h1 className="text-neutral-25 text-center text-3xl md:text-[61px] font-bold max-w-[1128px]">
                Make Your Interior More Minimalistic & Modern
              </h1>
              <p className="text-neutral-30 text-base md:text-2xl lg:text-3xl text-center leading-8">
                Turn your room with panto into a lot more minimalist and modern
                with ease and speed
              </p>
            </div>
            <div className="h-full mt-40"></div>
          </div>
        </Container>
        <OfferAnnouncement />
      </div>
    </div>
  );
};

export default HeroSection;
