import DoctorTable from '@/components/modules/admin/doctor/DoctorTable'
import DoctorTableHeader from '@/components/modules/admin/doctor/DoctorTableHeader'
import DashboardHeader from '@/components/shared/Dashboard/DashboardHeader'
import { TableSkeleton } from '@/components/shared/Dashboard/TableSkeleton'
import { getAllDoctors } from '@/service/admin/doctorManagement'
import { Suspense } from 'react'

export default async function DoctorManagementPage() {
  const {data} =await getAllDoctors()

  return (
    <div>
      <DashboardHeader title="Doctor Management" subtitle="Manage doctor information and details"></DashboardHeader>
      <DoctorTableHeader></DoctorTableHeader>
      <Suspense fallback={<TableSkeleton columns={2} rows={10}></TableSkeleton>}>
        <DoctorTable doctor={data.data}></DoctorTable>
      </Suspense>
    </div>
  )
}
