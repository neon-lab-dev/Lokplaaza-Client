"use client";
import { ICONS } from "@/assets";
import Products from "@/components/Reusable/Products/Products";
import { useGetAllCategoriesQuery } from "@/redux/features/Category/categoryApi";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import Image from "next/image";
import React, { useState } from "react";

const ProductsSection = () => {
  const [viewMore, setViewMore] = useState(false);
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  const { data:allProducts } = useGetAllProductsQuery({page:1, limit:16});
  const { data, isLoading} = useGetAllCategoriesQuery({});
  const allCategories = [
  { name: "All" },
  ...(data?.data?.categories || []),
];
  return (
    <div>
      <Products
        title="Home Furniture"
        productCategories={allCategories || []}
        products={allProducts?.data?.products || []}
        isLoading={isLoading}
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
      {/* {viewMore && (
        <div>
          {" "}
          <Products
            title="Home Furniture"
            productCategories={data?.data?.categories || []}
            products={sampleProducts}
            defaultCategory="All"
          />
          <Products
            title="Home Furniture"
            productCategories={data?.data?.categories || []}
            products={sampleProducts}
            defaultCategory="All"
          />
        </div>
      )} */}
    </div>
  );
};

export default ProductsSection;
