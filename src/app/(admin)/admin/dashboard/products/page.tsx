/* eslint-disable @next/next/no-img-element */
"use client";
import Table from "@/components/Reusable/Table/Table";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: "p1",
    name: "Wooden King Size Bed",
    category: "Bed",
    price: 45000,
    stock: 12,
    image: "https://i.ibb.co/ZH6dS6s/bed1.jpg",
  },
  {
    id: "p2",
    name: "Queen Size Storage Bed",
    category: "Bed",
    price: 38000,
    stock: 8,
    image: "https://i.ibb.co/kx9wYsb/bed2.jpg",
  },
  {
    id: "p3",
    name: "Non-stick Cookware Set",
    category: "Kitchen",
    price: 5200,
    stock: 20,
    image: "https://i.ibb.co/DfkBv6q/cookware.jpg",
  },
  {
    id: "p4",
    name: "Steel Knife Set",
    category: "Kitchen",
    price: 1800,
    stock: 30,
    image: "https://i.ibb.co/cN0wZyw/knife.jpg",
  },
  {
    id: "p5",
    name: "Premium Pillow (Set of 2)",
    category: "Bedroom Accessories",
    price: 1400,
    stock: 50,
    image: "https://i.ibb.co/rp6tT7C/pillow.jpg",
  },
  {
    id: "p6",
    name: "Cotton Bedsheet with Pillow Covers",
    category: "Bedroom Accessories",
    price: 2200,
    stock: 40,
    image: "https://i.ibb.co/6bCwngp/bedsheet.jpg",
  },
  {
    id: "p7",
    name: "Wooden Wardrobe 4 Door",
    category: "Furniture",
    price: 55000,
    stock: 6,
    image: "https://i.ibb.co/NsJPm1V/wardrobe.jpg",
  },
  {
    id: "p8",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 7500,
    stock: 15,
    image: "https://i.ibb.co/pf72j7Z/chair.jpg",
  },
];

const AllProducts = () => {
  const [keyword, setKeyword] = useState("");
  const [limit, setLimit] = useState(10);
  const [category, setCategory] = useState("");

  const categories = ["Bed", "Kitchen", "Bedroom Accessories", "Furniture"];

  const filteredProducts = products.filter((p) => {
    const matchesKeyword = p.name.toLowerCase().includes(keyword.toLowerCase());
    const matchesCategory = category ? p.category === category : true;
    return matchesKeyword && matchesCategory;
  });

  const children = (
    <Link
      href="/admin/dashboard/add-product"
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
        tableHeaders={["ID", "Image", "Name", "Category", "Price", "Available Stock"]}
        tableData={filteredProducts.map((p) => ({
          id: p.id,

          image: (
            <img
              src={p.image}
              alt={p.name}
              className="w-12 h-12 rounded-md object-cover border"
            />
          ),

          name: p.name,
          category: p.category,
          price: `৳ ${p.price}`,
          count: p.stock,
        }))}
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
