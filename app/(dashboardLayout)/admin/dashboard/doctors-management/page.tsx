import DoctorTable from '@/components/modules/admin/doctor/DoctorTable'
import DoctorTableHeader from '@/components/modules/admin/doctor/DoctorTableHeader'
import DashboardHeader from '@/components/shared/Dashboard/DashboardHeader'
import { TableSkeleton } from '@/components/shared/Dashboard/TableSkeleton'
import { getAllDoctors } from '@/service/admin/doctorManagement'
import { getAllSpecialities } from '@/service/admin/specialitiesManagement'
import { Suspense } from 'react'

export default async function DoctorManagementPage() {
  const { data } = await getAllDoctors()
  const specialities = await getAllSpecialities()

  return (
    <div>
      <DashboardHeader title="Doctor Management" subtitle="Manage doctor information and details"></DashboardHeader>
      <DoctorTableHeader specialities={specialities.data}></DoctorTableHeader>
      <Suspense fallback={<TableSkeleton columns={2} rows={10}></TableSkeleton>}>
        <DoctorTable doctor={data.data}></DoctorTable>
      </Suspense>
    </div>
  )
}
