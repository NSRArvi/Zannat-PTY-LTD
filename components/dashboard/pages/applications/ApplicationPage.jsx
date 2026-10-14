import PageHeader from "../../shared/PageHeader";
import Pagination from "../../shared/Pagination";
import ApplicationFilters from "./ApplicationFilters";
import ApplicationTable from "./ApplicationTable";

export default function ScenariosPage() {
  return (
    <section className="space-y-6">
      {/* Header  */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Greeting and Subtitle */}
        <PageHeader
          title={"Applications"}
          subtitle={"Track and manage all lender applications."}
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
        {/* Filters Section */}
        <ApplicationFilters />
        {/* Applications Table Section */}
        <ApplicationTable />
        <Pagination />
      </div>
    </section>
  );
}
