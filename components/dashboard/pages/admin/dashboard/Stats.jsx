import {
  Workflow,
  FileUser,
  BadgePercent,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export default function Stats() {
  const stats = [
    {
      title: "Total Scenarios",
      value: "248",
      trend: "up",
      percentage: "12%",
      icon: Workflow,
      isPrimary: true,
    },
    {
      title: "Active Application",
      value: "36",
      trend: "up",
      percentage: "8%",
      icon: FileUser,
      isPrimary: false,
    },
    {
      title: "Commission",
      subtitle: "(Pending)",
      value: "$48,250",
      trend: "down",
      percentage: "2%",
      icon: BadgePercent,
      isPrimary: false,
    },
    {
      title: "Commission",
      subtitle: "(Paid)",
      value: "$24,745",
      trend: "up",
      percentage: "6%",
      icon: BadgePercent,
      isPrimary: false,
    },
  ];

  return (
    // Stats.jsx — replace grid + all md:/xl: with @sm:/@lg: (container-relative)
    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-3 @lg:gap-6 bg-white p-3 @lg:p-5 rounded-2xl shadow-sm h-full">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return stat.isPrimary ? (
          <div
            key={index}
            className="bg-gradient-to-br from-[#818cf8] to-secondary p-4 @lg:p-6 rounded-2xl shadow-sm text-white flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4 @lg:mb-6 gap-2">
              <h3 className="text-sm @lg:text-lg font-semibold tracking-wide leading-tight">
                {stat.title}
              </h3>
              <div className="p-1.5 @lg:p-2 border border-white/30 bg-white/10 rounded-lg @lg:rounded-xl shrink-0">
                <Icon className="w-4 h-4 @lg:w-6 @lg:h-6 text-white" />
              </div>
            </div>
            <div>
              <p className="text-2xl @lg:text-[40px] font-bold leading-none mb-4 @lg:mb-6">
                {stat.value}
              </p>
              <div className="flex flex-wrap items-center gap-2 @lg:gap-3">
                <span className="flex items-center gap-1 text-[10px] @lg:text-sm font-semibold bg-white/20 border border-white/30 px-1.5 py-0.5 @lg:px-2 @lg:py-1 rounded-full whitespace-nowrap">
                  <ArrowUp className="w-3 h-3 @lg:w-4 @lg:h-4" />{" "}
                  {stat.percentage}
                </span>
                <span className="text-white/90 text-[10px] @lg:text-sm font-medium whitespace-nowrap">
                  vs last month
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="bg-background p-4 @lg:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4 @lg:mb-6 gap-2">
              <h3 className="text-sm @lg:text-lg font-bold text-text-primary tracking-wide leading-tight">
                {stat.title}
                {stat.subtitle && (
                  <span className="text-[10px] @lg:text-sm font-medium ml-1 block @lg:inline">
                    {stat.subtitle}
                  </span>
                )}
              </h3>
              <div className="p-1.5 @lg:p-2 bg-secondary-light rounded-lg @lg:rounded-xl shrink-0">
                <Icon className="w-4 h-4 @lg:w-6 @lg:h-6 text-primary" />
              </div>
            </div>
            <div>
              <p className="text-2xl @lg:text-[40px] font-bold text-text-dark leading-none mb-4 @lg:mb-6">
                {stat.value}
              </p>
              <div className="flex flex-wrap items-center gap-2 @lg:gap-3">
                <span
                  className={`flex items-center gap-1 text-[10px] @lg:text-sm font-bold px-1.5 py-0.5 @lg:px-2 @lg:py-1 rounded-full whitespace-nowrap ${stat.trend === "up" ? "bg-[#e0f8e9] text-[#16a34a]" : "bg-[#ffe2e5] text-[#e11d48]"}`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUp className="w-3 h-3 @lg:w-4 @lg:h-4" />
                  ) : (
                    <ArrowDown className="w-3 h-3 @lg:w-4 @lg:h-4" />
                  )}{" "}
                  {stat.percentage}
                </span>
                <span className="text-text-primary text-[10px] @lg:text-sm font-medium whitespace-nowrap">
                  vs last month
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
