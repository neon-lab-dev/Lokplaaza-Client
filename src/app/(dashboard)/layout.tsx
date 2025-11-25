import Header from "@/components/Dashboard/Header/Header";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import { ReactNode } from "react";

const AdminLayout = ({children} : {children: ReactNode}) => {
  return (
    <div className="flex bg-neutral-150 h-full">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header/>
        <div className="px-5 py-4 bg-gray-50">
            {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
