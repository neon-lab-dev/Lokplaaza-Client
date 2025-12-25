import { ReactNode } from "react";

const Modal = ({ isModalOpen, children, width }: { isModalOpen: boolean, children: ReactNode, width?: string; }) => {
  return (
    <div
      className={`${
        isModalOpen ? "visible" : "invisible"
      } w-full h-screen fixed top-0 left-0 p-6 z-9999 scrollbar-none bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
    >
      <div
        className={`${
          isModalOpen ? "scale-[1] opacity-100" : "scale-[0] opacity-0"
        } bg-white rounded-3xl max-h-[80vh] ${width || "w-[95%] md:w-[80%] lg:w-[60%] xl:w-[40%] 2xl:w-[50%]"} overflow-y-auto transition-all duration-300 p-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
