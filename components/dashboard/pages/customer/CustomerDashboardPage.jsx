"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import CustomerApplications from "./CustomerApplications";
import CustomerRecentActivities from "./CustomerRecentActivities";
import CustomerBottomHelpBanner from "./CustomerBottomHelpBanner";
import PageHeader from "../../shared/PageHeader";

export default function CustomerDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Top Welcome Bar & Hero Banner */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* Left: PageHeader & New Application Action */}
        <div className="flex-1 flex flex-col justify-center">
          <PageHeader
            title={
              <>
                Good Morning Sashe <span>👋</span>
              </>
            }
            subtitle="Here’s an overview of your applications and the latest updates."
          />

          <div className="mt-5">
            <Link
              href="/dashboard/create-scenarios"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4f6bf5] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base shadow-sm transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>New Application</span>
            </Link>
          </div>
        </div>

        {/* Right: Hero Card Banner */}
        <div className="w-full lg:w-[480px] rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 min-h-[140px] flex items-center bg-gradient-to-r from-[#d9ebfc] via-[#e2ecf5] to-[#f4ebe1]">
          {/* Background image overlay with home landscape */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-85"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop')`,
            }}
          />
          {/* Subtle gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

          <div className="relative z-10 p-6 max-w-xs">
            <span className="text-xs font-semibold text-text-primary uppercase tracking-wider block mb-1">
              Your Next Chapter
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-text-dark leading-snug">
              Starts With The Right Home Loan.
            </h3>
          </div>
        </div>
      </div>

      {/* Main Grid: Applications Table (Left 2/3) + Recent Activities (Right 1/3) */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
        {/* Applications Section - 2/3 width */}
        <div className="xl:col-span-2 flex flex-col">
          <CustomerApplications />
        </div>

        {/* Recent Activities Section - 1/3 width */}
        <div className="xl:col-span-1 flex flex-col">
          <CustomerRecentActivities />
        </div>
      </div>

      {/* Bottom Help Banner: "Need a Hand?" */}
      <CustomerBottomHelpBanner />
    </div>
  );
}
