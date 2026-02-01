import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './AppSidebar'
import React from 'react'
import { Menu } from 'lucide-react'
import SearchInputFeild from '@/components/ui/SearchInputFeild'
import UserProfileDropdown from './UserProfileDropdown'

export default function DashbordLayoutStyle({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className=" shrink-0 py-1 px-4 md:px-4 lg:px-8 border-b border-gray-100 bg-white">
                        <div className="flex items-center justify-between gap-2">
                            <SidebarTrigger className='lg:hidden'><Menu /></SidebarTrigger>
                            <SearchInputFeild></SearchInputFeild>
                            <div className="flex items-center justify-between px-4 cursor-pointer py-3 gap-3 rounded-lg w-fit">
                                <UserProfileDropdown></UserProfileDropdown>
                                {/* <button className="ml-4 text-gray-500 hover:text-gray-700 transition">
                                    <Settings size={22} />
                                </button> */}
                            </div>
                            {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
                        </div>
                    </header>
                    <div className="px-4 lg:px-8">
                        {/* <Outlet></Outlet> */}
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}
