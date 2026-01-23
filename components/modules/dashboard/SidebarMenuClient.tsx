"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  UserCircle,
  Settings,
  FileText,
  Users,
  ShoppingCart,
  Bell,
  ShieldCheck,
  Database,
  HelpCircle,
} from "lucide-react";

const navMain = [
  {
    title: "Dashboard",
    items: [
      { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
      { title: "Analytics", url: "/dashboard/analytics", icon: Database },
    ],
  },
  {
    title: "User Management",
    items: [
      { title: "All Users", url: "/users/all", icon: Users },
      { title: "Profile", url: "/users/profile", icon: UserCircle },
    ],
  },
  {
    title: "Sales",
    items: [
      { title: "Orders", url: "/sales/orders", icon: ShoppingCart },
      { title: "Invoices", url: "/sales/invoices", icon: FileText },
    ],
  },
  {
    title: "Settings",
    items: [
      { title: "General Settings", url: "/settings/general", icon: Settings },
      { title: "Security", url: "/settings/security", icon: ShieldCheck },
    ],
  },
  {
    title: "Support",
    items: [
      { title: "Notifications", url: "/support/notifications", icon: Bell },
      { title: "Help Center", url: "/support/help", icon: HelpCircle },
    ],
  },
];

export default function SidebarMenuClient() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navMain.map((group) => (
        <SidebarMenuItem key={group.title}>
          <SidebarMenuSub>
            {group.items.map((item) => {
              const isActive = pathname === item.url;

              return (
                <Link
                  key={item.title}
                  href={item.url}
                  className={`mt-2 block rounded-md ${
                    isActive ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <SidebarMenuSubItem className="flex items-center gap-3 px-4 py-2">
                    <div
                      className={`rounded-md p-1 ${
                        isActive
                          ? "bg-[linear-gradient(136deg,#9A0493_0%,#B317AA_50%,#B317AA_100%)]"
                          : "bg-[#ccc]"
                      }`}
                    >
                      <item.icon className="size-4 text-white" />
                    </div>

                    <SidebarMenuSubButton asChild>
                      <p
                        className={`text-sm font-semibold ${
                          isActive
                            ? "text-black"
                            : "text-gray-500"
                        }`}
                      >
                        {item.title}
                      </p>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </Link>
              );
            })}
          </SidebarMenuSub>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
