"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from "@/components/Reusable/Table/Table";
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from "@/redux/features/Category/categoryApi";
import { useState } from "react";
import toast from "react-hot-toast";

const Category = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [deleteCategory] = useDeleteCategoryMutation();
  const { data, isLoading, isFetching } = useGetAllCategoriesQuery({
    keyword,
    page,
    limit,
  });

  const categories = data?.data?.categories || [];

  const handleDeleteCategory = async (id: string) => {
      console.log(id);
      toast.promise(deleteCategory(id).unwrap(), {
        loading: "Deleting category...",
        success: "Category deleted successfully.",
        error: (err: any) => err?.data?.message || "Something went wrong!",
      });
    };

  return (
    <div className="p-5">
      <Table
        heading="Categories"
        subHeading="Manage all product categories"
        searchPlaceholder="Search categories..."
        searchValue={keyword}
        onSearch={setKeyword}
        limit={limit}
        onLimitChange={setLimit}
        isLoading={isLoading || isFetching}
        tableHeaders={["Category ID", "Name", "Created At"]}
        tableData={categories.map((category: any) => ({
          categoryId: category._id,
          name: category.name,
          createdAt: new Date(category.createdAt).toLocaleDateString(),
        }))}
        actions={[
          { label: "Delete", onClick: (row) => handleDeleteCategory(row?.categoryId) },
        ]}
      />
    </div>
  );
};

export default Category;
