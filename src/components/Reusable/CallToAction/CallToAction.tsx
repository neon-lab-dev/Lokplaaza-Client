"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CallToActionProps {
  image: StaticImageData | string;
  height?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  image,
  height = "h-[185px] md:h-[300px]",
}) => {
  return (
    <div className={`relative w-full ${height}`}>
      {/* Background Image */}
      <Link href={"/contact-us"}>
      <Image src={image} alt="cta-banner" fill priority />
      </Link>
    </div>
  );
};

export default CallToAction;
