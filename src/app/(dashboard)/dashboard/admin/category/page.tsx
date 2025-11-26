"use client";
import ConfirmationModal from "@/components/Reusable/ConfirmationModal/ConfirmationModal";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from "@/components/Reusable/Table/Table";
import TextInput from "@/components/Reusable/TextInput/TextInput";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesQuery,
} from "@/redux/features/Category/categoryApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type TFormData = {
  name: string;
};

const Category = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormData>();

  const [isCategoryModalOpen, setIsCategoryModalOpen] =
    useState<boolean>(false);

  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [addCategory, { isLoading: isAddingCategory }] =
    useAddCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();
  const { data, isLoading, isFetching } = useGetAllCategoriesQuery({
    keyword,
    page,
    limit,
  });

  const categories = data?.data?.categories || [];

  const handleAddCategory = async (data: TFormData) => {
    try {
      const payload = {
        name: data.name,
      };
      const response = await addCategory(payload).unwrap();
      if (response?.success) {
        toast.success(response?.message);
        setIsCategoryModalOpen(false);
        reset();
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };
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
          {
            label: "Delete",
            onClick: (row) => handleDeleteCategory(row?.categoryId),
          },
        ]}
      >
        <button
          onClick={() => setIsCategoryModalOpen(true)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 bg-primary-05 focus:outline-none text-white transition-colors capitalize cursor-pointer"
        >
          Add New Category
        </button>
      </Table>

      <ConfirmationModal
        heading=" Add New Category"
        isConfirmationModalOpen={isCategoryModalOpen}
        setIsConfirmationModalOpen={setIsCategoryModalOpen}
        isCrossVisible={true}
      >
        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSubmit(handleAddCategory)}
            className="w-full flex flex-col gap-3 items-end"
          >
            <TextInput
              label="Category Name"
              placeholder="Enter category name"
              error={errors.name}
              {...register("name", {
                required: "Category is required",
              })}
            />
            <button
              type="submit"
              disabled={isAddingCategory}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 bg-success-05 focus:outline-none text-white transition-colors capitalize cursor-pointer"
            >
              {isAddingCategory ? "Please wait..." : "Add Category"}
            </button>
          </form>

          <div className="w-full px-6"></div>
        </div>
      </ConfirmationModal>
    </div>
  );
};

export default Category;
