import AIDoctorSuggestion from "@/components/modules/common/consultation/AIDoctorSuggestion";
import ConsultationHeader from "@/components/modules/common/consultation/doctor/ConsultationHeader";
// import ConsultationCard from "@/components/modules/common/doctors/ConsultationCard";
import ConsultationLayout from "@/components/modules/common/consultation/doctor/ConsultationLayout";
import { getAllDoctors } from "@/service/admin/doctorManagement";

export default async function ConsultationDoctorPage() {
  const { data } = await getAllDoctors();
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
