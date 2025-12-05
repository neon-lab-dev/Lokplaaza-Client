/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Container from "@/components/Reusable/Container/Container";
import ProductCard from "@/components/Reusable/ProductCard/ProductCard";

interface ProductsGridOnlyProps {
  products: any[];
  isLoading?: boolean;
}

const ProductsGrid: React.FC<ProductsGridOnlyProps> = ({
  products,
  isLoading,
}) => {
  return (
    <div className="bg-neutral-10 py-10">
      <Container>
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-3 md:gap-x-6 gap-y-20 place-items-center w-full">
          {isLoading ? (
            // Skeleton Loaders
            Array(8)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-full h-64 bg-gray-300 dark:bg-gray-700 animate-pulse rounded-xl"
                ></div>
              ))
          ) : products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p className="text-neutral-600 text-center col-span-full">
              No products available.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProductsGrid;
