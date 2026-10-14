"use client";
import { useState, useMemo } from "react";

import { Search, ChevronDown, Calendar, RotateCcw } from "lucide-react";
import Pagination from "../../shared/Pagination";

const initialCustomerData = [
  {
    id: 1,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    complianceItem: "Driver License",
    status: "Verified",
    expiryDate: "12 Apr 2027",
  },
  {
    id: 2,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    complianceItem: "Medicare/Passport",
    status: "Verified",
    expiryDate: "12 Apr 2027",
  },
  {
    id: 3,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    complianceItem: "Last Payslip",
    status: "Verified",
    expiryDate: "12 Apr 2027",
  },
  {
    id: 4,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    complianceItem: "Second Last Payslip",
    status: "Expired",
    expiryDate: "12 Apr 2026",
  },
  {
    id: 5,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    complianceItem: "Driver License",
    status: "Verified",
    expiryDate: "12 Apr 2027",
  },
  {
    id: 6,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    complianceItem: "Last Payslip",
    status: "Provided",
    expiryDate: "N/A",
  },
  {
    id: 7,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    complianceItem: "Medicare/Passport",
    status: "Verified",
    expiryDate: "12 Apr 2027",
  },
  {
    id: 8,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    complianceItem: "Driver License",
    status: "Expired",
    expiryDate: "12 Apr 2026",
  },
  {
    id: 9,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    complianceItem: "Last Payslip",
    status: "Verified",
    expiryDate: "12 Apr 2027",
  },
  {
    id: 10,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    complianceItem: "Medicare/Passport",
    status: "Verified",
    expiryDate: "12 Apr 2027",
  },
];

export default function CustomerCompliance({ onSeeDetails }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");

  const statusOptions = [
    "All Status",
    "Verified",
    "Provided",
    "Expired",
    "Pending",
  ];

  const handleClearFilters = () => {
    setSearch("");
    setStatus("All Status");
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Verified":
        return "bg-[#52c41a] text-white";
      case "Expired":
        return "bg-[#f5222d] text-white";
      case "Provided":
        return "bg-[#4a6cf7] text-white";
      default:
        return "bg-gray-200 text-text-primary";
    }
  };

  const filteredData = useMemo(() => {
    return initialCustomerData.filter((item) => {
      const matchesSearch =
        item.customer.toLowerCase().includes(search.toLowerCase()) ||
        item.complianceItem.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All Status" ||
        item.status.toLowerCase() === status.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-xs">
      {/* Title & Subtitle */}
      <div>
        <h3 className="text-xl font-bold text-text-dark">Customer Compliance</h3>
        <p className="text-sm text-text-primary mt-1">
          Customer documents and compliance requirements.
        </p>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        {/* Search */}
        <div className="flex items-center gap-2 flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3">
          <Search className="w-4 h-4 text-text-primary shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer name..."
            className="w-full text-sm text-text-dark placeholder:text-text-primary outline-none"
          />
        </div>

        {/* All Status Dropdown */}
        <div className="relative">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-text-dark outline-none cursor-pointer w-full lg:w-44"
          >
            {statusOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-text-dark absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Date Filter Button */}
        <button
          type="button"
          className="flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-text-dark whitespace-nowrap"
        >
          <span>Date: Last 90 days</span>
          <Calendar className="w-4 h-4 text-text-dark" />
        </button>

        {/* Clear Filters */}
        <button
          type="button"
          onClick={handleClearFilters}
          className="flex items-center justify-center gap-2 bg-[#f0f1f3] hover:bg-gray-200 px-4 py-3 rounded-xl text-sm font-semibold text-text-dark whitespace-nowrap transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Clear Filters
        </button>
      </div>

      {/* Customer Compliance Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-text-primary text-sm font-medium">
              <th className="px-4 py-4 w-1/4">Customer</th>
              <th className="px-4 py-4 w-1/4">Compliance Item</th>
              <th className="px-4 py-4 text-center w-1/6">Status</th>
              <th className="px-4 py-4 text-center sm:text-left w-1/6">Expiry Date</th>
              <th className="px-4 py-4 text-right w-1/6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-100/80 hover:bg-gray-50/50 transition-colors"
              >
                {/* Customer */}
                <td className="px-4 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#e4e5fc] flex items-center justify-center text-primary font-bold text-sm">
                      {row.initials}
                    </div>
                    <span className="font-bold text-text-dark text-sm sm:text-base">
                      {row.customer}
                    </span>
                  </div>
                </td>

                {/* Compliance Item */}
                <td className="px-4 py-5 whitespace-nowrap font-medium text-text-dark text-sm sm:text-base">
                  {row.complianceItem}
                </td>

                {/* Status Badge */}
                <td className="px-4 py-5 whitespace-nowrap text-center">
                  <span
                    className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium min-w-[85px] ${getStatusBadge(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>

                {/* Expiry Date */}
                <td className="px-4 py-5 whitespace-nowrap text-center sm:text-left text-sm text-text-dark font-medium">
                  {row.expiryDate}
                </td>

                {/* Actions */}
                <td className="px-4 py-5 whitespace-nowrap text-right">
                  <button
                    type="button"
                    onClick={() => onSeeDetails?.(row)}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#4f6bf5] hover:bg-blue-600 text-white text-sm font-semibold transition-colors shadow-xs cursor-pointer"
                  >
                    See Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination text="Showing 1 to 10 of 248 compliance" />
    </div>
  );
}

