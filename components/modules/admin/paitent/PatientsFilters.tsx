"use client";

import ClearFiltersButton from "@/components/shared/Dashboard/ClearFiltersButton";
import RefreshButton from "@/components/shared/Dashboard/RefreshButton";
import SearchFilter from "@/components/shared/Dashboard/SearchFilter";

const PatientsFilter = () => {
  return (
    <div className="flex py-4 border-t border-gray-100 flex-col mt-4 md:flex-row md:items-center md:justify-between">
      {/* Row 1: Search and Refresh */}
      <div className="flex items-center gap-3">
        <RefreshButton showLabel="Refresh"/>
        <SearchFilter paramName="searchTerm" placeholder="Search patients..." />
      </div>

      <div className="flex items-center gap-3">
        <SearchFilter paramName="email" placeholder="Email" />
        <SearchFilter paramName="contactNumber" placeholder="Contact" />
        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default PatientsFilter;
