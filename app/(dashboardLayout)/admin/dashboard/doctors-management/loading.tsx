import { ManagementPageLoading } from "@/components/shared/Dashboard/ManagementPageLoading";

export default function DoctorManagementLoading() {
  return (
    <div>
      <ManagementPageLoading
        columns={5}
        hasActionButton={true}
        filterCount={5}
        filterWidths={["w-28", "w-28", "w-28", "w-28", "w-28"]}
      />
    </div>
  )
}
