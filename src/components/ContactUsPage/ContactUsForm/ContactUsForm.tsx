/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import Button from "@/components/Reusable/Button/Button";
import Textarea from "@/components/Reusable/TextArea/TextArea";
import SelectDropdown from "@/components/Reusable/SelectDropdown/SelectDropdown";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

interface TFormData {
  name: string;
  phoneNumber: string;
  email: string;
  budgetRange: string;
  message?: string;
}

const ContactUsForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFormData>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Service ID- service_wbgpc4c
  // Template Id - template_wy2hlbf

  const sendEmail: SubmitHandler<TFormData> = async () => {
    if (!formRef.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        "service_wbgpc4c",
        "template_wy2hlbf",
        formRef.current,
        "0e4ApBaQ3qmzmh73w"
      );

      toast.success(
        "Thanks for your interest. Our support team will contact you soon!",
        { duration: 3000 }
      );

      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const priceRanges = [
    "₹5000-₹10000",
    "₹10000-₹15000",
    "₹15000-₹20000",
    "₹20000-₹25000",
    "₹25000-₹35000",
    "₹35000-₹50000",
    "₹50000-Above",
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Form Information */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d0d0d] mb-3">
              Send Us a Message
            </h2>
            <p className="text-[#4a4a4a] leading-relaxed">
              Fill out the form below and our team will get back to you within
              24 hours. We're here to help with any questions about our
              products, orders, or services.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-[#004f2f] rounded-full flex items-center justify-center mt-0.5">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#0d0d0d]">Quick Response</h3>
                <p className="text-sm text-[#4a4a4a]">
                  We typically reply within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-[#004f2f] rounded-full flex items-center justify-center mt-0.5">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#0d0d0d]">Expert Support</h3>
                <p className="text-sm text-[#4a4a4a]">
                  Our furniture experts are here to help
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-[#004f2f] rounded-full flex items-center justify-center mt-0.5">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#0d0d0d]">
                  Free Consultation
                </h3>
                <p className="text-sm text-[#4a4a4a]">
                  Get expert advice on your space
                </p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-[#f5f5f5] rounded-xl p-6">
            <h3 className="font-semibold text-[#0d0d0d] mb-3">
              Business Hours
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#4a4a4a]">Monday - Friday</span>
                <span className="text-[#0d0d0d] font-medium">
                  9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4a4a4a]">Saturday</span>
                <span className="text-[#0d0d0d] font-medium">
                  10:00 AM - 4:00 PM
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#4a4a4a]">Sunday</span>
                <span className="text-[#0d0d0d] font-medium">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-[#ebebeb]">
          <form
          ref={formRef}
            onSubmit={handleSubmit(sendEmail)}
            className="space-y-5"
          >
            {/* Name Field */}
            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
              error={errors.name}
              {...register("name", { required: "Name is required" })}
            />

            {/* Phone Number Field */}
            <TextInput
              label="Phone Number"
              placeholder="Enter your phone number"
              type="tel"
              error={errors.phoneNumber}
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
            />

            {/* Email Field */}
            <TextInput
              label="Email(Optional)"
              placeholder="Enter your email address"
              type="email"
              error={errors.email}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              isRequired={false}
            />

            {/* Price Range Field */}
            <SelectDropdown
              label="Budget Range"
              {...register(`budgetRange`, {
                required: "Budget range is required",
              })}
              error={errors?.budgetRange}
              options={priceRanges || []}
            />

            {/* Message Field (Optional) */}
            <Textarea
              label="Message(Optional)"
              placeholder="Tell us how we can help you..."
              rows={5}
              error={errors.message}
              {...register("message")}
              isRequired={false}
            />

            {/* Submit Button */}
            <Button
              label={isLoading ? "Sending..." : "Send Message"}
              bgColor="bg-[#004f2f]"
              className="w-full hover:bg-[#007143] transition-all duration-300"
              isDisabled={isLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
