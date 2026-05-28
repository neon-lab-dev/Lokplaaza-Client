"use client";
import { IMAGES } from "@/assets";
import CallToAction from "@/components/Reusable/CallToAction/CallToAction";
import GotInspiration from "@/components/HomePage/GotInspiration/GotInspiration";
import HeroSection from "@/components/HomePage/Hero/HeroSection";
import OfflineStore from "@/components/HomePage/OfflineStore/OfflineStore";
// import PhotoGallery from "@/components/HomePage/PhotoGallery/PhotoGallery";
import ShopByRoom from "@/components/HomePage/ShopByRoom/ShopByRoom";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
// import TryARView from "@/components/HomePage/TryARView/TryARView";
import VirtualWalk from "@/components/HomePage/VirtualWalk/VirtualWalk";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs/WhyChooseUs";
import ProductsSection from "@/components/HomePage/ProductsSection/ProductsSection";
// import Accessories from "@/components/HomePage/Accessories/Accessories";
// import Appliances from "@/components/HomePage/Appliances/Appliances";
// import ModularKitchen from "@/components/HomePage/ModularKitchen/ModularKitchen";
// import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import TalkToDesignExpert from "@/components/ModularKitchenPage/TalkToDesignExpert/TalkToDesignExpert";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
        <div className="relative w-full h-45 md:h-62 lg:h-86.5 rounded-2xl">
          <Link href={"/contact-us"} className="h-45 w-full">
            <Image
              src={IMAGES.offerBannerMobile}
              alt="hotsellers"
              className="rounded-2xl"
            />
          </Link>
          <Link href={"/contact-us"} className="hidden md:block lg:hidden h-62">
            <Image
              src={IMAGES.offerBannerTab}
              alt="hotsellers"
              fill
              priority
              className="rounded-2xl"
            />
          </Link>
          <Link href={"/contact-us"} className="hidden lg:block h-86.5">
            <Image
              src={IMAGES.offerBannerDesktop}
              alt="hotsellers"
              fill
              priority
              className="rounded-2xl"
            />
          </Link>
        </div>
      <ShopByRoom />
      <GotInspiration />
      <VirtualWalk />
      <TalkToDesignExpert />
      {/* <TryARView /> */}
      {/* <Link href={"/contact-us"} className="hidden md:block lg:hidden">
      <Image src={IMAGES.offerBannerTab} alt="cta-banner" />
      </Link>
      <Link href={"/contact-us"} className="hidden lg:block">
      <Image src={IMAGES.offerBannerDesktop} alt="cta-banner" />
      </Link> */}
      {/* <ModularKitchen />
      <Appliances />
      <Accessories /> */}
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
