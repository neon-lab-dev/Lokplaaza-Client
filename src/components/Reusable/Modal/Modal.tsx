import { ReactNode } from "react";

const Modal = ({ isModalOpen, children } : {isModalOpen: boolean, children: ReactNode}) => {
  return (
    <div
      className={`${
        isModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-200000000 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
    >
      <div
        className={`${
          isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] sm:w-[80%] md:w-[25%] bg-white rounded-3xl transition-all duration-300`}
      >
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
