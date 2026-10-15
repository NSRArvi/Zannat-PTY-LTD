import PageHeader from "../../../shared/PageHeader";
import CustomLink from "../../../shared/CustomLink";
import AvailableScenarios from "./AvailableScenarios";
import MyScenarios from "./MyScenarios";

export default function ScenariosPage() {
  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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

      {/* 1. Available Scenarios */}
      <AvailableScenarios />

      {/* 2. My Scenarios */}
      <MyScenarios />
    </section>
  );
}