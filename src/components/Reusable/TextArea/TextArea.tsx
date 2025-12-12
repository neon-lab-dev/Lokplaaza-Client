/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, placeholder = "", rows = 4, error, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 font-Satoshi">
        <label htmlFor={name} className="text-neutral-65">
          {label}
          <span className="text-red-600"> *</span>
        </label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={rows}
          ref={ref}
          className={`px-[18px] py-3.5 rounded-lg bg-neutral-70 border focus:outline-none focus:border-primary-10 transition duration-300 ${
            error ? "border-red-500" : "border-neutral-35"
          }`}
          {...rest}
        ></textarea>
        {error && typeof error.message === 'string' && <p className="text-sm text-red-500">{error.message}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
