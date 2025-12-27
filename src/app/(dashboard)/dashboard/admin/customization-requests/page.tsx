/* eslint-disable react-hooks/static-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
// CustomizationRequests.tsx
"use client";
import Table from "@/components/Reusable/Table/Table";
import { useGetAllCustomizationRequestsQuery } from "@/redux/features/Customizations/customizationApi";
import { useState } from "react";
import Modal from "@/components/Reusable/Modal/Modal";
import { formatDateTime } from "@/utils/formatDate";

const CustomizationRequests = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [requestDetails, setRequestDetails] = useState<any | null>(null);

  const { data, isLoading } = useGetAllCustomizationRequestsQuery({});

  const customizationRequests = data?.data?.customizations || [];

  const formatDate = (dateString: string) => {
    return formatDateTime(dateString);
  };

  const OptionsList = ({
    label,
    options,
  }: {
    label: string;
    options: { key: string; label: string; _id?: string }[];
  }) => (
    <div className="mb-4">
      <h4 className="font-semibold text-gray-700 mb-2">{label}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <span
            key={option.key}
            className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700"
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );

  const CustomizationGrid = ({ customizations }: { customizations: any }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {Object.entries(customizations).map(([key, value]) => (
        <div key={key} className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-600 mb-1 capitalize">
            {key.replace(/([A-Z])/g, " $1").trim()}
          </h4>
          <p className="text-gray-800 font-medium">{(value as any).label}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Table
        heading="Sofa Customization Requests"
        subHeading="Manage all sofa customization requests"
        isLoading={isLoading}
        tableHeaders={["Name", "Phone", "Created At", "Action"]}
        tableData={customizationRequests.map((item: any) => ({
          name: item.name,
          phone: item.phoneNumber,
          createdAt: formatDate(item.createdAt),
          action: (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              onClick={() => {
                setRequestDetails(item);
                setIsModalOpen(true);
              }}
            >
              View Details
            </button>
          ),
        }))}
        isFilterable={false}
      />

      {isModalOpen && requestDetails && (
        <Modal
          isModalOpen={isModalOpen}
          width="w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%]"
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Customization Request Details
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Request ID: {requestDetails._id}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Customer Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                Customer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Customer Name</p>
                  <p className="text-lg font-medium text-gray-800">
                    {requestDetails.name}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="text-lg font-medium text-gray-800">
                    {requestDetails.phoneNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Variant Type */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                Sofa Variant
              </h3>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 inline-block">
                <span className="text-blue-700 font-medium">
                  {requestDetails.variantType.label}
                </span>
              </div>
            </div>

            {/* Color & Fabric Options */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                Color & Fabric Selection
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <OptionsList
                  label="Selected Colors"
                  options={requestDetails.color}
                />
                <OptionsList
                  label="Selected Fabrics"
                  options={requestDetails.fabric}
                />
              </div>
            </div>

            {/* Customization Options */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
                Customization Options
              </h3>
              <CustomizationGrid
                customizations={requestDetails.customizations}
              />
            </div>

            {/* Timestamps */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500">
                <div>
                  <span className="font-medium">Created:</span>{" "}
                  {formatDate(requestDetails.createdAt)}
                </div>
                <div>
                  <span className="font-medium">Last Updated:</span>{" "}
                  {formatDate(requestDetails.updatedAt)}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CustomizationRequests;