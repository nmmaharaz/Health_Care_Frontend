import AppointmentsTable from "@/components/modules/admin/appoinment/AppointmentsTable";
import DashboardHeader from "@/components/shared/Dashboard/DashboardHeader";
import TablePagination from "@/components/shared/Dashboard/TablePagination";
import { TableSkeleton } from "@/components/shared/Dashboard/TableSkeleton";
import { getAppointments} from "@/service/doctor/appoinment.service";
import { queryStringFormatter } from "@/utils/formatter";
import { Suspense } from "react";

const AppointmentsManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const response = await getAppointments(queryString);
  console.log(response, "Response DAta")

  return (
    <div className="space-y-6">
      <DashboardHeader title="Appointments Management" subtitle="Manage doctor information and details"></DashboardHeader>

      {/* <AppointmentsFilter /> */}

      <Suspense fallback={<TableSkeleton columns={7} />}>
        <AppointmentsTable appointments={response?.data?.data || []} />
      </Suspense>

      <TablePagination
        currentPage={response?.data?.meta?.page || 1}
        totalPages={response?.data?.meta?.totalPage || 1}
      />
    </div>
  );
};

export default AppointmentsManagementPage;
