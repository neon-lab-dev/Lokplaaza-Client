/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { useBookConsultationMutation } from "@/redux/features/Consultation/consultationApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const BookConsultationForm = () => {
  const [bookConsultation, { isLoading }] = useBookConsultationMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleBookConsultation = async (data: any) => {
    try {
      const payload = {
        ...data,
      };
      const response = await bookConsultation(payload).unwrap();
      if (response?.success) {
        toast.success(response?.message);
        reset();
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div
      id="book-consultation"
      className="bg-white border border-neutral-200 rounded-xl shadow-sm"
    >
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
      <form
        onSubmit={handleSubmit(handleBookConsultation)}
        className="p-4 md:p-6 space-y-5"
      >
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
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            isRequired={false}
          />

          <TextInput
            label="Phone Number"
            placeholder="Enter your phone number"
            type="tel"
            error={errors.phoneNumber}
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            label={isLoading ? "Please wait..." : "Book Free Consultation"}
            icon={ICONS.rightArrow}
            className="w-full"
            isDisabled={isLoading}
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
