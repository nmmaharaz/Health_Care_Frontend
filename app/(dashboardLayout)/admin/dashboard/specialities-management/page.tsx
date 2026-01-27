import SpecialitiesTable from "@/components/modules/admin/specialities/SpecialitiesTable";
import SpecialitiesTableHeader from "@/components/modules/admin/specialities/SpecialitiesTableHeader";
import DashboardHeader from "@/components/shared/Dashboard/DashboardHeader";
import { TableSkeleton } from "@/components/shared/Dashboard/TableSkeleton";
import { getAllSpecialities } from "@/service/admin/specialitiesManagement";
import { Suspense } from "react";

export default async function SpecialitiesManagementPage() {
  const {data} = await getAllSpecialities()
  return (
    <div>
      <DashboardHeader title="Specialities Management"  subtitle="Manage prescription information and details"></DashboardHeader>
      <SpecialitiesTableHeader></SpecialitiesTableHeader>
      <Suspense fallback={<TableSkeleton columns={2} rows={10}></TableSkeleton>}>
      <SpecialitiesTable specialities={data}></SpecialitiesTable>
      </Suspense>
    </div>
  )
}
