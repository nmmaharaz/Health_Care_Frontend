import SchedulesTable from "@/components/modules/admin/paitent/PatientTable";
import ScheduleHeader from "@/components/modules/admin/schedule/ScheduleHeader";
import DashboardHeader from "@/components/shared/Dashboard/DashboardHeader";
import TablePagination from "@/components/shared/Dashboard/TablePagination";
import { TableSkeleton } from "@/components/shared/Dashboard/TableSkeleton";
import { getSchedules } from "@/service/admin/scheduleMangement";
import { queryStringFormatter } from "@/utils/formatter";
import { Suspense } from "react";
// import { TableSkeleton } from "@/components/shared/Dashboard/TableSkeleton";
// import { Suspense } from "react";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {

  const searchParamsObj = await searchParams;

  const queryString = queryStringFormatter(searchParamsObj);
  const { data: schedulesResult } = await getSchedules(queryString);

  const totalPages = Math.ceil(
    (schedulesResult?.meta?.total || 1) / (schedulesResult?.meta?.limit || 1)
  );

  return (
    <div>
      <DashboardHeader title="Schedule Management" subtitle="Manage schedule information and details"></DashboardHeader>
      <ScheduleHeader></ScheduleHeader>
      <Suspense fallback={<TableSkeleton columns={4} rows={10} />}>
        <SchedulesTable schedules={schedulesResult?.data || []} />
        <TablePagination
          currentPage={schedulesResult?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  )
}
