/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { GIFS, ICONS } from "@/assets";
import Button from "@/components/Reusable/Button/Button";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { FiTrash2 } from "react-icons/fi";
import { removeFromCart } from "@/redux/features/Cart/cartSlice";
import { useEffect, useState } from "react";
import { useCurrentUser } from "@/redux/features/Auth/authSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useCheckoutMutation } from "@/redux/features/Order/orderApi";
import { backendBaseUrl } from "@/redux/api/baseApi";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector(useCurrentUser) as any;
  const [checkout] = useCheckoutMutation();

  const isEmpty = cartItems.length === 0;
  const totalPrice = cartItems.reduce(
    (sum: any, item: any) => sum + item.price,
    0
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

      const keyData = await axios.get(
        `${backendBaseUrl}/get-key`
      );

      const payload = {
        amount: totalPrice,
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
        callback_url:
          `${backendBaseUrl}/order/verify-payment`, // success URL
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
    <div className="bg-white min-h-screen font-Satoshi">
      <Container>
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
          <div className="py-6 pb-28">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-neutral-20">
                My Cart
              </h2>
              <p className="text-sm text-neutral-40">
                {cartItems.length} item(s)
              </p>
            </div>

            {/* Cart items list */}
            <div className="space-y-4">
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

                  <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex-1">
                      <p className=" text-neutral-20 text-[20px] sm:text-[24px] font-bold">
                        {item.name}
                      </p>
                      <p className=" text-neutral-20 font-medium text-sm mt-1">
                        {item.color} | {item.size}
                      </p>
                      <p className="text-neutral-40 text-sm mt-2">
                        ₹{item.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Quantity (display only) - you can wire up increment/decrement later */}
                      {/* <div className="flex items-center gap-2 bg-neutral-10 px-2 py-1 rounded-md">
                        <span className="text-sm">Qty</span>
                        <span className="font-medium">{item.quantity}</span>
                      </div> */}

                      {/* Remove button */}
                      <button
                        onClick={() => handleRemove(item.productId)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="p-2 rounded-md bg-red-100 hover:bg-red-500 cursor-pointer text-red-500 hover:text-white transition"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout button */}
            <div className="flex flex-col sticky bottom-0 bg-white py-4 mt-6">
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
              <div className="flex items-center justify-between gap-3">
                <p className="text-neutral-20 font-bold text-lg">
                  Total: ₹{grandTotal.toFixed(2)}
                </p>
                <div className="w-1/2 sm:w-1/3">
                  <Button
                    label={loading ? "Please wait..." : "Checkout"}
                    className="w-full"
                    icon={ICONS.rightArrow}
                    onClick={handleCheckout}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
