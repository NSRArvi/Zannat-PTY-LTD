"use client";
import { DollarSign, Clock, CheckCircle2, Calendar } from "lucide-react";

export default function CommissionsMetrics() {
  const metrics = [
    {
      title: "Total Commission",
      amount: "12,450",
      currency: "AUD",
      description: "Total Commission Earned",
      icon: DollarSign,
      textColor: "text-[#3b66f5]",
      iconColor: "text-[#3b66f5]",
      iconBg: "bg-[#e4e5fc]",
    },
    {
      title: "Pending Commission",
      amount: "5,280",
      currency: "AUD",
      description: "Awaiting Payment",
      icon: Clock,
      textColor: "text-[#f5aa5c]",
      iconColor: "text-[#f5aa5c]",
      iconBg: "bg-[#fff7e6]",
    },
    {
      title: "Paid Commission",
      amount: "7,170",
      currency: "AUD",
      description: "Already Paid",
      icon: CheckCircle2,
      textColor: "text-[#00875a]",
      iconColor: "text-[#00875a]",
      iconBg: "bg-[#e3fcef]",
    },
    {
      title: "This Month",
      amount: "3,620",
      currency: "AUD",
      description: "Commission Earned This Month",
      icon: Calendar,
      textColor: "text-[#4f6bf5]",
      iconColor: "text-[#4f6bf5]",
      iconBg: "bg-[#e4e5fc]",
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
            {/* Header: Title and Icon */}
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

            {/* Value with Currency */}
            <div className="my-4 flex items-baseline gap-2">
              <span className={`text-4xl sm:text-5xl font-bold ${item.textColor}`}>
                {item.amount}
              </span>
              <span className="text-sm sm:text-base font-bold text-text-dark">
                {item.currency}
              </span>
            </div>

            {/* Description Subtitle */}
            <p className="text-sm font-medium text-text-primary">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

