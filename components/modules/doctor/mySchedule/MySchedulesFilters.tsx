/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ClearFiltersButton from "@/components/shared/Dashboard/ClearFiltersButton";
import CreateButton from "@/components/shared/Dashboard/CreateButton";
import RefreshButton from "@/components/shared/Dashboard/RefreshButton";
import SelectFilter from "@/components/shared/Dashboard/SelectFilter";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import BookScheduleDialog from "./BookScheduleDialog";


interface MySchedulesHeaderProps {
    availableSchedules: any[];
}


const MySchedulesFilters = ({ availableSchedules }: MySchedulesHeaderProps) => {
    // console.log("Available Schedules in Filters:", availableSchedules);
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSuccess = () => {
        setIsDialogOpen(false);
        startTransition(() => {
            router.refresh();
        });
    };

    // const handleOpenDialog = () => {
    //     setIsDialogOpen(true);
    // };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="flex flex-row items-center justify-between space-y-0 space-x-3">
            <BookScheduleDialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                onSuccess={handleSuccess}
                availableSchedules={availableSchedules}
            />
            {/* Row 1: Refresh Button */}
            <div className="flex items-center gap-3">
                <RefreshButton showLabel="Refresh"/>
            </div>

            {/* Row 2: Filter Controls */}
            <div className="flex items-center gap-3 flex-wrap">
                {/* Booking Status Filter */}
                <SelectFilter
                    paramName="isBooked"
                    placeholder="Booking Status"
                    //   defaultValue="All Schedules"
                    options={[
                        { label: "Available", value: "false" },
                        { label: "Booked", value: "true" },
                    ]}
                />
                <CreateButton label="Create Schedule" onClick={() => setIsDialogOpen(true)}></CreateButton>
                {/* Clear All Filters */}
                <ClearFiltersButton />
            </div>
        </div>
    );
};

export default MySchedulesFilters;
