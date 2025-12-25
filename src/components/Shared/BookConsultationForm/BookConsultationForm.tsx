/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { useForm } from "react-hook-form";

const BookConsultationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div id="book-consultation" className="bg-white border border-neutral-200 rounded-xl shadow-sm">
      {/* Form Header */}
      <div className="bg-success-50 border-b border-success-05 px-6 py-6">
        <h2 className="text-xl font-semibold text-neutral-800 mb-1">
          Consult An Expert
        </h2>
        <p className="text-sm text-neutral-600">
          Get interior assistance and a free quote
        </p>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
        <div className="space-y-4">
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.name}
            {...register("name", { required: "Name is required" })}
          />

          <TextInput
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            error={errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />

          <TextInput
            label="Mobile Number"
            placeholder="Enter your mobile number"
            type="tel"
            error={errors.mobile}
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid mobile number",
              },
            })}
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            label="Book Free Consultation"
            icon={ICONS.rightArrow}
            className="w-full"
          />
        </div>

        {/* Footer Note */}
        <div className="pt-4">
          <p className="text-xs text-neutral-500 text-center">
            By submitting, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookConsultationForm;
