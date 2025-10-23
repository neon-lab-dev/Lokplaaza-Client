"use client";
import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navlinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Room",
      path: "/room",
    },
    {
      label: "Collection",
      path: "/collection",
    },
    {
      label: "Inspiration",
      path: "/inspiration",
    },
  ];
  return (
    <div className="bg-neutral-35 font-Satoshi">
      <Container>
        <div className="flex items-center justify-between py-5">
          <Link href={"/"} className="">
            <Image
              src={IMAGES.lokplaazaLogo}
              alt="lokplaaza"
              className="h-9 md:h-7 w-[109px] md:w-[83px]"
            />
          </Link>

          <div className=" hidden lg:flex items-center gap-[74px]">
            {navlinks?.map((item) => (
              <Link
                key={item?.label}
                href={item?.path}
                className={`text-base font-medium leading-5 hover:underline 
             text-neutral-10
                `}
              >
                {item?.label}
              </Link>
            ))}
          </div>
          <div className=" hidden lg:flex items-center justify-center gap-6">
            <Link
              href={"/"}
              className="flex items-center justify-center size-12 rounded-full bg-neutral-10"
            >
              <Image src={ICONS.cart} alt="lokplazza" className="size-6" />
            </Link>

            <button className="bg-success-05 rounded-full py-3.5 px-6 flex items-center justify-center gap-2">
              <p className="text-success-10">Sign in</p>

            </button>
          </div>

          <Link
            href={"/"}
            className=" flex items-center justify-center lg:hidden size-12 rounded-full bg-neutral-10"
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
