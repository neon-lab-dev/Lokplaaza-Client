import { ICONS } from "@/assets";
import Loader from "@/components/Reusable/Loader/Loader";
import { clearCart } from "@/redux/features/Cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/Order/orderApi";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [counter, setCounter] = useState<number | null>(null);

  const [createOrder, { isLoading: isCreatingOrder }] =
    useCreateOrderMutation();

  // trigger redirect countdown once counter starts
  useEffect(() => {
    if (counter === null) return;

    const interval = setInterval(() => {
      setCounter((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    const timeout = setTimeout(() => {
      router.push("/dashboard/user/my-orders");
    }, counter * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [counter, router]);

  const hasRun = useRef(false);

  useEffect(() => {
    if (!orderId || hasRun.current) return;
    hasRun.current = true;

    const handlePayment = async () => {
      try {
        const response = await createOrder(cartItems).unwrap();
        if (response?.success) {
          setCounter(10);
          dispatch(clearCart());
        }
      } catch (err) {
        console.error("Payment finalization failed:", err);
      }
    };

    handlePayment();
  }, [orderId, dispatch, createOrder, cartItems]);

  return (
    <div className="bg-surface-30 flex items-center justify-center min-h-screen">
      {isCreatingOrder ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center">
          <div className="size-11 rounded-full bg-[#16A34A] flex items-center justify-center">
            <Image src={ICONS.tickMark} alt="Success" className="size-6" />
          </div>
          <h1 className="text-neutral-10 text-[28px] font-medium leading-8 mt-4 text-center">
            Payment Successful!
          </h1>
          <p className="text-neutral-10 text-[15px] font-medium leading-4.5 mt-8 text-center">
            Your product order has been successfully placed. You can track your
            order status from the dashboard!
          </p>

          {counter !== null && (
            <p className="text-neutral-10 text-[15px] leading-4.5 mt-4 text-center">
              You will be redirected to the dashboard in {counter} second
              {counter !== 1 && "s"}...
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
