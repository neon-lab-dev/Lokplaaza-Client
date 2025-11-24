interface DashboardOverviewCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  backgroundColor?: string;
  textColor?: string;
}

const DashboardOverviewCard: React.FC<DashboardOverviewCardProps> = ({
  title,
  value,
  icon,
  // trend,
  backgroundColor = "bg-white",
  textColor = "text-gray-900",
}) => {
  return (
    <div
      className={`${backgroundColor} rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className={`text-3xl font-bold ${textColor} mb-2`}>{value}</p>

          {/* {trend && (
            <div className="flex items-center">
              <span className={`text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                <FiTrendingUp className={`mr-1 ${!trend.isPositive ? 'transform rotate-180' : ''}`} />
                {trend.isPositive ? '+' : ''}{trend.value}%
              </span>
              <span className="text-xs text-gray-500 ml-2">from last month</span>
            </div>
          )} */}
        </div>

        <div className="shrink-0">
          <div className="p-3 rounded-xl bg-linear-to-br from-blue-50 to-indigo-100 text-indigo-600">
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverviewCard;
