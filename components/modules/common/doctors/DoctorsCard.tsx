import { ShieldCheck, Car, Briefcase } from 'lucide-react';
import styles from '@/css/Hero.module.css';
import Card from './Card';

export default function DoctorsCard() {
  const services = [
  {
    name: "Dr. Ariful Islam",
    qalification: "MBBS, FCPS (Medicine), MD (Cardiology)",
    specialties: "Heart Disease, Hypertension, & Heart Failure Specialist",
    designation: "Senior Consultant",
    appoinmentFee: "1200 BDT",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Dr. Sarah Rahman",
    qalification: "MBBS, MS (Orthopedics), Fellow (Singapore)",
    specialties: "Bone & Joint Specialist, Trauma & Spine Surgeon",
    designation: "Associate Professor",
    appoinmentFee: "1000 BDT",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Dr. Mahbubur Ahmed",
    qalification: "MBBS, MD (Neurology), PhD",
    specialties: "Brain, Nerve & Stroke Specialist",
    designation: "Neurologist",
    appoinmentFee: "1500 BDT",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Dr. Nusrat Jahan",
    qalification: "MBBS, FCPS (Gynae & Obs)",
    specialties: "Gynecology, Obstetrics & Infertility Specialist",
    designation: "Consultant",
    appoinmentFee: "800 BDT",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71f153678f?q=80&w=1000&auto=format&fit=crop"
  }
];

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
          {services.map((service, index) => (
            <Card
              key={index}
              name={service.name}
              qalification={service.qalification}
              specialties={service.specialties}
              designation={service.designation}
              appoinmentFee={service.appoinmentFee}
              imageUrl={service.imageUrl}
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