"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Table from "@/components/Reusable/Table/Table";
import { useState } from "react";
import { useGetAllOrdersQuery } from "@/redux/features/Order/orderApi";
import OrderDetailsModal from "@/components/Dashboard/OrdersPage/OrderDetailsModal/OrderDetailsModal";



const Orders = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [status, setStatus] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isFetching } = useGetAllOrdersQuery({
    keyword,
    page,
    status,
    limit,
  });

  const orders = data?.data?.orders || [];

  const handleViewOrder = (row: any) => {
      setSelectedOrderId(row?.id);
      setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrderId(null);
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
        isLoading={isLoading || isFetching}
        tableHeaders={[
          "Order ID",
          "Product",
          "Customer",
          "Qty",
          "Price",
          "Order Date",
          "Status",
        ]}
        tableData={orders.flatMap((o: any) =>
          o.orderedItems.map((item: any) => ({
            id: o._id,

            product: (
              <div>
                <p className="font-medium">{item.productId?.name}</p>
                <p className="text-xs text-gray-500">
                  {item.productId?.category}
                </p>
                <p className="text-xs text-gray-500">Color: {item.color}</p>
              </div>
            ),

            customer: (
              <div>
                <p className="font-medium">{o.userId?.name}</p>
                <p className="text-xs text-gray-500">{o.userId?.email}</p>
                <p className="text-xs text-gray-500">{o.userId?.phoneNumber}</p>
              </div>
            ),

            quantity: item.quantity,

            price: `₹ ${item.price.toLocaleString()}`,

            orderDate: new Date(o.createdAt).toLocaleDateString(),

            status: (
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  o.status === "delivered"
                    ? "bg-green-100 text-green-800"
                    : o.status === "shipped"
                    ? "bg-blue-100 text-blue-800"
                    : o.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {o.status}
              </span>
            ),
          }))
        )}
        actions={[
          { label: "View", onClick: (row) => handleViewOrder(row)},
        ]}
      >
        {/* STATUS FILTER DROPDOWN */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2
                 focus:ring-2 focus:ring-blue-500
                 focus:border-blue-500 transition-colors">
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </Table>

      {/* Order Modal */}
      <OrderDetailsModal
        orderId={selectedOrderId}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Orders;
