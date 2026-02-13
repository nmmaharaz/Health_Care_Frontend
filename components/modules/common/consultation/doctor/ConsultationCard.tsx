import styles from '@/css/Hero.module.css';
import Card from './Card';
import { IDoctorsProps } from '@/types/admin/doctor.interface';

export default function ConsultationCard({doctor}:IDoctorsProps) {

  return (
    <div className="min-h-screen rounded-[30px] bg-[#f4f6ff]">
      {/* <div className='flex justify-center'>
        <div className={`${styles.badge}`}>
          <span className='text-2xl'>🩺</span>
          <p>Your Health Our Priority</p>
        </div>
      </div>

      <h2 className='text-center text-4xl pb-16 font-bold'>Comprehensive services for
        your health</h2> */}

      <div className='flex items-center justify-center p-6'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {doctor?.map((service, index) => (
            <Card
              doctor={service}
              key={Number(index)}
              id={service.id}
              name={service.name}
              qalification={service.qualification}
              icon=""
              specialties={service.doctorSpecialties?.slice(0,3).map((specialty) => specialty.specialities?.title).join(', ') || ''}
              designation={service.designation}
              appoinmentFee={service.appointmentFee}
              imageUrl={service.profilePhoto as string}
            />
          ))}
        </div>
      </div>
      <div className='text-center mt-4'>
        <p className={`${styles.subtitle} max-w-4xl mx-auto`}>
          From preventive care to specialized treatments, our wide range of services is designed to support your health at every stage. 
        </p>
        <button className={`${styles.btn} ${styles.primary}`}>
          View All Services
        </button>
      </div>
    </div>
  );
}