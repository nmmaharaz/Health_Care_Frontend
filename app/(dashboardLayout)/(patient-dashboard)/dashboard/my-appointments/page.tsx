import AppointmentsList from "@/components/modules/common/patient/patientAppoinment/AppointmentsList";
import { getMyAppointments } from "@/service/doctor/appoinment.service";
import { IAppointment } from "@/types/doctor/appointment.interface";

export default async function MyAppointmentsPage() {
  const response = await getMyAppointments();
  const appointments: IAppointment[] = response?.data?.data || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Appointments</h1>
        <p className="text-muted-foreground mt-2">
          View and manage your scheduled appointments
        </p>
      </div>

      <AppointmentsList appointments={appointments} />
    </div>
  );
}
