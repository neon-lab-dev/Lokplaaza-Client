import { ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Image from "next/image";
import React from "react";

interface TryByMobileModalProps {
  onClose: () => void;
}

const TryByMobileModal: React.FC<TryByMobileModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-Satoshi bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center bg-neutral-10 p-12 rounded-3xl text-center max-w-md w-[90%] relative py-[114px]">
        <Image
          src={ICONS.blackCube}
          alt="try-by-mobile"
          className="size-[93px] mb-9 mx-auto"
        />
        <p className="text-neutral-20 leading-[30px] text-2xl">
        For AR functionality, we recommend you to open the website in mobile or tablet for better viewing experience. As, AR view is not supported on desktop.
        </p>
        <Button
          label="OK"
          className="mt-8 px-12"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default TryByMobileModal;
