"use client";
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import Button from "@/components/Reusable/Button/Button";
import PasswordInput from "@/components/Reusable/PasswordInput/PasswordInput";
import { FiKey, FiCheck } from "react-icons/fi";

interface ChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Setting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<ChangePasswordForm>();

  const newPassword = watch("newPassword");

  const onSubmit = async (data: ChangePasswordForm) => {
    try {
      // Simulate API call
      console.log("Changing password:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle successful password change
      console.log("Password changed successfully!");
      reset();
      // You can add a success toast/message here
    } catch (error) {
      console.error("Error changing password:", error);
      // Handle error
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-success-05 rounded-full flex items-center justify-center mb-4">
            <FiKey className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Change Password</h2>
          <p className="mt-2 text-sm text-gray-600">
            Update your password to keep your account secure
          </p>
        </div>

        {/* Password Change Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
        >
          {/* Current Password */}
          <PasswordInput
            label="Current Password"
            placeholder="Enter your current password"
            error={errors.currentPassword}
            {...register("currentPassword", {
              required: "Current password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />

          {/* New Password */}
          <PasswordInput
            label="New Password"
            placeholder="Enter your new password"
            error={errors.newPassword}
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
              validate: {
                notSame: (value) =>
                  value !== watch("currentPassword") ||
                  "New password must be different from current password",
              },
            })}
          />

          {/* Confirm Password */}
          <PasswordInput
            label="Confirm New Password"
            placeholder="Confirm your new password"
            error={errors.confirmPassword}
            {...register("confirmPassword", {
              required: "Please confirm your new password",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
          />

          {/* Password Requirements */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              Password Requirements:
            </h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li className="flex items-center">
                <FiCheck className="w-3 h-3 text-green-500 mr-2" />
                At least 6 characters long
              </li>
              <li className="flex items-center">
                <FiCheck className="w-3 h-3 text-green-500 mr-2" />
                Different from current password
              </li>
              <li className="flex items-center">
                <FiCheck className="w-3 h-3 text-green-500 mr-2" />
                New passwords must match
              </li>
            </ul>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            label={isSubmitting ? "Updating Password..." : "Update Password"}
            bgColor="bg-success-05"
            className="w-full py-3 text-base font-medium"
            isDisabled={isSubmitting}
          />
        </form>

        {/* Security Tips */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            For security reasons, we recommend using a strong, unique password
            that you don't use elsewhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Setting;
