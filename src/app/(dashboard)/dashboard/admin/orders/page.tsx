/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
/* eslint-disable @next/next/no-img-element */
import Table from "@/components/Reusable/Table/Table";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const orders = [
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
    customer: {
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      phone: "+91 9876543210",
      address: "Andheri West, Mumbai, Maharashtra",
    },
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
    customer: {
      name: "Priya Verma",
      email: "priya.verma@example.com",
      phone: "+91 9123456780",
      address: "Salt Lake, Kolkata, West Bengal",
    },
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
    customer: {
      name: "Rahul Sutradhar",
      email: "rahul@example.com",
      phone: "+91 9988776655",
      address: "Banashankari, Bengaluru, Karnataka",
    },
  },
];

// Unique categories
const categories = ["All", "Bedroom", "Kitchen", "Bedroom Accessories"];

interface OrderModalProps {
  order: any;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange: (orderId: string, newStatus: string) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({
  order,
  isOpen,
  onClose,
  onStatusChange,
}) => {
  if (!order) return null;

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-xl shadow-2xl max-w-xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Order Details
                </h2>
                <p className="text-sm text-gray-500 mt-1">{order.id}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Product Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700 border-b border-neutral-05/30 pb-2">
                  Product Information
                </h3>
                <div className="flex items-start space-x-4">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-16 h-16 rounded-lg object-cover border"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{order.name}</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-sm">
                      <div>
                        <span className="text-gray-500">Category:</span>
                        <p className="text-gray-700">{order.category}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Color:</span>
                        <p className="text-gray-700">{order.color}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Quantity:</span>
                        <p className="text-gray-700">{order.quantity}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Price:</span>
                        <p className="text-gray-700 font-medium">
                          ₹{order.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700 border-b border-neutral-05/30 pb-2">
                  Customer Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Name:</span>
                    <span className="text-gray-700 font-medium">
                      {order.customer.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email:</span>
                    <span className="text-gray-700">
                      {order.customer.email}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Phone:</span>
                    <span className="text-gray-700">
                      {order.customer.phone}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">Address:</span>
                    <p className="text-gray-700 text-right text-sm">
                      {order.customer.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700 border-b border-neutral-05/30 pb-2">
                  Order Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Order Date:</span>
                    <span className="text-gray-700">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Status:</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Amount:</span>
                    <span className="text-gray-700 font-bold text-lg">
                      ₹{(order.price * order.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Update */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700 border-b border-neutral-05/30 pb-2">
                  Update Status
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Pending", "Shipped", "Delivered", "Cancelled"].map(
                    (statusOption) => (
                      <button
                        key={statusOption}
                        onClick={() => onStatusChange(order.id, statusOption)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                          order.status === statusOption
                            ? getStatusColor(statusOption) +
                              " ring-2 ring-offset-2 ring-opacity-50"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {statusOption}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Orders = () => {
  const [keyword, setKeyword] = useState("");
  const [limit, setLimit] = useState(10);
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter
  const filteredOrders = orders.filter((o) => {
    return (
      o.name.toLowerCase().includes(keyword.toLowerCase()) &&
      (category === "All" ? true : o.category === category) &&
      (status ? o.status === status : true)
    );
  });

  const handleViewOrder = (row: any) => {
    const order = orders.find((o) => o.id === row.id);
    if (order) {
      setSelectedOrder(order);
      setIsModalOpen(true);
    }
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    // Update the order status in your state/API
    console.log(`Updating order ${orderId} to ${newStatus}`);
    // For now, we'll just update the local state for demo
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    // You would typically update your state here
    console.log("Updated orders:", updatedOrders);

    // Update the selected order in modal
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="p-5">
      <Table
        heading="Orders"
        subHeading="Manage all customer orders"
        searchPlaceholder="Search orders..."
        searchValue={keyword}
        onSearch={setKeyword}
        limit={limit}
        onLimitChange={setLimit}
        categories={categories}
        selectedCategory={category}
        onCategoryChange={setCategory}
        tableHeaders={[
          "Order ID",
          "Image",
          "Product",
          "Customer",
          "Qty",
          "Price",
          "Order Date",
          "Status",
        ]}
        tableData={filteredOrders.map((o) => ({
          id: o.id,
          image: (
            <img
              src={o.image}
              alt={o.name}
              className="w-12 h-12 rounded-md object-cover border"
            />
          ),
          product: (
            <div>
              <p className="font-medium">{o.name}</p>
              <p className="text-xs text-gray-500">{o.category}</p>
              <p className="text-xs text-gray-500">Color: {o.color}</p>
            </div>
          ),
          customer: (
            <div>
              <p className="font-medium">{o.customer.name}</p>
              <p className="text-xs text-gray-500">{o.customer.email}</p>
              <p className="text-xs text-gray-500">{o.customer.phone}</p>
              <p className="text-xs text-gray-500">{o.customer.address}</p>
            </div>
          ),
          quantity: o.quantity,
          price: `₹ ${o.price.toLocaleString()}`,
          orderDate: o.orderDate,
          status: (
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                o.status === "Delivered"
                  ? "bg-green-100 text-green-800"
                  : o.status === "Shipped"
                  ? "bg-blue-100 text-blue-800"
                  : o.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {o.status}
            </span>
          ),
        }))}
        actions={[
          { label: "View", onClick: handleViewOrder },
          { label: "Delete", onClick: (row) => console.log("Delete", row) },
        ]}
      >
        {/* STATUS FILTER DROPDOWN */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 
                  focus:ring-blue-500 focus:border-blue-500 transition-colors"
        >
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </Table>

      {/* Order Modal */}
      <OrderModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={closeModal}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default Orders;
