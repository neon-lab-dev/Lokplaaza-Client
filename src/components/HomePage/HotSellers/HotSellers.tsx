import React from "react";
import HotSellersCard from "./HotSellerCards/HotSellersCard";
import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";

const HotSellers = () => {
  const hotSellerData = [
    {
      id: 1,
      title: "Modern Velvet Sofa",
      price: "₹10,000",
      image: IMAGES.heroSofa,
    },
    {
      id: 2,
      title: "Wooden Dining Set",
      price: "₹18,500",
      image: IMAGES.heroSofa,
    },
    {
      id: 3,
      title: "Ergonomic Office Chair",
      price: "₹7,999",
      image: IMAGES.heroSofa,
    },
    {
      id: 4,
      title: "Luxury King Bed",
      price: "₹25,000",
      image: IMAGES.heroSofa,
    },
    {
      id: 5,
      title: "Minimal Coffee Table",
      price: "₹6,000",
      image: IMAGES.heroSofa,
    },
    {
      id: 6,
      title: "Bookshelf Organizer",
      price: "₹4,500",
      image: IMAGES.heroSofa,
    },
    {
      id: 7,
      title: "TV Entertainment Unit",
      price: "₹14,999",
      image: IMAGES.heroSofa,
    },
    {
      id: 8,
      title: "Accent Lounge Chair",
      price: "₹8,499",
      image: IMAGES.heroSofa,
    },
    {
      id: 9,
      title: "Wall Mounted Shelves",
      price: "₹3,999",
      image: IMAGES.heroSofa,
    },
    {
      id: 10,
      title: "Queen Bed with Storage",
      price: "₹20,000",
      image: IMAGES.heroSofa,
    },
    {
      id: 11,
      title: "Outdoor Patio Set",
      price: "₹22,999",
      image: IMAGES.heroSofa,
    },
    {
      id: 12,
      title: "Kitchen Bar Stools",
      price: "₹5,500",
      image: IMAGES.heroSofa,
    },
    {
      id: 13,
      title: "Modern Wardrobe",
      price: "₹27,999",
      image: IMAGES.heroSofa,
    },
    {
      id: 14,
      title: "Kids Study Desk",
      price: "₹9,499",
      image: IMAGES.heroSofa,
    },
    {
      id: 15,
      title: "Compact Shoe Rack",
      price: "₹3,200",
      image: IMAGES.heroSofa,
    },
    {
      id: 16,
      title: "Stylish Recliner",
      price: "₹15,999",
      image: IMAGES.heroSofa,
    },
  ];

  return (
    <div className="py-10 font-Satoshi">
      <Container>
        <div className="flex justify-center items-center py-10">
          {/* Grid Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-6 w-full place-items-center">
            {hotSellerData.map((hotSeller: any) => (
              <HotSellersCard key={hotSeller.id} data={hotSeller} />
            ))}
          </div>
        </div>
      </Container>
      <div className="relative h-fit ">
        <Image
          src={IMAGES.HotSellerCTAbg}
          alt={"hotsellers"}
          className="absolute md:object-cover w-full h-full top-0 right-0 left-0 z-[-1]"
        />
        <Container>
          {" "}
          <h3 className="text-white font-bold text-xl md:text-3xl py-20 md:py-30  text-right ">
            Upto 50% off on <br></br>Hotsellers
          </h3>
        </Container>
      </div>
    </div>
  );
};

export default HotSellers;
