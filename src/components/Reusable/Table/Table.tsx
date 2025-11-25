/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

type ActionItem = {
  label: string;
  onClick: (row: any) => void;
};

type TableProps = {
  heading: string;
  subHeading?: string;

  searchPlaceholder?: string;
  searchValue?: string;
  onSearch?: (value: string) => void;

  limit?: number;
  onLimitChange?: (value: number) => void;
  children?: ReactNode;

  categories?: string[]; 
  selectedCategory?: string;
  onCategoryChange?: (value: string) => void;

  tableHeaders: string[];
  tableData: any[];

  isLoading?: boolean;
  loader?: ReactNode;

  actions?: ActionItem[];
};

const Table = ({
  heading,
  subHeading,

  searchPlaceholder = "Search...",
  searchValue = "",
  onSearch,

  limit = 10,
  onLimitChange,
  children,

  categories,
  selectedCategory,
  onCategoryChange,

  tableHeaders,
  tableData,

  isLoading = false,
  loader,

  actions,
}: TableProps) => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{heading}</h1>
        {subHeading && <p className="text-gray-600 mt-2">{subHeading}</p>}
      </div>

      {/* Search + Controls */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">

          {/* Search Input */}
          <div className="flex-1 w-full sm:max-w-md">
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearch && onSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Limit + Category */}
          <div className="flex items-center gap-4">

            {/* Category Dropdown */}
            {categories && onCategoryChange && (
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 
                  focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            )}

            {/* Limit Dropdown */}
            {onLimitChange && (
              <select
                value={limit}
                onChange={(e) => onLimitChange(Number(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 
                  focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {[5, 10, 20, 50].map((num) => (
                  <option key={num} value={num}>
                    {num} per page
                  </option>
                ))}
              </select>
            )}

            {children}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">

            <thead className="bg-gray-50">
              <tr>
                {tableHeaders.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}

                {actions && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                )}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan={tableHeaders.length + 1} className="py-12 text-center">
                    {loader ? loader : <div className="text-gray-500">Loading...</div>}
                  </td>
                </tr>
              ) : tableData.length === 0 ? (
                <tr>
                  <td colSpan={tableHeaders.length + 1} className="py-8 text-center text-gray-500">
                    No data found
                  </td>
                </tr>
              ) : (
                tableData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    {Object.values(row).map((value, i) => (
                      <td
                        key={i}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
                      >
                        {value as ReactNode}
                      </td>
                    ))}

                    {/* Action Menu */}
                    {actions && (
                      <td className="px-6 py-4 relative whitespace-nowrap">
                        <button
                          className="p-2 rounded hover:bg-gray-100 cursor-pointer"
                          onClick={() => toggleMenu(index)}
                        >
                          <FiMoreVertical size={18} />
                        </button>

                        {openMenuIndex === index && (
                          <div className="absolute right-6 mt-2 bg-white border border-neutral-05/20 shadow-xl rounded-lg py-2 w-40 z-20 flex flex-col">
                            {actions.map((action, idx) => (
                              <button
                                key={idx}
                                onClick={() => action.onClick(row)}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                              >
                                {action.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
