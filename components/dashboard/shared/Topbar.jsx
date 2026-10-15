"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  ChevronLeft,
  Search,
  Bell,
  CircleHelp,
  ChevronDown,
  Menu,
  X,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import Sidebar from "./Sidebar";

export default function Topbar() {
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop().replace(/-/g, " ");
  const searchParams = useSearchParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);

  const isCustomer = searchParams?.get("role") === "customer";
  const userRole = isCustomer ? "Customer" : "Broker";
  const userName = isCustomer ? "Noor Sashe" : "Noor Washe";
  const userAvatarName = isCustomer ? "Noor+Sashe" : "Noor+Washe";

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("user_role");
      localStorage.removeItem("user_email");
    } catch {
      // ignore
    }
    setIsProfileMenuOpen(false);
    router.push("/");
  };

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

          {/* Profile Dropdown */}
          <div className="relative" ref={profileMenuRef}>
            <button
              type="button"
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded-xl text-left transition-colors cursor-pointer select-none"
              aria-expanded={isProfileMenuOpen}
              aria-haspopup="true"
            >
              <img
                src={`https://ui-avatars.com/api/?name=${userAvatarName}&background=e2e8f0&color=0f172a&bold=true`}
                alt="User Avatar"
                className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border border-gray-200"
              />
              <div className="hidden lg:block">
                <p className="text-sm font-bold text-text-dark">{userName}</p>
                <p className="text-xs text-gray-500 font-medium">{userRole}</p>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 ml-1 hidden sm:block transition-transform duration-200 ${
                  isProfileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {/* User Info Header */}
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-bold text-text-dark">{userName}</p>
                  <p className="text-xs text-text-primary mt-0.5 truncate">
                    {isCustomer ? "user@zannatptyltd.com" : "admin@zannatptyltd.com"}
                  </p>
                </div>

                {/* Profile Links */}
                <div className="py-1">
                  <Link
                    href={isCustomer ? "/dashboard/settings?role=customer" : "/dashboard/profile"}
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-text-dark hover:bg-gray-50 transition-colors"
                  >
                    <User className="w-4 h-4 text-text-primary" />
                    <span>My Profile</span>
                  </Link>
                  <Link
                    href={isCustomer ? "/dashboard/settings?role=customer" : "/dashboard/settings"}
                    onClick={() => setIsProfileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-text-dark hover:bg-gray-50 transition-colors"
                  >
                    <Settings className="w-4 h-4 text-text-primary" />
                    <span>Account Settings</span>
                  </Link>
                </div>

                {/* Logout Button */}
                <div className="pt-1 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer text-left"
                  >
                    <LogOut className="w-4 h-4 text-red-500" />
                    <span>Log Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar Drawer */}
          <div className="relative flex w-72 max-w-[85vw] flex-col bg-white h-full shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            {/* Header with Logo and Close button */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
              <img src="/logo.png" alt="Logo" className="w-[120px] object-contain" />
              <button 
                type="button"
                className="p-2 text-gray-500 hover:text-text-dark hover:bg-gray-100 rounded-xl transition-colors cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sidebar content */}
            <div className="flex-1 overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
