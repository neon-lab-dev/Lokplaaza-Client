import Container from "@/components/Reusable/Container/Container";
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

  const [selectedCategory, setSelectedCategory] = useState("Sofa");

  return (
    <div className="bg-neutral-10 py-10">
      <Container>
        {/* Category List */}
       <div className="flex items-center justify-center">
         <div className="w-fit flex flex-wrap justify-center gap-3 bg-neutral-15 rounded-full p-2">
          {productCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "bg-transparent text-neutral-600 hover:bg-white/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
       </div>

        {/* Selected category display (optional) */}
        <div className="mt-8 text-center text-neutral-700">
          <h3 className="text-lg font-semibold">
            
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default Products;
