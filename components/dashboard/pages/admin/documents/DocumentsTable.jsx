"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Upload,
  FileText,
  MoreHorizontal,
} from "lucide-react";

export default function DocumentsTable({ customers = [] }) {
  // First item open by default as shown in the screenshot
  const [expandedIds, setExpandedIds] = useState(() => new Set([1]));

  const toggleExpand = (id) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const getSubDocStatusBadge = (status) => {
    switch (status) {
      case "Uploaded":
        return "bg-[#52c41a] text-white";
      case "Rejected":
        return "bg-[#f5222d] text-white";
      case "Pending":
        return "bg-[#faad14] text-white";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getMainStatusBadge = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-[#7b7df5] text-white";
      case "Approved":
        return "bg-[#52c41a] text-white";
      case "Submitted":
        return "bg-[#3b66f5] text-white";
      case "Rejected":
        return "bg-[#f5222d] text-white";
      default:
        return "bg-gray-200 text-text-primary";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100 text-text-primary text-sm font-medium">
            <th className="px-4 py-4">Customer</th>
            <th className="px-4 py-4">Scenario</th>
            <th className="px-4 py-4">Loan Type</th>
            <th className="px-4 py-4 text-center">Documents</th>
            <th className="px-4 py-4 text-center">Status</th>
            <th className="px-4 py-4">Last Update</th>
            <th className="px-4 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((row) => {
            const isExpanded = expandedIds.has(row.id);

            return (
              <React.Fragment key={row.id}>
                <tr className="border-b border-gray-100/80 hover:bg-gray-50/40 transition-colors">
                  {/* Customer */}
                  <td className="px-4 py-5 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 shrink-0 rounded-full bg-[#e4e5fc] flex items-center justify-center text-primary font-bold text-sm">
                        {row.initials}
                      </div>
                      <span className="font-bold text-text-dark text-sm sm:text-base">
                        {row.customer}
                      </span>
                    </div>
                  </td>

                  {/* Scenario */}
                  <td className="px-4 py-5 whitespace-nowrap font-medium text-text-dark text-sm">
                    {row.scenario}
                  </td>

                  {/* Loan Type */}
                  <td className="px-4 py-5 whitespace-nowrap font-medium text-text-dark text-sm">
                    {row.loanType}
                  </td>

                  {/* Documents Count */}
                  <td className="px-4 py-5 whitespace-nowrap text-center font-medium text-text-dark text-sm">
                    {row.documentsCount}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-5 whitespace-nowrap text-center">
                    <span
                      className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${getMainStatusBadge(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  {/* Last Update */}
                  <td className="px-4 py-5 whitespace-nowrap">
                    <p className="text-text-dark font-medium text-sm leading-tight">
                      {row.updatedDate}
                    </p>
                    <p className="text-text-primary text-xs mt-0.5">
                      by {row.updatedBy}
                    </p>
                  </td>

                  {/* Actions (Expand / Collapse) */}
                  <td className="px-4 py-5 whitespace-nowrap text-right">
                    <button
                      type="button"
                      onClick={() => toggleExpand(row.id)}
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
                    >
                      <span>
                        {isExpanded ? "Hide Documents" : "See Documents"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </td>
                </tr>

                {/* Nested Documents Accordion Content */}
                {isExpanded && (
                  <tr>
                    <td colSpan={7} className="p-4 bg-transparent">
                      <div className="rounded-2xl border border-gray-200/80 bg-[#f8f9fa] p-5">
                        {/* Nested Header */}
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-base font-bold text-text-dark">
                            Documents({row.documents?.length || 0})
                          </h4>
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
                          >
                            <Upload className="w-4 h-4" />
                            Upload Document
                          </button>
                        </div>

                        {/* Nested Table */}
                        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-xs">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="border-b border-gray-100 text-text-primary text-xs font-medium bg-gray-50/60">
                                <th className="px-4 py-3">Document Name</th>
                                <th className="px-4 py-3 text-center">Status</th>
                                <th className="px-4 py-3 text-center sm:text-left">
                                  Last Update
                                </th>
                                <th className="px-4 py-3 text-right">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {row.documents?.map((doc, docIdx) => (
                                <tr
                                  key={docIdx}
                                  className="border-b last:border-b-0 border-gray-100 hover:bg-gray-50/50 transition-colors"
                                >
                                  {/* Document Name */}
                                  <td className="px-4 py-3.5 whitespace-nowrap">
                                    <div className="flex items-center gap-2.5">
                                      <FileText className="w-4 h-4 text-[#8b8cf8] shrink-0" />
                                      <span className="text-sm font-medium text-text-dark">
                                        {doc.name}
                                      </span>
                                    </div>
                                  </td>

                                  {/* Sub Document Status */}
                                  <td className="px-4 py-3.5 whitespace-nowrap text-center">
                                    <span
                                      className={`inline-flex items-center justify-center px-3.5 py-1 rounded-full text-xs font-semibold min-w-[76px] ${getSubDocStatusBadge(
                                        doc.status
                                      )}`}
                                    >
                                      {doc.status}
                                    </span>
                                  </td>

                                  {/* Last Update */}
                                  <td className="px-4 py-3.5 whitespace-nowrap text-center sm:text-left text-sm text-text-dark font-medium">
                                    {doc.updated}
                                  </td>

                                  {/* Actions Menu */}
                                  <td className="px-4 py-3.5 whitespace-nowrap text-right">
                                    <button
                                      type="button"
                                      className="text-text-primary hover:text-text-dark p-1"
                                    >
                                      <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

