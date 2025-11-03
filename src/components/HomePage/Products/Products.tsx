import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import ProductCard from "@/components/Reusable/ProductCard/ProductCard";
import SecondaryHeading from "@/components/Reusable/SecondaryHeading/SecondaryHeading";
import React, { useState } from "react";

const Products = () => {
  const productCategories = [
    "Sofa",
    "Chair",
    "Table",
    "Bed",
    "Wardrobe",
    "TV Unit",
    "Dining Set",
    "Bookshelf",
    "Recliner",
    "Outdoor Furniture",
  ];
  const products = [
    {
      id: 1,
      image: IMAGES.GotInspiration,
      category: "Sofas",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 2,
      image: IMAGES.GotInspiration,
      category: "Tables",
      title: "Wooden Dining",
      rating: 4.2,
      price: "25,000",
    },
    {
      id: 3,
      image: IMAGES.GotInspiration,
      category: "Chairs",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 1,
      image: IMAGES.GotInspiration,
      category: "Sofas",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 2,
      image: IMAGES.GotInspiration,
      category: "Tables",
      title: "Wooden Dining",
      rating: 4.2,
      price: "25,000",
    },
    {
      id: 3,
      image: IMAGES.GotInspiration,
      category: "Chairs",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 1,
      image: IMAGES.GotInspiration,
      category: "Sofas",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 2,
      image: IMAGES.GotInspiration,
      category: "Tables",
      title: "Wooden Dining",
      rating: 4.2,
      price: "25,000",
    },
    {
      id: 3,
      image: IMAGES.GotInspiration,
      category: "Chairs",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 1,
      image: IMAGES.GotInspiration,
      category: "Sofas",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 2,
      image: IMAGES.GotInspiration,
      category: "Tables",
      title: "Wooden Dining",
      rating: 4.2,
      price: "25,000",
    },
    {
      id: 3,
      image: IMAGES.GotInspiration,
      category: "Chairs",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
    {
      id: 1,
      image: IMAGES.GotInspiration,
      category: "Sofas",
      title: "Modern 3-Seater",
      rating: 4.8,
      price: "30,000",
    },
    {
      id: 2,
      image: IMAGES.GotInspiration,
      category: "Tables",
      title: "Wooden Dining",
      rating: 4.2,
      price: "25,000",
    },
    {
      id: 3,
      image: IMAGES.GotInspiration,
      category: "Chairs",
      title: "Luxury Armchair",
      rating: 4.5,
      price: "12,000",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Sofa");

  return (
    <div className="bg-neutral-10 py-10">
      <Container>
        {/* Selected category display (optional) */}
        <div className="text-center">
         <SecondaryHeading title="Home Furniture"/>
        </div>
        {/* Category List */}
        <div className="flex items-center justify-center mt-12">
          <div className="w-fit flex justify-center gap-3 bg-neutral-15 rounded-full py-2 px-5 overflow-auto">
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
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-3  md:gap-x-5 gap-y-20 place-items-center  mt-20">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              category={product.category}
              title={product.title}
              rating={product.rating}
              price={product.price}
            />
          ))}
        </div>
        </div>
        
      </Container>
    </div>
  );
};

export default Products;
