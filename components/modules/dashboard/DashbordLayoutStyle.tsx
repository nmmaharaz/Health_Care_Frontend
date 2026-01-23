import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from './AppSidebar'
import { Separator } from '@/components/ui/separator'
import { Breadcrumb} from '@/components/ui/breadcrumb'
import React from 'react'
import { Menu } from 'lucide-react'

export default function DashbordLayoutStyle({children}: {children: React.ReactNode}) {
    return (
        <div> 
            <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="bg-sidebar" >
                <header className="flex  h-16 shrink-0 items-center gap-2 border-b">
                    <div className="flex items-center gap-2 px-3">
                        <SidebarTrigger className='md:hidden'><Menu /></SidebarTrigger>
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            {/* <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="#">
                                        Building Your Application
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList> */}
                        </Breadcrumb>
                    </div>
                </header>
                <div className="px-12 bg-sidebar">
                    {/* <Outlet></Outlet> */}
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
        </div>
    )
}
