import React from 'react'

const BreadCrumps = ({ path }: { path: string[] }) => {
  return (
    <div className="w-fit flex items-center gap-2">
      {path.map((item, index) => {
        const isLast = index === path.length - 1;

        return (
          <span key={index} className="flex items-center text-[13px]">
            <span className={isLast ? "text-success-30 font-semibold" : "text-neutral-40"}>
              {item}
            </span>

            {!isLast && (
              <span className="mx-1 text-gray-400">{">"}</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumps;
