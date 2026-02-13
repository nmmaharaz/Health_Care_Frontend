import ConsultationHeader from "@/components/modules/common/consultation/ConsultationHeader";
// import ConsultationCard from "@/components/modules/common/doctors/ConsultationCard";
import ConsultationLayout from "@/components/modules/common/consultation/ConsultationLayout";
import { getAllDoctors } from "@/service/admin/doctorManagement";

export default async function ConsultationPage() {
    const {data} = await getAllDoctors();
    // console.log("Doctor Data in Consultation Page:", data);
  return (
    <div>
        <div>
            <ConsultationHeader></ConsultationHeader>
            <ConsultationLayout doctor={data.data}></ConsultationLayout>
        </div>
    </div>
  )
}
