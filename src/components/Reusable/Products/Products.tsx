import React, { useState } from "react";
import Container from "@/components/Reusable/Container/Container";
import ProductCard from "@/components/Reusable/ProductCard/ProductCard";
import SecondaryHeading from "@/components/Reusable/SecondaryHeading/SecondaryHeading";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  image: string|StaticImageData;
  category: string;
  title: string;
  rating: number;
  price: string;
}

interface ProductsProps {
  title?: string;
  productCategories: string[];
  products: Product[];
  showCategoryFilter?: boolean;
  defaultCategory?: string;
}

const Products: React.FC<ProductsProps> = ({
  title = "Products",
  productCategories,
  products,
  showCategoryFilter = true,
  defaultCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(
    defaultCategory || productCategories[0]
  );

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
            <div className="w-fit flex justify-center scrollbar-none gap-3 bg-neutral-15 rounded-full py-2 px-5 overflow-auto">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-white text-neutral-900 shadow-sm"
                      : "bg-transparent text-neutral-600 hover:bg-white/70"
                  } whitespace-nowrap`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3 md:gap-x-6 gap-y-20 place-items-center mt-20">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={`${product.id}-${product.title}`}
                  image={product.image}
                  category={product.category}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                />
              ))
            ) : (
              <p className="text-neutral-600 text-center col-span-full">
                No products found in this category.
              </p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
