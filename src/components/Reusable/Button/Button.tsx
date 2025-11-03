import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  label: string;
  bgColor?: string;
  textColor?: string;
  icon?: string | StaticImageData;
  shadow?: string;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  bgColor = "bg-success-05",
  textColor = "text-success-10",
  icon,
  shadow = "shadow-primary-button",
  iconClassName,
  onClick,
  className,
}) => {
  const buttonClasses = twMerge(
    `
      ${bgColor} 
      ${shadow}
      font-medium
      rounded-full
      py-3.5 px-6
      flex items-center justify-center gap-2
      transition-all duration-300 ease-in-out
      active:translate-y-px
      hover:opacity-90 hover:scale-[1.03]
      cursor-pointer
    `,
    className
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      <p className={twMerge("font-medium", textColor)}>{label}</p>
      {icon && (
        <Image
          src={icon}
          alt={label}
          className={`size-6 flex items-center justify-center ${iconClassName}`}
        />
      )}
    </button>
  );
};

export default Button;
