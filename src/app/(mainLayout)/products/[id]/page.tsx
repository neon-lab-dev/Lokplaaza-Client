/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { ICONS } from "@/assets";
import ProductAR from "@/components/ARViewer/ARViewer";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import { addToCart } from "@/redux/features/Cart/cartSlice";
import { useGetSingleProductByIdQuery } from "@/redux/features/Product/productApi";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

interface Size {
  size: string;
  quantity: number;
  discountedPrice?: number;
  _id: string;
}

interface ColorVariant {
  _id: string;
  colorName: string;
  sizes: Size[];
}

interface Product {
  productId?: string; // ADD THIS
  name?: string;
  description?: string;
  imageUrls?: string[];
  colors?: ColorVariant[];
  arFileUrl: string;
}

const ProductDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data, isLoading } = useGetSingleProductByIdQuery(id);
  const product: Product = data?.data || {};
  const imageUrls = product.imageUrls || [];
  const colors = product.colors || [];
  const [currentSlider, setCurrentSlider] = useState(0);

  const [selectedColor, setSelectedColor] = useState<ColorVariant | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);

  useEffect(() => {
    if (!product?.colors?.length) return;

    // pick first color that has at least one size in stock
    const firstAvailableColor =
      product.colors.find((c) => c.sizes.some((s) => s.quantity > 0)) ||
      product.colors[0];

    setSelectedColor(firstAvailableColor);

    // pick first available size for that color
    const firstAvailableSize =
      firstAvailableColor.sizes.find((s) => s.quantity > 0) ||
      firstAvailableColor.sizes[0];

    setSelectedSize(firstAvailableSize);
  }, [product]);

  // ⭐ Image Auto Slider
  useEffect(() => {
    if (!imageUrls.length) return;

    const interval = setInterval(() => {
      setCurrentSlider((prev) =>
        prev === imageUrls.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imageUrls]);

  // ⭐ Ratings UI
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

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!product || !selectedColor || !selectedSize) {
      console.log("Cannot add: missing required selections");
      return;
    }

    dispatch(
      addToCart({
        productId: selectedSize._id,
        name: product.name!,
        image: product?.imageUrls?.[0] as string,
        color: selectedColor.colorName,
        size: selectedSize.size,
        quantity: 1,
        price: selectedSize.discountedPrice!,
      })
    );
    toast.success("Product added to cart!");
  };

  const handleAddToCartAndRedirect = () => {
    handleAddToCart();
    router.push("/cart");
  }

  // ⭐ Loading State
  if (isLoading || !product)
    return (
      <Container>
        <div className="py-20 text-center text-neutral-30">
          Loading product...
        </div>
      </Container>
    );

  return (
    <Container>
      <div className="font-Satoshi my-10">

        <div className="flex flex-col lg:flex-row gap-6 mt-6 lg:mt-8">
          {/* LEFT SIDE - IMAGE SECTION */}
          <div className="w-full lg:w-[50%]">
            {imageUrls.length > 0 && (
              <div className="relative h-60 sm:h-96 md:h-135 w-full rounded-2xl overflow-hidden bg-neutral-10">
                <Image
                  src={imageUrls[currentSlider]}
                  alt={product.name || "product"}
                  fill
                  className="object-cover"
                />

                {/* AR Viewer */}
                <div className="absolute bottom-0 right-0 p-2">
                  <ProductAR />
                </div>
              </div>
            )}

            {/* Thumbnails */}
            <div className="flex items-center gap-3 p-2">
              {imageUrls.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  width={120}
                  height={90}
                  alt="thumb"
                  onClick={() => setCurrentSlider(idx)}
                  className={`w-16 h-12 md:w-20 md:h-12 cursor-pointer rounded-md object-cover ${
                    currentSlider === idx ? "border-2 border-black p-px" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - PRODUCT DETAILS */}
          <div className="w-full lg:w-[50%]">
            <div className="flex justify-between items-center">
              {" "}
              <h1 className="text-neutral-20 text-2xl font-bold leading-8">
                {product.name}
              </h1>
              <button
                onClick={() => handleAddToCart()}
                className="rounded-3xl px-3 py-2 flex items-center justify-center gap-2 bg-neutral-10 hover:bg-success-05 text-success-05 hover:text-white cursor-pointer transition duration-300"
              >
                <RiShoppingCart2Line />
                Add To Cart
              </button>
            </div>

            <h2 className="text-neutral-20 font-bold leading-8">
              {selectedSize?.discountedPrice
                ? `₹ ${selectedSize.discountedPrice}/-`
                : "Price Unavailable"}
            </h2>

            <p className="text-neutral-40 text-sm font-medium">
              incl. all taxes
            </p>

            <div className="flex items-center gap-1 mt-2">
              {renderStars()}
              <span className="text-neutral-40 text-sm ml-2">{rating}</span>
            </div>

            <p className="text-neutral-40 text-sm mt-5 leading-6">
              {product.description}
            </p>

            {/* Color Selector */}
            {colors.length > 0 && (
              <div className="mt-6">
                <p className="font-medium mb-2">Choose Color:</p>
                <div className="flex gap-3 flex-wrap">
                  {colors.map((color) => (
                    <button
                      key={color._id}
                      onClick={() => {
                        setSelectedColor(color);

                        const firstAvailableSize =
                          color.sizes.find((s) => s.quantity > 0) ||
                          color.sizes[0];

                        setSelectedSize(firstAvailableSize);
                      }}
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
                  {selectedColor.sizes.map((size) => (
                    <button
                      key={size.size}
                      disabled={size.quantity === 0}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 rounded-lg border ${
                        selectedSize?.size === size.size
                          ? "border-black"
                          : "border-neutral-30"
                      } ${
                        size.quantity === 0
                          ? "opacity-40 cursor-not-allowed"
                          : ""
                      }`}
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
            <Button
              label="Buy Now"
              icon={ICONS.rightArrowRed}
              className="w-full mt-7"
              bgColor="bg-neutral-10"
              textColor="text-neutral-05"
              onClick={() => handleAddToCartAndRedirect()}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
