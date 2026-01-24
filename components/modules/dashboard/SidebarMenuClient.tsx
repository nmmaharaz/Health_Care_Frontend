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

export default function SidebarMenuClient({ userInfo }: { userInfo: IUserInfo }) {
  const pathname = usePathname();
  const data = getNavItemsByRole(userInfo.role as UserRole)

  return (
    <SidebarMenu>
      {data.map((group, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSub>
            {group.title && <p className=" border-t-2 border-gray-100 pt-3 text-md font-semibold text-gray-400 mt-1 px-4">{group.title}</p>}
            {group.items.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = getIconComponent(item.icon)

              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`block rounded-md ${isActive ? "bg-linear-to-r from-[#4338ca] to-[#4f6ad4f1] drop-shadow-sm" : ""
                  // className={`block rounded-md ${isActive ? "bg-white shadow-sm" : ""
                    }`}
                >
                  <SidebarMenuSubItem className="flex items-center gap-1 px-4 py-2">
                    <div
                      className={`rounded-md p-1 ${isActive
                        ? "bg-white"
                        : "bg-[#ccc]"
                        }`}
                    >
                      <Icon className={`size-4 ${isActive
                        ? "text-[#4338ca]"
                        : "text-white"
                        } `} />
                    </div>
                    {/* <div
                      className={`rounded-md p-1 ${isActive
                        ? "bg-linear-to-br bg-[#4338ca], bg-[#4f6ad4f1]"
                        : "bg-[#ccc]"
                        }`}
                    >
                      <Icon className="size-4 text-white" />
                    </div> */}

                    <SidebarMenuSubButton asChild>
                      <p
                        className={`text-sm font-semibold ${isActive
                          ? "text-white"
                          : "text-gray-500"
                          }`}
                      >
                        {item.title}
                      </p>
                      {/* <p
                        className={`text-sm font-semibold ${isActive
                          ? "text-[#4338ca]"
                          : "text-gray-500"
                          }`}
                      >
                        {item.title}
                      </p> */}
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
