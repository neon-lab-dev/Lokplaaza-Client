/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit2,
  FiCamera,
  FiShoppingBag,
  FiClock,
  FiCheckCircle,
  FiHeart,
  FiRepeat,
  FiSettings,
} from "react-icons/fi";

interface Address {
  id: string;
  type: "primary" | "secondary";
  title: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

const MyProfile = () => {
  const [user, setUser] = useState({
    name: "Rahul Sutradhar",
    email: "rahul@example.com",
    phone: "+91 9876543210",
    profileImage: "https://i.ibb.co.com/bT5N5Gs/Startup-Avatar-12.png",
  });

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      type: "primary",
      title: "Home",
      address: "123 Avenue West, Assembly",
      city: "Mountain",
      state: "Maharashtra",
      pincode: "400053",
      isDefault: true,
    },
    {
      id: "2",
      type: "secondary",
      title: "Work",
      address: "456, Business Tower, Bandra Kurla Complex",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400051",
      isDefault: false,
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser((prev) => ({
          ...prev,
          profileImage: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const setDefaultAddress = (addressId: string) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === addressId,
      }))
    );
  };

  const deleteAddress = (addressId: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== addressId));
  };

  return (
    <div className="min-h-screen">
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Manage your personal information and addresses
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Left Column - Profile & Addresses */}
          <div className="xl:col-span-3 space-y-8">
            {/* Profile Card - Larger */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* Profile Image - Larger */}
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={user.profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <label
                    htmlFor="profileImage"
                    className="absolute bottom-4 right-4 bg-success-05 text-white p-3 rounded-full cursor-pointer shadow-lg hover:bg-success-06 transition-colors"
                  >
                    <FiCamera className="w-5 h-5" />
                    <input
                      type="file"
                      id="profileImage"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>

                {/* Profile Info - Larger */}
                <div className="flex-1 text-center lg:text-left">
                  {isEditing ? (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          value={editedUser.name}
                          onChange={(e) =>
                            setEditedUser((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-success-05"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={editedUser.email}
                          onChange={(e) =>
                            setEditedUser((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-success-05"
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={editedUser.phone}
                          onChange={(e) =>
                            setEditedUser((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-success-05"
                        />
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={handleSave}
                          className="bg-success-05 text-white px-8 py-3 rounded-xl hover:bg-success-06 transition-colors font-medium text-lg"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="bg-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-400 transition-colors font-medium text-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <h2 className="text-4xl font-bold text-gray-900">
                        {user.name}
                      </h2>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-gray-600 text-lg">
                          <FiMail className="w-6 h-6" />
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600 text-lg">
                          <FiPhone className="w-6 h-6" />
                          <span>{user.phone}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="flex items-center gap-3 bg-success-05 text-white px-8 py-3 rounded-xl hover:bg-success-06 transition-colors font-medium text-lg mt-6"
                      >
                        <FiEdit2 className="w-5 h-5" />
                        Edit Profile
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Addresses Section - Larger */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  My Addresses
                </h3>
                <button className="bg-success-05 text-white px-6 py-3 rounded-xl hover:bg-success-06 transition-colors font-medium text-lg flex items-center gap-3">
                  <FiMapPin className="w-5 h-5" />
                  Add New Address
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {addresses.map((address) => (
                  <div
                    key={address.id}
                    className={`border-2 rounded-2xl p-6 relative min-h-[200px] ${
                      address.isDefault
                        ? "border-success-05/40 bg-opacity-5"
                        : "border-gray-200"
                    }`}
                  >
                    {address.isDefault && (
                      <span className="absolute -top-3 left-6 bg-success-05 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Default
                      </span>
                    )}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-xl">
                          {address.title}
                        </h4>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${
                            address.type === "primary"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          {address.type === "primary" ? "Primary" : "Secondary"}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-600 text-lg">
                      <p>{address.address}</p>
                      <p>
                        {address.city}, {address.state} - {address.pincode}
                      </p>
                    </div>
                    <div className="flex gap-3 mt-6">
                      {!address.isDefault && (
                        <button
                          onClick={() => setDefaultAddress(address.id)}
                          className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Set Default
                        </button>
                      )}
                      <button className="text-sm bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
                        Edit
                      </button>
                      <button
                        onClick={() => deleteAddress(address.id)}
                        className="text-sm bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Security */}
          <div className="xl:col-span-1 space-y-8">
            {/* Account Summary - Larger */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Account Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <FiShoppingBag className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600 text-lg">Total Orders</span>
                  </div>
                  <span className="font-bold text-gray-900 text-lg">24</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <FiClock className="w-5 h-5 text-yellow-500" />
                    <span className="text-gray-600 text-lg">
                      Pending Orders
                    </span>
                  </div>
                  <span className="font-bold text-yellow-600 text-lg">2</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <FiCheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600 text-lg">
                      Delivered Orders
                    </span>
                  </div>
                  <span className="font-bold text-green-600 text-lg">22</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-3">
                    <FiUser className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600 text-lg">Member Since</span>
                  </div>
                  <span className="font-bold text-gray-900 text-lg">2024</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Quick Actions
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "Wishlist",
                    description: "View your saved items",
                    icon: <FiHeart className="w-5 h-5" />,
                    path: "/wishlist",
                  },
                  {
                    label: "Browse Products",
                    description: "Explore our latest collection",
                    icon: <FiShoppingBag className="w-5 h-5" />,
                    path: "/products",
                  },
                  {
                    label: "Settings",
                    description: "Manage your account preferences",
                    icon: <FiSettings className="w-5 h-5" />,
                    path: "/settings",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-success-05 transition-all duration-300 group block"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-gray-500 group-hover:text-success-05 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div className="font-semibold text-gray-900 text-lg group-hover:text-success-05 transition-colors duration-300">
                        {item.label}
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm group-hover:text-success-07 transition-colors duration-300">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
