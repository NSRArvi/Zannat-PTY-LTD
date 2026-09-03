"use client";
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

export default function ScenariosTable() {
  const scenarios = [
    {
      id: "SCN 1024",
      customer: "Md. Jaequb Rahman",
      email: "jaequb09@gmail.com",
      loanType: "Home Loan",
      amount: "620,000$",
      lender: "ANZ Bank",
      lenderBg: "bg-[#004165]",
      lenderInitials: "ANZ",
      status: "In Progress",
      updated: "Today, 10:42 AM",
      by: "Noor Washe",
    },
    {
      id: "SCN 1023",
      customer: "Arifur Sheikh",
      email: "arifur@gmail.com",
      loanType: "Refinance",
      amount: "480,000$",
      lender: "NAB",
      lenderBg: "bg-black",
      lenderInitials: "N",
      status: "Submitted",
      updated: "Today, 10:42 AM",
      by: "Noor Washe",
    },
    {
      id: "SCN 1022",
      customer: "Emma Watson",
      email: "emma@gmail.com",
      loanType: "Home Loan",
      amount: "750,000$",
      lender: "ANZ Bank",
      lenderBg: "bg-white border border-gray-200",
      lenderInitials: "W",
      lenderText: "text-[#da1710]",
      status: "Approved",
      updated: "Today, 10:42 AM",
      by: "Noor Washe",
    },
    {
      id: "SCN 1024",
      customer: "Md. Jaequb Rahman",
      email: "jaequb09@gmail.com",
      loanType: "Home Loan",
      amount: "620,000$",
      lender: "ANZ Bank",
      lenderBg: "bg-[#004165]",
      lenderInitials: "ANZ",
      status: "Conditional",
      updated: "Today, 10:42 AM",
      by: "Noor Washe",
    },
    {
      id: "SCN 1023",
      customer: "Arifur Sheikh",
      email: "arifur@gmail.com",
      loanType: "Refinance",
      amount: "480,000$",
      lender: "NAB",
      lenderBg: "bg-black",
      lenderInitials: "N",
      status: "Rejected",
      updated: "Today, 10:42 AM",
      by: "Noor Washe",
    },
    {
      id: "SCN 1022",
      customer: "Emma Watson",
      email: "emma@gmail.com",
      loanType: "Home Loan",
      amount: "750,000$",
      lender: "ANZ Bank",
      lenderBg: "bg-white border border-gray-200",
      lenderInitials: "W",
      lenderText: "text-[#da1710]",
      status: "In Progress",
      updated: "Today, 10:42 AM",
      by: "Noor Washe",
    },
    {
      id: "SCN 1024",
      customer: "Md. Jaequb Rahman",
      email: "jaequb09@gmail.com",
      loanType: "Home Loan",
      amount: "620,000$",
      lender: "ANZ Bank",
      lenderBg: "bg-[#004165]",
      lenderInitials: "ANZ",
      status: "Draft",
      updated: "Today, 10:42 AM",
      by: "Noor Washe",
    },
    {
      id: "SCN 1023",
      customer: "Arifur Sheikh",
      email: "arifur@gmail.com",
      loanType: "Refinance",
      amount: "480,000$",
      lender: "NAB",
      lenderBg: "bg-black",
      lenderInitials: "N",
      status: "Submitted",
      updated: "Today, 10:42 AM",
      by: "Noor Washe",
    },
    {
      id: "SCN 1022",
      customer: "Emma Watson",
      email: "emma@gmail.com",
      loanType: "Home Loan",
      amount: "750,000$",
      lender: "ANZ Bank",
      lenderBg: "bg-white border border-gray-200",
      lenderInitials: "W",
      lenderText: "text-[#da1710]",
      status: "Approved",
      updated: "Today, 10:42 AM",
      by: "Noor Washe",
    },
    {
      id: "SCN 1024",
      customer: "Md. Jaequb Rahman",
      email: "jaequb09@gmail.com",
      loanType: "Home Loan",
      amount: "620,000$",
      lender: "ANZ Bank",
      lenderBg: "bg-[#004165]",
      lenderInitials: "ANZ",
      status: "Rejected",
      updated: "Today, 10:42 AM",
      by: "Noor Washe",
    },
  ];

  const statusStyles = {
    "In Progress": "bg-[#8b8cf8]",
    Submitted: "bg-[#4a6cf7]",
    Conditional: "bg-[#f5aa5c]",
    Approved: "bg-[#65cc70]",
    Rejected: "bg-[#f04658]",
    Draft: "bg-gray-200 text-text-primary",
  };

  const initials = (name) =>
    name
      .split(" ")
      .filter((w) => w[0] !== w[0].toLowerCase() || /^[A-Z]/.test(w))
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const [checked, setChecked] = useState(() => new Set());
  const toggleRow = (index) => {
    setChecked((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);
      return next;
    });
  };
  const allChecked = checked.size === scenarios.length;
  const toggleAll = () =>
    setChecked(allChecked ? new Set() : new Set(scenarios.map((_, i) => i)));

  return (
    <div className="rounded-2xl border border-gray-100 overflow-hidden bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#f8f9fa] text-text-primary text-sm font-medium">
            <th className="w-12 px-6 py-5">
              <input
                type="checkbox"
                checked={allChecked}
                onChange={toggleAll}
                className="w-5 h-5 rounded accent-text-dark cursor-pointer"
              />
            </th>
            <th className="px-2 py-5">Scenario Id</th>
            <th className="px-2 py-5">Customer</th>
            <th className="px-2 py-5">Loan Type</th>
            <th className="px-2 py-5">Amount</th>
            <th className="px-2 py-5">Lender</th>
            <th className="px-2 py-5">Status</th>
            <th className="px-2 py-5">Last Update</th>
            <th className="px-2 py-5">Actions</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((row, index) => (
            <tr key={index} className="border-t border-gray-100">
              <td className="px-6 py-5">
                <input
                  type="checkbox"
                  checked={checked.has(index)}
                  onChange={() => toggleRow(index)}
                  className="w-5 h-5 rounded accent-text-dark cursor-pointer"
                />
              </td>
              <td className="px-2 py-5 font-bold text-text-dark whitespace-nowrap">
                {row.id}
              </td>
              <td className="px-2 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#e4e5fc] flex items-center justify-center text-primary font-semibold text-sm">
                    {initials(row.customer)}
                  </div>
                  <div>
                    <p className="font-bold text-text-dark leading-tight">
                      {row.customer}
                    </p>
                    <p className="text-text-primary text-sm">{row.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-2 py-5 font-bold text-text-dark whitespace-nowrap">
                {row.loanType}
              </td>
              <td className="px-2 py-5 font-bold text-text-dark whitespace-nowrap">
                {row.amount}
              </td>
              <td className="px-2 py-5">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <div
                    className={`w-8 h-8 shrink-0 rounded-md flex items-center justify-center ${row.lenderBg}`}
                  >
                    <span
                      className={`text-[10px] font-bold ${row.lenderText ?? "text-white"}`}
                    >
                      {row.lenderInitials}
                    </span>
                  </div>
                  <span className="font-bold text-text-dark">{row.lender}</span>
                </div>
              </td>
              <td className="px-2 py-5">
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${
                    statusStyles[row.status] ?? "bg-gray-200"
                  } ${row.status === "Draft" ? "" : "text-white"}`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-2 py-5 whitespace-nowrap">
                <p className="text-text-dark font-medium">{row.updated}</p>
                <p className="text-text-primary text-sm">by {row.by}</p>
              </td>
              <td className="px-2 py-5">
                <button className="text-text-primary hover:text-text-dark">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
