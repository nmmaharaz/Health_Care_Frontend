import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function DashboardHeaderSkeleton() {
    return (
        <section className={`relative max-h-64 w-full mt-3 py-4 md:py-12 bg-[#f4f6ff] overflow-hidden rounded-2xl`}>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7367f0] opacity-5 rounded-tr-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 max-w-72 h-72 bg-[#7367f0] opacity-10 rounded-tl-full blur-2xl"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1 className="text-[#0b0f2f] font-bold mb-4 md:mb-4">
                    <div className='text-2xl md:text-4xl'>
                        <Skeleton className="h-16 w-110 mx-auto" />
                    </div>
                </h1>

                <div className="flex justify-center">
                    <Skeleton className="bg-[#e1e6f7f1] px-4 py-2 text-sm h-10 w-64 font-semibold rounded-2xl text-white mx-auto" />
                </div>
            </div>
        </section>
    )
}
