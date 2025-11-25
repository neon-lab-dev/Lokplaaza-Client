/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import Table from "@/components/Reusable/Table/Table";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";
import Link from "next/link";
import { useState } from "react";

const AllProducts = () => {
  const { data } = useGetAllProductsQuery({});
  const products = data?.data?.products || []; // ✅ Correct list of products

  const [keyword, setKeyword] = useState("");
  const [limit, setLimit] = useState(10);
  const [category, setCategory] = useState("");

  const categories = ["Bed", "Kitchen", "Bedroom Accessories", "Furniture"];

  // FILTER PRODUCTS
  // const filteredProducts = products.filter((p: any) => {
  //   const matchesKeyword = p.name.toLowerCase().includes(keyword.toLowerCase());
  //   const matchesCategory = category ? p.category === category : true;
  //   return matchesKeyword && matchesCategory;
  // });

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
        tableHeaders={[
          "ID",
          "Image",
          "Name",
          "Category",
          "Colors, Sizes and Prices",
        ]}
        tableData={products.map((p: any) => {
          return {
            id: p.productId,

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
            /** PRICES */
            prices: (
              <div className="space-y-1">
                {" "}
                {/* Reduce vertical spacing */}
                {p.colors?.map((color: any) => (
                  <div key={color.colorName}>
                    {/* Color name */}
                    <p className="font-semibold mb-1">{color.colorName}</p>

                    {/* Sizes with prices */}
                    {color.sizes.map((size: any) => (
                      <div
                        key={size._id}
                        className="flex items-center text-sm gap-2" // Use gap instead of justify-between
                      >
                        <span className="w-12">{size.size}</span>{" "}
                        {/* fixed width for alignment */}
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
          };
        })}
        actions={[
          { label: "View", onClick: (row) => console.log("View", row) },
          { label: "Edit", onClick: (row) => console.log("Edit", row) },
          { label: "Delete", onClick: (row) => console.log("Delete", row) },
        ]}
      >
        {children}
      </Table>
    </div>
  );
};

export default AllProducts;
