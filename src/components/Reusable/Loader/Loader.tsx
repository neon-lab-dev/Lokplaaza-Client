interface LoaderProps {
  size?: "small" | "medium" | "large";
  text?: string;
  className?: string;
}

const Loader = ({ 
  size = "medium", 
  text = "Loading...", 
  className = "" 
}: LoaderProps) => {
  const sizeClasses = {
    small: "w-5 h-5",
    medium: "w-8 h-8",
    large: "w-12 h-12"
  };

  const textSizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg"
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} border-3 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-3`}
      ></div>
      <span className={`text-gray-600 font-medium ${textSizes[size]}`}>
        {text}
      </span>
    </div>
  );
};

export default Loader;