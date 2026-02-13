"use client";

import ClearFiltersButton from "@/components/shared/Dashboard/ClearFiltersButton";
import CreateButton from "@/components/shared/Dashboard/CreateButton";
import RefreshButton from "@/components/shared/Dashboard/RefreshButton";
import SearchFilter from "@/components/shared/Dashboard/SearchFilter";
import CreateSchedule from "./CreateSchedule";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ScheduleHeader = () => {
    const router = useRouter();
  const [, startTransition] = useTransition();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSuccess = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  //force remount to reset state of form
  const [dialogKey, setDialogKey] = useState(0);

  const handleOpenDialog = () => {
    setDialogKey((prev) => prev + 1); // Force remount
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
    return (
        <div className="flex py-4 gap-y-4 border-t border-gray-100 flex-col mt-4 md:flex-row md:items-center md:justify-between">
            <CreateSchedule
                key={dialogKey}
                open={isDialogOpen}
                onClose={handleCloseDialog}
                onSuccess={handleSuccess}
            ></CreateSchedule>
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
        </div>
    );
};

export default ScheduleHeader;
