"use client";
import Link from "next/link";

export default function AvailableScenariosTable({
  scenarios = [],
  onSeeDetails,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100 text-text-primary text-sm font-medium">
            <th className="px-4 py-4 w-1/6">Scenario Id</th>
            <th className="px-4 py-4 w-1/4">Customer</th>
            <th className="px-4 py-4 w-1/6">Loan Type</th>
            <th className="px-4 py-4 w-1/6">Amount</th>
            <th className="px-4 py-4 w-1/6">Submitted</th>
            <th className="px-4 py-4 text-center w-28">Status</th>
            <th className="px-4 py-4 text-right w-36">Actions</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map((row, index) => (
            <tr
              key={index}
              className="border-b border-gray-100/80 hover:bg-gray-50/50 transition-colors"
            >
              {/* Scenario ID */}
              <td className="px-4 py-5 font-bold text-text-dark text-sm sm:text-base whitespace-nowrap">
                {row.id}
              </td>

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

              {/* Loan Type */}
              <td className="px-4 py-5 font-medium text-text-dark text-sm sm:text-base whitespace-nowrap">
                {row.loanType}
              </td>

              {/* Amount */}
              <td className="px-4 py-5 font-bold text-text-dark text-sm sm:text-base whitespace-nowrap">
                {row.amount}
              </td>

              {/* Submitted */}
              <td className="px-4 py-5 whitespace-nowrap">
                <p className="text-text-dark font-medium text-sm leading-tight">
                  {row.submittedTime}
                </p>
                <p className="text-text-primary text-xs mt-0.5">
                  {row.submittedDate}
                </p>
              </td>

              {/* Status */}
              <td className="px-4 py-5 whitespace-nowrap text-center">
                <span
                  className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium min-w-[85px] text-white ${
                    row.status === "Submitted"
                      ? "bg-[#65cc70]"
                      : "bg-[#4f6bf5]"
                  }`}
                >
                  {row.status}
                </span>
              </td>

              {/* Actions */}
              <td className="px-4 py-5 whitespace-nowrap text-right">
                {row.actionType === "proposal" ? (
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-text-dark text-sm font-semibold transition-colors shadow-2xs"
                  >
                    View Proposal
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => onSeeDetails?.(row)}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#4f6bf5] hover:bg-blue-600 text-white text-sm font-semibold transition-colors shadow-2xs cursor-pointer"
                  >
                    See Details
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

