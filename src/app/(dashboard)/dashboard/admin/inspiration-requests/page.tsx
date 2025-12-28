/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Table from "@/components/Reusable/Table/Table";
import { useGetAllInspirationRequestsQuery } from "@/redux/features/InspirationRequests/inspirationRequestsApi";
import { formatDate } from "@/utils/formatDate";

const InspirationRequests = () => {
  const { data, isLoading } = useGetAllInspirationRequestsQuery({});

  const requests = data?.data?.requests || [];

  return (
    <div>
      <Table
        heading="Inspiration Requests"
        subHeading="Manage all inspiration requests"
        isLoading={isLoading}
        tableHeaders={["Name", "Phone Number", "Requested Date", "Image"]}
        tableData={requests.map((r: any) => ({
          name: r.name,
          phone: r.phoneNumber,
          createdAt : formatDate(r.createdAt),
          image: r.imageUrl ? (
            <a
              href={r.imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              View Image
            </a>
          ) : (
            "NA"
          ),
        }))}
        isFilterable={false}
      />
    </div>
  );
};

export default InspirationRequests;
