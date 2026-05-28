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
  // clientImage,
  position,
  message,
}) => {

   // Function to get initials from name
  const getInitials = (fullName: string) => {
    return fullName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2); // Get first 2 letters/initials
  };
  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-teal-500",
      "bg-orange-500",
      "bg-cyan-500",
    ];
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  const initials = getInitials(name);
  const avatarColor = getAvatarColor(name);
  return (
    <div className="relative h-[400px] w-full md:w-full rounded-2xl overflow-hidden shadow-testimonial-card">
      {/* Background Image */}
      <Image
        src={image}
        alt="Testimonials"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 bottom-0 bg-neutral-05/10 w-full h-full"></div>

      {/* Content Overlay */}
      <div className="absolute bottom-8 left-[18px] right-[18px] z-20 bg-neutral-45 backdrop-blur-2xl p-4 rounded-2xl">
        {/* Avatar */}
        <div className="absolute -top-7 left-0 right-0 flex items-center justify-center">
          <div className="relative">
            {/* Outer ring/circle */}
            <div className={`size-12 rounded-full ${avatarColor} flex items-center justify-center shadow-md border-4 border-neutral-50`}>
              <span className="text-white font-semibold text-sm">
                {initials}
              </span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center justify-center text-center mt-4">
          <h3 className="font-medium text-lg text-neutral-20">{name}</h3>
          <h5 className="text-sm font-light text-neutral-55 mb-2">{position}</h5>
          <p className=" font-light text-neutral-20">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
