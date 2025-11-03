import { ICONS } from "@/assets";
import Image, { StaticImageData } from "next/image";

interface KitchenCardProps {
  title: string;
  image: string | StaticImageData;
  onClick: () => void;
}

const KitchenCard = ({ title, image,onClick }: KitchenCardProps) => {
  return (
    <div
      className="relative w-[380px] h-56 rounded-xl group overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-xl transition-transform duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-gradient group-hover:bg-black/60 flex items-end justify-between text-white p-6 transition-all duration-300 w-full">
        <div className="flex flex-col items-end justify-between h-full w-full">
          {/* Arrow — visible only on hover */}

          <Image
            src={ICONS.rightArrow}
            alt="arrow"
            className="size-6 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
          />
          <div className="space-y-2">
            <h3 className="font-medium text-white text-xl">{title}</h3>
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium mollitia quo laboriosam voluptate dolorem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenCard;
