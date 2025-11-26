/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Link from "next/link";
import StarRating from "../Rating/Rating";
import { ICONS } from "@/assets";

type TProps = {
  product: any;
};
const ProductCard: React.FC<TProps> = ({ product }) => {
  const rating = 4.5;

  // Get the lowest price from all color sizes
  const lowestPrice = Math.min(
    ...product.colors.flatMap((color: any) =>
      color.sizes.map((size: any) => size.discountedPrice)
    )
  );

  // Get the original price for comparison
  const originalPrice = Math.min(
    ...product.colors.flatMap((color: any) =>
      color.sizes.map((size: any) => size.basePrice)
    )
  );

  // Calculate discount percentage
  const discountPercentage = Math.round(
    ((originalPrice - lowestPrice) / originalPrice) * 100
  );

  return (
    <Link href={`/products/${product._id}`} className="block group w-full">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gray-50">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {discountPercentage}% OFF
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm">
            {product.category}
          </div>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <Image
                  src={ICONS.rightArrowRed}
                  alt="View details"
                  className="size-5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <StarRating rating={rating} size={14} />
            <span className="text-sm text-gray-500">({rating})</span>
          </div>

          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Current Price */}
              <span className="text-xl font-bold text-gray-900">
                ₹{lowestPrice.toLocaleString()}
              </span>

              {/* Original Price */}
              {originalPrice > lowestPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Available Colors */}
            <div className="flex items-center gap-1">
              {product.colors.slice(0, 3).map((color: any, index: number) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-full border border-gray-300"
                  style={{
                    backgroundColor:
                      color.colorName.toLowerCase() === "orange"
                        ? "#FFA500"
                        : color.colorName.toLowerCase() === "blue"
                        ? "#3B82F6"
                        : color.colorName.toLowerCase() === "black"
                        ? "#000000"
                        : color.colorName.toLowerCase() === "white"
                        ? "#FFFFFF"
                        : color.colorName.toLowerCase() === "red"
                        ? "#EF4444"
                        : "#6B7280",
                  }}
                  title={color.colorName}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{product.colors.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Available Sizes */}
          <div className="mt-2 flex items-center gap-1">
            <span className="text-xs text-gray-500">Sizes:</span>
            {product.colors[0]?.sizes
              .slice(0, 3)
              .map((size: any, index: number) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 px-2 py-1 rounded"
                >
                  {size.size}
                </span>
              ))}
            {product.colors[0]?.sizes.length > 3 && (
              <span className="text-xs text-gray-500">
                +{product.colors[0].sizes.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
