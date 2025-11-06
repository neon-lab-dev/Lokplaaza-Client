import { ICONS } from "@/assets";
import Button from "../Reusable/Button/Button";
import Container from "../Reusable/Container/Container";

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
      </div>
    </Container>
  );
};

export default GetCustomizedKitchenBanner;
