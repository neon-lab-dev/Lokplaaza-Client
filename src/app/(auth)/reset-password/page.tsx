/* eslint-disable react/no-unescaped-entities */
"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import PasswordInput from "@/components/Reusable/PasswordInput/PasswordInput";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type TFormData = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TFormData>();

  const isLoading = false;

  const handleResetPassword = (data: TFormData) => {
    console.log("Login Data:", data);
  };

  const passwordValue = watch("password");

  return (
    <div className="flex flex-col justify-center items-center h-full font-Satoshi px-5 lg:px-10 xl:px-0 py-8 lg:py-16">
      <div className="space-y-12 w-full">
        <Image
          src={IMAGES.lokplaazaLogo}
          alt="lookplaza-Login-Signin-ResetPassword"
          className="w-[142px] h-12 mx-auto"
        />

        <form
          onSubmit={handleSubmit(handleResetPassword)}
          className="max-w-[432px] mx-auto w-full space-y-4"
        >
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
            label={isLoading ? "Please wait..." : "Submit"}
            bgColor="bg-success-05"
            icon={ICONS.rightArrow}
            className="w-full"
          />

          <p className="text-neutral-55 leading-5 text-center mt-6">
            Back to{" "}
            <Link href={"/login"} className="font-bold text-success-20">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
