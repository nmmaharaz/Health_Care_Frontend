import React from 'react'
import ServiceList from './ServiceList'
import DoctorsCard from './DoctorsCard'
import { IDoctorsProps } from '@/types/admin/doctor.interface';

export default function ServiceLayout({doctor}:IDoctorsProps) {
  return (
    <div className='flex flex-col lg:flex-row gap-3 p-8'>
        <div>
            <ServiceList></ServiceList>
        </div>
        <div>
            <DoctorsCard doctor={doctor}></DoctorsCard>
        </div>
    </div>
  )
}
