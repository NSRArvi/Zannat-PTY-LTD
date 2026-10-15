"use client";
import { useState } from "react";
import { Search, ChevronDown, Calendar, RotateCcw } from "lucide-react";

export default function ApplicationFilters() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [loanType, setLoanType] = useState("All Loan Types");
  const [lender, setLender] = useState("All Lenders");
  const [sortBy, setSortBy] = useState("Recently Updated");

  const statusOptions = [
    "All Status",
    "In Progress",
    "Submitted",
    "Conditional",
    "Approved",
    "Rejected",
  ];
  const loanTypeOptions = [
    "All Loan Types",
    "Home Loan",
    "Auto Loan",
    "Personal Loan",
  ];
  const lenderOptions = ["All Lenders", "ANZ", "NAB", "Westpac"];
  const sortOptions = [
    "Recently Updated",
    "Oldest First",
    "Amount: High to Low",
    "Amount: Low to High",
  ];

  const handleClearFilters = () => {
    setSearch("");
    setStatus("All Status");
    setLoanType("All Loan Types");
    setLender("All Lenders");
    setSortBy("Recently Updated");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Row 1: search + dropdown filters */}
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="flex items-center gap-2 flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3">
          <Search className="w-4 h-4 text-text-primary shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by application ID or customer..."
            className="w-full text-sm text-text-dark placeholder:text-text-primary outline-none"
          />
        </div>

        <div className="relative">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-text-dark outline-none cursor-pointer w-full lg:w-auto"
          >
            {statusOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-text-dark absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-text-dark outline-none cursor-pointer w-full lg:w-auto"
          >
            {loanTypeOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-text-dark absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={lender}
            onChange={(e) => setLender(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-text-dark outline-none cursor-pointer w-full lg:w-auto"
          >
            {lenderOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-text-dark absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        <button className="flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-text-dark whitespace-nowrap">
          Date: Last 90 days
          <Calendar className="w-4 h-4 text-text-dark" />
        </button>
      </div>

      {/* Row 2: sort by + clear filters */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-text-primary text-sm">Sort by:</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-semibold text-text-dark outline-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-text-dark absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <button
          onClick={handleClearFilters}
          className="flex items-center gap-2 bg-[#f0f1f3] hover:bg-gray-200 px-4 py-2.5 rounded-xl text-sm font-semibold text-text-dark"
        >
          <RotateCcw className="w-4 h-4" />
          Clear Filters
        </button>
      </div>
    </div>
  );
}
