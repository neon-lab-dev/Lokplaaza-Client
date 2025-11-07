import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Image from "next/image";

const ModularKitchenHero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={IMAGES.modularKitchenHero}
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

      {/* Hero Content - Bottom Left */}
      <div className="absolute bottom-10 left-0 w-full z-20 text-white">
        <Container>
          <div className="space-y-6 max-w-[700px]">
            <h3 className="text-[32px] lg:text-[45px] 2xl:text-[61px] font-semibold leading-tight">
              Modular kitchens designed for your home
            </h3>
            <Button
              label="See all kitchen systems"
              bgColor="bg-success-05"
              textColor="text-success-10"
              icon={ICONS.rightArrow}
              className="w-fit"
            />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ModularKitchenHero;
