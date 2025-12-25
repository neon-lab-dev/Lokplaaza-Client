import BenefitsOfModularKitchen from "@/components/ModularKitchenPage/BenefitsOfModularKitchen/BenefitsOfModularKitchen";
import GetCustomizedKitchenBanner from "@/components/ModularKitchenPage/GetCustomizedKitchenBanner/GetCustomizedKitchenBanner";
import ModularKitchenHero from "@/components/ModularKitchenPage/ModularKitchenHero/ModularKitchenHero";
import ModularKitchenSolutions from "@/components/ModularKitchenPage/ModularKitchenSolutions/ModularKitchenSolutions";
import OurCollection from "@/components/ModularKitchenPage/OurCollection/OurCollection";
import OurRange from "@/components/ModularKitchenPage/OurRange/OurRange";
import RecommendedAccessories from "@/components/ModularKitchenPage/RecommendedAccessories/RecommendedAccessories";
import StartDreamKitchenBanner from "@/components/ModularKitchenPage/StartDreamKitchenBanner/StartDreamKitchenBanner";
import StepsOfCustomizedKitchen from "@/components/ModularKitchenPage/StepsOfCustomizedKitchen/StepsOfCustomizedKitchen";
import TalkToDesignExpert from "@/components/ModularKitchenPage/TalkToDesignExpert/TalkToDesignExpert";
import WhyChooseLokplaaza from "@/components/Shared/WhyChooseLokplaaza/WhyChooseLokplaaza";

const ModularKitchen = () => {
  return (
    <div className="bg-neutral-10">
      <ModularKitchenHero />
      <WhyChooseLokplaaza/>
      <ModularKitchenSolutions/>
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