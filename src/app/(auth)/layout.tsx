import { IMAGES } from "@/assets";
import Image from "next/image";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-24">
      <Image
        src={IMAGES.authImg}
        alt="lookplaza-signup"
        className="max-w-[600px] 2xl:max-w-full h-screen rounded-r-3xl object-cover"
      />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default AuthLayout;
