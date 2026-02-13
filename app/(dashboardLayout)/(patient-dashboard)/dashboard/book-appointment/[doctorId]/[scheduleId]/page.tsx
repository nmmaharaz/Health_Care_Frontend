// import NotFound from '@/app/not-found';
import AppointmentConfirmation from '@/components/modules/doctor/appoinment/AppointmentConfirmation'
import { getDoctorById } from '@/service/admin/doctorManagement';
import { getScheduleById } from '@/service/admin/scheduleMangement';
import { IDoctor, ISchedule } from '@/types/admin/doctor.interface';

interface BookAppointmentPageProps {
  params: Promise<{
    doctorId: string;
    scheduleId: string;
  }>;
}

export default async function page({
  params,
}: BookAppointmentPageProps) {
   const { doctorId, scheduleId } = await params;

   const doctorResponse = await getDoctorById(doctorId);
   const scheduleResponse = await getScheduleById(scheduleId);

  // const [doctorResponse, scheduleResponse] = await Promise.all([
  //   getDoctorById(doctorId),
  //   getScheduleById(scheduleId),
  // ]);

  if (!doctorResponse?.success || !scheduleResponse?.success) {
    // NotFound();
    // console.error('Failed to fetch doctor or schedule data');
    return <div>Error fetching data. Please try again later.</div>;
  }

  const doctor: IDoctor = doctorResponse.data;
  const schedule: ISchedule = scheduleResponse.data;


  return (
    <div className='py-6'>
    <AppointmentConfirmation doctor={doctor} schedule={schedule}>
    </AppointmentConfirmation>
      </div>
  )
}
