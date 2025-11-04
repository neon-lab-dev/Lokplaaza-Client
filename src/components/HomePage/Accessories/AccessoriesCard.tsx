import Image, { StaticImageData } from "next/image";

interface AccessoriesCardProps {
  title: string;
  image: string | StaticImageData;
  icon?: boolean;
  onClick: () => void;
}

const AccessoriesCard = ({ title, image,onClick }: AccessoriesCardProps) => {
  return (
    <div
      className="relative w-[182px] h-56 rounded-xl group overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-xl transition-transform duration-300 "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-gradient  flex items-end justify-between text-white py-6 px-[18px] transition-all duration-300">
          <h3 className="font-medium text-neutral-10">{title}</h3>

      </div>
    </div>
  );
};

export default AccessoriesCard;
