/* eslint-disable @typescript-eslint/no-explicit-any */
import TextInput from "@/components/Reusable/TextInput/TextInput";
import { useUpdateProfileMutation } from "@/redux/features/User/userApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEdit2, FiMail, FiPhone } from "react-icons/fi";

type TFormData = {
  name: string;
  email: string;
  phoneNumber: string;
};

const PersonalInfo = ({ isEditing, setIsEditing, data }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<TFormData>();
  const [updateProfile, { isLoading: isUpdatingProfile }] =
    useUpdateProfileMutation();

  useEffect(() => {
    if (data) {
      setValue("name", data?.name || "");
      setValue("email", data?.email || "");
      setValue("phoneNumber", data?.phoneNumber || "");
    }
  }, [data, setValue]);

  const handleUpdateInfo = async (data: TFormData) => {
    try {
      const payload = {
        name: data.name,
        phoneNumber: data.phoneNumber,
      };
      const response = await updateProfile(payload).unwrap();
      if (response?.success) {
        toast.success(response?.message);
        setIsEditing(false);
        reset();
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong!");
    }
  };
  return (
    <div className="flex-1 text-center lg:text-left">
      {isEditing ? (
        <div className="space-y-6">
          <form
            onSubmit={handleSubmit(handleUpdateInfo)}
            className="flex flex-col gap-4"
          >
            {/* Name */}
            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              error={errors.name}
              {...register("name", {
                required: "Name is required",
              })}
            />
            {/* Email */}
            <TextInput
              label="Email"
              placeholder="Enter your email"
              error={errors.email}
              {...register("email", {
                required: "Email is required",
              })}
              isDisabled={true}
            />
            {/* Phone Number */}
            <TextInput
              label="Phone Number"
              placeholder="Enter your phone number"
              error={errors.phoneNumber}
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
            />
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-success-05 text-white px-8 py-3 rounded-xl hover:bg-success-06 transition-colors font-medium text-lg cursor-pointer"
              >
                {isUpdatingProfile ? "Please wait..." : "Update Details"}
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-400 transition-colors font-medium text-lg cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">{data?.name}</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-600 text-lg">
              <FiMail className="w-6 h-6" />
              <span>{data?.email}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 text-lg">
              <FiPhone className="w-6 h-6" />
              <span>{data?.phoneNumber}</span>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-3 bg-success-05 text-white px-8 py-3 rounded-xl hover:bg-success-06 transition-colors font-medium text-lg mt-6 cursor-pointer"
          >
            <FiEdit2 className="w-5 h-5" />
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
