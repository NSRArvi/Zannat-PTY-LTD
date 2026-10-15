"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  MenuItems,
  BottomMenuItems,
  CustomerMenuItems,
  CustomerBottomMenuItems,
} from "./MenuItems";

export default function Sidebar({ role: propRole }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Determine if customer mode from prop or query param or cookie/storage
  const isCustomer =
    propRole === "customer" || searchParams.get("role") === "customer";

  const mainItems = isCustomer ? CustomerMenuItems : MenuItems;
  const bottomItems = isCustomer ? CustomerBottomMenuItems : BottomMenuItems;
  const portalTitle = isCustomer ? "Customer's Portal" : "Broker's Portal";

  return (
    <aside className="w-full h-full bg-white flex flex-col font-sans">
      <div className="p-4">
        <h1 className="text-text-primary font-medium text-sm">{portalTitle}</h1>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
        {mainItems.map((item, index) => {
          const itemBase = item.link.split("?")[0];
          const keyword = itemBase.split("/").pop();
          const isActive =
            itemBase === "/dashboard"
              ? pathname === "/dashboard"
              : pathname?.includes(keyword);
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.link}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-base ${
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
          {bottomItems.map((item, index) => {
            const itemBase = item.link.split("?")[0];
            const isActive = pathname === itemBase;
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.link}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 font-semibold text-[15px] ${
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
