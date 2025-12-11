"use client";
import { GIFS, ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems);

  const isEmpty = cartItems.length === 0;
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const gst = totalPrice * 0.18;
  const grandTotal = totalPrice + gst;

  return (
    <div className="bg-white h-screen font-Satoshi">
      <Container>
        {isEmpty ? (
          <div className="h-[90vh] flex flex-col items-center justify-center">
            <Image src={GIFS.cartGif} alt="empty cart" className="size-40" />
            <p className="text-3xl font-medium text-neutral-20 mt-6 m-3">
              Your Cart is Empty!
            </p>
            <p className="text-lg text-neutral-40 leading-[120%] text-center max-w-[300px] mx-auto">
              Add products in cart to see them here.
            </p>
          </div>
        ) : (
          <div className="py-6 pb-28">
            {/* Cart items list */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item?.productId}
                  className="flex items-center gap-3 border-b pb-4"
                >
                  {" "}
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={148}
                    height={148}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className=" text-neutral-20 text-[31px] font-bold">
                      {item.name}
                    </p>
                    <p className=" text-neutral-20 font-bold">
                      {item.color} | {item.size}
                    </p>
                    <p className="text-neutral-40 text-sm">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout button */}
            <div className="flex flex-col sticky bottom-0 bg-white py-4 border-t">
              {/* Price Breakdown */}
              <div className="flex items-center justify-between mb-1 px-1">
                <p className="text-neutral-40 text-sm">Subtotal:</p>
                <p className="text-neutral-20 font-medium">
                  ₹{totalPrice.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center justify-between mb-3 px-1">
                <p className="text-neutral-40 text-sm">GST (18%):</p>
                <p className="text-neutral-20 font-medium">₹{gst.toFixed(2)}</p>
              </div>

              {/* Grand Total + Checkout */}
              <div className="flex items-center justify-between">
                <p className="text-neutral-20 font-bold text-lg">
                  Total: ₹{grandTotal.toFixed(2)}
                </p>
                <Button
                  label="Checkout"
                  className="w-[50%]"
                  icon={ICONS.rightArrow}
                />
              </div>
            </div>
          </div>
        )}

        {/* Add-to-cart button (only for empty state) */}
        {isEmpty && (
          <Button
            label="Add to Cart"
            className="w-full"
            icon={ICONS.rightArrow}
          />
        )}
      </Container>
    </div>
  );
};

export default Cart;
