import SpecialitiesTable from "@/components/modules/admin/specialities/SpecialitiesTable";
import DashboardHeader from "@/components/shared/Dashboard/DashboardHeader";
import RefreshButton from "@/components/shared/Dashboard/RefreshButton";
import { TableSkeleton } from "@/components/shared/Dashboard/TableSkeleton";
import { getAllSpecialities } from "@/service/admin/specialitiesManagement";
import { Suspense } from "react";

export default async function SpecialitiesManagementPage() {
  const {data} = await getAllSpecialities()
  return (
    <div>
      <DashboardHeader title="Specialities Management"  subtitle="Manage prescription information and details"></DashboardHeader>
      <div className="flex py-4 border-t border-gray-100 mt-4">
        <RefreshButton showLabel="Refresh"/>
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10}></TableSkeleton>}>
      <SpecialitiesTable specialities={data}></SpecialitiesTable>
      </Suspense>
    </div>
  )
}
