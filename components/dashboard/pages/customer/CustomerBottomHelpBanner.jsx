"use client";

import Link from "next/link";
import { Headphones, ArrowRight } from "lucide-react";

export default function CustomerBottomHelpBanner() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-[#e4e5fc] flex items-center justify-center text-primary shrink-0">
          <Headphones className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-text-dark">
            Need a Hand?
          </h3>
          <p className="text-xs sm:text-sm text-text-primary mt-0.5">
            Have questions or need support? We’re here to help.
          </p>
        </div>
      </div>

      <Link
        href="/dashboard/contact?role=customer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 text-text-dark font-semibold text-sm transition-colors whitespace-nowrap shadow-2xs"
      >
        <span>Contact Us</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

