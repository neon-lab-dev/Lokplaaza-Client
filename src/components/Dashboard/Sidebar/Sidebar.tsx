"use client";
import Button from "../../Reusable/Button/Button";
import { MdDashboard, MdPeople } from "react-icons/md";
import { logout } from "../../../redux/features/Auth/authSlice";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Link from "next/link";

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const sidebarLinks = [
    {
      label: "Dashboard",
      icon: <MdDashboard />,
      path: "/admin/dashboard",
    },
    {
      label: "Users",
      icon: <MdPeople />,
      path: "/admin/dashboard/users",
    },
    {
      label: "Products",
      icon: <MdPeople />,
      path: "/admin/dashboard/products",
    },
  ];

  const handleLogout = async () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className="w-[280px] bg-success-05 min-h-screen font-Montserrat p-4 flex flex-col justify-between">
      <div className="flex flex-col gap-16">
        <Link href={"/"}>
        <Image src={IMAGES.lokplaazaLogo} alt="" className="w-44" />
        </Link>

        <div className="flex flex-col">
          {sidebarLinks?.map((item) => (
            <Link
              key={item?.label}
              href={item?.path}
              className={`p-3 rounded-lg font-medium hover:bg-primary-10/10 transition duration-300 ease-in-out flex items-center gap-2 ${
                pathname === item?.path
                  ? "bg-primary-10/10 text-primary-10"
                  : "text-neutral-10"
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
        bgColor="bg-success-10"
        textColor="text-gray-800"
      />
    </div>
  );
};

export default Sidebar;
