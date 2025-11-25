/* eslint-disable react/no-unescaped-entities */
import DashboardOverviewCard from "@/components/Reusable/DashboardOverviewCard/DashboardOverviewCard";
import {FiShoppingCart, FiUsers, FiClock, FiCheckCircle } from "react-icons/fi";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const AdminDashboard = () => {
  // Mock data - in real app, this would come from API
  const dashboardData = {
    totalOrders: 1247,
    pendingOrders: 23,
    totalUsers: 845,
    totalRevenue: 1245000,
    deliveredOrders: 985,
    monthlyGrowth: 12.5,
  };

  const cardsData = [
    {
      title: "Total Orders",
      value: dashboardData.totalOrders.toLocaleString(),
      icon: <FiShoppingCart className="text-2xl" />,
      // trend: { value: 8.2, isPositive: true },
      backgroundColor: "bg-gradient-to-br from-white to-blue-50",
    },
    {
      title: "Pending Orders",
      value: dashboardData.pendingOrders,
      icon: <FiClock className="text-2xl" />,
      // trend: { value: -3.1, isPositive: false },
      backgroundColor: "bg-gradient-to-br from-white to-yellow-50",
      textColor: "text-yellow-700"
    },
    {
      title: "Registered Users",
      value: dashboardData.totalUsers.toLocaleString(),
      icon: <FiUsers className="text-2xl" />,
      // trend: { value: 15.7, isPositive: true },
      backgroundColor: "bg-gradient-to-br from-white to-green-50",
    },
    {
      title: "Total Revenue",
      value: `₹${(dashboardData.totalRevenue / 1000).toFixed(0)}K`,
      icon: <MdOutlineCurrencyRupee className="text-2xl" />,
      // trend: { value: 22.3, isPositive: true },
      backgroundColor: "bg-gradient-to-br from-white to-purple-50",
      textColor: "text-purple-700"
    },
    {
      title: "Delivered Orders",
      value: dashboardData.deliveredOrders.toLocaleString(),
      icon: <FiCheckCircle className="text-2xl" />,
      // trend: { value: 10.5, isPositive: true },
      backgroundColor: "bg-gradient-to-br from-white to-emerald-50",
      textColor: "text-emerald-700"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Overview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {cardsData.map((card, index) => (
          <DashboardOverviewCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            // trend={card.trend}
            backgroundColor={card.backgroundColor}
            textColor={card.textColor}
          />
        ))}
      </div>

      {/* Additional Content Placeholder */}
      {/* <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex flex-col items-center justify-center py-12">
          <FiTool className="text-[80px] text-success-05 mb-4 opacity-80" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Advanced Analytics</h2>
          <p className="text-gray-600 text-center max-w-md">
            Detailed analytics and reporting features are currently under development. 
            They will be available in the next update.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default AdminDashboard;