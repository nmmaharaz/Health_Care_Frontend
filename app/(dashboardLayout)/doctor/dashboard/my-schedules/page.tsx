import MySchedulesFilters from "@/components/modules/doctor/mySchedule/MySchedulesFilters";
import MySchedulesTable from "@/components/modules/doctor/mySchedule/MyScheduleTable";
import DashboardHeader from "@/components/shared/Dashboard/DashboardHeader";
import TablePagination from "@/components/shared/Dashboard/TablePagination";
import { TableSkeleton } from "@/components/shared/Dashboard/TableSkeleton";
import { getAvailableSchedules, getDoctorOwnSchedules } from "@/service/doctor/doctorSchedule.service";
import { queryStringFormatter } from "@/utils/formatter";
import { Suspense } from "react";

interface DoctorMySchedulesPageProps {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    isBooked?: string;
  }>;
}

const DoctorMySchedulesPage = async ({
  searchParams,
}: DoctorMySchedulesPageProps) => {
  const params = await searchParams;

  const queryString = queryStringFormatter(params);
  const myDoctorsScheduleResponse = await getDoctorOwnSchedules(queryString);
  const {data: availableSchedulesResponse} = await getAvailableSchedules();
  console.log("availableSchedulesResponse", availableSchedulesResponse);

  const schedules = myDoctorsScheduleResponse?.data || [];
  const meta = myDoctorsScheduleResponse?.meta;
  const totalPages = Math.ceil((meta?.total || 1) / (meta?.limit || 1));

  return (
    <div className="space-y-6">
      <DashboardHeader title="My Schedules Management" subtitle="Manage your schedules and patient information"></DashboardHeader>

      <MySchedulesFilters availableSchedules={availableSchedulesResponse?.data || []} />

      <Suspense fallback={<TableSkeleton columns={5} rows={10} />}>
        <MySchedulesTable schedules={schedules} />
        <TablePagination
          currentPage={meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default DoctorMySchedulesPage;
