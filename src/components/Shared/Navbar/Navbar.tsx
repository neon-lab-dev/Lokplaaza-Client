"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const user = useSelector(useCurrentUser);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const navlinks = [
    {
      label: "Home",
      path: "/",
      sectionId: null,
    },
    {
      label: "Categories",
      path: "/",
      sectionId: "categories",
    },
    {
      label: "Furniture Studio",
      path: "/",
      sectionId: "furniture-studio",
    },
    {
      label: "Design Your Furniture",
      path: "/",
      sectionId: "design-furniture",
    },
  ];

  const dashboardNavigationPath =
    user?.role === "admin" ? "/dashboard/admin" : "/dashboard/user/my-profile";

  // Handle navigation and smooth scroll
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string | null) => {
    e.preventDefault();
    
    // If we're not on home page, navigate to home page with section info
    if (pathname !== "/") {
      if (sectionId) {
        sessionStorage.setItem("scrollToSection", sectionId);
      }
      router.push("/");
      return;
    }
    
    // If we're already on home page, scroll to section
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Scroll to top for Home link
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Check for stored section to scroll to when home page loads
  useEffect(() => {
    if (pathname === "/") {
      const sectionToScroll = sessionStorage.getItem("scrollToSection");
      if (sectionToScroll) {
        // Small delay to ensure DOM is fully loaded
        setTimeout(() => {
          const element = document.getElementById(sectionToScroll);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            // Clear the stored section after scrolling
            sessionStorage.removeItem("scrollToSection");
          }
        }, 100);
      }
    }
  }, [pathname]);

  return (
    <div className="bg-transparent font-Satoshi w-full">
      <Container>
        <div className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href={"/"} className="">
            <Image
              src={IMAGES.lokplaazaLogo}
              alt="lokplaaza"
              className="h-9 md:h-7 w-[109px] md:w-[83px]"
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-14">
            {navlinks?.map((item) => (
              <Link
                key={item?.label}
                href={item?.path}
                onClick={(e) => handleNavigation(e, item.sectionId)}
                className={`text-base font-medium leading-5 hover:underline
                  ${
                    pathname.startsWith("/products") ||
                    pathname.startsWith("/cart") ||
                    pathname.startsWith("/blog") ||
                    pathname.startsWith("/virtual-walk-in")
                      ? "text-neutral-05"
                      : "text-neutral-10"
                  }
                `}
              >
                {item?.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions - Desktop */}
          <div className="hidden lg:flex items-center justify-center gap-6">
            {/* Cart Icon */}
            <Link
              href={"/cart"}
              className="flex items-center justify-center size-12 rounded-full bg-neutral-10 text-primary-05 hover:bg-primary-05 hover:text-white cursor-pointer text-2xl transition duration-300 relative"
            >
              <div className="bg-success-05 size-4 rounded-full flex items-center justify-center text-white text-[11px] absolute -top-1 right-0">
                {cartItems?.length || 0}
              </div>
              <RiShoppingCart2Line />
            </Link>

            {/* Dashboard/Login Button */}
            {user?.role ? (
              <Link href={dashboardNavigationPath}>
                <Button
                  label="Dashboard"
                  bgColor="bg-success-05"
                  textColor="text-success-10"
                  icon={ICONS.rightArrow}
                />
              </Link>
            ) : (
              <Link href={"/login"}>
                <Button
                  label="Login"
                  bgColor="bg-success-05"
                  textColor="text-success-10"
                  icon={ICONS.rightArrow}
                />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Link
            href={"/"}
            className="flex items-center justify-center lg:hidden size-12 rounded-full bg-neutral-10"
          >
            <Image
              src={ICONS.hamburgerMenu}
              alt="lokplazza"
              className="size-6"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;