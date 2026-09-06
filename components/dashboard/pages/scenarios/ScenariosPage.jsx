import PageHeader from "../../shared/PageHeader";
import ScenariosFilters from "./ScenariosFilters";
import ScenariosTable from "./ScenariosTable";
import Pagination from "../../shared/Pagination";
import CustomLink from "../../shared/CustomLink";

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
        <CustomLink
          href={"/dashboard/create-scenarios"}
          title={"Create Scenario"}
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
        {/* Filters Section */}
        <ScenariosFilters />

        {/* Scenarios Table Section */}
        <ScenariosTable />
        <Pagination />
      </div>
    </section>
  );
}
