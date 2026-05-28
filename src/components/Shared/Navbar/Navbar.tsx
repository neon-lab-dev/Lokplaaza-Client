/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import { RootState } from "@/redux/store";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const user = useSelector(useCurrentUser);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string | null,
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu on navigation

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Animation variants
  const menuVariants: any = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const overlayVariants: any = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const linkVariants: any = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-transparent font-Satoshi w-full z-50">
      <div className={`max-w-300 2xl:max-w-350 w-full mx-auto z-50 ${pathname === "/" ? "px-0" : "px-5 2xl:px-0"}`}>
        <div className="flex items-center justify-between py-5 w-full">
          {/* Logo */}
          <Link href={"/"} className="relative z-50">
            <Image
              src={IMAGES.lokplaazaLogo}
              alt="lokplaaza"
              className="h-14 md:h-20 w-32.5 md:w-45"
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
                    pathname.startsWith("/contact-us") ||
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
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center lg:hidden size-12 rounded-full bg-neutral-10 relative z-50 hover:bg-neutral-20 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <IoClose className="size-6 text-neutral-80" />
              ) : (
                <Image
                  src={ICONS.hamburgerMenu}
                  alt="lokplazza"
                  className="size-6"
                />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-40 lg:hidden flex flex-col"
            >
              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-8 px-6 mt-28">
                <div className="space-y-4">
                  {navlinks?.map((item, index) => (
                    <motion.div
                      key={item?.label}
                      custom={index}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={item?.path}
                        onClick={(e) => handleNavigation(e, item.sectionId)}
                        className="block pb-3 font-medium text-neutral-80 hover:text-primary-05 transition-colors duration-300 border-b border-neutral-20/30"
                      >
                        {item?.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Cart Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="space-y-6 mt-5"
                >
                  <Link
                    href={"/cart"}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-lg bg-neutral-10 hover:bg-neutral-20 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <RiShoppingCart2Line className="text-2xl text-neutral-80" />
                        <div className="bg-success-05 size-5 rounded-full flex items-center justify-center text-white text-[11px] absolute -top-2 -right-2">
                          {cartItems?.length || 0}
                        </div>
                      </div>
                      <span className="text-base font-medium text-neutral-80">
                        My Cart
                      </span>
                    </div>
                    <svg
                      className="w-5 h-5 text-neutral-60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  {/* Dashboard/Login Button */}
                  {user?.role ? (
                    <Link
                      href={dashboardNavigationPath}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        label="Dashboard"
                        bgColor="bg-success-05"
                        textColor="text-success-10"
                        icon={ICONS.rightArrow}
                        className="w-full"
                      />
                    </Link>
                  ) : (
                    <Link
                      href={"/login"}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        label="Login"
                        bgColor="bg-success-05"
                        textColor="text-success-10"
                        icon={ICONS.rightArrow}
                      />
                    </Link>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
