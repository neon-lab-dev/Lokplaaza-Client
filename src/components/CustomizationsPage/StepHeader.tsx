"use client";

import { setStep } from "@/redux/features/Customizations/customizationSlice";
import { useDispatch, useSelector } from "react-redux";

const StepHeader = ({ title }) => {
  const dispatch = useDispatch();

  const step = useSelector((state: any) => state?.customization?.step ?? 1);

  return (
    <header className="flex gap-4 items-center py-4">
      {step > 1 && (
        <button
          onClick={() => dispatch(setStep(step - 1))}
          className="text-sm text-gray-600 hover:text-black transition"
        >
          ← Back
        </button>
      )}

      <h2 className="text-lg font-semibold">{title}</h2>
    </header>
  );
};

export default StepHeader;
