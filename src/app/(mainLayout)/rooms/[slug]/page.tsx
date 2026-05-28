"use client";
// import BenefitsOfModularKitchen from "@/components/ModularKitchenPage/BenefitsOfModularKitchen/BenefitsOfModularKitchen";
import ModularKitchenHero from "@/components/ModularKitchenPage/ModularKitchenHero/ModularKitchenHero";
import ModularKitchenSolutions from "@/components/ModularKitchenPage/ModularKitchenSolutions/ModularKitchenSolutions";
import RecommendedAccessories from "@/components/ModularKitchenPage/RecommendedAccessories/RecommendedAccessories";
import StartDreamKitchenBanner from "@/components/ModularKitchenPage/StartDreamKitchenBanner/StartDreamKitchenBanner";
import StepsOfCustomizedKitchen from "@/components/ModularKitchenPage/StepsOfCustomizedKitchen/StepsOfCustomizedKitchen";
import TalkToDesignExpert from "@/components/ModularKitchenPage/TalkToDesignExpert/TalkToDesignExpert";
import WhyChooseLokplaaza from "@/components/Shared/WhyChooseLokplaaza/WhyChooseLokplaaza";
import { roomData } from "@/data/roomData";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

const RoomPage = () => {
  const { slug } = useParams();

  // Get the room data based on the slug
  const room = roomData[slug as keyof typeof roomData];

  // If room doesn't exist, show 404
  if (!room) {
    notFound();
  }

  return (
    <div className="bg-neutral-10">
      <ModularKitchenHero data={room.hero} />

      <WhyChooseLokplaaza data={room.consultation} />

      <ModularKitchenSolutions data={room.solutions} slug={slug} />

      <StepsOfCustomizedKitchen />

      <StartDreamKitchenBanner
        data={room.startPlanning}
      />

      {/* <BenefitsOfModularKitchen /> */}
      {/* <OurCollection/> */}

      <RecommendedAccessories />
      <TalkToDesignExpert />
    </div>
  );
};

export default RoomPage;
