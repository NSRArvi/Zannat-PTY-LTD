"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3, "...", 25];

  return (
    <div className="flex items-center justify-between">
      <p className="text-text-primary text-sm">
        Showing 1 to 10 of 248 scenarios
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-text-primary hover:bg-gray-50"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {pages.map((page, index) =>
          page === "..." ? (
            <span
              key={index}
              className="w-9 h-9 flex items-center justify-center text-text-primary"
            >
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg border font-medium text-sm ${
                currentPage === page
                  ? "bg-[#e4e5fc] border-[#e4e5fc] text-primary"
                  : "border-gray-200 text-text-dark hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => setCurrentPage((p) => Math.min(25, p + 1))}
          className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-text-primary hover:bg-gray-50"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
