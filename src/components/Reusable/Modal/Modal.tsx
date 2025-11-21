import { ReactNode } from "react";

const Modal = ({ isModalOpen, children }: { isModalOpen: boolean, children: ReactNode }) => {
  return (
    <div
      className={`${
        isModalOpen ? "visible" : "invisible"
      } w-full h-screen fixed top-0 left-0 p-6 z-[9999] scrollbar-none bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
    >
      <div
        className={`${
          isModalOpen ? "scale-[1] opacity-100" : "scale-[0] opacity-0"
        } bg-white rounded-3xl max-h-[80vh] overflow-y-auto transition-all duration-300 p-4`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
