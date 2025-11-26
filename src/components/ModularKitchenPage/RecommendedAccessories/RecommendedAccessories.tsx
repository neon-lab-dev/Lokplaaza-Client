import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import ProductCard from "@/components/Reusable/ProductCard/ProductCard";
import { sampleProducts } from "@/constants/sampleProduct";

const RecommendedAccessories = () => {
  return (
    <Container>
      <div className="py-14 font-Satoshi">
        <Heading title="Recommended Accessories" alignClass="text-left" />

        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center xl:grid-cols-4 2xl:grid-cols-5 gap-y-20 mt-28">
          {sampleProducts.length > 0 ? (
            sampleProducts.map((product) => (
              <ProductCard
                key={`${product.id}-${product.title}`}
                product={product}
              />
            ))
          ) : (
            <p className="text-neutral-600 text-center col-span-full">
              No products found in this category.
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default RecommendedAccessories;
