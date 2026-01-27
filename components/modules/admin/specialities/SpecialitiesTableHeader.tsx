"use client"
import CreateButton from '@/components/shared/Dashboard/CreateButton'
import RefreshButton from '@/components/shared/Dashboard/RefreshButton'
import React, { useState } from 'react'
import SpecialitiesCreate from './SpecialitiesCreate'

export default function SpecialitiesTableHeader() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleSuccess = () =>{
        console.log("")
    }
    return (
        <div>
            <SpecialitiesCreate 
            open={isDialogOpen}
            onClose={()=>setIsDialogOpen(false)}
            onSuccess={handleSuccess}
            ></SpecialitiesCreate>
            <div className='flex py-4 border-t border-gray-100 mt-4 justify-between'>
                <RefreshButton showLabel="Refresh" />
                <CreateButton label="Create Specialities" onClick={() => setIsDialogOpen(true)}></CreateButton>
            </div>
        </div>
    )
}
