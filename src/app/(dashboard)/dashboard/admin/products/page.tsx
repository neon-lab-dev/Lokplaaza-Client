/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import Table from "@/components/Reusable/Table/Table";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/features/Product/productApi";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const AllProducts = () => {
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
      href="/dashboard/admin/add-product"
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
        tableHeaders={[
          "ID",
          "Image",
          "Name",
          "Category",
          "Colors, Sizes and Prices",
        ]}
        tableData={products.map((p: any) => ({
          id: p.productId, // visible ID in table
          // _id is still there for internal use, but not in table cell
          _id: p._id,

          image: (
            <img
              src={p.imageUrls[0]}
              alt={p.name}
              className="w-12 h-12 rounded-md object-cover border"
            />
          ),

          name: p.name,
          category: p.category,

          /** PRICES */
          prices: (
            <div className="space-y-1">
              {p.colors?.map((color: any) => (
                <div key={color.colorName}>
                  <p className="font-semibold mb-1">{color.colorName}</p>
                  {color.sizes.map((size: any) => (
                    <div
                      key={size._id}
                      className="flex items-center text-sm gap-2"
                    >
                      <span className="w-12">{size.size}</span>
                      <span className="line-through text-red-500">
                        {size.basePrice}
                      </span>
                      <span>→</span>
                      <span className="text-green-600 font-semibold">
                        {size.discountedPrice}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ),
        }))}
        actions={[
          { label: "View", onClick: (row) => console.log("View", row) },
          { label: "Edit", onClick: (row) => console.log("Edit", row) },
          { label: "Delete", onClick: (row) => handleDeleteProduct(row?._id) },
        ]}
      >
        {children}
      </Table>
    </div>
  );
};

export default AllProducts;
