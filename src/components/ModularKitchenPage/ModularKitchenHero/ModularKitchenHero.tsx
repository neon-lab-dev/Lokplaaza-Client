/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Image from "next/image";

const ModularKitchenHero = ({ data }: any) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={data.image}
        alt="Modular Kitchen Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Hero Content - Centered */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Container>
          <div className="text-center space-y-6 max-w-175 mx-auto">
            <h3 className="text-[32px] lg:text-[45px] 2xl:text-[61px] font-semibold leading-tight text-white">
              {data.heading}
            </h3>
            <div className="flex justify-center">
              <Button
                label={"Explore Our Collection"}
                bgColor="bg-success-05"
                textColor="text-success-10"
                icon={ICONS.rightArrow}
                className="w-fit"
                onClick={() => {
                  const collectionSection =
                    document.getElementById("collection");
                  if (collectionSection) {
                    collectionSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ModularKitchenHero;
