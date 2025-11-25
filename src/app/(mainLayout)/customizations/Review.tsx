/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Button from "@/components/Reusable/Button/Button";
import { useRouter } from "next/navigation";
import { setStep } from "@/redux/features/Customizations/customizationSlice";

const ReviewPage = () => {
  const dispatch = useDispatch();
    const router = useRouter();
  const { variant, customizations, fabric, color } = useSelector(
    (state: any) => state.customization
  );

  return (
    <div className="max-w-[784px] mx-auto">
      {/* Main Card */}
      <Container >
        {/* Header + Back */}
        <div className="p-4 flex items-center justify-between">
          <button
            className="text-xl text-neutral-700"
            onClick={() => dispatch(setStep(4))}
          >
            ←
          </button>
          <p className="font-medium text-sm text-neutral-900">
            Back To Upholstery
          </p>
        </div>

        {/* Sofa Image */}
        <Image src={IMAGES.sofa} alt="sofa" className="w-full rounded-none" />

        {/* Variant */}
        <div className="px-5 pt-6">
          <h3 className="text-base font-semibold text-neutral-900">
            Variant Type
          </h3>
          <p className="text-sm text-neutral-600 border-b pb-4">{variant}</p>
        </div>

        {/* Customizations Summary */}
        <div className="px-5 pt-6">
          <h3 className="text-base font-semibold text-neutral-900">
            Customizations
          </h3>

          <div className="space-y-3 mt-3 border-b pb-6">
            {Object.entries(customizations).map(([key, val]) => (
              <div key={key} className="flex justify-start">
                <span className="text-sm text-neutral-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </span>
                <span className="text-sm font-medium text-neutral-900">
                 - {String(val)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fabric/Upholstery Selection */}
        <div className="px-5 pt-6">
          {/* Fabric */}
          <div className="border-b pb-6">
            <div className="flex justify-between items-center">
              <p className="text-base font-medium">Fabric *</p>
              <span className="text-neutral-500">▲</span>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-5">
              {[
                { label: "Linen Weave", value: "linen", color: "#D3B08A" },
                { label: "Velvet Touch", value: "velvet", color: "#C15B40" },
                { label: "Cotton Blend", value: "cotton", color: "#E5E5E5" },
                { label: "Chenille Luxe", value: "chenille", color: "#5B3F42" },
              ].map((item) => (
                <div
                  key={item.value}
                  className={`p-2 border rounded-lg ${
                    fabric === item.value
                      ? "border-[#0F5E3B]"
                      : "border-gray-300"
                  }`}
                >
                  <div
                    className="h-10 rounded"
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="text-xs text-center mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="border-b pb-6 mt-6">
            <div className="flex justify-between items-center">
              <p className="text-base font-medium">Color *</p>
              <span className="text-neutral-500">▲</span>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-5">
              {[
                { hex: "#D3B08A", name: "Sand Beige" },
                { hex: "#9A8D84", name: "Warm Grey" },
                { hex: "#C15B40", name: "Terracotta" },
                { hex: "#4F4F4F", name: "Slate Grey" },
              ].map((item) => (
                <div
                  key={item.hex}
                  className={`p-2 border rounded-lg ${
                    color === item.hex ? "border-[#0F5E3B]" : "border-gray-300"
                  }`}
                >
                  <div
                    className="h-10 rounded"
                    style={{ backgroundColor: item.hex }}
                  />
                  <p className="text-xs text-center mt-1">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Confirm Button */}
      <div className="p-5 bg-white shadow-lg ">
        <Button
        label="   Confirm Customization →"
        className="w-full"
        onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
};

export default ReviewPage;
