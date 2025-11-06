import Link from "next/link";
import Container from "../Reusable/Container/Container";
import Image from "next/image";
import { ICONS } from "@/assets";

const StartDreamKitchenBanner = () => {
  return (
    <div className="bg-primary-10 font-Satoshi py-14">
      <Container>
        <div className="flex items-center justify-between">
          <h3 className="text-neutral-20 text-[32px] font-bold leading-9 max-w-[380px]">
            Start Planning Your Dream Kitchen
          </h3>
          <Link
            href={"/"}
            className="bg-white hover:bg-success-05/20 transition-all duration-300 size-12 rounded-full flex items-center justify-center"
          >
            <Image
              src={ICONS.rightArrowRed}
              alt="right-arrow-lokplaaza"
              className="w-7"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default StartDreamKitchenBanner;
