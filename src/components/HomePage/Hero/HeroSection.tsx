import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Navbar from "@/components/Shared/Navbar/Navbar";
import OfferAnnouncement from "@/components/Shared/OfferAnnouncement/OfferAnnouncement";
import Image from "next/image";
import React, { useState } from "react";

const HeroSection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const colors = [
    { id: "primary", bg: "primary-05" },
    { id: "success", bg: "success-05" },
    { id: "secondary", bg: "secondary-05" },
  ];

  return (
    <div className="relative font-Satoshi">
      {/* Offer banner */}
      <OfferAnnouncement />

     <Image
        src={IMAGES.heroSofa}
        alt="hero section"
        fill
        priority
        className="hidden md:block object-cover -z-10"
      />

      {/* Mobile background image */}
      <Image
        src={IMAGES.heroSofaSmall}
        alt="hero section small"
        fill
        priority
        className="block md:hidden object-cover -z-10"
      />

      <Container>
        <Navbar />  
        <div className="flex flex-col items-center justify-center text-center min-h-screen py-10">
          

          <div className="space-y-6 mt-10">
            <h1 className="text-neutral-25 text-3xl md:text-[61px] font-medium max-w-[1128px]">
              Make Your Interior More Minimalistic & Modern
            </h1>
            <p className="text-neutral-30 text-base md:text-2xl lg:text-3xl font-light leading-8">
              Turn your room with Panto into a lot more minimalist and modern
              with ease and speed
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-10">
            {/* Color selectors */}
            <div className="flex items-center justify-center gap-2.5 bg-neutral-05 rounded-full py-2 px-4 shadow-lg mb-80">
              {colors.map((color) => (
                <div
                  key={color.id}
                  onClick={() => setSelected(color.id)}
                  className={`size-10 rounded-full border-2 cursor-pointer transition-all duration-200 bg-${color.bg} ${
                    selected === color.id
                      ? "border-white "
                      : "scale-110 border-neutral-05"
                  }`}
                ></div>
              ))}
            </div>

            {/* Button */}
            <Button label="Browse Bestsellers" icon={ICONS.rightArrow} />
          </div>
        </div>
      </Container>
      <OfferAnnouncement />
    </div>
  );
};

export default HeroSection;
