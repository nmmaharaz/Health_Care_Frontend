import AdminsTable from "@/components/modules/admin/admin/AdminsTable";
import DashboardHeader from "@/components/shared/Dashboard/DashboardHeader";
import TablePagination from "@/components/shared/Dashboard/TablePagination";
import { TableSkeleton } from "@/components/shared/Dashboard/TableSkeleton";
import { getAdmins } from "@/service/admin/adminManagement";
import { queryStringFormatter } from "@/utils/formatter";
import { Suspense } from "react";

const AdminAdminsManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const adminsResult = await getAdmins(queryString);

  const totalPages = Math.ceil(
    (adminsResult?.meta?.total || 1) / (adminsResult?.meta?.limit || 1)
  );

  return (
    <div className="space-y-6">
        <DashboardHeader title="Appointments Management" subtitle="Manage doctor information and details"></DashboardHeader>

      {/* Search, Filters */}
      {/* <AdminsFilter /> */}

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <AdminsTable admins={adminsResult?.data?.data || []} />
        <TablePagination
          currentPage={adminsResult?.data?.meta?.page || 1}
          totalPages={totalPages || 1}
        />
      </Suspense>
    </div>
  );
};

export default AdminAdminsManagementPage;
