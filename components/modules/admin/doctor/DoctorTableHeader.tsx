"use client"

import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import SpecialitiesCreate from "../specialities/SpecialitiesCreate"
import RefreshButton from "@/components/shared/Dashboard/RefreshButton"
import CreateButton from "@/components/shared/Dashboard/CreateButton"


export default function DoctorTableHeader() {
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
            <SpecialitiesCreate
                key={isDialogOpen ? 'open' : 'closed'}
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSuccess={handleSuccess}
            ></SpecialitiesCreate>

            <div className='flex py-4 border-t border-gray-100 mt-4 justify-between'>
                <RefreshButton showLabel="Refresh" />
                <CreateButton label="Create Specialities" onClick={() => setIsDialogOpen(true)}></CreateButton>
            </div>
        </div>
    )
}
