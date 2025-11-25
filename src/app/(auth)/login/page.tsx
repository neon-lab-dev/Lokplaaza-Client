/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import PasswordInput from "@/components/Reusable/PasswordInput/PasswordInput";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useLoginMutation } from "@/redux/features/Auth/authApi";
import { setUser } from "@/redux/features/Auth/authSlice";

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
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (data: TFormData) => {
    try {
      const payload = {
        ...data,
      };
      const response = await login(payload).unwrap();
      const user = response.data?.user;
      const accessToken = response.data?.accessToken;

      const userRole = response?.data?.user?.role;
      if (accessToken) {
        Cookies.set("accessToken", accessToken, {
          expires: 7,
          secure:
            typeof window !== "undefined" &&
            window.location.protocol === "https:",
          sameSite: "strict",
        });
        Cookies.set("role", userRole, {
          expires: 7,
          secure: window.location.protocol === "https:",
          sameSite: "strict",
        });
      }

      if (response?.success) {
        dispatch(setUser({ user, token: response?.data?.accessToken }));
        toast.success(response?.message);

        if (userRole === "admin") {
          router.push("/dashboard/admin");
        } else if (userRole === "user") {
          router.push("/dashboard/user/my-profile");
        }
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong!");
    }
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
          <Link
            href={"/forgot-password"}
            className="font-semibold text-success-20 text-right text-sm underline flex justify-end"
          >
            Forgot Password?{" "}
          </Link>

          <Button
            label={isLoading ? "Please wait..." : "Login"}
            bgColor="bg-success-05"
            icon={ICONS.rightArrow}
            className="w-full"
            isDisabled={isLoading}
          />

          <p className="text-neutral-55 leading-5 text-center mt-6">
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
