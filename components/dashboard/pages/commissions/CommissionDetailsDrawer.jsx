"use client";
import React, { useEffect } from "react";
import {
  X,
  User,
  Landmark,
  BadgePercent,
  CheckCircle2,
  Info,
} from "lucide-react";

export default function CommissionDetailsDrawer({
  isOpen,
  onClose,
  commission,
}) {
  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const current = commission || {
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    scenario: "SCN 1024",
    lender: "ANZ Bank",
    loanAmount: "620,000$",
    loanType: "Home Loan",
    commissionRate: "0.50%",
    expectedCommission: "3,100$",
    status: "Pending",
    paidDate: "N/P",
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "text-[#52c41a]"; // Green
      case "Pending":
        return "text-[#f5aa5c]"; // Amber/Orange
      default:
        return "text-text-primary";
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-300"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10 pointer-events-auto">
        <div className="w-screen max-w-md bg-[#f8f9fa] shadow-2xl flex flex-col h-full transform transition-transform ease-out duration-300 animate-in slide-in-from-right">
          {/* Header */}
          <div className="bg-white p-6 border-b border-gray-100 flex-shrink-0 flex items-center justify-between">
            <h2 className="text-xl font-bold text-text-dark">
              Commission Details
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-text-primary hover:text-text-dark hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
            {/* 1. Customer Section */}
            <div className="bg-[#f0f2f5]/50 border border-gray-200/70 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-text-dark text-base">Customer</h3>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#e4e5fc] flex items-center justify-center text-primary font-bold text-base shrink-0">
                  {current.initials || "MJ"}
                </div>
                <div>
                  <h4 className="font-bold text-text-dark text-base leading-tight">
                    {current.customer || "Md. Jaequb Rahman"}
                  </h4>
                  <p className="text-sm text-text-primary mt-0.5 font-medium">
                    {current.scenario || "SCN 1024"}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Loan & Lender Details Section */}
            <div className="bg-[#f0f2f5]/50 border border-gray-200/70 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary">
                  <Landmark className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-text-dark text-base">
                  Loan & Lender Details
                </h3>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Lender</span>
                  <span className="font-semibold text-text-dark">
                    {current.lender || "ANZ Bank"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Loan Amount</span>
                  <span className="font-semibold text-text-dark">
                    {current.loanAmount || "620,000$"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Loan Type</span>
                  <span className="font-semibold text-text-dark">
                    {current.loanType || "Home Loan"}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Commission Details Section (Blue Card) */}
            <div className="bg-gradient-to-r from-[#5a7efc] to-[#4568f5] rounded-2xl p-5 text-white shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-white">
                  <BadgePercent className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base">
                  Commission Details
                </h3>
              </div>

              <div className="bg-white rounded-xl p-4 space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Commission Rate</span>
                  <span className="font-bold text-text-dark">
                    {current.commissionRate || "0.50%"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Expected Commission</span>
                  <span className="font-bold text-text-dark">
                    {current.expectedCommission || current.commission || "3,100$"}
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Status Section */}
            <div className="bg-[#f0f2f5]/50 border border-gray-200/70 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-text-dark text-base">Status</h3>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Status</span>
                  <span className={`font-semibold ${getStatusColor(current.status)}`}>
                    {current.status || "Pending"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Paid Date</span>
                  <span className="font-semibold text-text-dark">
                    {current.paidDate || "N/P"}
                  </span>
                </div>
              </div>
            </div>

            {/* 5. Info Note Callout */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#edf3ff] border border-blue-100 text-[#2f54eb]">
              <Info className="w-5 h-5 shrink-0 mt-0.5 text-[#3b66f5]" />
              <p className="text-xs sm:text-sm text-text-primary leading-relaxed font-medium">
                Commission will be paid once the scenario is approved and settled by the lender.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

