import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TopLenders() {
  const lenders = [
    {
      rank: "01",
      name: "ANZ",
      applications: 18,
      approved: 14,
      bg: "bg-[#004165]",
      // swap for the real logo asset, e.g. logo: "/logos/anz.svg"
      initials: "ANZ",
    },
    {
      rank: "02",
      name: "NAB",
      applications: 15,
      approved: 12,
      bg: "bg-black",
      initials: "N",
    },
    {
      rank: "03",
      name: "Westpac",
      applications: 12,
      approved: 10,
      bg: "bg-white border border-gray-100",
      initials: "W",
      textColor: "text-[#da1710]",
    },
  ];

  return (
    <div className="bg-white p-7 rounded-2xl shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-text-dark">Top Lenders</h2>
        <Link
          href="#"
          className="flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* List Container */}
      <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 flex-1 flex flex-col divide-y divide-gray-200/60">
        {lenders.map((lender, index) => (
          <div key={index} className="flex items-center gap-4 px-6 py-5">
            {/* Rank badge */}
            <div className="w-9 h-9 shrink-0 rounded-full bg-[#e4e5fc] flex items-center justify-center">
              <span className="text-primary font-semibold text-sm">
                {lender.rank}
              </span>
            </div>

            {/* Logo */}
            <div
              className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center ${lender.bg}`}
            >
              <span
                className={`font-bold text-lg ${lender.textColor ?? "text-white"}`}
              >
                {lender.initials}
              </span>
            </div>

            {/* Details */}
            <div className="flex-1">
              <p className="font-bold text-text-dark text-lg leading-tight">
                {lender.name}
              </p>
              <p className="text-text-primary text-sm mt-1">
                {lender.applications} application . {lender.approved} approved
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
