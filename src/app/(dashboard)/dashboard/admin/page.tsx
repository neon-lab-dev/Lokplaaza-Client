"use client";
/* eslint-disable react/no-unescaped-entities */
import DashboardOverviewCard from "@/components/Reusable/DashboardOverviewCard/DashboardOverviewCard";
import { useGetAdminStatsQuery } from "@/redux/features/Admin/adminApi";
import {
  FiShoppingCart,
  FiClock,
  FiUsers,
  FiGrid,
  FiBox,
  FiMessageSquare,
  FiImage,
  FiSliders,
} from "react-icons/fi";

const AdminDashboard = () => {
  const { data } = useGetAdminStatsQuery({});
  console.log(data);
  const stats = data?.data ?? {};

  const dashboardData = {
    totalOrders: stats.totalOrders || 0,
    pendingOrders: stats.pendingOrders || 0,
    totalUsers: stats.totalUsers || 0,
    totalCategories: stats.totalCategories || 0,
    totalProducts: stats.totalProducts || 0,
    totalConsultations: stats.totalConsultations || 0,
    totalInspirationRequests: stats.totalInspirationRequests || 0,
    totalCustomizations: stats.totalCustomizations || 0,
  };

  const cardsData = [
    {
      title: "Total Orders",
      value: dashboardData.totalOrders.toLocaleString(),
      icon: <FiShoppingCart className="text-2xl" />,
      backgroundColor: "bg-gradient-to-br from-white to-blue-50",
    },
    {
      title: "Pending Orders",
      value: dashboardData.pendingOrders.toLocaleString(),
      icon: <FiClock className="text-2xl" />,
      backgroundColor: "bg-gradient-to-br from-white to-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      title: "Registered Users",
      value: dashboardData.totalUsers.toLocaleString(),
      icon: <FiUsers className="text-2xl" />,
      backgroundColor: "bg-gradient-to-br from-white to-green-50",
    },
    {
      title: "Total Categories",
      value: dashboardData.totalCategories.toLocaleString(),
      icon: <FiGrid className="text-2xl" />,
      backgroundColor: "bg-gradient-to-br from-white to-purple-50",
    },
    {
      title: "Total Products",
      value: dashboardData.totalProducts.toLocaleString(),
      icon: <FiBox className="text-2xl" />,
      backgroundColor: "bg-gradient-to-br from-white to-indigo-50",
    },
    {
      title: "Consultations",
      value: dashboardData.totalConsultations.toLocaleString(),
      icon: <FiMessageSquare className="text-2xl" />,
      backgroundColor: "bg-gradient-to-br from-white to-pink-50",
    },
    {
      title: "Inspiration Requests",
      value: dashboardData.totalInspirationRequests.toLocaleString(),
      icon: <FiImage className="text-2xl" />,
      backgroundColor: "bg-gradient-to-br from-white to-orange-50",
    },
    {
      title: "Customization Requests",
      value: dashboardData.totalCustomizations.toLocaleString(),
      icon: <FiSliders className="text-2xl" />,
      backgroundColor: "bg-gradient-to-br from-white to-teal-50",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's what's happening with your store today.
        </p>
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
