"use client";
import { useState } from "react";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const pathname = usePathname();
  const user = useSelector(useCurrentUser);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navlinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Shop",
      path: "/",
    },
    {
      label: "Room",
      path: "/",
    },
    {
      label: "Collection",
      path: "/",
    },
    {
      label: "Inspiration",
      path: "/",
    },
  ];

  const dashboardNavigationPath =
    user?.role === "admin" ? "/dashboard/admin" : "/dashboard/user";

  return (
    <>
      <div className="bg-transparent font-Satoshi w-full z-999">
        <Container>
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <Link href="/">
              <Image
                src={IMAGES.lokplaazaLogo}
                alt="lokplaaza"
                className="h-9 md:h-7 w-27.24 md:w-20.75"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-14">
              
              {navlinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className={`text-base font-medium hover:underline ${
                    pathname === item.path
                      ? "text-primary-05"
                      : "text-neutral-10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/cart"
                className="relative flex items-center justify-center size-12 rounded-full bg-neutral-10 text-primary-05 hover:bg-primary-05 hover:text-white transition"
              >
                <span className="absolute -top-1 right-0 bg-success-05 size-4 rounded-full text-[11px] text-white flex items-center justify-center">
                  {cartItems.length}
                </span>
                <RiShoppingCart2Line />
              </Link>

              <Link href={user?.role ? dashboardNavigationPath : "/login"}>
                <Button
                  label={user?.role ? "Dashboard" : "Login"}
                  bgColor="bg-success-05"
                  textColor="text-success-10"
                  icon={ICONS.rightArrow}
                />
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden flex items-center justify-center size-12 rounded-full bg-neutral-10"
              aria-label="Open Menu"
            >
              <Image src={ICONS.hamburgerMenu} alt="menu" className="size-6" />
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        navlinks={navlinks}
        user={user}
        cartCount={cartItems.length}
        dashboardPath={dashboardNavigationPath}
      />
    </>
  );
};

export default Navbar;
