"use client";
import { ICONS, IMAGES } from "@/assets";
import Products from "@/components/Reusable/Products/Products";
import Image from "next/image";
import React, { useState } from "react";

const ProductsSection = () => {
  const [viewMore, setViewMore] = useState(false);
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };
  const sampleProducts = [
    {
      id: 15,
      image: IMAGES.GotInspiration.src,
      category: "Sofa",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 25,
      image: IMAGES.GotInspiration,
      category: "Chair",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 19,
      image: IMAGES.GotInspiration,
      category: "Sofa",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 22,
      image: IMAGES.GotInspiration,
      category: "Chair",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 15,
      image: IMAGES.GotInspiration,
      category: "Sofa",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 75,
      image: IMAGES.GotInspiration,
      category: "Chair",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 1,
      image: IMAGES.GotInspiration,
      category: "Sofa",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 20,
      image: IMAGES.GotInspiration,
      category: "Chair",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 81,
      image: IMAGES.GotInspiration,
      category: "Sofa",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 72,
      image: IMAGES.GotInspiration,
      category: "Chair",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 31,
      image: IMAGES.GotInspiration,
      category: "Sofa",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 2,
      image: IMAGES.GotInspiration,
      category: "Chair",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 21,
      image: IMAGES.GotInspiration,
      category: "Sofa",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 42,
      image: IMAGES.GotInspiration,
      category: "Chair",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 14,
      image: IMAGES.GotInspiration,
      category: "Sofa",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 3,
      image: IMAGES.GotInspiration,
      category: "Chair",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
  ];

  const categories = ["All", "Sofa", "Chair", "Table"];
  return (
    <div>
      <Products
        title="Home Furniture"
        productCategories={categories}
        products={sampleProducts}
        defaultCategory="All"
      />
      {!viewMore && (
        <div
          onClick={handleViewMore}
          className="text-center gap-2 text-success-05 font-medium bg-neutral-10 cursor-pointer flex items-center justify-center "
        >
          <p>View More</p>
          <Image src={ICONS.downArrow} alt="view more" className="size-6" />
        </div>
      )}
      {viewMore && (
        <div>
          {" "}
          <Products
            title="Home Furniture"
            productCategories={categories}
            products={sampleProducts}
            defaultCategory="All"
          />
          <Products
            title="Home Furniture"
            productCategories={categories}
            products={sampleProducts}
            defaultCategory="All"
          />
        </div>
      )}
    </div>
  );
};

export default ProductsSection;
