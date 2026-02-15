// "use client"

// import { useRouter } from "next/navigation"
// import { useState, useTransition } from "react"
// import RefreshButton from "@/components/shared/Dashboard/RefreshButton"
// import CreateButton from "@/components/shared/Dashboard/CreateButton"
// import CreateDoctor from "./CreateDoctor"
// import { ISpecialitiesProps } from "@/types/admin/secialities.interface"
// import DoctorFilters from "./DoctorFilters"
// import SearchFilter from "@/components/shared/Dashboard/SearchFilter"


// export default function DoctorTableHeader({ specialities }: ISpecialitiesProps) {
//     const router = useRouter()
//     const [, startTransition] = useTransition()
//     const [isDialogOpen, setIsDialogOpen] = useState(false)
//     const handleSuccess = () => {
//         startTransition(() => {
//             router.refresh()
//         })
//     }
//     const handleCloseDialog = () => {
//         setIsDialogOpen(false);
//     };
//     return (
//         <div>
//             <CreateDoctor
//                 key={isDialogOpen ? 'open' : 'closed'}
//                 open={isDialogOpen}
//                 onClose={handleCloseDialog}
//                 onSuccess={handleSuccess}
//                 specialities={specialities}
//             ></CreateDoctor>

//             <div className='flex flex-col lg:flex-row py-4 border-t border-gray-100 mt-4 gap-3 md:gap-0 justify-between'>
//                 <div className="flex justify-between flex-row gap-4">
//                     <RefreshButton showLabel="Refresh" />
//                     <div className="w-full">
//                         <SearchFilter paramName="searchTerm" placeholder="Search doctors..." />
//                     </div>
//                     <div className="lg:hidden flex">
//                         <CreateButton label="Create Doctor" onClick={() => setIsDialogOpen(true)}></CreateButton>
//                     </div>
//                 </div>
//                 <div className="flex flex-col md:mt-4 lg:mt-0 lg:flex-row  gap-4">
//                     <DoctorFilters specialties={specialities}></DoctorFilters>
//                     <div className="hidden lg:flex justify-end lg:flex-none">
//                         <CreateButton label="Create Doctor" onClick={() => setIsDialogOpen(true)}></CreateButton>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import CreateDoctor from "./CreateDoctor";
import RefreshButton from "@/components/shared/Dashboard/RefreshButton";
import SearchFilter from "@/components/shared/Dashboard/SearchFilter";
import CreateButton from "@/components/shared/Dashboard/CreateButton";
import ClearFiltersButton from "@/components/shared/Dashboard/ClearFiltersButton";
import { ISpecialitiesProps } from "@/types/admin/secialities.interface";

const DoctorTableHeader = ({ specialities }: ISpecialitiesProps) => {
         const router = useRouter()
    const [, startTransition] = useTransition()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleSuccess = () => {
        startTransition(() => {
            router.refresh()
        })
    }
    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };
    return (
        <div className="flex py-4 gap-y-4 border-t border-gray-100 flex-col mt-4 md:flex-row md:items-center md:justify-between">
           
            {/* Row 1: Search and Refresh */}
            <div className="flex items-center gap-3">
                <RefreshButton showLabel="Refresh" />
                <SearchFilter paramName="searchTerm" placeholder="Search schedules..." />
            </div>

            <div className="flex items-center gap-3">
                <SearchFilter paramName="email" placeholder="Email" />
                <SearchFilter paramName="contactNumber" placeholder="Contact" />
                <div className="">
                    <CreateButton label="Create Doctor" onClick={() => setIsDialogOpen(true)}></CreateButton>
                </div>
                <ClearFiltersButton />
            </div>
             <CreateDoctor
                key={isDialogOpen ? 'open' : 'closed'}
                open={isDialogOpen}
                onClose={handleCloseDialog}
                onSuccess={handleSuccess}
                specialities={specialities}
            ></CreateDoctor>
        </div>
    );
};

export default DoctorTableHeader;
