"use client";

export default function BrokerCompliance({ onSeeDetails }) {
  const items = [
    {
      id: 1,
      name: "Broker License / Accreditation",
      status: "Verified",
      expiryDate: "12 Apr 2027",
    },
    {
      id: 2,
      name: "Broker License / Accreditation",
      status: "Expiring Soon",
      expiryDate: "12 Apr 2027",
    },
    {
      id: 3,
      name: "Broker License / Accreditation",
      status: "Verified",
      expiryDate: "12 Apr 2027",
    },
    {
      id: 4,
      name: "Broker License / Accreditation",
      status: "Verified",
      expiryDate: "12 Apr 2027",
    },
    {
      id: 5,
      name: "Broker License / Accreditation",
      status: "Expired",
      expiryDate: "12 Apr 2027",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Verified":
        return "bg-[#52c41a] text-white";
      case "Expiring Soon":
        return "bg-[#f5aa5c] text-white";
      case "Expired":
        return "bg-[#f5222d] text-white";
      default:
        return "bg-gray-200 text-text-primary";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-xs">
      {/* Section Header */}
      <div>
        <h3 className="text-xl font-bold text-text-dark">Broker Compliance</h3>
        <p className="text-sm text-text-primary mt-1">
          Your broker credential and compliance requirements.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-text-primary text-sm font-medium">
              <th className="px-4 py-4 w-2/5">Compliance Item</th>
              <th className="px-4 py-4 text-center w-1/5">Status</th>
              <th className="px-4 py-4 text-center sm:text-left w-1/5">Expiry Date</th>
              <th className="px-4 py-4 text-right w-1/5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-100/80 hover:bg-gray-50/50 transition-colors"
              >
                <td className="px-4 py-5 whitespace-nowrap font-medium text-text-dark text-sm sm:text-base">
                  {row.name}
                </td>
                <td className="px-4 py-5 whitespace-nowrap text-center">
                  <span
                    className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium min-w-[95px] ${getStatusBadge(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-5 whitespace-nowrap text-center sm:text-left text-sm text-text-dark font-medium">
                  {row.expiryDate}
                </td>
                <td className="px-4 py-5 whitespace-nowrap text-right">
                  <button
                    type="button"
                    onClick={() =>
                      onSeeDetails?.({
                        complianceItem: row.name,
                        status: row.status,
                        customer: "Broker (Account Owner)",
                        initials: "BR",
                        scenario: "Broker License",
                        documentName: row.name,
                        verifiedOn: "12 Aug 2026",
                        expiryDate: row.expiryDate,
                        uploadedBy: "Broker",
                        fileSize: "PDF . 1.2 MB",
                      })
                    }
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
    </div>
  );
}

