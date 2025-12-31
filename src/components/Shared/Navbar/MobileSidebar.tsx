/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";
import Button from "@/components/Reusable/Button/Button";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

interface Props {
  open: boolean;
  onClose: () => void;
  navlinks: { label: string; path: string }[];
  user: any;
  cartCount: number;
  dashboardPath: string;
}

const MobileSidebar = ({
  open,
  onClose,
  navlinks,
  user,
  cartCount,
  dashboardPath,
}: Props) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 bg-black/40 z-40 transition-opacity
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sidebar */}
      <aside
        className={
          `fixed top-0 right-0 z-999 h-full w-[80%] max-w-sm bg-white  p-6 flex flex-col transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="self-end text-2xl font-bold"
        >
          ×
        </button>
        <Link href="/">
                      <Image
                        src={IMAGES.lokplaazaLogo}
                        alt="lokplaaza"
                        className="h-9 md:h-7 w-27.24 md:w-20.75"
                      />
                    </Link>

        {/* Links */}
        <nav className="mt-8 flex flex-col gap-6">
          {navlinks.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={onClose}
              className="text-lg font-medium text-neutral-20"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-4">
          <Link
            href="/cart"
            onClick={onClose}
            className="flex items-center gap-3 text-lg"
          >
            <RiShoppingCart2Line />
            Cart ({cartCount})
          </Link>

          <Link
            href={user?.role ? dashboardPath : "/login"}
            onClick={onClose}
          >
            <Button
              label={user?.role ? "Dashboard" : "Login"}
              bgColor="bg-success-05"
              textColor="text-success-10"
              icon={ICONS.rightArrow}
            />
          </Link>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
