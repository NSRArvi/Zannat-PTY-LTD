"use client";
import { CheckCircle2, AlertTriangle, CalendarClock, AlertCircle } from "lucide-react";

export default function ComplianceMetrics() {
  const metrics = [
    {
      title: "Compliant",
      count: "12",
      description: "Items Currently Verified",
      icon: CheckCircle2,
      countColor: "text-[#00875a]", // Deep teal / green
      iconColor: "text-[#00875a]",
      iconBg: "bg-[#e3fcef]",
    },
    {
      title: "Needs Attention",
      count: "05",
      description: "Missing or Rejected Items",
      icon: AlertTriangle,
      countColor: "text-[#ff991f]", // Amber / Orange
      iconColor: "text-[#ff991f]",
      iconBg: "bg-[#fffae6]",
    },
    {
      title: "Expiring Soon",
      count: "03",
      description: "Approaching Expiry",
      icon: CalendarClock,
      countColor: "text-[#3b66f5]", // Blue
      iconColor: "text-[#3b66f5]",
      iconBg: "bg-[#e4e5fc]",
    },
    {
      title: "Expired",
      count: "01",
      description: "Required Renewal",
      icon: AlertCircle,
      countColor: "text-[#de350b]", // Red
      iconColor: "text-[#de350b]",
      iconBg: "bg-[#ffebe6]",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {metrics.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col justify-between shadow-xs"
          >
            {/* Top row: Title and Icon */}
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-text-dark">
                {item.title}
              </h3>
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center ${item.iconBg}`}
              >
                <Icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
            </div>

            {/* Middle: Big count */}
            <div className="my-4">
              <span className={`text-4xl sm:text-5xl font-bold ${item.countColor}`}>
                {item.count}
              </span>
            </div>

            {/* Bottom: Subtitle description */}
            <p className="text-sm font-medium text-text-primary">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

