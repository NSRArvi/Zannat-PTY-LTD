"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  X,
  FileText,
  User,
  LayoutGrid,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Download,
} from "lucide-react";

export default function ComplianceDetailsDrawer({
  isOpen,
  onClose,
  compliance,
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

  const current = compliance || {
    complianceItem: "Driver License",
    status: "Verified",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    scenario: "SCN 1024",
    documentName: "Driver License Front",
    verifiedOn: "12 Aug 2026",
    expiryDate: "08 Jun 2028",
    uploadedBy: "Customer",
    fileSize: "JPG . 856 KB",
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Verified":
        return "bg-[#52c41a] text-white";
      case "Expiring Soon":
        return "bg-[#f5aa5c] text-white";
      case "Expired":
        return "bg-[#f5222d] text-white";
      case "Provided":
        return "bg-[#4a6cf7] text-white";
      default:
        return "bg-gray-200 text-text-primary";
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
          <div className="bg-white p-6 border-b border-gray-100 flex-shrink-0">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-text-dark">
                Compliance Details
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-text-primary hover:text-text-dark hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Document Title & Badge */}
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <span className="font-bold text-text-dark text-base sm:text-lg">
                {current.complianceItem || "Driver License"}
              </span>
              <span
                className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(
                  current.status
                )}`}
              >
                {current.status || "Verified"}
              </span>
            </div>
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

            {/* 2. Overview Section */}
            <div className="bg-[#f0f2f5]/50 border border-gray-200/70 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-text-dark text-base">Overview</h3>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Document</span>
                  <span className="font-semibold text-text-dark">
                    {current.documentName || "Driver License Front"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Status</span>
                  <span className="font-semibold text-[#52c41a]">
                    {current.status || "Verified"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Verified On</span>
                  <span className="font-semibold text-text-dark">
                    {current.verifiedOn || "12 Aug 2026"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Expiry Date</span>
                  <span className="font-semibold text-text-dark">
                    {current.expiryDate || "08 Jun 2028"}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-text-primary">Uploaded By</span>
                  <span className="font-semibold text-text-dark">
                    {current.uploadedBy || "Customer"}
                  </span>
                </div>

                {/* Verified Info Callout */}
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-start gap-2.5 p-3 rounded-xl bg-[#eef4ff] text-[#2f54eb]">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#3b66f5]" />
                  <p className="text-xs text-text-primary leading-relaxed font-medium">
                    This document has been verified and meets all compliance requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Document Preview Section */}
            <div className="bg-[#f0f2f5]/50 border border-gray-200/70 rounded-2xl p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#e4e5fc] flex items-center justify-center text-primary">
                  <FileText className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-text-dark text-base">Document Preview</h3>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#52c41a] text-white flex items-center justify-center font-bold text-xs uppercase shrink-0">
                    JPG
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark text-sm">
                      {current.documentName || "Driver License Front"}
                    </h4>
                    <p className="text-xs text-text-primary mt-0.5">
                      {current.fileSize || "JPG . 856 KB"}
                    </p>
                  </div>
                </div>

                <Link
                  href="#"
                  className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
                >
                  <span>View Document</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-text-dark font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
            <button
              type="button"
              className="flex-1 py-3 px-4 rounded-xl bg-[#4f6bf5] hover:bg-blue-600 text-white font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Document</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

