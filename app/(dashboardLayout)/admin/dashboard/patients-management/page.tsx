import PatientsFilter from "@/components/modules/admin/paitent/PatientsFilters";
import PatientsTable from "@/components/modules/admin/paitent/PatientsTable";
import DashboardHeader from "@/components/shared/Dashboard/DashboardHeader";
import TablePagination from "@/components/shared/Dashboard/TablePagination";
import { TableSkeleton } from "@/components/shared/Dashboard/TableSkeleton";
import { getAllPatients } from "@/service/admin/patientManagement";
import { queryStringFormatter } from "@/utils/formatter";
import { Suspense } from "react";

export default async function PatientManagementPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj)
  const { data } = await getAllPatients(queryString)
  console.log("Patients data in PatientManagementPage:", data);
  const totalPages = Math.ceil(
    (data?.meta?.total || 1) / (data?.meta?.limit || 1)
  );
  // const specialities = await getAllSpecialities()
  return (
    <div>
      <DashboardHeader title="Patient Management" subtitle="Manage patient information and details"></DashboardHeader>
      {/* <DoctorTableHeader specialities={specialities.data}></DoctorTableHeader>
       */}
       <PatientsFilter></PatientsFilter>
      <Suspense fallback={<TableSkeleton columns={2} rows={10}></TableSkeleton>}>
        <PatientsTable patients={data?.data || []} />
      </Suspense>
      <TablePagination
        currentPage={data?.meta?.page || 1}
        totalPages={totalPages || 1}
      />
    </div>
  )
}
