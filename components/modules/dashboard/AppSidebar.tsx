import { X } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import SidebarMenuClient from "./SidebarMenuClient";
import { getUserInfo } from "@/service/auth/user";
import { IUserInfo } from "@/types/user";


export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const userInfo = await getUserInfo() as IUserInfo
  return (
    <Sidebar {...props}>
      <div>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <div className="flex justify-between">
                <SidebarMenuButton size="lg" asChild>
                  <a href="#">
                    {/* <div className="bg-sidebar-primary  text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                      <GalleryVerticalEnd className="size-4" />
                    </div> */}
                    <div className="flex pl-9 flex-col gap-0.5 leading-none">
                      <span className="text-[#4338ca] font-bold text-2xl">Health Care</span>
                      {/* <span className="">v1.0.0</span> */}
                    </div>
                  </a>
                </SidebarMenuButton>
                <SidebarTrigger className='md:hidden'>
                  <X className="w-5 h-5"/>
                </SidebarTrigger>

              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuClient userInfo={userInfo}></SidebarMenuClient>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </div>
    </Sidebar>
  )
}
