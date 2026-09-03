"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, MoreHorizontal } from "lucide-react";

export default function RecentScenarios() {
  const scenarios = [
    {
      id: "SCN 1024",
      customer: "Md. Jaequb Rahman",
      loanType: "Home Loan",
      amount: "620,000$",
      status: "In Progress",
    },
    {
      id: "SCN 1024",
      customer: "Md. Jaequb Rahman",
      loanType: "Home Loan",
      amount: "620,000$",
      status: "Submitted",
    },
    {
      id: "SCN 1024",
      customer: "Md. Jaequb Rahman",
      loanType: "Home Loan",
      amount: "620,000$",
      status: "Conditional",
    },
    {
      id: "SCN 1024",
      customer: "Md. Jaequb Rahman",
      loanType: "Home Loan",
      amount: "620,000$",
      status: "Approved",
    },
    {
      id: "SCN 1024",
      customer: "Md. Jaequb Rahman",
      loanType: "Home Loan",
      amount: "620,000$",
      status: "In Progress",
    },
    {
      id: "SCN 1024",
      customer: "Md. Jaequb Rahman",
      loanType: "Home Loan",
      amount: "620,000$",
      status: "Rejected",
    },
  ];

  const statusStyles = {
    "In Progress": "bg-[#8b8cf8]",
    Submitted: "bg-[#4a6cf7]",
    Conditional: "bg-[#f5aa5c]",
    Approved: "bg-[#65cc70]",
    Rejected: "bg-[#f04658]",
  };

  const [checked, setChecked] = useState(() => new Set());

  const toggleRow = (index) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };

  const allChecked = checked.size === scenarios.length;
  const toggleAll = () => {
    setChecked(allChecked ? new Set() : new Set(scenarios.map((_, i) => i)));
  };

  return (
    <div className="bg-white p-7 rounded-2xl shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-xl font-bold text-text-dark">Recent Scenarios</h2>
        <Link
          href="#"
          className="flex items-center gap-2 text-primary font-semibold hover:underline ml-auto"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f8f9fa] text-text-primary text-sm font-medium">
              <th className="w-12 px-6 py-4">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={toggleAll}
                  className="w-5 h-5 rounded accent-text-dark cursor-pointer"
                />
              </th>
              <th className="px-2 py-4">Scenario Id</th>
              <th className="px-2 py-4">Customer</th>
              <th className="px-2 py-4">Loan Type</th>
              <th className="px-2 py-4">Amount</th>
              <th className="px-2 py-4">Status</th>
              <th className="w-12 px-2 py-4" />
            </tr>
          </thead>
          <tbody>
            {scenarios.map((row, index) => {
              const isChecked = checked.has(index);
              return (
                <tr
                  key={index}
                  className={`border-t border-gray-100 ${isChecked ? "bg-[#f8f9fa]" : "bg-white"}`}
                >
                  <td className="px-6 py-5">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleRow(index)}
                      className="w-5 h-5 rounded accent-text-dark cursor-pointer"
                    />
                  </td>
                  <td className="px-2 py-5 font-bold text-text-dark">
                    {row.id}
                  </td>
                  <td className="px-2 py-5 font-bold text-text-dark">
                    {row.customer}
                  </td>
                  <td className="px-2 py-5 font-bold text-text-dark">
                    {row.loanType}
                  </td>
                  <td className="px-2 py-5 font-bold text-text-dark">
                    {row.amount}
                  </td>
                  <td className="px-2 py-5">
                    <span
                      className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold ${statusStyles[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-2 py-5">
                    <button className="text-text-primary hover:text-text-dark">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
