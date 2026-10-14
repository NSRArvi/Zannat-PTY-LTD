"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  ArrowRight,
  User,
  FileText,
  DollarSign,
  Send,
  ChevronRight,
} from "lucide-react";

export default function ScenarioDetailsDrawer({
  isOpen,
  onClose,
  scenario,
}) {
  const [message, setMessage] = useState("");

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

  const currentScenario = scenario || {
    id: "SCN 1024",
    loanType: "Home Loan",
    amount: "AUD 650,000",
    status: "New",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    citizenship: "Citizen",
    applicantType: "Customer for himself",
    currentAddress: "Sydney, NSW",
    maritalStatus: "Single",
    homeLoanType: "Owner Occupier",
    purpose: "Purchase",
    employmentStatus: "Full Time",
    occupation: "Software Engineer",
    afterTaxIncome: "AUD 2,200/week",
    realEstate: "AUD 450,000",
    superannuation: "AUD 85,000",
    existingVehicle: "AUD 35,000",
    homeContents: "AUD 40,000",
    monthlyExpenses: "AUD 3,200",
    creditCard: "Yes . AUD 15,000 limit",
    otherLoans: "No",
    documentsCount: 5,
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
        <div className="w-screen max-w-md sm:max-w-lg bg-[#f8f9fa] shadow-2xl flex flex-col h-full transform transition-transform ease-out duration-300 animate-in slide-in-from-right">
          
          {/* Header */}
          <div className="bg-white p-6 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-text-dark">
                  Scenario Details
                </h2>
                <span className="px-3 py-1 bg-[#4f6bf5] text-white text-xs font-semibold rounded-full">
                  {currentScenario.status || "New"}
                </span>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-text-primary hover:text-text-dark hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-2 text-xs sm:text-sm text-text-primary">
              <span>{currentScenario.id || "SCN 1024"}</span>
              <span className="mx-2">•</span>
              <span>{currentScenario.loanType || "Home Loan"}</span>
              <span className="mx-2">•</span>
              <span>{currentScenario.amount || "AUD 650,000"}</span>
            </div>

            <div className="mt-3">
              <Link
                href={`/dashboard/scenarios/${currentScenario.id || "1024"}`}
                className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
              >
                <span>Open Scenario</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
            {/* 1. Customer Section */}
            <div className="bg-[#f0f2f5]/50 border border-gray-200/70 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary">
                  <User className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-text-dark text-base">Customer</h3>
              </div>

              {/* Customer Box */}
              <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#e4e5fc] flex items-center justify-center text-primary font-bold text-sm">
                    {currentScenario.initials || "MJ"}
                  </div>
                  <span className="font-bold text-text-dark text-base">
                    {currentScenario.customer || "Md. Jaequb Rahman"}
                  </span>
                </div>

                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary">Citizenship</span>
                    <span className="font-semibold text-text-dark">
                      {currentScenario.citizenship || "Citizen"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary">Applicant Type</span>
                    <span className="font-semibold text-text-dark">
                      {currentScenario.applicantType || "Customer for himself"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary">Current Address</span>
                    <span className="font-semibold text-text-dark">
                      {currentScenario.currentAddress || "Sydney, NSW"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary">Marital Status</span>
                    <span className="font-semibold text-text-dark">
                      {currentScenario.maritalStatus || "Single"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Loan Details Section */}
            <div className="bg-[#f0f2f5]/50 border border-gray-200/70 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-text-dark text-base">Loan Details</h3>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-2.5 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Loan Type</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.loanType || "Home Loan"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Amount Looking to Borrow</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.amount || "AUD 650,000"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Home Loan Type</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.homeLoanType || "Owner Occupier"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Purpose</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.purpose || "Purchase"}
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Financial Snapshot Section */}
            <div className="bg-[#f0f2f5]/50 border border-gray-200/70 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary">
                  <DollarSign className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-text-dark text-base">Financial Snapshot</h3>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-2.5 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Employment Status</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.employmentStatus || "Full Time"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Occupation</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.occupation || "Software Engineer"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">After Tax Income</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.afterTaxIncome || "AUD 2,200/week"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Real Estate (Properties)</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.realEstate || "AUD 450,000"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Superannuation</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.superannuation || "AUD 85,000"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Existing Vehicle</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.existingVehicle || "AUD 35,000"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Home Contents</span>
                  <span className="font-semibold text-text-dark">
                    {currentScenario.homeContents || "AUD 40,000"}
                  </span>
                </div>

                <div className="pt-2 border-t border-gray-100 space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary">Monthly Expenses</span>
                    <span className="font-semibold text-text-dark">
                      {currentScenario.monthlyExpenses || "AUD 3,200"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary">Credit Card</span>
                    <span className="font-semibold text-text-dark">
                      {currentScenario.creditCard || "Yes . AUD 15,000 limit"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-primary">Other Loans</span>
                    <span className="font-semibold text-text-dark">
                      {currentScenario.otherLoans || "No"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Documents Section */}
            <div className="bg-[#f0f2f5]/50 border border-gray-200/70 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-text-dark text-base">Documents</h3>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between text-sm">
                <span className="text-text-primary font-medium">
                  {currentScenario.documentsCount || 5} documents submitted
                </span>
                <Link
                  href="/dashboard/documents"
                  className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
                >
                  <span>View Documents</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 5. Send Your Proposal Section */}
            <div className="bg-[#f0f4ff]/60 border border-blue-100 rounded-2xl p-4 sm:p-5">
              <div className="flex items-start gap-2.5 mb-3">
                <div className="w-7 h-7 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-text-dark text-base">Send Your Proposal</h3>
                  <p className="text-xs sm:text-sm text-text-primary mt-0.5">
                    Introduce yourself and explain how you can help with this customer&apos;s loan.
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-text-dark mb-1.5">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    rows={4}
                    maxLength={500}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your proposal to the customer..."
                    className="w-full bg-white border border-gray-200 rounded-xl p-3 text-sm text-text-dark placeholder:text-text-primary outline-none focus:border-primary resize-none"
                  />
                  <div className="text-right text-[11px] text-text-primary mt-1">
                    {message.length}/500
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-text-dark font-semibold text-sm transition-colors text-center"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                // handle sending proposal
                onClose();
              }}
              className="flex-1 py-3 px-4 rounded-xl bg-[#4f6bf5] hover:bg-blue-600 text-white font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Send Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

