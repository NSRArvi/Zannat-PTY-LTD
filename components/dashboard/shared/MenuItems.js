import { 
  LayoutDashboard, 
  Workflow, 
  FileUser, 
  Landmark, 
  FileText, 
  ShieldCheck, 
  BadgePercent,
  User,
  Settings,
  PlusCircle,
  Headphones
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

export const CustomerMenuItems = [
  {
    title: "Dashboard",
    link: "/dashboard?role=customer",
    icon: LayoutDashboard,
  },
  {
    title: "New Application",
    link: "/dashboard/create-scenarios",
    icon: PlusCircle,
  },
  {
    title: "Applications",
    link: "/dashboard/applications?role=customer",
    icon: FileText,
  },
];

export const CustomerBottomMenuItems = [
  {
    title: "Account Settings",
    link: "/dashboard/settings?role=customer",
    icon: Settings,
  },
  {
    title: "Contact Us",
    link: "/dashboard/contact?role=customer",
    icon: Headphones,
  },
];

