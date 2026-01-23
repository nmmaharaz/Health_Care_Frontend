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

import { getNavItemsByRole } from "./DashboardNavItem";
import { IUserInfo } from "@/types/user";
import { UserRole } from "@/utils/auth-utils";
import { getIconComponent } from "@/utils/icon-mapper";

// const navMain = [
//   {
//     title: "Dashboard",
//     items: [
//       { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
//       { title: "Analytics", url: "/dashboard/analytics", icon: Database },
//     ],
//   },
//   {
//     title: "User Management",
//     items: [
//       { title: "All Users", url: "/users/all", icon: Users },
//       { title: "Profile", url: "/users/profile", icon: UserCircle },
//     ],
//   },
//   {
//     title: "Sales",
//     items: [
//       { title: "Orders", url: "/sales/orders", icon: ShoppingCart },
//       { title: "Invoices", url: "/sales/invoices", icon: FileText },
//     ],
//   },
//   {
//     title: "Settings",
//     items: [
//       { title: "General Settings", url: "/settings/general", icon: Settings },
//       { title: "Security", url: "/settings/security", icon: ShieldCheck },
//     ],
//   },
//   {
//     title: "Support",
//     items: [
//       { title: "Notifications", url: "/support/notifications", icon: Bell },
//       { title: "Help Center", url: "/support/help", icon: HelpCircle },
//     ],
//   },
// ];


export default function SidebarMenuClient({userInfo}: {userInfo: IUserInfo}) {
  const pathname = usePathname();
  const data = getNavItemsByRole(userInfo.role as UserRole)

  return (
    <SidebarMenu>
      {data.map((group, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSub>
            {group.items.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = getIconComponent(item.icon)

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`mt-2 block rounded-md ${
                    isActive ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <SidebarMenuSubItem className="flex items-center gap-3 px-4 py-2">
                    <div
                      className={`rounded-md p-1 ${
                        isActive
                          ? "bg-linear-to-br bg-[#4338ca], bg-[#4f6ad4f1]"
                          : "bg-[#ccc]"
                      }`}
                    >
                      <Icon className="size-4 text-white" />
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
