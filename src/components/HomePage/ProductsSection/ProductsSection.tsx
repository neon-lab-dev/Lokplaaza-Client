"use client";
import { ICONS, IMAGES } from "@/assets";
import Products from "@/components/Reusable/Products/Products";
import { sampleProducts } from "@/constants/sampleProduct";
import Image from "next/image";
import React, { useState } from "react";

const ProductsSection = () => {
  const [viewMore, setViewMore] = useState(false);
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

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
