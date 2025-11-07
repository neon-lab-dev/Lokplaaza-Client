import Image from "next/image";
import Container from "../../Reusable/Container/Container";
import { ICONS, IMAGES } from "@/assets";
import Heading from "@/components/Reusable/Heading/Heading";

const BenefitsOfModularKitchen = () => {
  const modularKitchenBenefits = [
    {
      title: "Adaptability",
      description:
        "Pieces can be added, removed, or repositioned easily, making modular furniture highly versatile for both homes and offices.",
      image: IMAGES.adaptability,
    },
    {
      title: "Flexible",
      description:
        "Unlike built-in or traditional fixed furniture, modular units can be reconfigured to serve multiple purposes or fit different spaces.",
      image: IMAGES.flexible,
    },
    {
      title: "Easy To Assemble",
      description:
        "Modular units are typically designed for straightforward, rapid assembly and disassembly without the need for specialized tools.",
      image: IMAGES.easyToAssemble,
    },
    {
      title: "Customizable",
      description:
        "Customers can often choose from a wide range of modules, materials, colors, and finishes to create a personalized, unique design.",
      image: IMAGES.customizable,
    },
    {
      title: "Space-Saving",
      description:
        "This type of furniture is particularly well-suited for small or compact areas because it maximizes storage and functionality.",
      image: IMAGES.spaceSaving,
    },
    {
      title: "Cost-Effective",
      description:
        "While some high-end sets can be expensive, modular furniture often proves more economical in the long run.",
      image: IMAGES.costEffective,
    },
  ];

  return (
    <Container>
      <div className="py-14 font-Satoshi">
        <Heading title="Benefits of Modular Kitchen" alignClass="text-left" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {modularKitchenBenefits.map((benefit, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden h-[281px]"
            >
              {/* Gradient overlay covering full image */}
              <div className="absolute inset-0 bg-gray-900/40 z-10 h-full"></div>

              {/* Background Image */}
              <Image
                src={benefit.image}
                alt={`Modular kitchen benefit: ${benefit.title}`}
                className="object-cover w-full h-full"
                fill
              />

              {/* Text at bottom */}
              <div className="absolute bottom-5 left-5 right-5 text-white flex flex-col gap-3 z-20">
                <div className="flex items-center gap-3">
                  <Image src={ICONS.tickMarkGreen} alt="" className="size-6" />
                  <h3 className="text-xl font-bold leading-6">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-success-10 text-sm lg:text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BenefitsOfModularKitchen;
