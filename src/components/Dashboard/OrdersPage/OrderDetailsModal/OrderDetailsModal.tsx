/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "@/components/Reusable/Loader/Loader";
import {
  useGetSingleProductOrderByIdQuery,
  useUpdateOrderStatusMutation,
} from "@/redux/features/Order/orderApi";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

interface OrderModalProps {
  orderId: any;
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailsModal: React.FC<OrderModalProps> = ({
  orderId,
  isOpen,
  onClose,
}) => {
  const { data, isLoading } = useGetSingleProductOrderByIdQuery(orderId);
  const order = data?.data || {};
  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  const handleUpdateStatus = async (status: string) => {
    const payload = {
      orderId: order?._id,
      status,
    };
    toast.promise(updateOrderStatus(payload).unwrap(), {
      loading: "Please wait...",
      success: "Order status updated successfully.",
      error: (err: any) => err?.data?.message || "Something went wrong!",
    });
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
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center bg-white/40 rounded-xl z-20">
                <Loader />
              </div>
            ) : (
              <>
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
                    <div>
                      {order?.orderedItems?.map((item: any, index: number) => (
                        <div key={index} className="flex gap-4">
                          ({index + 1})
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-800">
                              {item?.name}
                            </h4>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-sm">
                              <div>
                                <span className="text-gray-500">Category:</span>
                                <p className="text-gray-700 font-medium">
                                  {item?.productId?.category}
                                </p>
                              </div>
                              <div>
                                <span className="text-gray-500">Color:</span>
                                <p className="text-gray-700 font-medium">
                                  {item?.color}
                                </p>
                              </div>
                              <div>
                                <span className="text-gray-500">Quantity:</span>
                                <p className="text-gray-700 font-medium">
                                  {item?.quantity}
                                </p>
                              </div>
                              <div>
                                <span className="text-gray-500">Price:</span>
                                <p className="text-gray-700 font-medium">
                                  ₹{item?.price || 0}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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
                          {order?.userId?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Email:</span>
                        <span className="text-gray-700">
                          {order?.userId?.email}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Phone:</span>
                        <span className="text-gray-700">
                          {order?.userId?.phoneNumber}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 block mb-1">
                          Address:
                        </span>
                        <p className="text-gray-700 text-right text-sm">
                          {order?.userId?.address}
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
                          {new Date(order?.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Status:</span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border capitalize ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Total Amount:</span>
                        <span className="text-gray-700 font-bold text-lg">
                          ₹{order.totalAmount}
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
                      {["pending", "shipped", "delivered", "cancelled"].map(
                        (statusOption) => (
                          <button
                            key={statusOption}
                            onClick={() => handleUpdateStatus(statusOption)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer capitalize ${
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
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderDetailsModal;
