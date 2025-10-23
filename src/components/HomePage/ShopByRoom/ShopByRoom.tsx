import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Container/Heading/Heading";
import React from "react";

const ShopByRoom = () => {
  return (
    <div className="py-10 font-Satoshi bg-neutral-10">
      <Container>
        <div className="flex items-center justify-center gap-5">
          <div className=" w-full xl:w-[60%]">
            <Heading
              heading="Luxury Collection"
              title="Designs that Define Style"
              alignClass="text-left"
            />
            <p className="text-neutral-20 text-base md:text-2xl mt-4 md:mt-3">
              Whether you’re styling a cozy bedroom, a productive office, or a
              welcoming living room — we’ve made it easy. Browse furniture and
              décor tailored for every room in your home or workspace.
            </p>
          </div>
          <div className="w-full xl:w-[40%]"></div>
        </div>
      </Container>
    </div>
  );
};

export default ShopByRoom;
