"use client";
import Products from "@/components/Reusable/Products/Products";
import { useGetAllCategoriesQuery } from "@/redux/features/Category/categoryApi";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";

const ProductsSection = () => {
  const { data:allProducts } = useGetAllProductsQuery({page:1, limit:16});
  const { data, isLoading} = useGetAllCategoriesQuery({});
  const allCategories = [
  { name: "All" },
  ...(data?.data?.categories || []),
];
  return (
    <div>
      <Products
        title="Home Furniture"
        productCategories={allCategories || []}
        products={allProducts?.data?.products || []}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ProductsSection;
