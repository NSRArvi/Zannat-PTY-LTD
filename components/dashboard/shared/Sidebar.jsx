"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItems, BottomMenuItems } from "./MenuItems";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-white border-r border-gray-100 flex flex-col font-sans">
      <div className="p-4">
        <h1 className="text-text-primary">Broker's Portal</h1>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
        {MenuItems.map((item, index) => {
          const keyword = item.link.split("/").pop();
          const isActive =
            item.link === "/dashboard"
              ? pathname === "/dashboard"
              : pathname?.includes(keyword);
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.link}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-lg ${
                isActive
                  ? "bg-secondary-light text-primary"
                  : "text-text-dark hover:bg-slate-50"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${isActive ? "text-primary" : "text-text-dark"}`}
              />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="px-4 pb-8 mt-auto">
        <div className="h-px bg-gray-200 mb-6 mx-4"></div>
        <div className="space-y-2">
          {BottomMenuItems.map((item, index) => {
            const isActive = pathname === item.link;
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.link}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-[16px] ${
                  isActive
                    ? "bg-secondary-light text-primary"
                    : "text-text-dark hover:bg-slate-50"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${isActive ? "text-primary" : "text-text-dark"}`}
                />
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
