"use server"
import AppointmentDetails from "@/components/modules/common/patient/patientAppoinment/AppointmentDetails";
import { getAppointmentById } from "@/service/doctor/appoinment.service";
import { IAppointment } from "@/types/doctor/appointment.interface";
import { notFound } from "next/navigation";

interface AppointmentDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AppointmentDetailPage({
  params,
}: AppointmentDetailPageProps) {
  const { id } = await params;
  console.log(id, "data")

  const response = await getAppointmentById(id);

//   if (!response?.success || !response?.data) {
//     notFound();
//   }

  const appointment: IAppointment = response.data;

  return (
    <div className="container mx-auto px-4 py-8">
      <AppointmentDetails appointment={appointment} />
    </div>
  );
}
