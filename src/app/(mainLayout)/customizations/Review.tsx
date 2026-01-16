/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Button from "@/components/Reusable/Button/Button";
import { useRouter } from "next/navigation";
import StepHeader from "@/components/CustomizationsPage/StepHeader";
import { reset } from "@/redux/features/Customizations/customizationSlice";
import { useSubmitCustomizationRequestMutation } from "@/redux/features/Customizations/customizationApi";
import { RootState } from "@/redux/store";
import TextInput from "@/components/Reusable/TextInput/TextInput"; // adjust path if needed

const ReviewPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { variantType, customizations, fabric, color } = useSelector(
    (state: RootState) => state.customization
  );

  // ✅ Real input fields (no defaults)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [submitCustomizationRequest, { isLoading }] =
    useSubmitCustomizationRequestMutation();

  const handleConfirm = async () => {
    if (!name || !email || !phoneNumber) {
      alert("Please fill all contact details");
      return;
    }

    try {
      const payload = {
        name,
        email,
        phoneNumber,
        variantType,
        customizations,
        fabric,
        color,
      };

      await submitCustomizationRequest(payload).unwrap();

      dispatch(reset());
      router.push("/cart");
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Submission failed");
    }
  };

  return (
    <div className="max-w-[784px] mx-auto">
      <StepHeader title="Review" />

      <Container>
        <Image src={IMAGES.sofa} alt="sofa" className="w-full rounded-none" />

        {/* Variant */}
        <div className="px-5 pt-6">
          <h3 className="text-base font-semibold text-neutral-900">
            Variant Type
          </h3>
          <p className="text-sm text-neutral-600 border-b pb-4">
            {variantType?.label}
          </p>
        </div>

        {/* Customizations */}
        <div className="px-5 pt-6">
          <h3 className="text-base font-semibold text-neutral-900">
            Customizations
          </h3>

          <div className="space-y-3 mt-3 border-b pb-6">
            {Object.entries(customizations).map(([key, val]: any) => (
              <div key={key} className="flex gap-2">
                <span className="text-sm text-neutral-600 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </span>
                <span className="text-sm font-medium text-neutral-900">
                  – {val.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upholstery */}
        <div className="px-5 pt-6">
          {/* Fabric */}
          <div className="border-b pb-6">
            <p className="text-base font-medium mb-3">Fabric *</p>
            <div className="grid grid-cols-4 gap-4">
              {fabric.map((f) => (
                <div
                  key={f.key}
                  className="p-2 border border-[#0F5E3B] rounded-lg"
                >
                  <div className="h-10 rounded bg-gray-300" />
                  <p className="text-xs text-center mt-1">{f.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="border-b pb-6 mt-6">
            <p className="text-base font-medium mb-3">Color *</p>
            <div className="grid grid-cols-4 gap-4">
              {color.map((c) => (
                <div
                  key={c.key}
                  className="p-2 border border-[#0F5E3B] rounded-lg"
                >
                  <div className="h-10 rounded bg-gray-300" />
                  <p className="text-xs text-center mt-1">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ✅ Contact Details Inputs */}
        <div className="px-5 mt-6 space-y-4">
          <TextInput
            label="Full Name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextInput
            label="Phone Number"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </Container>

      {/* Confirm Button */}
      <div className="p-5 bg-white shadow-lg">
        <Button
          label={isLoading ? "Submitting..." : "Confirm Customization →"}
          className="w-full"
          onClick={handleConfirm}
        />
      </div>
    </div>
  );
};

export default ReviewPage;
