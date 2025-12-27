"use client"
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import ProductsGrid from "@/components/Reusable/ProductGrid/ProductGrid";
import { useGetAllCategoriesQuery } from "@/redux/features/Category/categoryApi";
import { useGetAllProductsQuery } from "@/redux/features/Product/productApi";

const RecommendedAccessories = () => {
 

  const { data:allProducts } = useGetAllProductsQuery({page:1, limit:16});
  const { data, isLoading} = useGetAllCategoriesQuery({});
  const allCategories = [
  { name: "All" },
  ...(data?.data?.categories || []),
];
  return (
    <Container>
      <div className="py-14 font-Satoshi">
        <Heading title="Recommended Accessories" alignClass="text-left" />

       <ProductsGrid products={allProducts?.data?.products || []} isLoading={false} />
      </div>
    </Container>
  );
};

export default RecommendedAccessories;
