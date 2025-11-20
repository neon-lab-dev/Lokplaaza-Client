import BenefitsOfModularKitchen from "@/components/ModularKitchenPage/BenefitsOfModularKitchen/BenefitsOfModularKitchen";
import FindPerfectKitchen from "@/components/ModularKitchenPage/FindPerfectKitchen/FindPerfectKitchen";
import GetCustomizedKitchenBanner from "@/components/ModularKitchenPage/GetCustomizedKitchenBanner/GetCustomizedKitchenBanner";
import ModularKitchenHero from "@/components/ModularKitchenPage/ModularKitchenHero/ModularKitchenHero";
import OurCollection from "@/components/ModularKitchenPage/OurCollection/OurCollection";
import OurRange from "@/components/ModularKitchenPage/OurRange/OurRange";
import RecommendedAccessories from "@/components/ModularKitchenPage/RecommendedAccessories/RecommendedAccessories";
import StartDreamKitchenBanner from "@/components/ModularKitchenPage/StartDreamKitchenBanner/StartDreamKitchenBanner";
import StepsOfCustomizedKitchen from "@/components/ModularKitchenPage/StepsOfCustomizedKitchen/StepsOfCustomizedKitchen";
import TalkToDesignExpert from "@/components/ModularKitchenPage/TalkToDesignExpert/TalkToDesignExpert";

const ModularKitchen = () => {
  return (
    <div className="bg-neutral-10">
      <ModularKitchenHero />
      <FindPerfectKitchen/>
      <StartDreamKitchenBanner />
      <BenefitsOfModularKitchen />
      <GetCustomizedKitchenBanner />
      <StepsOfCustomizedKitchen />
      <OurRange />
      <OurCollection/>
      <RecommendedAccessories/>
      <TalkToDesignExpert />
    </div>
  );
};

export default ModularKitchen;