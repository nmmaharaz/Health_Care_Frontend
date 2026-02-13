import AIDoctorSuggestion from "@/components/modules/common/consultation/AIDoctorSuggestion";
import ConsultationHeader from "@/components/modules/common/consultation/doctor/ConsultationHeader";
import ConsultationLayout from "@/components/modules/common/consultation/doctor/ConsultationLayout";
import { getAllDoctors } from "@/service/admin/doctorManagement";

export default async function ConsultationPage() {
  const { data } = await getAllDoctors();
  // console.log("Doctor Data in Consultation Page:", data);
  return (
    <div>
      <ConsultationHeader></ConsultationHeader>
      <div className="mx-7.5">
        <AIDoctorSuggestion />
      </div>
        <ConsultationLayout doctor={data.data}></ConsultationLayout>
    </div>
  )
}
