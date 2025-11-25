/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/Reusable/Button/Button";
import StepHeader from "@/components/CustomizationsPage/StepHeader";
import { setColor, setFabric, setStep } from "@/redux/features/Customizations/customizationSlice";

const dummyFabrics = [
  {
    label: "Linen Weave",
    value: "linen",
    colors: [
      { name: "Sand Beige", hex: "#D3B08A" },
      { name: "Warm Grey", hex: "#9A8D84" },
      { name: "Olive Brown", hex: "#6E5D4C" },
    ],
  },
  {
    label: "Velvet Touch",
    value: "velvet",
    colors: [
      { name: "Wine Red", hex: "#8C2F39" },
      { name: "Royal Blue", hex: "#243B6B" },
      { name: "Emerald Green", hex: "#2D4F29" },
    ],
  },
  {
    label: "Cotton Blend",
    value: "cotton",
    colors: [
      { name: "Off White", hex: "#E5E5E5" },
      { name: "Charcoal", hex: "#3D3D3D" },
      { name: "Sky Mist", hex: "#BFD7EA" },
    ],
  },
  {
    label: "Chenille Luxe",
    value: "chenille",
    colors: [
      { name: "Cocoa Brown", hex: "#5B3F42" },
      { name: "Slate Grey", hex: "#4F4F4F" },
      { name: "Taupe", hex: "#A89F91" },
    ],
  },
];

const UpholsteryPage = () => {
  const dispatch = useDispatch();
  const { fabric, color } = useSelector((state: any) => state.customization);

  const selectedFabric = dummyFabrics.find((f) => f.value === fabric);

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col justify-between">
        <StepHeader title="Customize" /> 
      <div className="w-[785px] max-w-[784px] mx-auto">
        <Image src={IMAGES.sofa} alt="sofa" className="w-full rounded-none" />

        <div className="px-5 pt-6 pb-4">
          <h2 className="text-xl font-semibold text-[#1A1A1A]">
            Upholstery <span className="text-red-500">*</span>
          </h2>
        </div>

        {/* Fabric Selection */}
        <div className="px-5 grid grid-cols-4 gap-4">
          {dummyFabrics.map((item) => {
            const isSelected = fabric === item.value;

            return (
              <button
                key={item.value}
                onClick={() => {
                  dispatch(setFabric(item.value));
                  dispatch(setColor("")); // reset color when changing fabric
                }}
                className={`rounded-xl border p-2 text-center transition ${
                  isSelected
                    ? "border-[#0F5E3B] ring-2 ring-[#0F5E3B]/40"
                    : "border-gray-300 hover:border-black"
                }`}
              >
                <div
                  style={{ backgroundColor: item.colors[0].hex }}
                  className="h-10 w-full rounded-md"
                />
                <p className="text-xs font-medium mt-2">{item.label}</p>
              </button>
            );
          })}
        </div>

        {/* Color Selection */}
        {fabric && (
          <div className="px-5 mt-6">
            <p className="font-medium text-sm mb-3 text-[#1A1A1A]">
              Select Color:
            </p>
            <div className="grid grid-cols-4 gap-4">
              {selectedFabric?.colors.map((c) => {
                const selected = color === c.hex;

                return (
                  <button
                    key={c.hex}
                    onClick={() => dispatch(setColor(c.hex))}
                    className={`rounded-xl p-2 border transition ${
                      selected
                        ? "border-[#0F5E3B] ring-2 ring-[#0F5E3B]/40"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    <div
                      style={{ backgroundColor: c.hex }}
                      className="h-10 w-full rounded-md"
                    />
                    <p className="text-xs text-center mt-2">{c.name}</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Continue Button */}
      <div className="p-5 bg-white shadow-lg">
        <Button
            className="w-full bg-[#0F5E3B] text-white py-3 rounded-full text-sm hover:bg-[#0b4b2f] transition"
            onClick={() => dispatch(setStep(4))}
            label=" Continue →"

          />
      </div>
    </div>
  );
};

export default UpholsteryPage;
