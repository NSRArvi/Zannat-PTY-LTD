import { 
  LayoutDashboard, 
  Workflow, 
  FileUser, 
  Landmark, 
  FileText, 
  ShieldCheck, 
  BadgePercent,
  User,
  Settings
} from "lucide-react";

export const MenuItems = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Scenarios",
    link: "/dashboard/scenarios",
    icon: Workflow,
  },
  {
    title: "Applications",
    link: "/dashboard/applications",
    icon: FileUser,
  },
  {
    title: "Lenders",
    link: "/dashboard/lenders",
    icon: Landmark,
  },
  {
    title: "Documents",
    link: "/dashboard/documents",
    icon: FileText,
  },
  {
    title: "Compliance",
    link: "/dashboard/compliance",
    icon: ShieldCheck,
  },
  {
    title: "Commissions",
    link: "/dashboard/commissions",
    icon: BadgePercent,
  },
];

export const BottomMenuItems = [
  {
    title: "Profile",
    link: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    link: "/dashboard/settings",
    icon: Settings,
  },
];
