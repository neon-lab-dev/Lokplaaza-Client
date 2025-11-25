"use client";

import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setVariant,
  setStep,
} from "@/redux/features/Customizations/customizationSlice";
import Button from "@/components/Reusable/Button/Button";

const variantOptions = [
  {
    title: "Compact Size",
    description:
      "Best for small living rooms, studio apartments, or when you want maximum comfort without occupying too much space.",
  },
  {
    title: "Standard Size",
    description:
      "Perfect balance of comfort and seating space. Ideal for regular households offering ample room without being bulky.",
  },
  {
    title: "Luxury Size",
    description:
      "Designed for spacious living areas. Offers maximum seating, high back support and premium comfort.",
  },
];

const VariantPage = () => {
  const dispatch = useDispatch();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleContinue = (selected: string) => {
    dispatch(setVariant(selected));
    dispatch(setStep(2));
  };

  return (
    <div className="max-w-[784px] mx-auto">
      <Container>
        <Image
          src={IMAGES.sofa}
          alt=""
          className="w-full lg:w-[930px] rounded-3xl mx-auto"
        />

        <h2 className="font-semibold text-neutral-05 mt-6 mb-2 text-lg">
          Select Your Furniture Size *
        </h2>

        {/* LOOP UI */}
        <div className="space-y-3">
          {variantOptions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b  px-4 py-3 cursor-pointer select-none border-neutral-10"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {/* TITLE + TOGGLE ICON */}
                <div className="flex items-center justify-between">
                  <h5 className="text-lg font-semibold text-neutral-20">
                    {item.title}
                  </h5>
                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-bold text-primary-05"
                  >
                    {isOpen ? "−" : "+"}
                  </motion.span>
                </div>

                {/* COLLAPSING CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-neutral-20">{item.description}</p>

                      {/* CTA BUTTON */}
                      <Button
                        onClick={() => {
                          handleContinue(item.title);
                        }}
                        className="w-full hover:scale-[100%] my-5"
                        label={`  Continue With ${item.title} →`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default VariantPage;
