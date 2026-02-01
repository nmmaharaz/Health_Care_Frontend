import DoctorTable from '@/components/modules/admin/doctor/DoctorTable'
import DoctorTableHeader from '@/components/modules/admin/doctor/DoctorTableHeader'
import DashboardHeader from '@/components/shared/Dashboard/DashboardHeader'
import TablePagination from '@/components/shared/Dashboard/TablePagination'
import { TableSkeleton } from '@/components/shared/Dashboard/TableSkeleton'
import { getAllDoctors } from '@/service/admin/doctorManagement'
import { getAllSpecialities } from '@/service/admin/specialitiesManagement'
import { queryStringFormatter } from '@/utils/formatter'
import { Suspense } from 'react'

export default async function DoctorManagementPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj)
  const { data } = await getAllDoctors(queryString)
  const totalPages = Math.ceil(
    (data?.meta?.total || 1) / (data?.meta?.limit || 1)
  );
  const specialities = await getAllSpecialities()

  return (
    <div>
      <DashboardHeader title="Doctor Management" subtitle="Manage doctor information and details"></DashboardHeader>
      <DoctorTableHeader specialities={specialities.data}></DoctorTableHeader>
      <Suspense fallback={<TableSkeleton columns={2} rows={10}></TableSkeleton>}>
        <DoctorTable doctor={data.data} specialities={specialities.data}></DoctorTable>
      </Suspense>
      <TablePagination
        currentPage={data?.meta?.page || 1}
        totalPages={totalPages || 1}
      />
    </div>
  )
}
