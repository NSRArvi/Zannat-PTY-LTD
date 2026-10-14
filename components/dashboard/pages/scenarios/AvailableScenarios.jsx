"use client";
import { useState, useMemo } from "react";
import AvailableScenariosFilters from "./AvailableScenariosFilters";
import AvailableScenariosTable from "./AvailableScenariosTable";
import ScenarioDetailsDrawer from "./ScenarioDetailsDrawer";
import Pagination from "../../shared/Pagination";

const initialAvailableScenarios = [
  {
    id: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    loanType: "Home Loan",
    amount: "620,000$",
    submittedTime: "10 min ago",
    submittedDate: "12 Apr 2026, 10.26 AM",
    status: "New",
    actionType: "details",
  },
  {
    id: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    loanType: "Home Loan",
    amount: "620,000$",
    submittedTime: "10 min ago",
    submittedDate: "12 Apr 2026, 10.26 AM",
    status: "New",
    actionType: "details",
  },
  {
    id: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    loanType: "Home Loan",
    amount: "620,000$",
    submittedTime: "10 min ago",
    submittedDate: "12 Apr 2026, 10.26 AM",
    status: "Submitted",
    actionType: "proposal",
  },
  {
    id: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    loanType: "Home Loan",
    amount: "620,000$",
    submittedTime: "10 min ago",
    submittedDate: "12 Apr 2026, 10.26 AM",
    status: "New",
    actionType: "details",
  },
  {
    id: "SCN 1024",
    customer: "Md. Jaequb Rahman",
    initials: "MJ",
    loanType: "Home Loan",
    amount: "620,000$",
    submittedTime: "10 min ago",
    submittedDate: "12 Apr 2026, 10.26 AM",
    status: "New",
    actionType: "details",
  },
];

export default function AvailableScenarios() {
  const [search, setSearch] = useState("");
  const [loanType, setLoanType] = useState("All Loan Types");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState(null);

  const handleClearFilters = () => {
    setSearch("");
    setLoanType("All Loan Types");
  };

  const handleOpenDetails = (scenario) => {
    setSelectedScenario(scenario);
    setIsDrawerOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDrawerOpen(false);
  };

  const filteredScenarios = useMemo(() => {
    return initialAvailableScenarios.filter((item) => {
      const matchesSearch =
        item.customer.toLowerCase().includes(search.toLowerCase()) ||
        item.id.toLowerCase().includes(search.toLowerCase());

      const matchesLoanType =
        loanType === "All Loan Types" ||
        item.loanType.toLowerCase() === loanType.toLowerCase();

      return matchesSearch && matchesLoanType;
    });
  }, [search, loanType]);

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-xs">
        {/* Header and Filters Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Title & Subtitle */}
          <div>
            <h3 className="text-xl font-bold text-text-dark">
              Available Scenarios
            </h3>
            <p className="text-sm text-text-primary mt-0.5">
              Customer submitted scenarios that you can send a proposal for.
            </p>
          </div>

          {/* Filters */}
          <AvailableScenariosFilters
            search={search}
            setSearch={setSearch}
            loanType={loanType}
            setLoanType={setLoanType}
            onClearFilters={handleClearFilters}
          />
        </div>

        {/* Table */}
        <AvailableScenariosTable
          scenarios={filteredScenarios}
          onSeeDetails={handleOpenDetails}
        />

        {/* Pagination */}
        <Pagination text="Showing 1 to 05 of 25 available scenarios" />
      </div>

      {/* Scenario Details Right Drawer */}
      <ScenarioDetailsDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDetails}
        scenario={selectedScenario}
      />
    </>
  );
}
