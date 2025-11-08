/* eslint-disable react/no-unescaped-entities */
"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type TFormData = {
  email: string;
};

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const isLoading = false;

  const handleForgotPassword = (data: TFormData) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full font-Satoshi px-5 lg:px-10 xl:px-0 py-8 lg:py-16">
      <div className="space-y-12 w-full">
        <Image
          src={IMAGES.lokplaazaLogo}
          alt="lookplaza-Login-Signin-ForgotPassword"
          className="w-[142px] h-12 mx-auto"
        />

        <form
          onSubmit={handleSubmit(handleForgotPassword)}
          className="max-w-[432px] mx-auto w-full space-y-4"
        >
          <TextInput
            label="Email"
            placeholder="Enter email"
            type="email"
            error={errors.email}
            {...register("email", { required: "Email is required" })}
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

export default ForgotPassword;
