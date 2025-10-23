import GotInspiration from "@/components/HomePage/GotInspiration/GotInspiration";
import HeroSection from "@/components/HomePage/Hero/HeroSection";
import HotSellers from "@/components/HomePage/HotSellers/HotSellers";
import ShopByRoom from "@/components/HomePage/ShopByRoom/ShopByRoom";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <HotSellers />
      <ShopByRoom/>
      <GotInspiration/>
    </div>
  );
}
