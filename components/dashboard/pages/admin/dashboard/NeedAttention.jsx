import {
  FileText,
  History,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function NeedAttention() {
  const items = [
    {
      title: "3 documents missing",
      subtitle: "Across 2 scenarios",
      icon: FileText,
    },
    {
      title: "2 applications need update",
      subtitle: "Lender response received",
      icon: History,
    },
    {
      title: "1 compliance item expiring",
      subtitle: "Insurance expires in 14 days",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="bg-white p-7 rounded-2xl shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-text-dark">Needs Attention</h2>
        <Link
          href="#"
          className="flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* List Container */}
      <div className="bg-[#f8f9fa] rounded-2xl border border-gray-100 flex-1 flex flex-col divide-y divide-gray-200/60">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href="#"
              className="flex items-center gap-4 px-6 py-5 hover:bg-gray-100/60 transition-colors rounded-2xl first:rounded-b-none last:rounded-t-none"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#fde4e4] flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#e5484d]" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-text-dark text-lg leading-tight">
                  {item.title}
                </p>
                <p className="text-text-primary text-sm mt-1">
                  {item.subtitle}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
