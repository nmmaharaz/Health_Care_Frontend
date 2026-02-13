import { TableSkeleton } from "@/components/shared/Dashboard/TableSkeleton";

export default function DoctorAppointmentsLoading() {
  return <TableSkeleton columns={8} rows={10} />;
}