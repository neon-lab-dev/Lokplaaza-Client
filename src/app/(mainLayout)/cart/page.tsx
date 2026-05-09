/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { GIFS, ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart } from "@/redux/features/Cart/cartSlice";
import { useEffect, useState } from "react";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useCheckoutMutation } from "@/redux/features/Order/orderApi";
import { backendBaseUrl } from "@/redux/api/baseApi";
import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector(useCurrentUser) as any;
  const [checkout] = useCheckoutMutation();

  const isEmpty = cartItems.length === 0;
  const totalPrice = cartItems.reduce(
    (sum: any, item: any) => sum + item.price,
    0,
  );
  const gst = totalPrice * 0.18;
  const grandTotal = totalPrice + gst;

  const handleRemove = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCheckout = async () => {
    console.log(user);
    if (!user) {
      toast.error("Please login to checkout");
      return;
    }
    try {
      setLoading(true);

      const keyData = await axios.get(`${backendBaseUrl}/get-key`);

      const payload = {
        amount: grandTotal,
      };

      let response;
      try {
        response = await checkout(payload).unwrap();
      } catch (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      console.log(response, "response");

      const options = {
        key: keyData?.data?.key, // Razorpay key_id
        amount: response?.data?.amount,
        currency: "INR",
        name: "Lokplaaza",
        description: "Test Transaction",
        image: "https://i.ibb.co.com/twVj4hnp/Lokplaazalogo.png",
        order_id: response?.data?.id, // the order id
        callback_url: `${backendBaseUrl}/order/verify-payment`, // success URL
        prefill: {
          id: user?._id,
          name: user?.name,
          email: user?.email,
        },
        theme: {
          color: "#2b8963",
        },
      };
      console.log(options, "options");
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white font-Satoshi mt-10 xl:mt-12">
      <Container>
        <div className="flex items-center">
          <Link href="/" className="text-sm text-neutral-40 font-medium">
            Home
          </Link>
          <span className="mx-2 text-neutral-40">{">"}</span>
          <span className="text-sm text-success-05 font-bold">Cart</span>
        </div>

        {isEmpty ? (
          <div className="h-[80vh] flex flex-col items-center justify-center px-4">
            <Image src={GIFS.cartGif} alt="empty cart" className="w-40 h-40" />
            <p className="text-3xl font-medium text-neutral-20 mt-6 m-3">
              Your Cart is Empty!
            </p>
            <p className="text-lg text-neutral-40 leading-[120%] text-center max-w-75 mx-auto">
              Add products in cart to see them here.
            </p>
            {/* CTA for empty cart */}
            <div className="w-full max-w-md mt-6">
              <Button
                label="Add to Cart"
                className="w-full"
                icon={ICONS.rightArrow}
              />
            </div>
          </div>
        ) : (
          <div className="py-14 pb-28 flex gap-20 justify-between">
            {/* Cart items list */}
            <div className="space-y-6 w-[60%]">
              {cartItems.map((item: any) => (
                <div
                  key={item?.productId}
                  className="flex items-start gap-4 border-b border-neutral-05/30 pb-4 flex-col sm:flex-row"
                >
                  <div className="w-full sm:w-37 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={148}
                      height={148}
                      className="rounded-md object-cover w-full h-37"
                    />
                  </div>

                  <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <p className=" text-neutral-20 text-xl font-bold capitalize">
                        {item.name}
                      </p>
                      <p className=" text-neutral-20 font-medium text-sm mt-3">
                        {item.color} | {item.size}
                      </p>
                      <div className="flex items-center justify-between mt-6">
                        <p className="text-neutral-20 text-[25px] font-bold">
                          ₹{item.price} /-
                        </p>
                        {/* Remove button */}
                        <button
                          onClick={() => handleRemove(item.productId)}
                          aria-label={`Remove ${item.name} from cart`}
                          className="cursor-pointer text-neutral-20 underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout button */}
            <div className="flex flex-col bg-white shadow-xl p-6 w-[40%] rounded-xl font-Satoshi">
              {/* Price Breakdown */}
              <p className=" text-neutral-20 text-xl font-bold capitalize pb-3 border-b border-neutral-35">
                Price Breakdown
              </p>
              <div className="flex items-center justify-between text-lg text-neutral-20 my-6">
                <p>Price</p>
                <p className="font-semibold">₹{totalPrice.toFixed(2)} /-</p>
              </div>
              <div className="flex items-center justify-between text-lg text-neutral-20 mb-6">
                <p>GST (18%)</p>
                <p className="font-semibold">₹{gst.toFixed(2)} /-</p>
              </div>
              {/* <div className="flex items-center justify-between text-lg text-neutral-20 mb-6">
                <p>Discount</p>
                <p className="font-semibold text-success-05">
                  ₹{totalPrice.toFixed(2)} /-
                </p>
              </div> */}

              <hr className="border border-neutral-35 mb-3" />

              <div className="flex items-center justify-between text-lg text-neutral-20 font-semibold mb-6">
                <p>Total</p>
                <p>₹{grandTotal.toFixed(2)} /-</p>
              </div>

              <Button
                label={loading ? "Please wait..." : "Proceed To Payment"}
                className="w-full"
                icon={ICONS.rightArrow}
                onClick={handleCheckout}
              />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
