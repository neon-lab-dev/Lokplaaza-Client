import BenefitsOfModularKitchen from "@/components/ModularKitchenPage/BenefitsOfModularKitchen/BenefitsOfModularKitchen";
import GetCustomizedKitchenBanner from "@/components/ModularKitchenPage/GetCustomizedKitchenBanner/GetCustomizedKitchenBanner";
import OurRange from "@/components/ModularKitchenPage/OurRange/OurRange";
import StartDreamKitchenBanner from "@/components/ModularKitchenPage/StartDreamKitchenBanner/StartDreamKitchenBanner";
import StepsOfCustomizedKitchen from "@/components/ModularKitchenPage/StepsOfCustomizedKitchen/StepsOfCustomizedKitchen";
import TalkToDesignExpert from "@/components/ModularKitchenPage/TalkToDesignExpert/TalkToDesignExpert";

const ModularKitchen = () => {
  return (
    <div>
      <StartDreamKitchenBanner />
      <BenefitsOfModularKitchen />
      <GetCustomizedKitchenBanner />
      <StepsOfCustomizedKitchen />
      <OurRange />
      <TalkToDesignExpert />
    </div>
  );
};

export default ModularKitchen;