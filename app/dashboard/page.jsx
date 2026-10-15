"use client";

import { useSearchParams } from "next/navigation";
import { useSyncExternalStore } from "react";
import DashboardPage from "../../components/dashboard/pages/admin/dashboard/DashboardPage";
import CustomerDashboardPage from "../../components/dashboard/pages/customer/CustomerDashboardPage";

function getStoredRole() {
  if (typeof window === "undefined") return "admin";
  try {
    return localStorage.getItem("user_role") || "admin";
  } catch {
    return "admin";
  }
}

function subscribe() {
  return () => {};
}

export default function DashboardIndex() {
  const searchParams = useSearchParams();
  const paramRole = searchParams.get("role");
  const storedRole = useSyncExternalStore(subscribe, getStoredRole, () => "admin");

  const effectiveRole = paramRole || storedRole;

  if (effectiveRole === "customer") {
    return <CustomerDashboardPage />;
  }

  return <DashboardPage />;
}
