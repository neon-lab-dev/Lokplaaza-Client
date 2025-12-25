import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import Link from "next/link";

const ModularKitchenSolutions = () => {
  const modularKitchenSolutions = [
    {
      image: IMAGES.lShapedKitchen,
      title: "L-Shaped Modular Kitchen",
      description: "Optimized for corner spaces with maximum storage",
      features: ["Corner optimization", "Smart storage", "Efficient workflow"],
    },
    {
      image: IMAGES.uShapedKitchen,
      title: "U-Shaped Modular Kitchen",
      description: "Spacious layout with ample counter space",
      features: [
        "Maximum workspace",
        "Three-sided layout",
        "Multiple work zones",
      ],
    },
    {
      image: IMAGES.islandKitchen,
      title: "Island Modular Kitchen",
      description: "Central island for cooking and socializing",
      features: ["Social layout", "Additional seating", "Prep & storage"],
    },
  ];

  return (
    <div className="bg-neutral-50">
      <Container>
        <div className="py-16 md:py-24">
          {/* Header Section */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <Heading
              title="Modular Kitchen Solutions"
              alignClass="text-center"
            />
            <p className="text-lg text-neutral-600 mt-4">
              Explore our latest design collections & trends. Book your free
              consultation now, personalized designs for every Indian home.
            </p>
          </div>

          {/* Kitchen Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {modularKitchenSolutions?.map((item) => (
              <Link key={item?.title} href={"/"} className="group relative">
                {/* Card Container */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-neutral-200 hover:border-success-100">
                  {/* Image Container with Overlay */}
                  <div className="relative overflow-hidden h-64 md:h-72">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Overlay Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {item.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-neutral-800 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-neutral-800 group-hover:text-success-600 transition-colors">
                        {item.title}
                      </h3>
                      {/* Arrow Icon */}
                      <div className="w-10 h-10 rounded-full bg-success-50 flex items-center justify-center group-hover:bg-success-100 transition-colors">
                        <svg
                          className="w-5 h-5 text-success-600 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>

                    <p className="text-neutral-600 mb-4">{item.description}</p>

                    {/* Read More Link */}
                    <div className="flex items-center text-sm font-medium text-success-600 group-hover:text-success-700">
                      <span>Explore Designs</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-success-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ModularKitchenSolutions;
