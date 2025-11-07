import Footer from "@/components/Shared/Footer/Footer";
import React, { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      {/* <Navbar/> */}
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
