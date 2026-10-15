"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, FileCheck, FileText } from "lucide-react";

export default function CustomerRecentActivities() {
  const recentActivities = [
    {
      title: "Broker Proposal Received",
      meta: "Noor Washe . Home Loan",
      time: "2 hours ago",
      icon: FileText,
      iconBg: "bg-[#e4e5fc]",
      iconColor: "text-[#4a6cf7]",
    },
    {
      title: "Document Verified",
      meta: "All document has been verified",
      time: "1 day ago",
      icon: FileCheck,
      iconBg: "bg-[#dcf5e4]",
      iconColor: "text-[#1f9d55]",
    },
    {
      title: "Application Status Updated",
      meta: "Home Loan . Choosing Broker",
      time: "3 days ago",
      icon: FileText,
      iconBg: "bg-[#e4e5fc]",
      iconColor: "text-[#4a6cf7]",
    },
    {
      title: "New Message From Broker",
      meta: "Hi Sashi, I have a few options for...",
      time: "3 days ago",
      icon: MessageSquare,
      iconBg: "bg-[#dcf5e4]",
      iconColor: "text-[#1f9d55]",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-6 shadow-xs h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-text-dark">Recent Activities</h2>
          <Link
            href="#"
            className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-5">
        {recentActivities.map((act, idx) => {
          const Icon = act.icon;
          return (
            <div key={idx} className="flex items-start gap-3.5">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${act.iconBg} ${act.iconColor}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-text-dark truncate">
                  {act.title}
                </h4>
                <p className="text-xs text-text-primary mt-0.5 truncate">
                  {act.meta}
                </p>
                <span className="text-[11px] text-text-primary/70 mt-1 block">
                  {act.time}
                </span>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
