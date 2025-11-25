/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { setStep } from "@/redux/features/Customizations/customizationSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const StepHeader = ({ title }: { title: string }) => {
  const dispatch = useDispatch();
  const router =useRouter();
  const step = useSelector((state: any) => state?.customization?.step ?? 1);

  return (
    <header
      className={`flex w-full gap-4 items-center py-4 justify-between`}
    >
      <button
        onClick={() => {
          if (step > 1) {
            dispatch(setStep(step - 1));
          } else {
             router.back();
          }
        }}
        className="text-lg text-neutral-20 font-bold hover:text-black transition cursor-pointer"
      >
        ←
      </button>

      <h2 className="text-lg font-semibold">{title}</h2>
    </header>
  );
};

export default StepHeader;
