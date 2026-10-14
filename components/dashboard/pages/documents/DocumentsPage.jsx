"use client";
import { useState, useMemo } from "react";
import PageHeader from "../../shared/PageHeader";
import Pagination from "../../shared/Pagination";
import DocumentsFilters from "./DocumentsFilters";
import DocumentsTable from "./DocumentsTable";

const initialCustomers = [
  {
    id: 1,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    scenario: "SCN 1024",
    loanType: "Home Loan",
    documentsCount: 5,
    status: "In Progress",
    updatedDate: "Today, 10:42 AM",
    updatedBy: "Noor Washe",
    documents: [
      {
        name: "Driver License (Front)",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Driver License (Back)",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Medicare/Passport",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Last Payslip",
        status: "Rejected",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Second Last Payslip",
        status: "Pending",
        updated: "Today, 10:42 AM",
      },
    ],
  },
  {
    id: 2,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    scenario: "SCN 1024",
    loanType: "Home Loan",
    documentsCount: 5,
    status: "In Progress",
    updatedDate: "Today, 10:42 AM",
    updatedBy: "Noor Washe",
    documents: [
      {
        name: "Driver License (Front)",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Driver License (Back)",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Medicare/Passport",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Last Payslip",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Second Last Payslip",
        status: "Pending",
        updated: "Today, 10:42 AM",
      },
    ],
  },
  {
    id: 3,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    scenario: "SCN 1024",
    loanType: "Home Loan",
    documentsCount: 5,
    status: "In Progress",
    updatedDate: "Today, 10:42 AM",
    updatedBy: "Noor Washe",
    documents: [
      {
        name: "Driver License (Front)",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Driver License (Back)",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Medicare/Passport",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Last Payslip",
        status: "Rejected",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Second Last Payslip",
        status: "Pending",
        updated: "Today, 10:42 AM",
      },
    ],
  },
  {
    id: 4,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    scenario: "SCN 1024",
    loanType: "Home Loan",
    documentsCount: 5,
    status: "In Progress",
    updatedDate: "Today, 10:42 AM",
    updatedBy: "Noor Washe",
    documents: [
      {
        name: "Driver License (Front)",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Driver License (Back)",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Medicare/Passport",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Last Payslip",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Second Last Payslip",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
    ],
  },
  {
    id: 5,
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    scenario: "SCN 1024",
    loanType: "Home Loan",
    documentsCount: 5,
    status: "In Progress",
    updatedDate: "Today, 10:42 AM",
    updatedBy: "Noor Washe",
    documents: [
      {
        name: "Driver License (Front)",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Driver License (Back)",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Medicare/Passport",
        status: "Uploaded",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Last Payslip",
        status: "Rejected",
        updated: "Today, 10:42 AM",
      },
      {
        name: "Second Last Payslip",
        status: "Pending",
        updated: "Today, 10:42 AM",
      },
    ],
  },
];

export default function DocumentsPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [loanType, setLoanType] = useState("All Loan Types");

  const handleClearFilters = () => {
    setSearch("");
    setStatus("All Status");
    setLoanType("All Loan Types");
  };

  const filteredCustomers = useMemo(() => {
    return initialCustomers.filter((item) => {
      const matchesSearch =
        item.customer.toLowerCase().includes(search.toLowerCase()) ||
        item.scenario.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All Status" ||
        item.status.toLowerCase() === status.toLowerCase();

      const matchesLoanType =
        loanType === "All Loan Types" ||
        item.loanType.toLowerCase() === loanType.toLowerCase();

      return matchesSearch && matchesStatus && matchesLoanType;
    });
  }, [search, status, loanType]);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <PageHeader
          title={"Documents"}
          subtitle={"Review, track and manage uploaded customer documents."}
        />
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-sm">
        {/* Filters */}
        <DocumentsFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          loanType={loanType}
          setLoanType={setLoanType}
          onClearFilters={handleClearFilters}
        />

        {/* Documents Table with Collapsible Rows */}
        <DocumentsTable customers={filteredCustomers} />

        {/* Pagination matching design */}
        <Pagination text="Showing 1 to 5 of 248 customers" />
      </div>
    </section>
  );
}

