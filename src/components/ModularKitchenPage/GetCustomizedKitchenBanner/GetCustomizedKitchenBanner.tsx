import { ICONS, IMAGES } from "@/assets";
import Button from "../../Reusable/Button/Button";
import Container from "../../Reusable/Container/Container";
import Image from "next/image";

const GetCustomizedKitchenBanner = () => {
  return (
    <Container>
      <div className="py-14 font-Satoshi flex flex-col gap-4 justify-end text-end">
        <h3 className="text-neutral-20 text-[32px] lg:text-[45px] 2xl:text-[61px] font-semibold leading-9 lg:leading-11 2xl:leading-16">
          Get your customized modular kitchen
        </h3>
        <p className="text-neutral-20 text-base lg:text-2xl mb-2">
          Explore our latest design collections & trends. Book your free
          consultation now, personalized designs for every Indian needs.
        </p>
        <Button
          label="Get a free quote"
          bgColor="bg-success-05"
          textColor="text-success-10"
          icon={ICONS.rightArrow}
          className="w-fit self-end"
        />

        {/* Images */}
        <div className="flex flex-col gap-6 mt-13 2xl:mt-[98px]">
          {/* Large top image */}
          <Image
            src={IMAGES.customizedModularKitchen1}
            alt="Customized modular kitchen"
            className="w-full h-[348px] rounded-xl object-cover"
          />

          {/* Bottom grid images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              IMAGES.customizedModularKitchen2,
              IMAGES.customizedModularKitchen2,
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

export default GetCustomizedKitchenBanner;
