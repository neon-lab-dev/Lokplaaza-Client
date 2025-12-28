/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Table from "@/components/Reusable/Table/Table";
import {
  useDeleteConsultationMutation,
  useGetAllConsultationQuery,
} from "@/redux/features/Consultation/consultationApi";
import { formatDate } from "@/utils/formatDate";
import toast from "react-hot-toast";

const Consultation = () => {
  const { data, isLoading } = useGetAllConsultationQuery({});
  const [deleteConsultation] = useDeleteConsultationMutation();

  const consultations = data?.data?.consultations || [];

  const handleDelete = async (id: string) => {
    toast.promise(deleteConsultation(id).unwrap(), {
      loading: "Deleting consultation...",
      success: "Consultation deleted successfully.",
      error: (err: any) => err?.data?.message || "Something went wrong!",
    });
  };

  return (
    <div>
      <Table
        heading="Consultations"
        subHeading="Manage all consultation requests"
        isLoading={isLoading}
        tableHeaders={["ID", "Name", "Email", "Phone Number", "Requested Date",]}
        tableData={consultations.map((c: any) => ({
          _id: c._id,
          name: c.name,
          email: c.email || "NA",
          phone: c.phoneNumber,
          createdAt : formatDate(c.createdAt),
        }))}
        actions={[
          {
            label: "Delete",
            onClick: (row) => handleDelete(row._id),
          },
        ]}
        isFilterable={false}
      />
    </div>
  );
};

export default Consultation;
