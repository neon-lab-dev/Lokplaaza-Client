"use client";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <div>
      {
        pathname.startsWith("/products") || pathname.startsWith("/cart") && <Navbar />
      }
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
