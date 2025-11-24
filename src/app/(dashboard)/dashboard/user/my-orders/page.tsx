/* eslint-disable @next/next/no-img-element */
"use client";
import { FaStar } from "react-icons/fa";
import { FiClock, FiCheckCircle, FiTruck, FiXCircle } from "react-icons/fi";

interface Order {
  id: string;
  image: string;
  name: string;
  category: string;
  color: string;
  quantity: number;
  price: number;
  orderDate: string;
  status: "Pending" | "Shipped" | "Delivered" | "Cancelled";
  estimatedDelivery?: string;
}

const MyOrders = () => {
  // Mock orders data
  const orders: Order[] = [
    {
      id: "ORD-001",
      image: "https://i.ibb.co/3NL4n4C/bed.png",
      name: "Wooden King Bed",
      category: "Bedroom",
      color: "Brown",
      quantity: 1,
      price: 25000,
      orderDate: "2025-11-20",
      status: "Delivered",
      estimatedDelivery: "2025-11-25",
    },
    {
      id: "ORD-002",
      image: "https://i.ibb.co/HPsxrnq/pan.png",
      name: "Non-Stick Frying Pan",
      category: "Kitchen",
      color: "Black",
      quantity: 2,
      price: 1800,
      orderDate: "2025-11-22",
      status: "Pending",
      estimatedDelivery: "2025-11-28",
    },
    {
      id: "ORD-003",
      image: "https://i.ibb.co/p0bnkfQ/lamp.png",
      name: "Bedside Lamp",
      category: "Bedroom Accessories",
      color: "Warm White",
      quantity: 1,
      price: 1200,
      orderDate: "2025-11-21",
      status: "Shipped",
      estimatedDelivery: "2025-11-26",
    },
    {
      id: "ORD-004",
      image: "https://i.ibb.co/0Q8LZzN/sofa.png",
      name: "Modern Leather Sofa",
      category: "Living Room",
      color: "Dark Gray",
      quantity: 1,
      price: 45000,
      orderDate: "2025-11-18",
      status: "Cancelled",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <FiCheckCircle className="text-green-500" />;
      case "Shipped":
        return <FiTruck className="text-blue-500" />;
      case "Pending":
        return <FiClock className="text-yellow-500" />;
      case "Cancelled":
        return <FiXCircle className="text-red-500" />;
      default:
        return <FiClock className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "Shipped":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "Delivered":
        return "Delivered on";
      case "Shipped":
        return "Estimated delivery";
      case "Pending":
        return "Expected delivery";
      case "Cancelled":
        return "Cancelled on";
      default:
        return "Expected";
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
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            {/* Order Header */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(order.status)}
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 font-mono">
                    {order.id}
                  </span>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="text-sm text-gray-500">
                    Ordered on{" "}
                    {new Date(order.orderDate).toLocaleDateString("en-IN", {
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
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                {/* Product Info */}
                <div className="flex space-x-4 flex-1">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-20 h-20 rounded-lg object-cover border border-gray-200 shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {order.name}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Category:</span>
                        <span>{order.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Color:</span>
                        <span className="flex items-center">
                          <span
                            className="w-3 h-3 rounded-full mr-2 border border-gray-300"
                            style={{
                              backgroundColor:
                                order.color.toLowerCase() === "brown"
                                  ? "#8B4513"
                                  : order.color.toLowerCase() === "black"
                                  ? "#000000"
                                  : order.color.toLowerCase() === "warm white"
                                  ? "#F5F5DC"
                                  : order.color.toLowerCase() === "dark gray"
                                  ? "#2F4F4F"
                                  : "#6B7280",
                            }}
                          />
                          {order.color}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Quantity:</span>
                        <span>{order.quantity}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Price:</span>
                        <span className="font-semibold text-gray-900">
                          ₹{order.price.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary and Actions */}
                <div className="mt-4 lg:mt-0 lg:ml-6 lg:text-right">
                  <div className="space-y-3">
                    {/* Total Amount */}
                    <div className="text-lg font-bold text-gray-900">
                      Total: ₹
                      {(order.price * order.quantity).toLocaleString("en-IN")}
                    </div>

                    {/* Delivery Info */}
                    {order.estimatedDelivery && (
                      <div className="text-sm text-gray-600">
                        <div>{getStatusText(order.status)}</div>
                        <div className="font-medium">
                          {new Date(order.estimatedDelivery).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2 pt-2">
                      {order.status === "Delivered" && (
                        <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                          <FaStar className="w-4 h-4" />
                          <span>Rate Product</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {orders.length === 0 && (
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
