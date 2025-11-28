/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS } from "@/assets";
import ProductAR from "@/components/ARViewer/ARViewer";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import { useGetSingleProductByIdQuery } from "@/redux/features/Product/productApi";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductByIdQuery(id);

  // Safely extract product details
  const product = data?.data || {};
  const {
    name,
    description,
    imageUrls ,
    colors,
  } = product;

  const router = useRouter();
  console.log(product)
  // ⭐ Selected Color + Size
  const [selectedColor, setSelectedColor] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);

  // ⭐ Auto Select First Available Color + Size
  useEffect(() => {
    if (!colors.length) return;

    const firstColorWithQty = colors.find((color: any) =>
      color.sizes.some((s: any) => s.quantity > 0)
    );

    if (firstColorWithQty) {
      setSelectedColor(firstColorWithQty);

      const firstAvailableSize = firstColorWithQty.sizes.find(
        (s: any) => s.quantity > 0
      );

      if (firstAvailableSize) {
        setSelectedSize(firstAvailableSize);
      }
    }
  }, [colors]);

  // ⭐ Image Slider
  const [currentSlider, setCurrentSlider] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlider((prev) =>
        prev === imageUrls.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imageUrls]);

  const rating = 4.5;

  const renderStars = () =>
    [...Array(5)].map((_, i) => {
      const index = i + 1;
      if (index <= Math.floor(rating))
        return <FaStar key={i} className="text-yellow-500" />;
      if (index === Math.ceil(rating) && rating % 1 !== 0)
        return <FaStarHalfAlt key={i} className="text-yellow-500" />;
      return <FaRegStar key={i} className="text-yellow-500" />;
    });

  // Loading State
  if (isLoading || !data)
    return (
      <Container>
        <div className="py-20 text-center text-neutral-30">Loading product...</div>
      </Container>
    );

  return (
    <Container>
      <div className="font-Satoshi my-10">
        {/* Breadcrumbs */}
        <p className="text-neutral-40 text-sm lg:text-xl font-medium">
          Home {">"} Home Furniture {">"}{" "}
          <span className="text-success-30 font-bold">{name}</span>
        </p>

        <div className="flex flex-col lg:flex-row gap-6 mt-6 lg:mt-8">
          {/* LEFT - Images */}
          <div className="w-full lg:w-[50%]">
            {imageUrls.length > 0 && (
              <div className="relative h-60 sm:h-96 md:h-[540px] w-full rounded-2xl overflow-hidden bg-neutral-10">
                <Image
                  src={imageUrls[currentSlider]}
                  alt={name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 p-2">
                  <ProductAR />
                </div>
              </div>
            )}

            {/* Thumbnail Slider */}
            <div className="flex items-center gap-3 p-2">
              {imageUrls.map((img:any, idx:any) => (
                <Image
                  key={idx}
                  src={img}
                  width={120}
                  height={90}
                  alt={"thumb"}
                  onClick={() => setCurrentSlider(idx)}
                  className={`w-16 h-12 md:w-20 md:h-12 cursor-pointer rounded-md object-cover ${
                    currentSlider === idx ? "border-2 border-black p-px" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT - Product Details */}
          <div className="w-full lg:w-[50%]">
            <h1 className="text-neutral-20 text-2xl font-bold leading-8">
              {name}
            </h1>

            <h2 className="text-neutral-20 font-bold leading-8 mt-5">
              {selectedSize?.discountedPrice
                ? `₹ ${selectedSize.discountedPrice}/-`
                : "Price Unavailable"}
            </h2>

            <p className="text-neutral-40 text-sm font-medium">incl. all taxes</p>

            {/* Ratings */}
            <div className="flex items-center gap-1 mt-2">
              {renderStars()}
              <span className="text-neutral-40 text-sm ml-2">{rating}</span>
            </div>

            {/* Description */}
            <p className="text-neutral-40 text-sm mt-5 leading-6">
              {description}
            </p>

            {/* Color Selector */}
            {colors.length > 0 && (
              <div className="mt-6">
                <p className="font-medium mb-2">Choose Color:</p>
                <div className="flex gap-3 flex-wrap">
                  {colors.map((color: any) => (
                    <button
                      key={color._id}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-2 rounded-lg border ${
                        selectedColor?._id === color._id
                          ? "border-black"
                          : "border-neutral-30"
                      }`}
                    >
                      {color.colorName}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector */}
            {selectedColor && (
              <div className="mt-6">
                <p className="font-medium mb-2">Choose Size:</p>
                <div className="flex gap-3 flex-wrap">
                  {selectedColor.sizes.map((size: any) => (
                    <button
                      key={size.size}
                      disabled={size.quantity === 0}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 rounded-lg border ${
                        selectedSize?.size === size.size
                          ? "border-black"
                          : "border-neutral-30"
                      } ${size.quantity === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              label="Customize Now"
              icon={ICONS.rightArrow}
              className="w-full mt-7"
              onClick={() => router.push("/customizations")}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
