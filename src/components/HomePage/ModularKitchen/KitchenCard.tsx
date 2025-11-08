import { ICONS } from "@/assets";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface KitchenCardProps {
  title: string;
  image: string | StaticImageData;
  icon?: boolean;
  onClick: () => void;
}

const KitchenCard = ({ title, image, icon, onClick }: KitchenCardProps) => {
  return (
    <Link
      href="/modular-kitchen"
      className="relative w-[182px] h-56 rounded-xl group overflow-hidden cursor-pointer"
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
      <div className="absolute inset-0 bg-gray-gradient group-hover:bg-black/60 flex items-end justify-between text-white py-6 px-[18px] transition-all duration-300">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-medium text-neutral-10">{title}</h3>

          {/* Arrow — visible only on hover */}
          
            <Image
              src={ICONS.rightArrow}
              alt="arrow"
              className="size-6 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"/>
  
        </div>
      </div>
    </Link>
  );
};

export default KitchenCard;
