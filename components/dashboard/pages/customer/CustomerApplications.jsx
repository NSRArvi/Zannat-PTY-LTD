"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CustomerApplications() {
  const [filter, setFilter] = useState("All Applications");

  const applications = [
    {
      id: "APP 1024",
      loanType: "Home Loan",
      amount: "620,000$",
      broker: "Noor Washe",
      brokerInitials: "NW",
      status: "In Progress",
      statusType: "progress",
      lastUpdate: "2 hours ago",
    },
    {
      id: "APP 1025",
      loanType: "Home Loan",
      amount: "620,000$",
      broker: "3 Proposals",
      isProposal: true,
      status: "Choosing Broker",
      statusType: "choosing",
      lastUpdate: "2 hours ago",
    },
    {
      id: "APP 1024",
      loanType: "Home Loan",
      amount: "620,000$",
      broker: "Noor Washe",
      brokerInitials: "NW",
      status: "Approved",
      statusType: "approved",
      lastUpdate: "2 hours ago",
    },
    {
      id: "APP 1024",
      loanType: "Home Loan",
      amount: "620,000$",
      broker: "Noor Washe",
      brokerInitials: "NW",
      status: "Past",
      statusType: "past",
      lastUpdate: "2 months ago",
    },
    {
      id: "APP 1024",
      loanType: "Home Loan",
      amount: "620,000$",
      broker: "Noor Washe",
      brokerInitials: "NW",
      status: "Past",
      statusType: "past",
      lastUpdate: "2 months ago",
    },
  ];

  const getStatusBadge = (status, type) => {
    switch (type) {
      case "progress":
        return "bg-[#7b7df5] text-white";
      case "choosing":
        return "bg-[#f5222d] text-white";
      case "approved":
        return "bg-[#52c41a] text-white";
      case "past":
        return "bg-gray-200 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const filteredApplications = applications.filter((app) => {
    if (filter === "All Applications") return true;
    if (filter === "Active") return app.statusType !== "past";
    if (filter === "Past") return app.statusType === "past";
    return true;
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-xs h-full flex flex-col">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-text-dark">Applications</h2>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 bg-[#f4f5f7] p-1 rounded-xl">
            {["All Applications", "Active", "Past"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab
                    ? "bg-[#4f6bf5] text-white shadow-xs"
                    : "text-text-primary hover:text-text-dark"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <Link
          href="/dashboard/applications?role=customer"
          className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-text-primary text-xs font-medium uppercase tracking-wider">
              <th className="px-3 py-3">Application</th>
              <th className="px-3 py-3">Loan Type</th>
              <th className="px-3 py-3">Amount</th>
              <th className="px-3 py-3">Broker</th>
              <th className="px-3 py-3 text-center">Status</th>
              <th className="px-3 py-3">Last Update</th>
              <th className="px-3 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-100/80 hover:bg-gray-50/50 transition-colors"
              >
                {/* ID */}
                <td className="px-3 py-4 whitespace-nowrap font-bold text-text-dark text-sm">
                  {row.id}
                </td>

                {/* Loan Type */}
                <td className="px-3 py-4 whitespace-nowrap text-text-primary text-sm font-medium">
                  {row.loanType}
                </td>

                {/* Amount */}
                <td className="px-3 py-4 whitespace-nowrap font-bold text-text-dark text-sm">
                  {row.amount}
                </td>

                {/* Broker */}
                <td className="px-3 py-4 whitespace-nowrap">
                  {row.isProposal ? (
                    <span className="text-[#f5222d] font-semibold text-sm">
                      {row.broker}
                    </span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#e4e5fc] flex items-center justify-center text-primary text-xs font-bold">
                        {row.brokerInitials}
                      </div>
                      <span className="text-sm font-semibold text-text-dark">
                        {row.broker}
                      </span>
                    </div>
                  )}
                </td>

                {/* Status */}
                <td className="px-3 py-4 whitespace-nowrap text-center">
                  <span
                    className={`inline-flex items-center justify-center px-3.5 py-1 rounded-full text-xs font-semibold ${getStatusBadge(
                      row.status,
                      row.statusType
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>

                {/* Last Update */}
                <td className="px-3 py-4 whitespace-nowrap text-sm text-text-primary font-medium">
                  {row.lastUpdate}
                </td>

                {/* Action */}
                <td className="px-3 py-4 whitespace-nowrap text-right">
                  <Link
                    href="#"
                    className="text-primary hover:underline font-semibold text-sm"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

