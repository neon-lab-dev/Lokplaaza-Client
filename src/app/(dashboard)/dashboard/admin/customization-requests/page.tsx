"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useRouter } from "next/navigation";
import Table from "@/components/Reusable/Table/Table";
import { useGetAllCustomizationRequestsQuery } from "@/redux/features/Customizations/customizationApi";

const CustomizationRequests = () => {
  const router = useRouter();

  const { data, isLoading } = useGetAllCustomizationRequestsQuery({});

  const customizationRequests = data?.data?.customizations || [];

  const handleViewDetails = (id: string) => {
    router.push(`/dashboard/admin/customization-requests/${id}`);
  };

  return (
    <div>
      <Table
        heading="Customization Requests"
        subHeading="Manage all customization requests"
        isLoading={isLoading}
        tableHeaders={["Name", "Phone", "Action"]}
        tableData={customizationRequests.map((item: any) => ({
          name: item.name,
          phone: item.phoneNumber,
          action: (
            <button
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 bg-success-05 focus:outline-none text-white transition-colors capitalize cursor-pointer"
              onClick={() => handleViewDetails(item?._id)}
            >
              View Details
            </button>
          ),
        }))}
        isFilterable={false}
      />
    </div>
  );
};

export default CustomizationRequests;
