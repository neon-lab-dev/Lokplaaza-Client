import { GIFS, ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";

const Cart = () => {
  return (
    <div className="bg-white h-screen font-Satoshi">
      <Container>
        <div className="h-[90vh]">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Image src={GIFS.cartGif} alt={"shop now"} className={"size-40"} />
            <p className="text-3xl font-medium text-neutral-20 mt-6 m-3">
              Your Cart is Empty!
            </p>
            <p className="text-lg text-neutral-40 leading-[120%] text-center max-w-[300px] mx-auto">
              Add products in cart to see them here.
            </p>
          </div>
        </div>
        <Button
          label="Add to Cart"
          className="w-full"
          icon={ICONS.rightArrow}
        />
      </Container>
    </div>
  );
};

export default Cart;
