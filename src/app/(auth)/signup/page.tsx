/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS, IMAGES } from "@/assets";
import VerifyOTPForm from "@/components/AuthPage/VerifyOTPForm/VerifyOTPForm";
import Button from "@/components/Reusable/Button/Button";
import Modal from "@/components/Reusable/Modal/Modal";
import PasswordInput from "@/components/Reusable/PasswordInput/PasswordInput";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { useSignupMutation } from "@/redux/features/Auth/authApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type TFormData = {
  name: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const router = useRouter();
  const [signup, { isLoading }] = useSignupMutation();
  const [isOtpModalOpen, setIsOtpModalOpen] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TFormData>();

  const handleSignup = async (data: TFormData) => {
    try {
      const payload = {
        ...data,
      };
      const response = await signup(payload).unwrap();
      if (response?.success) {
        toast.success(response?.message || "Signup successful. Please login.");
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  // Watch password value for matching validation
  const passwordValue = watch("password");

  return (
    <div className="flex flex-col justify-center items-center h-full font-Satoshi px-5 lg:px-10 xl:px-0 py-8 lg:py-16">
      <div className="space-y-12 w-full">
        <Image
          src={IMAGES.lokplaazaLogo}
          alt="lookplaza-signup"
          className="w-[142px] h-12 mx-auto"
        />

        <form
          onSubmit={handleSubmit(handleSignup)}
          className="max-w-[432px] mx-auto w-full space-y-4"
        >
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            type="text"
            error={errors.name}
            {...register("name", { required: "Full name is required" })}
          />

          <TextInput
            label="Email"
            placeholder="Enter email"
            type="email"
            error={errors.email}
            {...register("email", { required: "Email is required" })}
          />

          <TextInput
            label="Mobile Number"
            placeholder="Enter mobile number"
            type="tel"
            error={errors.phoneNumber}
            {...register("phoneNumber", {
              required: "Mobile Number is required",
              pattern: {
                value: /^\+?[1-9]\d{1,14}$/,
                message: "Enter a valid mobile number",
              },
              minLength: {
                value: 10,
                message: "Mobile Number must be 10 characters",
              },
              maxLength: {
                value: 10,
                message: "Mobile Number must be at most 10 characters",
              },
            })}
          />

          <TextInput
            label="Date of Birth"
            placeholder="Select your birth date"
            type="date"
            error={errors.dateOfBirth}
            {...register("dateOfBirth", {
              required: "Date of birth is required",
            })}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            {...register("password", { required: "Password is required" })}
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            error={errors.confirmPassword}
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
          />

          <Button
            label={isLoading ? "Please wait..." : "Sign Up"}
            bgColor="bg-success-05"
            icon={ICONS.rightArrow}
            className="w-full"
            isDisabled={isLoading}
          />

          <p className="text-neutral-55 leading-5 text-center mt-6">
            Already Have An Account?{" "}
            <Link href={"/login"} className="font-bold text-success-20">
              Login
            </Link>
          </p>
        </form>
      </div>

      <Modal isModalOpen={isOtpModalOpen}>
        <VerifyOTPForm />
      </Modal>
    </div>
  );
};

export default Signup;
