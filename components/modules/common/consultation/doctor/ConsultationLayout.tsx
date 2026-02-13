import React from 'react'
import ConsultationCard from './ConsultationCard'
import { IDoctorsProps } from '@/types/admin/doctor.interface';
import ConsultationList from './ServiceList';

export default function ConsultationLayout({doctor}:IDoctorsProps) {
  return (
    <div className='flex flex-col lg:flex-row gap-3 p-8'>
        <div>
            <ConsultationList></ConsultationList>
        </div>
        <div>
            <ConsultationCard doctor={doctor}></ConsultationCard>
        </div>
    </div>
  )
}
