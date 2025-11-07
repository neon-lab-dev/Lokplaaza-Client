import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import React from "react";
import KitchenCard from "./KitchenCard";
import { IMAGES } from "@/assets";

const ModularKitchen = () => {
  const kitchens = [
    { title: "Modern Kitchen", image: IMAGES.GotInspiration },
    { title: "Classic Kitchen", image: IMAGES.GotInspiration },
    { title: "Luxury Kitchen", image: IMAGES.GotInspiration },
    { title: "Contemporary Kitchen", image: IMAGES.GotInspiration },
    { title: "Rustic Kitchen", image: IMAGES.GotInspiration },
    { title: "Minimal Kitchen", image: IMAGES.GotInspiration },
    { title: "Scandinavian Kitchen", image: IMAGES.GotInspiration },
    { title: "Industrial Kitchen", image: IMAGES.GotInspiration },
  ];

  return (
    <div className="bg-neutral-10 py-14">
      <Container>
        <Heading title="Kitchen Styles" alignClass="text-left" />
      
      {/* Horizontal scroll wrapper INSIDE the container */}
      <div className="mt-8 -mx-5 2xl:mx-0">
        <div className="flex gap-4 overflow-x-auto scrollbar-none scroll-smooth px-5 2xl:px-0">
          <div className="flex gap-4 w-max">
            {kitchens.map((item, index) => (
              <KitchenCard
                key={index}
                title={item.title}
                image={item.image}
                onClick={() => console.log(`${item.title} clicked`)}
              />
            ))}
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
};

export default ModularKitchen;
