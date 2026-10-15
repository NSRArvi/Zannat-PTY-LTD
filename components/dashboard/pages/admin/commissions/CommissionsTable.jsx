"use client";


export default function CommissionsTable({
  commissions = [],
  onSeeDetails,
}) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Paid":
        return "bg-[#65cc70] text-white"; // Green
      case "Pending":
        return "bg-[#f5aa5c] text-white"; // Amber/Orange
      default:
        return "bg-gray-200 text-text-primary";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100 text-text-primary text-sm font-medium">
            <th className="px-4 py-4">Scenario</th>
            <th className="px-4 py-4">Customer</th>
            <th className="px-4 py-4">Lender</th>
            <th className="px-4 py-4 text-center sm:text-left">Loan Amount</th>
            <th className="px-4 py-4 text-center sm:text-left">Commission</th>
            <th className="px-4 py-4 text-center">Status</th>
            <th className="px-4 py-4 text-center sm:text-left">Paid Date</th>
            <th className="px-4 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {commissions.map((row) => (
            <tr
              key={row.id}
              className="border-b border-gray-100/80 hover:bg-gray-50/50 transition-colors"
            >
              {/* Scenario */}
              <td className="px-4 py-5 whitespace-nowrap font-medium text-text-dark text-sm sm:text-base">
                {row.scenario}
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

              {/* Lender */}
              <td className="px-4 py-5 whitespace-nowrap">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 shrink-0 rounded-md flex items-center justify-center ${row.lenderBg}`}
                  >
                    <span
                      className={`text-[10px] font-bold ${
                        row.lenderText ?? "text-white"
                      }`}
                    >
                      {row.lenderInitials}
                    </span>
                  </div>
                  <span className="font-bold text-text-dark text-sm sm:text-base">
                    {row.lender}
                  </span>
                </div>
              </td>

              {/* Loan Amount */}
              <td className="px-4 py-5 whitespace-nowrap font-semibold text-text-dark text-sm sm:text-base">
                {row.loanAmount}
              </td>

              {/* Commission */}
              <td className="px-4 py-5 whitespace-nowrap font-semibold text-text-dark text-sm sm:text-base">
                {row.commission}
              </td>

              {/* Status */}
              <td className="px-4 py-5 whitespace-nowrap text-center">
                <span
                  className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium min-w-[85px] ${getStatusBadge(
                    row.status
                  )}`}
                >
                  {row.status}
                </span>
              </td>

              {/* Paid Date */}
              <td className="px-4 py-5 whitespace-nowrap text-center sm:text-left text-sm text-text-dark font-medium">
                {row.paidDate}
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
  );
}

