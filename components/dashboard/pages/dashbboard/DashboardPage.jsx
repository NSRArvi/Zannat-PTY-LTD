import { Plus } from "lucide-react";
import PageHeader from "../../shared/PageHeader";
import Stats from "./Stats";
import ApplicationPipeline from "./ApplicationPipeline";
import NeedAttention from "./NeedAttention";
import Performance from "./Performance";
import TopLenders from "./TopLenders";
import RecentScenarios from "./RecentScenarios";
import RecentActivities from "./RecentActivities";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      {/* Header  */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        {/* Greeting and Subtitle */}
        <PageHeader
          title={"Good Morning Washe 👋"}
          subtitle={"Here's what needs your attention today."}
        />

        {/* Action Button */}
        <button className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-gradient-start to-secondary hover:from-secondary hover:to-gradient-end text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-sm">
          <Plus className="w-5 h-5" />
          Create Scenario
        </button>
      </div>

      {/* Stats & Application Pipeline */}
      <div className="flex flex-col xl:flex-row gap-6 items-stretch">
        {/* Stats - 1/3 width */}
        <div className="w-full xl:w-1/3 flex @container">
          <div className="w-full h-full">
            <Stats />
          </div>
        </div>

        {/* Application Pipeline - 2/3 width */}
        <div className="w-full xl:w-2/3 flex">
          <div className="w-full h-full">
            <ApplicationPipeline />
          </div>
        </div>
      </div>

      {/* Attentions, Performance, Top Lenders  */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <NeedAttention />
        <Performance />
        <TopLenders />
      </div>

      {/* Recent Scenarios & Recent Activities */}
      <div className="flex flex-col xl:flex-row gap-6 items-stretch">
        {/* Recent Scenarios - 1st column (2/3 width on lg) */}
        <div className="w-full xl:w-2/3 flex">
          <div className="h-full w-full">
            <RecentScenarios />
          </div>
        </div>

        {/* Recent Activities - 2nd column (1/3 width on lg) */}
        <div className="w-full xl:w-1/3 flex">
          <div className="h-full w-full">
            <RecentActivities />
          </div>
        </div>
      </div>
    </section>
  );
}
