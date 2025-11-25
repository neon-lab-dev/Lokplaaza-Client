/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import type { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";


interface DropdownProps {
  label: string;
  options: string[];
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  isRequired?: boolean;
  selected?: boolean;
  isDisabled?: boolean;
}

const SelectDropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ label, options, error, isRequired=true, selected, isDisabled, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 font-Montserrat w-full">
        <label
            className="flex flex-row items-center w-full justify-between text-neutral-65"
          >
            <span className="text-neutral-05 leading-[18px] text-[15px] font-medium tracking-[-0.16] ">
              {label} {isRequired && <span className="text-red-600"> *</span>}
            </span>
          </label>
        <select
          ref={ref}
          defaultChecked={selected}
          required={isRequired}
          className={`px-[18px] py-3.5 rounded-lg  border focus:outline-none focus:border-primary-10 transition duration-300 ${
            isDisabled ? "bg-neutral-10/30" : "bg-neutral-70"
          } ${error ? "border-red-500" : "border-neutral-35"}`}
          {...rest}
        >
          <option value="" disabled selected>
            Select {label}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && typeof error.message === 'string' && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
      </div>
    );
  }
);

SelectDropdown.displayName = "SelectDropdown";

export default SelectDropdown;
