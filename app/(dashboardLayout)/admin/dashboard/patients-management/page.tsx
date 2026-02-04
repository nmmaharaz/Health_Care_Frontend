import { ManagementPageLoading } from "@/components/shared/Dashboard/ManagementPageLoading";

export default function page() {
  return (
    <ManagementPageLoading
      columns={5}
      hasActionButton={true}
      filterCount={5}
      filterWidths={["w-28", "w-28", "w-28", "w-28", "w-28"]}
    />
  )
}
