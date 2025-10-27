"use client";
import { IMAGES } from "@/assets";
import Image from "next/image";

const Explore = () => {
  return (
    <div className="font-Satoshi bg-neutral-10 flex flex-row items-center">
      {/* Right Side - Image */}
      <div className="w-full xl:w-[45%]">
        <Image
          src={IMAGES.TryARView}
          alt="Explore Luxury Furniture"
          className="w-full h-[184px] md:h-[343px] xl:h-[653px] object-cover"
        />
      </div>

      {/* Left Side - Text Section */}
      <div className="w-full xl:w-[55%] px-6 xl:pl-20 flex flex-col justify-center">
        <h2 className="text-neutral-20 text-xl md:text-3xl xl:text-6xl font-bold">
            Explore Luxury Furniture
        </h2>
        <p className="text-neutral-20 text-[13px] md:text-base xl:text-2xl mt-4 mb-6 md:mt-3 md:mb-4 max-w-[550px]">
          Handpicked luxury furniture, known for its exceptional quality,
          timeless design and unparalleled craftsmanship.
        </p>
      </div>
    </div>
  );
};

export default Explore;
