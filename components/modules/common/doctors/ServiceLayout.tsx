import React from 'react'
import ServiceList from './ServiceList'
import DoctorsCard from './DoctorsCard'

export default function ServiceLayout() {
  return (
    <div className='flex flex-col lg:flex-row gap-3 p-8'>
        <div>
            <ServiceList></ServiceList>
        </div>
        <div>
            <DoctorsCard></DoctorsCard>
        </div>
    </div>
  )
}
