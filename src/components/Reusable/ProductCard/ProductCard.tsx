"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import StarRating from "../Rating/Rating";
import { ICONS } from '@/assets';

interface ProductCardProps {
  image: string | StaticImageData;
  category: string;
  title: string;
  rating: number;
  price: string | number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  category,
  title,
  rating,
  price,
}) => {
  return (
    <div className="bg-gradient-card relative size-[184px] rounded-br-[84px] px-6 py-10">
      {/* Product Image */}
      <div className="absolute w-full flex right-0 left-0 -top-10 items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={124}
          height={71}
          className="w-[124px] h-[71px] object-cover"
        />
      </div>

      {/* Corner Shadow Circle */}
      <div className="absolute flex items-center justify-center bg-white size-12 bottom-0 right-0 shadow-product-card rounded-full">
        <Image src={ICONS.rightArrowRed  } alt={title} className="size-6" /> 
      </div>

      {/* Product Details */}
      <div className="relative z-10">
        <h3 className="text-neutral-40 mb-2 text-sm ">{category}</h3>
        <h2 className="text-neutral-20 font-medium mb-1 ">{title}</h2>
        <StarRating rating={rating} size={12} />
        <h3 className="mt-3 text-secondary-05 font-medium ">
          Starting from ₹{price}/-
        </h3>
      </div>
    </div>
  );
};

export default ProductCard;
