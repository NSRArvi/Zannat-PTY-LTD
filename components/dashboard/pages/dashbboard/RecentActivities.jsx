import Link from "next/link";
import {
  ArrowRight,
  FileUser,
  FileCheck,
  Workflow,
  BadgePercent,
  FileX,
} from "lucide-react";

export default function RecentActivities() {
  const activities = [
    {
      title: "Application Updated",
      meta: "Gross Lee . 10.42 pm",
      icon: FileUser,
      bg: "bg-[#e4e5fc]",
      color: "text-[#4a6cf7]",
    },
    {
      title: "Document Approved",
      meta: "Emma Watson . 09.18 pm",
      icon: FileCheck,
      bg: "bg-[#dcf5e4]",
      color: "text-[#1f9d55]",
    },
    {
      title: "New Scenario Received",
      meta: "Danial lol . Yesterday, 4.32 pm",
      icon: Workflow,
      bg: "bg-[#e4e5fc]",
      color: "text-[#4a6cf7]",
    },
    {
      title: "Commission Approved",
      meta: "James . Yesterday, 2.14 pm",
      icon: BadgePercent,
      bg: "bg-[#dcf5e4]",
      color: "text-[#1f9d55]",
    },
    {
      title: "Document Rejected",
      meta: "Sarah Mile . Yesterday, 11.07 pm",
      icon: FileX,
      bg: "bg-[#fde4e4]",
      color: "text-[#e5484d]",
    },
  ];

  return (
    <div className="bg-white p-7 rounded-2xl shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-text-dark">Recent Activities</h2>
        <Link
          href="#"
          className="flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Timeline Container */}
      <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 flex-1 p-6">
        <div className="relative">
          {/* Connecting line, spans behind all icons */}
          <div className="absolute left-8 top-16 bottom-16 w-px bg-gray-200" />

          {activities.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === activities.length - 1;
            return (
              <div
                key={index}
                className={`relative flex items-start gap-5 ${isLast ? "" : "mb-8"}`}
              >
                <div
                  className={`relative z-10 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center ${item.bg}`}
                >
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="pt-1">
                  <p className="font-bold text-text-dark text-lg leading-tight">
                    {item.title}
                  </p>
                  <p className="text-text-primary text-sm mt-1">{item.meta}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
