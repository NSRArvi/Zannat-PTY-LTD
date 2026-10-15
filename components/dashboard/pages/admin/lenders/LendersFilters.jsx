"use client";
import { Search, ChevronDown, RotateCcw } from "lucide-react";

export default function LendersFilters({
  search,
  setSearch,
  status,
  setStatus,
  product,
  setProduct,
  onClearFilters,
}) {
  const statusOptions = ["All Status", "Active", "Inactive"];
  const productOptions = [
    "All Product",
    "8 Products",
    "6 Products",
    "5 Products",
    "4 Products",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
      {/* Search Input */}
      <div className="flex items-center gap-2 flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3">
        <Search className="w-4 h-4 text-text-primary shrink-0" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by lenders name or product name..."
          className="w-full text-sm text-text-dark placeholder:text-text-primary outline-none"
        />
      </div>

      {/* Status Filter */}
      <div className="relative">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-text-dark outline-none cursor-pointer w-full lg:w-44"
        >
          {statusOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-text-dark absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* Product Filter */}
      <div className="relative">
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-3 text-sm font-medium text-text-dark outline-none cursor-pointer w-full lg:w-44"
        >
          {productOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-text-dark absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={onClearFilters}
        className="flex items-center justify-center gap-2 bg-[#f0f1f3] hover:bg-gray-200 px-4 py-3 rounded-xl text-sm font-semibold text-text-dark whitespace-nowrap transition-colors"
      >
        <RotateCcw className="w-4 h-4" />
        Clear Filters
      </button>
    </div>
  );
}

