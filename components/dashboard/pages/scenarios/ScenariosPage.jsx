import { Plus } from "lucide-react";
import PageHeader from "../../shared/PageHeader";
import ScenariosFilters from "./ScenariosFilters";
import ScenariosTable from "./ScenariosTable";
import Pagination from "../../shared/Pagination";

export default function ScenariosPage() {
  return (
    <section className="space-y-6">
      {/* Header  */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Greeting and Subtitle */}
        <PageHeader
          title={"Scenarios"}
          subtitle={"Manage and track your loan scenarios."}
        />

        {/* Action Button */}
        <button className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-gradient-start to-secondary hover:from-secondary hover:to-gradient-end text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm">
          <Plus className="w-5 h-5" />
          Create Scenario
        </button>
      </div>

      {/* Filters Section */}
      <ScenariosFilters />

      {/* Scenarios Table Section */}
      <ScenariosTable />
      <Pagination />
    </section>
  );
}
