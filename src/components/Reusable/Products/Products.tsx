/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Container from "@/components/Reusable/Container/Container";
import ProductCard from "@/components/Reusable/ProductCard/ProductCard";
import SecondaryHeading from "@/components/Reusable/SecondaryHeading/SecondaryHeading";

interface ProductsProps {
  title?: string;
  productCategories: string[];
  products: any[];
  showCategoryFilter?: boolean;
  isLoading?: boolean;
}

const Products: React.FC<ProductsProps> = ({
  title = "Products",
  productCategories,
  products,
  showCategoryFilter = true,
  isLoading,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="bg-neutral-10 py-10">
      <Container>
        {/* Section Title */}
        <div className="text-center">
          <SecondaryHeading title={title} />
        </div>

        {/* Category Filter */}
        {showCategoryFilter && (
          <div className="flex items-center justify-center mt-12">
            <div className="w-fit flex justify-center scrollbar-none gap-3 bg-neutral-15 rounded-full p-2 overflow-auto">
              {isLoading
                ? Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <div
                        key={index}
                        className="w-16 px-5 py-4 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse"
                      ></div>
                    ))
                : // Actual category buttons
                  productCategories?.map((category: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category?.name)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                        selectedCategory === category?.name
                          ? "bg-success-05 text-white shadow-sm"
                          : "bg-transparent text-neutral-600 hover:bg-white/70"
                      } whitespace-nowrap`}
                    >
                      {category?.name}
                    </button>
                  ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 md:gap-x-6 gap-y-20 place-items-center mt-20 w-full">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={`${product._id}`} product={product} />
            ))
          ) : (
            <p className="text-neutral-600 text-center col-span-full">
              No products found in this category.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Products;
