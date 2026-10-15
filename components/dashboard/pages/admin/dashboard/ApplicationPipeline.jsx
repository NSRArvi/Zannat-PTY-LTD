import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function ApplicationPipeline() {
  const data = [
    { label: "in preparation", value: 16, colorClass: "bg-[#8b8cf8]" },
    { label: "submitted", value: 13, colorClass: "bg-[#4a6cf7]" },
    { label: "Conditional", value: 7, colorClass: "bg-[#f5aa5c]" },
    { label: "Approved", value: 17, colorClass: "bg-[#65cc70]" },
    { label: "Rejected", value: 8, colorClass: "bg-[#f04658]" },
  ];

  const maxVal = 20;
  const yAxisLabels = [20, 15, 10, 5, 0];

  return (
    <div className="flex-1 bg-white p-7 rounded-2xl shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-text-dark">
          Application Pipeline
        </h2>
        <Link
          href="#"
          className="flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Chart Container */}
      <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-gray-100 flex-1 flex flex-col">
        {/* Container Top Controls */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-text-primary font-semibold">
            All Applications
          </span>
          <button className="flex items-center gap-1 text-text-primary font-medium hover:text-text-dark">
            This Month <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        {/* Chart Area */}
        <div className="relative flex-1 flex min-h-[240px]">
          {/* Y-Axis */}
          <div className="flex flex-col justify-between h-full pr-4 text-text-primary text-sm font-medium">
            {yAxisLabels.map((val) => (
              <span key={val}>{val.toString().padStart(2, "0")}</span>
            ))}
          </div>

          {/* Grid lines and Bars */}
          <div className="relative flex-1 flex justify-between items-end h-full pt-2">
            {/* Horizontal Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {yAxisLabels.map((val, i) => (
                <div
                  key={i}
                  className="w-full border-b border-gray-200/60"
                  style={{ height: i === 0 ? "1px" : "auto" }}
                ></div>
              ))}
            </div>

            {/* Bars */}
            {data.map((item, index) => {
              const heightPercent = (item.value / maxVal) * 100;
              return (
                <div
                  key={index}
                  className="relative z-10 flex flex-col items-center justify-end group w-1/5 h-full"
                >
                  <div
                    className="flex flex-col items-center w-[70px] sm:w-[90px]"
                    style={{ height: `${heightPercent}%` }}
                  >
                    {/* Floating Value Cap */}
                    <div
                      className={`w-full py-1.5 flex justify-center items-center text-white font-semibold text-sm rounded-md shadow-sm mb-1 z-20 ${item.colorClass}`}
                    >
                      {item.value.toString().padStart(2, "0")}
                    </div>

                    {/* Striped Body */}
                    <div
                      className={`w-full flex-1 rounded-md relative overflow-hidden ${item.colorClass}`}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, rgba(255,255,255,0.25) 0, rgba(255,255,255,0.25) 2px, transparent 2px, transparent 6px)",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* X-Axis Label */}
                  <span className="absolute -bottom-7 text-text-primary text-sm font-medium text-center w-full whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-7"></div> {/* Space for bottom labels */}
      </div>
    </div>
  );
}
