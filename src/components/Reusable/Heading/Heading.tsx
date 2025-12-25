import React from "react";

type HeadingProps = {
  heading?: string;
  title?: string;
  alignClass?: string; // e.g. "text-center md:text-left"
  headingColor?: string; // e.g. "text-gray-500"
  titleColor?: string; // e.g. "text-gray-900"
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({
  heading = "",
  title = "",
  alignClass = "text-center",
  headingColor = "text-primary-05",
  titleColor = "text-neutral-20",
  className = "",
}) => {
  return (
    <div className={`${alignClass} ${className} space-y-2 font-Satoshi`}>
      {heading && (
        <h5
          className={`uppercase text-[13px] md:text-xl font-medium ${headingColor}`}
        >
          {heading}
        </h5>
      )}
      {title && (
        <h2 className={`text-3xl md:text-4xl font-semibold mt-1 ${titleColor}`}>
          {title}
        </h2>
      )}
    </div>
  );
};

export default Heading;
