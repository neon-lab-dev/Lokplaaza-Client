import Image from "next/image";
import React from "react";

type ButtonProps = {
  label: string;
  bgColor?: string;
  textColor?: string;
  icon?: string;
  shadow?: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  bgColor = "bg-success-05",
  textColor = "text-success-10",
  icon,
  shadow = "shadow-primary-button",
  onClick,
  className = "",
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${bgColor} 
        ${shadow ? `${shadow}` : ""}  font-medium
        rounded-full py-3.5 px-6 flex items-center justify-center gap-2 
        transition-all duration-200 active:translate-y-px 
        ${className}
      `}
    >
      <p className={`font-medium ${textColor}`}>{label}</p>
      {icon && (
        <Image src={icon} alt={label} className="flex items-center size-6" />
      )}
    </button>
  );
};

export default Button;
