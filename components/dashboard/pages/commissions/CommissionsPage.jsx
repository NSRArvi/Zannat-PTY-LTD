"use client";
import { useState, useMemo } from "react";
import PageHeader from "../../shared/PageHeader";
import Pagination from "../../shared/Pagination";
import CommissionsMetrics from "./CommissionsMetrics";
import CommissionsFilters from "./CommissionsFilters";
import CommissionsTable from "./CommissionsTable";
import CommissionDetailsDrawer from "./CommissionDetailsDrawer";

const initialCommissions = [
  {
    id: 1,
    scenario: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    lender: "ANZ Bank",
    lenderBg: "bg-[#004165]",
    lenderInitials: "ANZ",
    loanAmount: "620,000$",
    commission: "3100$",
    status: "Pending",
    paidDate: "N/P",
  },
  {
    id: 2,
    scenario: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    lender: "NAB",
    lenderBg: "bg-black",
    lenderInitials: "N",
    loanAmount: "620,000$",
    commission: "3100$",
    status: "Paid",
    paidDate: "12 Apr 2026",
  },
  {
    id: 3,
    scenario: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    lender: "ANZ Bank",
    lenderBg: "bg-white border border-gray-200",
    lenderInitials: "W",
    lenderText: "text-[#da1710]",
    loanAmount: "620,000$",
    commission: "3100$",
    status: "Pending",
    paidDate: "N/P",
  },
  {
    id: 4,
    scenario: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    lender: "ANZ Bank",
    lenderBg: "bg-[#004165]",
    lenderInitials: "ANZ",
    loanAmount: "620,000$",
    commission: "3100$",
    status: "Pending",
    paidDate: "N/P",
  },
  {
    id: 5,
    scenario: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    lender: "NAB",
    lenderBg: "bg-black",
    lenderInitials: "N",
    loanAmount: "620,000$",
    commission: "3100$",
    status: "Paid",
    paidDate: "12 Apr 2026",
  },
  {
    id: 6,
    scenario: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    lender: "ANZ Bank",
    lenderBg: "bg-[#004165]",
    lenderInitials: "ANZ",
    loanAmount: "620,000$",
    commission: "3100$",
    status: "Pending",
    paidDate: "N/P",
  },
  {
    id: 7,
    scenario: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    lender: "ANZ Bank",
    lenderBg: "bg-white border border-gray-200",
    lenderInitials: "W",
    lenderText: "text-[#da1710]",
    loanAmount: "620,000$",
    commission: "3100$",
    status: "Pending",
    paidDate: "N/P",
  },
  {
    id: 8,
    scenario: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    lender: "ANZ Bank",
    lenderBg: "bg-[#004165]",
    lenderInitials: "ANZ",
    loanAmount: "620,000$",
    commission: "3100$",
    status: "Pending",
    paidDate: "N/P",
  },
  {
    id: 9,
    scenario: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    lender: "NAB",
    lenderBg: "bg-black",
    lenderInitials: "N",
    loanAmount: "620,000$",
    commission: "3100$",
    status: "Paid",
    paidDate: "12 Apr 2026",
  },
  {
    id: 10,
    scenario: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    lender: "ANZ Bank",
    lenderBg: "bg-white border border-gray-200",
    lenderInitials: "W",
    lenderText: "text-[#da1710]",
    loanAmount: "620,000$",
    commission: "3100$",
    status: "Pending",
    paidDate: "N/P",
  },
];

export default function CommissionsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [lender, setLender] = useState("All Lenders");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCommission, setSelectedCommission] = useState(null);

  const handleClearFilters = () => {
    setSearch("");
    setStatus("All Status");
    setLender("All Lenders");
  };

  const handleOpenDetails = (row) => {
    setSelectedCommission(row);
    setIsDrawerOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDrawerOpen(false);
  };

  const filteredCommissions = useMemo(() => {
    return initialCommissions.filter((item) => {
      const matchesSearch =
        item.customer.toLowerCase().includes(search.toLowerCase()) ||
        item.scenario.toLowerCase().includes(search.toLowerCase()) ||
        item.lender.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All Status" ||
        item.status.toLowerCase() === status.toLowerCase();

      const matchesLender =
        lender === "All Lenders" ||
        item.lender.toLowerCase().includes(lender.toLowerCase());

      return matchesSearch && matchesStatus && matchesLender;
    });
  }, [search, status, lender]);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader
          title={"Commissions"}
          subtitle={"Track and manage your earned, pending, and paid commissions."}
        />
      </div>

      {/* 1. Metrics Cards */}
      <CommissionsMetrics />

      {/* 2. Main Content Container (Filters + Table + Pagination) */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-xs">
        <CommissionsFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          lender={lender}
          setLender={setLender}
          onClearFilters={handleClearFilters}
        />

        <CommissionsTable
          commissions={filteredCommissions}
          onSeeDetails={handleOpenDetails}
        />

        <Pagination text="Showing 1 to 10 of 248 commissions" />
      </div>

      {/* Commission Details Right Drawer / Modal */}
      <CommissionDetailsDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDetails}
        commission={selectedCommission}
      />
    </section>
  );
}

