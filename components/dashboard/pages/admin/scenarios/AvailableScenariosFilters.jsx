"use client";
import { Search, ChevronDown, RotateCcw } from "lucide-react";

export default function AvailableScenariosFilters({
  search,
  setSearch,
  loanType,
  setLoanType,
  onClearFilters,
}) {
  const loanTypeOptions = [
    "All Loan Types",
    "Home Loan",
    "Refinance",
    "Auto Loan",
    "Personal Loan",
  ];

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      {/* Search Input */}
      <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5">
        <Search className="w-4 h-4 text-text-primary shrink-0" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by scenario ID or customer..."
          className="w-full sm:w-60 text-sm text-text-dark placeholder:text-text-primary outline-none"
        />
      </div>

      {/* All Loan Types Dropdown */}
      <div className="relative">
        <select
          value={loanType}
          onChange={(e) => setLoanType(e.target.value)}
          className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-text-dark outline-none cursor-pointer w-full sm:w-44"
        >
          {loanTypeOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-text-dark absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* Clear Filters Button */}
      <button
        type="button"
        onClick={onClearFilters}
        className="flex items-center justify-center gap-2 bg-[#f0f1f3] hover:bg-gray-200 px-4 py-2.5 rounded-xl text-sm font-semibold text-text-dark whitespace-nowrap transition-colors"
      >
        <RotateCcw className="w-4 h-4" />
        Clear Filters
      </button>
    </div>
  );
}

