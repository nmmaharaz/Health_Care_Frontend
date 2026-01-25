import DashboardHeader from "@/components/shared/DashboardHeader";
import RefreshButton from "@/components/shared/RefreshButton";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { Suspense } from "react";

export default function SpecialitiesManagementPage() {
  return (
    <div>
      <DashboardHeader title="Specialities Management"  subtitle="Manage prescription information and details"></DashboardHeader>
      <div className="flex">
        <RefreshButton showLabel="Refresh"/>
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10}></TableSkeleton>}></Suspense>
    </div>
  )
}
