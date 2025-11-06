"use client";
import { ICONS, IMAGES } from "@/assets";
import CallToAction from "@/components/Reusable/CallToAction/CallToAction";
import Explore from "@/components/HomePage/Explore/Explore";
import GotInspiration from "@/components/HomePage/GotInspiration/GotInspiration";
import HeroSection from "@/components/HomePage/Hero/HeroSection";
import HotSellers from "@/components/HomePage/HotSellers/HotSellers";
import OfflineStore from "@/components/HomePage/OfflineStore/OfflineStore";
import PhotoGallery from "@/components/HomePage/PhotoGallery/PhotoGallery";
import ShopByRoom from "@/components/HomePage/ShopByRoom/ShopByRoom";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import TryARView from "@/components/HomePage/TryARView/TryARView";
import VirtualWalk from "@/components/HomePage/VirtualWalk/VirtualWalk";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs/WhyChooseUs";
import ProductsSection from "@/components/HomePage/ProductsSection/ProductsSection";
import ModularKitchen from "@/components/HomePage/ModularKitchen/ModularKitchen";
import Accessories from "@/components/HomePage/Accessories/Accessories";
import Appliances from "@/components/HomePage/Appliances/Appliances";
import StartDreamKitchenBanner from "@/components/StartDreamKitchenBanner/StartDreamKitchenBanner";
import BenefitsOfModularKitchen from "@/components/BenefitsOfModularKitchen/BenefitsOfModularKitchen";
import GetCustomizedKitchenBanner from "@/components/GetCustomizedKitchenBanner/GetCustomizedKitchenBanner";
import StepsOfCustomizedKitchen from "@/components/StepsOfCustomizedKitchen/StepsOfCustomizedKitchen";

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <StartDreamKitchenBanner/>
      <BenefitsOfModularKitchen/>
      <GetCustomizedKitchenBanner/>
      <StepsOfCustomizedKitchen/>


      <ProductsSection />
      <HotSellers />
      <ShopByRoom />
      <GotInspiration />
      <VirtualWalk />
      <Explore />
      <TryARView />
      <CallToAction
        image={IMAGES.offerBanner}
        heading="Upto 50% off on Modular Kitchens"
        buttonLabel="Explore options"
        buttonIcon={ICONS.rightArrow}
        onButtonClick={() => console.log("CTA Clicked")}
        height="h-[250px] md:h-[350px]"
        overlayClass="bg-black/30"
        textAlign="left"
      />
      <ModularKitchen />
      <Appliances />
      <Accessories />
      <CallToAction
        image={IMAGES.offerBanner}
        heading="Plan your dream kitchen with Lokplaaza."
        subtext="Smart solutions, stylish designs, and everything you need under one roof."
        buttonLabel="Book Appointment"
        buttonIcon={ICONS.downArrow}
        onButtonClick={() => console.log("CTA Clicked")}
        height="h-[250px] md:h-[350px]"
        overlayClass="bg-black/30"
        textAlign="left"
        textColor="text-success-20"
        bgColor="bg-success-10"
        iconClassName="rotate-270"
      />
      <OfflineStore />
      <WhyChooseUs />
      <Testimonials />
      <PhotoGallery />
    </div>
  );
}
