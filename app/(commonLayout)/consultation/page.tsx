import DoctorHeader from "@/components/modules/common/doctors/DoctorHeader";
// import DoctorsCard from "@/components/modules/common/doctors/DoctorsCard";
import ServiceLayout from "@/components/modules/common/doctors/ServiceLayout";
import { getAllDoctors } from "@/service/admin/doctorManagement";

export default async function page() {
    const {data} = await getAllDoctors();
  return (
    <div>
        <div>
            <DoctorHeader></DoctorHeader>
            <ServiceLayout doctor={data.data}></ServiceLayout>
        </div>
    </div>
  )
}
