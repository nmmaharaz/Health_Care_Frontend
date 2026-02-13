import PatientPrescriptionsList from "@/components/modules/common/patient/prescription/PatientPrescriptionsList";
import { getMyPrescriptions } from "@/service/doctor/prescription.service";
import { IPrescription } from "@/types/doctor/prescription.interface";

export default async function MyPrescriptionsPage() {
  const response = await getMyPrescriptions();
  const prescriptions: IPrescription[] = response?.data.data || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Prescriptions</h1>
        <p className="text-muted-foreground mt-2">
          View all your medical prescriptions from completed appointments
        </p>
      </div>

      <PatientPrescriptionsList prescriptions={prescriptions} />
    </div>
  );
}
