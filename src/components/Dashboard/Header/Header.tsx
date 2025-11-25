"use client";
import { useCurrentUser } from "@/redux/Features/Auth/authSlice";
import { useSelector } from "react-redux";

const Header = () => {
    const user = useSelector(useCurrentUser);
    return (
        <div className="px-5 py-6 bg-linear-to-b from-white to-gray-50 border-b border-success-05/10 text-neutral-5 text-neutral-05 text-xl font-semibold sticky top-0 z-10">
            Welcome back, {user?.name}!
        </div>
    );
};

export default Header;