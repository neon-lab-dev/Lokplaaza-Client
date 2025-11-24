"use client";

import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStep,
  updateCustomization,
} from "@/redux/features/Customizations/customizationSlice";
import Button from "@/components/Reusable/Button/Button";

const customizationOptions = {
  reclinerType: [
    {
      label: "Manual Recliner",
      description: "Budget-friendly mechanism operated manually with lever control.",
      value: "manual",
      priceImpact: 0,
    },
    {
      label: "Power Recliner",
      description: "Smooth and motorized recline action with remote/button control.",
      value: "power",
      priceImpact: 12000,
    },
    {
      label: "Zero-Gravity Recliner",
      description: "Designed to reduce stress on the spine and distribute weight evenly.",
      value: "zero_gravity",
      priceImpact: 22000,
    },
  ],

  armrestType: [
    {
      label: "Slim",
      description: "A minimal armrest style that gives more seating space.",
      value: "slim",
      priceImpact: 0,
    },
    {
      label: "Wide",
      description: "Premium wide armrests with extra padding and comfort.",
      value: "wide",
      priceImpact: 4000,
    },
    {
      label: "Pillow Top",
      description: "Soft cushioned design ideal for lounging and extended comfort.",
      value: "pillow_top",
      priceImpact: 6500,
    },
  ],

  middleConsole: [
    {
      label: "Without Console",
      description: "Classic uninterrupted seating layout.",
      value: "none",
      priceImpact: 0,
    },
    {
      label: "With Cup Holders",
      description: "Integrated console with dual cup holders and small utility tray.",
      value: "cup_holders",
      priceImpact: 3500,
    },
    {
      label: "Smart Console",
      description:
        "Charging ports, storage, cup holders and premium finish for a luxury feel.",
      value: "smart_console",
      priceImpact: 9000,
    },
  ],

  seatType: [
    {
      label: "Soft",
      description: "Plush, deep sinking comfort perfect for relaxing.",
      value: "soft",
      priceImpact: 0,
    },
    {
      label: "Medium Firm",
      description:
        "Ideal balance between support and comfort. Best for daily use.",
      value: "medium",
      priceImpact: 0,
    },
    {
      label: "Firm",
      description: "Support-focused seating great for posture and long sitting.",
      value: "firm",
      priceImpact: 2000,
    },
  ],

  backHeight: [
    {
      label: "Low Back",
      description: "Minimal style with modern aesthetics and lower head support.",
      value: "low",
      priceImpact: 0,
    },
    {
      label: "Mid Back",
      description:
        "Comfortable for medium support and relaxed everyday seating.",
      value: "mid",
      priceImpact: 2000,
    },
    {
      label: "High Back",
      description:
        "Max cushioning designed for head, neck and spinal support.",
      value: "high",
      priceImpact: 5000,
    },
  ],
};

const CustomizationPage = () => {
  const dispatch = useDispatch();
  const customizationState = useSelector((state: any) => state.customization.customizations);

  const [openIndex, setOpenIndex] = useState<string | null>("reclinerType");

  const categories = Object.entries(customizationOptions);

  const handleSelect = (key: string, value: string) => {
    dispatch(updateCustomization({ key, value }));
  
  };

  // Check if user has selected all options
  const allSelected = categories.every(([key]) => customizationState[key]);

  return (
    <div className="max-w-[784px] mx-auto">
      <Container>
        <Image
          src={IMAGES.sofa}
          alt="sofa"
          className="w-full lg:w-[930px] rounded-3xl mx-auto"
        />

        <div className="px-5 pt-6 pb-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">
            Customizations<span className="text-red-500">*</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-neutral-200">
          {categories.map(([key, options]) => {
            const isOpen = openIndex === key;

            return (
              <div
                key={key}
                className="px-5 py-4 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : key)}
              >
                <div className="flex items-center justify-between">
                  <h5 className="text-base font-medium text-[#222] capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </h5>
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl font-bold text-primary-05"
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      {options.map((opt) => {
                        const isSelected = customizationState[key] === opt.value;

                        return (
                          <button
                            key={opt.value}
                            className={`mt-3 p-3  w-full text-left text-sm transition ${
                              isSelected ? "bg-[#E6F5EC] border-green-600" : "hover:bg-gray-100"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelect(key, opt.value);
                            }}
                          >
                            <strong>{opt.label}</strong>
                            <p className="text-[#777] text-xs">{opt.description}</p>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Continue Button Only When Completed */}
      {allSelected && (
        <div className="p-5 sticky bottom-0 bg-white shadow-lg">
          <Button
            className="w-full bg-[#0F5E3B] text-white py-3 rounded-full text-sm hover:bg-[#0b4b2f] transition"
            onClick={() => dispatch(setStep(3))}
            label=" Continue →"

          />
           
         
        </div>
      )}
    </div>
  );
};

export default CustomizationPage;
