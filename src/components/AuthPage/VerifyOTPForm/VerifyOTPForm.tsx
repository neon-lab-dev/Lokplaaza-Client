import { useState, useRef } from "react";
import { ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Link from "next/link";

const VerifyOTPForm = () => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setIsError(false);

    const enteredOtp = otp.join("");

    // Simulate API call
    await new Promise((res) => setTimeout(res, 1000));

    if (enteredOtp !== "1234") {
      setIsError(true);
      setIsLoading(false);
      return;
    }

    alert("OTP Verified Successfully!");
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-6 px-6 py-12 font-Satoshi">
      <div>
        <h1 className="text-neutral-20 text-xl leading-6 font-bold">
          Verify OTP
        </h1>
        <p className="text-neutral-40 leading-5 mt-3">
          OTP has been sent on your mail-id for verification.
        </p>
      </div>

      {/* OTP Input Boxes */}
      <div className="flex items-center gap-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`size-16 text-center text-lg font-semibold border rounded-xl focus:outline-none transition duration-300 
              ${
                isError
                  ? "border-red-500 text-red-500"
                  : "border-neutral-35 text-neutral-80"
              } 
              ${isError ? "focus:border-red-500" : "focus:border-success-05"}
              ${isError ? "bg-red-50" : "bg-white"}`}
          />
        ))}
      </div>

      <Link href={"/login"} className="font-bold text-success-20">
        Resend OTP in 59s
      </Link>

      <Button
        onClick={handleSubmit}
        label={
          isLoading
            ? "Please wait..."
            : isError
            ? "Incorrect OTP"
            : "Verify OTP"
        }
        bgColor={isError ? "bg-red-500" : "bg-success-05"}
        icon={isError ? ICONS.cross : ICONS.rightArrow}
        className="w-full"
      />
    </div>
  );
};

export default VerifyOTPForm;
