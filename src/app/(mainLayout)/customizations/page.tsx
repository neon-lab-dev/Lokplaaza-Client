"use client";

import { useSelector } from "react-redux";
import VariantPage from "./Variant";
import UpholsteryPage from "./Upholstery";
import ReviewPage from "./Review";
import CustomizationPage from "./customizatoin";

const Customizations = () => {
  const step = useSelector((state) => state.customization.step);

  if (step === 1) return <VariantPage />;
  if (step === 2) return <CustomizationPage />;
  if (step === 3) return <UpholsteryPage />;
  return <ReviewPage />;
};

export default Customizations;
