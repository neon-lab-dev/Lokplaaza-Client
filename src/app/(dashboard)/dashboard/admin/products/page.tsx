/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import Table from "@/components/Reusable/Table/Table";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/Product/productApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const AllProducts = () => {
  const router = useRouter();
  const [deleteProduct] = useDeleteProductMutation();
  const { data, isLoading } = useGetAllProductsQuery({});
  const products = data?.data?.products || [];

  const [keyword, setKeyword] = useState("");
  const [limit, setLimit] = useState(10);
  const [category, setCategory] = useState("");

  const categories = ["Bed", "Kitchen", "Bedroom Accessories", "Furniture"];
  const handleDeleteProduct = async (id: string) => {
    console.log(id);
    toast.promise(deleteProduct(id).unwrap(), {
      loading: "Deleting product...",
      success: "Product deleted successfully.",
      error: (err: any) => err?.data?.message || "Something went wrong!",
    });
  };

  const children = (
    <Link
      href="/dashboard/admin/product/add"
      className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 bg-primary-05 focus:outline-none text-white transition-colors capitalize cursor-pointer"
    >
      Add new product
    </Link>
  );

  return (
    <div>
      <Table
        heading="Products"
        subHeading="Manage all store products"
        searchPlaceholder="Search products..."
        searchValue={keyword}
        onSearch={setKeyword}
        limit={limit}
        onLimitChange={setLimit}
        categories={categories}
        selectedCategory={category}
        onCategoryChange={setCategory}
        isLoading={isLoading}
        tableHeaders={["Image", "Name", "Category", "Colors, Sizes and Prices"]}
        tableData={products.map((p: any) => ({
          // Don't include any id or _id field here for UI
          image: (
            <img
              src={p.imageUrls[0]}
              alt={p.name}
              className="w-12 h-12 rounded-md object-cover border border-neutral-05/50"
            />
          ),
          name: (
            <div>
              <p>{p.name}</p>
              <p>{p.productId}</p>
            </div>
          ),
          category: p.category,
          prices: (
            <div className="space-y-1">
              {p.colors?.map((color: any) => (
                <div key={color.colorName}>
                  <p className="font-semibold mb-1">{color.colorName}</p>
                  {color.sizes.map((size: any) => (
                    <div key={size._id} className="flex flex-col text-sm gap-2">
                      <p className="w-12">{size.size}</p>
                      <div className="flex items-center text-sm gap-2">
                        <p className="line-through text-red-500">
                          {size.basePrice}
                        </p>
                        <p>→</p>
                        <p className="text-green-600 font-semibold">
                          {size.discountedPrice}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ),
          // Store _id in a separate property that won't be rendered
          _id: p._id,
        }))}
        actions={[
          {
            label: "View",
            onClick: (row) => window.open(`/products/${row._id}`, "_blank"),
          },
          {
            label: "Edit",
            onClick: (row) =>
              router.push(`/dashboard/admin/product/update-${row._id}`),
          },
          { label: "Delete", onClick: (row) => handleDeleteProduct(row._id) },
        ]}
      >
        {children}
      </Table>
    </div>
  );
};

export default AllProducts;
