"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type TFormData = {
  name: string;
  dateofBirth: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();

  const isLoading = false;

  const handleSignup = (data: TFormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full font-Satoshi">
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
            label="Date of Birth"
            placeholder="Select your birth date"
            type="date"
            error={errors.dateofBirth}
            {...register("dateofBirth", {
              required: "Date of birth is required",
            })}
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
            label="Password"
            placeholder="Enter password"
            type="password"
            error={errors.password}
            {...register("password", { required: "Password is required" })}
          />

          <Button
            label={isLoading ? "Please wait..." : "Sign Up"}
            bgColor="bg-success-05"
            icon={ICONS.rightArrow}
            onClick={() => {
              console.log("Clicked!");
            }}
            className="w-full"
          />

          <p className="text-neutral-45 leading-5 text-center mt-6">
            Already Have An Account?{" "}
            <Link href={"/login"} className="font-bold text-success-20">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
