/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import PersonalInfo from "@/components/Dashboard/MyProfilePage/PersonalInfo/PersonalInfo";
import ConfirmationModal from "@/components/Reusable/ConfirmationModal/ConfirmationModal";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "@/redux/features/User/userApi";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiMapPin, FiCamera } from "react-icons/fi";

type TFormData = {
  city: string;
  pinCode: string;
  addressLine1: string;
  addressLine2: string;
};

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<TFormData>();
  const [isUpdateAddressModalOpen, setIsUpdateAddressModalOpen] =
    useState<boolean>(false);
  const [updateProfile, { isLoading: isUpdatingProfile }] =
    useUpdateProfileMutation();
  const { data: myProfile } = useGetMeQuery({});
  console.log(myProfile);

  useEffect(() => {
    if (myProfile?.data) {
      setValue("city", myProfile?.data?.city || "");
      setValue("pinCode", myProfile?.data?.pinCode || "");
      setValue("addressLine1", myProfile?.data?.addressLine1 || "");
      setValue("addressLine2", myProfile?.data?.addressLine2 || "");
    }
  }, [myProfile?.data, setValue]);
  const [user, setUser] = useState({
    name: "Rahul Sutradhar",
    email: "rahul@example.com",
    phone: "+91 9876543210",
    profileImage: "https://i.ibb.co.com/bT5N5Gs/Startup-Avatar-12.png",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setUser((prev) => ({
        ...prev,
        profileImage: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
    const formData = new FormData();
    formData.append("file", file);

    try {
      await updateProfile(formData).unwrap();
    } catch (error) {
      console.error("Profile image update failed:", error);
    }
  };

  const handleUpdateAddress = async (data: TFormData) => {
    try {
      const payload = {
        city: data.city,
        pinCode: data.pinCode,
        addressLine1: data.addressLine1,
        addressLine2: data.addressLine2,
      };
      const response = await updateProfile(payload).unwrap();
      if (response?.success) {
        toast.success(response?.message);
        setIsUpdateAddressModalOpen(false);
        reset();
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!");
    }
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

        {/* Left Column - Profile & Addresses */}
        <div className="xl:col-span-3 space-y-8">
          {/* Profile Card - Larger */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Profile Image - Larger */}
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={myProfile?.data?.imageUrl}
                    alt="Profile"
                    className={`w-full h-full object-cover ${
                      isUpdatingProfile ? "opacity-60" : ""
                    }`}
                  />
                </div>

                {/* Loader Overlay */}
                {isUpdatingProfile && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/30">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-success-05" />
                      <span className="text-xs font-medium text-gray-600">
                        Uploading...
                      </span>
                    </div>
                  </div>
                )}

                {/* Upload Button */}
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
              <PersonalInfo
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                data={myProfile?.data}
              />
            </div>
          </div>

          {/* Addresses Section - Larger */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">My Addresses</h3>
              <button
                onClick={() => setIsUpdateAddressModalOpen(true)}
                className="bg-success-05 text-white px-6 py-3 rounded-xl hover:bg-success-06 transition-colors font-medium text-lg flex items-center gap-3 cursor-pointer"
              >
                <FiMapPin className="w-5 h-5" />
                Update Address
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Address Card */}
              <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-xl">
                      Your Address
                    </h4>
                    <p className="text-gray-500 text-sm">
                      Primary contact information
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Address Line 1 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Address Line 1
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 mt-1">
                      <svg
                        className="w-5 h-5 text-gray-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      <p className="text-gray-900">
                        {myProfile?.data?.addressLine1 || "Not provided"}
                      </p>
                    </div>
                  </div>

                  {/* Address Line 2 */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Address Line 2
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 mt-1">
                      <svg
                        className="w-5 h-5 text-gray-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      <p className="text-gray-900">
                        {myProfile?.data?.addressLine2 || "Not provided"}
                      </p>
                    </div>
                  </div>

                  {/* City */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      City
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 mt-1">
                      <svg
                        className="w-5 h-5 text-gray-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <p className="text-gray-900">
                        {myProfile?.data?.city || "Not provided"}
                      </p>
                    </div>
                  </div>

                  {/* Pin Code */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Pin Code
                    </label>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 mt-1">
                      <svg
                        className="w-5 h-5 text-gray-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-gray-900">
                        {myProfile?.data?.pinCode || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        heading="Update Address"
        isConfirmationModalOpen={isUpdateAddressModalOpen}
        setIsConfirmationModalOpen={setIsUpdateAddressModalOpen}
        isCrossVisible={true}
      >
        <div className="flex flex-col items-center w-full">
          <form
            onSubmit={handleSubmit(handleUpdateAddress)}
            className="w-full flex flex-col gap-4 items-end"
          >
            {/* City */}
            <TextInput
              label="City"
              placeholder="Enter your city"
              error={errors.city}
              {...register("city", {
                required: "City is required",
              })}
            />

            {/* Pin Code */}
            <TextInput
              label="Pin Code"
              placeholder="Enter pin code"
              error={errors.pinCode}
              {...register("pinCode", {
                required: "Pin code is required",
                pattern: {
                  value: /^\d{4,6}$/,
                  message: "Enter a valid pin code",
                },
              })}
            />

            {/* Address Line 1 */}
            <TextInput
              label="Address Line 1"
              placeholder="House no, street, area"
              error={errors.addressLine1}
              {...register("addressLine1", {
                required: "Address Line 1 is required",
              })}
            />

            {/* Address Line 2 (Optional) */}
            <TextInput
              label="Address Line 2 (Optional)"
              placeholder="Apartment, landmark, etc."
              error={errors.addressLine2}
              {...register("addressLine2")}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isUpdatingProfile}
              className="border border-gray-300 rounded-lg px-4 py-2
                   bg-success-05 text-white font-medium
                   focus:ring-2 focus:ring-success-05
                   transition-colors capitalize cursor-pointer disabled:opacity-60"
            >
              {isUpdatingProfile ? "Please wait..." : "Update Address"}
            </button>
          </form>
        </div>
      </ConfirmationModal>
    </div>
  );
};

export default MyProfile;
