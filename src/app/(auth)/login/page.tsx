/* eslint-disable react/no-unescaped-entities */
"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import PasswordInput from "@/components/Reusable/PasswordInput/PasswordInput";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type TFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const isLoading = false;

  const handleLogin = (data: TFormData) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full font-Satoshi px-5 lg:px-10 xl:px-0 py-8 lg:py-16">
      <div className="space-y-12 w-full">
        <Image
          src={IMAGES.lokplaazaLogo}
          alt="lookplaza-Login-Signin"
          className="w-[142px] h-12 mx-auto"
        />

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="max-w-[432px] mx-auto w-full space-y-4"
        >

          <TextInput
            label="Email"
            placeholder="Enter email"
            type="email"
            error={errors.email}
            {...register("email", { required: "Email is required" })}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            {...register("password", { required: "Password is required" })}
          />

          <Button
            label={isLoading ? "Please wait..." : "Sign Up"}
            bgColor="bg-success-05"
            icon={ICONS.rightArrow}
            className="w-full"
          />

          <p className="text-neutral-45 leading-5 text-center mt-6">
            Don't have an account?{" "}
            <Link href={"/signup"} className="font-bold text-success-20">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
