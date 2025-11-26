/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetMyOrdersQuery } from "@/redux/features/Order/orderApi";
import { FaBox, FaStar } from "react-icons/fa";
import { FiClock, FiCheckCircle, FiTruck, FiXCircle } from "react-icons/fi";
export interface TProductOrderItem {
  _id: string;
  productId: any;
  name: string;
  quantity: number;
  color: string;
  size: string;
  price: number;
}

export interface TOrder {
  _id: string;
  orderId: string;
  userId: string;
  orderedItems: TProductOrderItem[];
  totalAmount: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  razorpayOrderId?: string;
  createdAt: string;
  updatedAt: string;
}

const MyOrders = () => {
  const { data: myOrders } = useGetMyOrdersQuery({});
  console.log(myOrders);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <FiCheckCircle className="text-green-500" />;
      case "shipped":
        return <FiTruck className="text-blue-500" />;
      case "pending":
        return <FiClock className="text-yellow-500" />;
      case "cancelled":
        return <FiXCircle className="text-red-500" />;
      default:
        return <FiClock className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "shipped":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
        <p className="text-gray-600 mt-2">
          Track and manage your recent purchases
        </p>
      </div>

      {/* Orders Grid */}
      <div className="space-y-6">
        {myOrders?.data?.orders?.map((order: TOrder) => (
          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            {/* Order Header */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(order.status)}
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border capitalize ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 font-mono">
                    {order.orderId}
                  </span>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="text-sm text-gray-500">
                    Ordered on{" "}
                    {new Date(order.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Content */}
            <div className="p-6">
              {order?.orderedItems?.map((item, index) => (
                <div
                  key={item._id}
                  className={`flex flex-col lg:flex-row lg:items-start lg:justify-between ${
                    index > 0 ? "border-t border-gray-100 pt-6 mt-6" : ""
                  }`}
                >
                  {/* Product Info */}
                  <div className="flex space-x-4 flex-1">
                    <div className="w-20 h-20 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                      <FaBox className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Product ID:</span>
                          <span>{item.productId?.productId}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Color:</span>
                          <span className="flex items-center">
                            {item.color}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Quantity:</span>
                          <span>{item.quantity}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Price:</span>
                          <span className="font-semibold text-gray-900">
                            ₹{item.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">Size:</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Summary and Actions - Only on last item */}
                  {index === order.orderedItems.length - 1 && (
                    <div className="mt-4 lg:mt-0 lg:ml-6 lg:text-right">
                      <div className="space-y-3">
                        {/* Total Amount */}
                        <div className="text-lg font-bold text-gray-900">
                          Total: ₹{order.totalAmount.toLocaleString("en-IN")}
                        </div>

                        {/* Delivery Info */}
                        <div className="text-sm text-gray-600">
                          <div>
                            Last updated:{" "}
                            {new Date(order.updatedAt).toLocaleDateString(
                              "en-IN",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-2 pt-2">
                          {order.status === "delivered" && (
                            <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                              <FaStar className="w-4 h-4" />
                              <span>Rate Product</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {myOrders?.data?.orders?.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiClock className="text-4xl text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No orders yet
          </h3>
          <p className="text-gray-600 mb-6">
            Start shopping to see your orders here
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
