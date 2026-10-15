"use client";
import ScenariosFilters from "./ScenariosFilters";
import ScenariosTable from "./ScenariosTable";
import Pagination from "../../../shared/Pagination";

export default function MyScenarios() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-xs">
      {/* Section Header */}
      <div>
        <h3 className="text-xl font-bold text-text-dark">My Scenarios</h3>
        <p className="text-sm text-text-primary mt-0.5">
          Scenarios assigned to you or the customer has selected you.
        </p>
      </div>

      {/* Filters */}
      <ScenariosFilters />

      {/* Table */}
      <ScenariosTable />

      {/* Pagination */}
      <Pagination text="Showing 1 to 10 of 248 scenarios" />
    </div>
  );
}

