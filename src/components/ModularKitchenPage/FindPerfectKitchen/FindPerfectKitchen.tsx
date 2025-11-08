import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";

const FindPerfectKitchen = () => {
    return (
         <Container>
      <div className="py-14 font-Satoshi flex flex-col gap-4">
        <Heading title="Get your customized modular kitchen" alignClass="text-left" />
        <p className="text-neutral-20 text-sm md:text-base 2xl:text-2xl mb-2">
          Explore our latest design collections & trends. Book your free consultation now, personalized designs for every Indian needs.
        </p>
        <Button
          label="Book a consultation"
          bgColor="bg-success-05"
          textColor="text-success-10"
          icon={ICONS.rightArrow}
          className="w-fit"
        />

        {/* Images */}
        <div className="flex flex-col gap-6 mt-13 2xl:mt-[98px]">
          {/* Large top image */}
          <Image
            src={IMAGES.perfectKitchen1}
            alt="Customized modular kitchen"
            className="w-full h-[348px] rounded-xl object-cover"
          />
          <Image
            src={IMAGES.perfectKitchen2}
            alt="Customized modular kitchen"
            className="w-full h-[348px] rounded-xl object-cover"
          />

          {/* Bottom grid images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              IMAGES.perfectKitchen3,
              IMAGES.perfectKitchen4,
            ].map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Customized modular kitchen ${index + 2}`}
                className="w-full h-[218px] rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
    );
};

export default FindPerfectKitchen;