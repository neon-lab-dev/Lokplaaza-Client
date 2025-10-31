import Image, { StaticImageData } from "next/image";
import React from "react";

interface TestimonialCardProps {
  image: string| StaticImageData;
  clientImage:string| StaticImageData;
  name: string;
  position: string;
  message: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  clientImage,
  position,
  message,
}) => {
  return (
    <div className="relative h-[380px] md:w-full xl:w-[380px] rounded-2xl overflow-hidden shadow-testimonial-card">
      {/* Background Image */}
      <Image
        src={image}
        alt="Testimonials"
        className="w-full h-[380px] object-cover"
      />

      {/* Content Overlay */}
      <div className="absolute bottom-8 left-[18px] right-[18px] z-20 bg-neutral-45 backdrop-blur-2xl p-4 rounded-2xl">
        {/* Avatar */}
        <div className="absolute -top-10 left-0 right-0 flex items-center justify-center">
          <Image
            src={clientImage}
            alt={name}
            className="size-12 rounded-full border-8 border-neutral-50 shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center justify-center text-center ">
          <h3 className="font-medium text-lg text-neutral-20">{name}</h3>
          <h5 className="text-sm font-light text-neutral-55 mb-2">{position}</h5>
          <p className=" font-light text-neutral-20">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
