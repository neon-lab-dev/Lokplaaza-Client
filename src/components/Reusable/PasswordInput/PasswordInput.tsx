/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useState } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface PasswordInputProps {
  label: string;
  name: string;
  placeholder?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  defaultValue?: any;
  isDisabled?: boolean;
  isRequired?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      label,
      name,
      placeholder = "Enter your password",
      error,
      defaultValue,
      isDisabled = false,
      isRequired = true,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="flex flex-col gap-2 font-Satoshi w-full relative">
        {/* Label */}
        <label htmlFor={name} className="text-neutral-65">
          {label}
          {isRequired && <span className="text-red-600"> *</span>}
        </label>

        {/* Input Field */}
        <div className="relative">
          <input
            required={isRequired}
            id={name}
            name={name}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            defaultValue={defaultValue}
            ref={ref}
            disabled={isDisabled}
            className={`px-[18px] py-3.5 rounded-lg border w-full focus:outline-none focus:border-primary-10 transition duration-300 ${
              isDisabled ? "bg-neutral-10/30" : "bg-neutral-70"
            } ${error ? "border-red-500" : "border-neutral-35"}`}
            {...rest}
          />

          {/* Toggle Button */}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-60 transition-colors cursor-pointer"
            tabIndex={-1}
          >
            {showPassword ? (
              <IoEyeOutline className="size-5" />
            ) : (
              <IoEyeOffOutline className="size-5" />
            )}
          </button>
        </div>

        {/* Error Message */}
        {error?.message && (
          <span className="text-red-500 text-sm">{String(error.message)}</span>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
