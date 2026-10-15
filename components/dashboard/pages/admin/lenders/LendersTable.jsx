"use client";
import Link from "next/link";

export default function LendersTable({ lenders = [] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100 text-text-primary text-sm font-medium">
            <th className="px-4 py-4 w-1/4">Lender</th>
            <th className="px-4 py-4 w-1/4 text-center sm:text-left">Product</th>
            <th className="px-4 py-4 w-1/4 text-center">Status</th>
            <th className="px-4 py-4 w-1/4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {lenders.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-100/80 hover:bg-gray-50/50 transition-colors"
            >
              {/* Lender */}
              <td className="px-4 py-5 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center ${item.logoBg}`}
                  >
                    <span
                      className={`text-xs font-bold ${
                        item.logoTextColor ?? "text-white"
                      }`}
                    >
                      {item.logoText}
                    </span>
                  </div>
                  <span className="font-semibold text-text-dark text-sm sm:text-base">
                    {item.name}
                  </span>
                </div>
              </td>

              {/* Product */}
              <td className="px-4 py-5 whitespace-nowrap text-center sm:text-left">
                <span className="text-text-primary text-sm font-medium">
                  {item.productCount}
                </span>
              </td>

              {/* Status */}
              <td className="px-4 py-5 whitespace-nowrap text-center">
                <span
                  className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white min-w-[80px] ${
                    item.status === "Active"
                      ? "bg-[#3b66f5]"
                      : "bg-[#e53e3e]"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              {/* Actions */}
              <td className="px-4 py-5 whitespace-nowrap text-right">
                <Link
                  href={item.detailsUrl || "#"}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#4f6bf5] hover:bg-blue-600 text-white text-sm font-semibold transition-colors shadow-sm"
                >
                  See Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

