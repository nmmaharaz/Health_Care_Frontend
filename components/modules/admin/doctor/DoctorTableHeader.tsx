"use client"

import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import RefreshButton from "@/components/shared/Dashboard/RefreshButton"
import CreateButton from "@/components/shared/Dashboard/CreateButton"
import CreateDoctor from "./CreateDoctor"
import { ISpecialitiesProps } from "@/types/admin/secialities.interface"


export default function DoctorTableHeader({specialities}: ISpecialitiesProps) {
    const router = useRouter()
    const [, startTransition] = useTransition()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleSuccess = () => {
        startTransition(() => {
            router.refresh()
        })
    }
    return (
        <div>
            <CreateDoctor
                specialities={specialities}
                key={isDialogOpen ? 'open' : 'closed'}
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSuccess={handleSuccess}
            ></CreateDoctor>

            <div className='flex py-4 border-t border-gray-100 mt-4 justify-between'>
                <RefreshButton showLabel="Refresh" />
                <CreateButton label="Create Doctor" onClick={() => setIsDialogOpen(true)}></CreateButton>
            </div>
        </div>
    )
}
