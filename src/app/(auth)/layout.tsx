import { IMAGES } from "@/assets";
import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-5">
      <Image
        src={IMAGES.authImg}
        alt="lookplaza-signup"
        className="max-w-[500px] lg:max-w-[600px] xl:max-w-full h-screen rounded-r-3xl object-cover sticky left-0 top-0 hidden lg:flex"
      />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AuthLayout;