"use client";
import Button from "../../Reusable/Button/Button";
import { MdDashboard, MdPeople } from "react-icons/md";
import { logout } from "../../../redux/features/Auth/authSlice";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Link from "next/link";
import { FiBox } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const sidebarLinks = [
    {
      label: "Dashboard",
      icon: <MdDashboard />,
      path: "/dashboard/admin",
    },
    {
      label: "Users",
      icon: <MdPeople />,
      path: "/dashboard/admin/users",
    },
    {
      label: "Products",
      icon: <FiBox />,
      path: "/dashboard/admin/products",
    },
    {
      label: "Order",
      icon: <AiOutlineShopping />,
      path: "/dashboard/admin/orders",
    },
  ];

  const handleLogout = async () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className="w-[280px] bg-gray-900 h-screen font-Montserrat p-4 flex flex-col justify-between sticky top-0 left-0">
      <div className="flex flex-col gap-16">
        <Link href={"/"}>
        <Image src={IMAGES.lokplaazaLogo} alt="" className="w-44" />
        </Link>

        <div className="flex flex-col">
          {sidebarLinks?.map((item) => (
            <Link
              key={item?.label}
              href={item?.path}
              className={`p-3 rounded-lg font-medium transition duration-300 ease-in-out flex items-center gap-2 ${
                pathname === item?.path
                  ? "bg-success-05 text-white"
                  : "text-gray-300"
              }`}
            >
              {item?.icon}
              {item?.label}
            </Link>
          ))}
        </div>
      </div>

      <Button
        type="button"
        label="Logout"
        onClick={handleLogout}
        bgColor="bg-gray-800"
        textColor="text-gray-300"
      />
    </div>
  );
};

export default Sidebar;