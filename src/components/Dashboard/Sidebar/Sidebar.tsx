"use client";
import Button from "../../Reusable/Button/Button";
import {
  MdDashboard,
  MdOutlineImageSearch,
  MdOutlineSupportAgent,
  MdOutlineTune,
  MdPeople,
  MdPerson,
  MdSettings,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { IMAGES } from "@/assets";
import Link from "next/link";
import { FiBox, FiPackage } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import {
  logout,
  setUser,
  useCurrentUser,
} from "@/redux/features/Auth/authSlice";
import Cookies from "js-cookie";

const Sidebar = () => {
  const user = useSelector(useCurrentUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const adminSidebarLinks = [
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
      label: "Categories",
      icon: <FiBox />,
      path: "/dashboard/admin/category",
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
    {
      label: "Consultation",
      icon: <MdOutlineSupportAgent />,
      path: "/dashboard/admin/consultation",
    },
    {
      label: "Inspiration Requests",
      icon: <MdOutlineImageSearch />,
      path: "/dashboard/admin/inspiration-requests",
    },
    {
      label: "Customization Requests",
      icon: <MdOutlineTune />,
      path: "/dashboard/admin/customization-requests",
    },
  ];

  const userSidebarLinks = [
    {
      label: "My Profile",
      icon: <MdPerson size={20} />,
      path: "/dashboard/user/my-profile",
    },
    {
      label: "My Orders",
      icon: <FiPackage size={20} />,
      path: "/dashboard/user/my-orders",
    },
    {
      label: "Setting",
      icon: <MdSettings size={20} />,
      path: "/dashboard/user/setting",
    },
  ];

  const sidebarLinks =
    user?.role === "admin" ? adminSidebarLinks : userSidebarLinks;

  const handleLogout = async () => {
    dispatch(setUser({ user: null, token: null }));
    dispatch(logout());
    Cookies.remove("accessToken");
    Cookies.remove("role");
    router.push("/");
  };

  return (
    <div className="w-[300px] bg-success-05 h-screen font-Montserrat p-4 flex flex-col justify-between sticky top-0 left-0">
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
                  ? "bg-green-50 text-neutral-05"
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
        bgColor="bg-green-50"
        textColor="text-neutral-05"
      />
    </div>
  );
};

export default Sidebar;
