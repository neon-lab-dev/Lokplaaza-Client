"use client";
import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TryByMobileModal from "./TryByMobileModal";

const TryARView = () => {
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // detect mobile device or small screen
    const checkDevice = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // const handleTryNow = () => {
  //   if (isMobile) {
  //   } else {
  //     console.log("showing")
  //     setShowModal(true);
  //   }
  // };
  return (
    <div className="py-14 font-Satoshi bg-primary-10">
      <Container>
        <div className=" flex flex-col  items-center justify-center gap-23 xl:gap-18 md:gap-32">
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
            {/* <div className="flex justify-center ">
              <Button
                label="Try Now"
                bgColor="bg-success-05"
                textColor="text-success-10"
                icon={ICONS.cube}
                onClick={() => {
                  handleTryNow();
                }}
              />
            </div> */}
          </div>

          <Image
            src={IMAGES.tryIt}
            alt={"shop by room"}
            className="w-95 h-121 object-cover rounded-3xl md:rounded-t-3xl xl:rounded-r-3xl"
          />
        </div>
      </Container>
      {
  showModal && (
    <TryByMobileModal onClose={() => setShowModal(false)} />
  )
}

    </div>
  );
};

export default TryARView;
