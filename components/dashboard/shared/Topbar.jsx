"use client";
import { useState } from "react";
import {
  ChevronLeft,
  Search,
  Bell,
  CircleHelp,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function Topbar() {
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop().replace(/-/g, " ");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between h-20 px-4 md:px-8 bg-white border-b border-gray-100 font-sans">
        {/* Left side: Back button and Title */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-1 hover:bg-gray-100 rounded-md text-text-dark transition-colors lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <button className="p-1 hover:bg-gray-100 rounded-md text-text-dark transition-colors hidden lg:block">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-bold text-text-dark capitalize">
            {currentPath}
          </h1>
        </div>

        {/* Right side: Search, Icons, Profile */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Bar */}
          <div className="relative flex items-center hidden md:flex">
            <Search className="absolute left-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by customer, scenario, application..."
              className="w-[280px] lg:w-[380px] pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div className="hidden md:block h-8 w-px bg-gray-200"></div>

          {/* Notifications and Help */}
          <div className="flex items-center gap-2 md:gap-5 text-text-dark">
            <button className="relative p-1 hover:bg-gray-100 rounded-md transition-colors">
              <Bell className="w-5 h-5 md:w-[22px] md:h-[22px]" />
              <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-3 h-3 md:w-4 md:h-4 text-[8px] md:text-[9px] font-bold text-white bg-[#ef4444] rounded-full border-2 border-white">
                3
              </span>
            </button>
            <button className="hidden sm:block p-1 hover:bg-gray-100 rounded-md transition-colors">
              <CircleHelp className="w-5 h-5 md:w-[22px] md:h-[22px]" />
            </button>
          </div>

          <div className="h-8 w-px bg-gray-200"></div>

          {/* Profile */}
          <button className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded-lg text-left transition-colors">
            <img
              src="https://ui-avatars.com/api/?name=Noor+Washe&background=e2e8f0&color=0f172a&bold=true"
              alt="User Avatar"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="hidden lg:block">
              <p className="text-sm font-bold text-text-dark">Noor Washe</p>
              <p className="text-xs text-gray-500 font-medium">Broker</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500 ml-1 hidden sm:block" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Sidebar Drawer */}
          <div className="relative flex w-[280px] max-w-sm flex-col bg-white h-full shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <img src="/logo.png" alt="Logo" className="w-[100px] object-contain" />
              <button 
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {/* The Sidebar component automatically fills its container */}
            <Sidebar />
          </div>
        </div>
      )}
    </>
  );
}
