import CallToAction from "@/components/HomePage/CallToAction/CallToAction";
import Explore from "@/components/HomePage/Explore/Explore";
import GotInspiration from "@/components/HomePage/GotInspiration/GotInspiration";
import HeroSection from "@/components/HomePage/Hero/HeroSection";
import HotSellers from "@/components/HomePage/HotSellers/HotSellers";
import ShopByRoom from "@/components/HomePage/ShopByRoom/ShopByRoom";
import TryARView from "@/components/HomePage/TryARView/TryARView";
import VirtualWalk from "@/components/HomePage/VirtualWalk/VirtualWalk";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HotSellers />
      <ShopByRoom/>
      <GotInspiration/>
      <VirtualWalk/>
      <Explore/>
      <TryARView/>
      <CallToAction/>
      <WhyChooseUs/>
    </div>
  );
}
