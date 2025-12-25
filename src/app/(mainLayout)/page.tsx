"use client";
import { IMAGES } from "@/assets";
import CallToAction from "@/components/Reusable/CallToAction/CallToAction";
import GotInspiration from "@/components/HomePage/GotInspiration/GotInspiration";
import HeroSection from "@/components/HomePage/Hero/HeroSection";
import OfflineStore from "@/components/HomePage/OfflineStore/OfflineStore";
// import PhotoGallery from "@/components/HomePage/PhotoGallery/PhotoGallery";
import ShopByRoom from "@/components/HomePage/ShopByRoom/ShopByRoom";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import TryARView from "@/components/HomePage/TryARView/TryARView";
import VirtualWalk from "@/components/HomePage/VirtualWalk/VirtualWalk";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs/WhyChooseUs";
import ProductsSection from "@/components/HomePage/ProductsSection/ProductsSection";
import Accessories from "@/components/HomePage/Accessories/Accessories";
import Appliances from "@/components/HomePage/Appliances/Appliances";
import ModularKitchen from "@/components/HomePage/ModularKitchen/ModularKitchen";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import TalkToDesignExpert from "@/components/ModularKitchenPage/TalkToDesignExpert/TalkToDesignExpert";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <Container>
        <div className="relative h-100 md:h-125 w-full rounded-2xl">
          <Image
            src={IMAGES.HotSellerCTAbg}
            alt="hotsellers"
            fill
            priority
            className="rounded-2xl"
          />
        </div>
      </Container>
      <ShopByRoom />
      <GotInspiration />
      <VirtualWalk />
      <TalkToDesignExpert />
      <TryARView />
      <CallToAction
        image={IMAGES.offerBanner}
        height="h-[250px] md:h-[350px]"
      />
      <ModularKitchen />
      <Appliances />
      <Accessories />
      <CallToAction
        image={IMAGES.modularKitchen}
        height="h-[250px] md:h-[350px]"
      />
      <OfflineStore />
      <WhyChooseUs />
      <Testimonials />
      {/* <PhotoGallery /> */}
    </div>
  );
}
