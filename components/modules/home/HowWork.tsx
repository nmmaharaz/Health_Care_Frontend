import React from 'react';
import Image from 'next/image';

interface Step {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

const steps: Step[] = [
    { id: '01', title: 'Create Account', description: 'Join our community by creating an account today.', imageUrl: "/assets/image/hero/hero-img.png" },
    { id: '02', title: 'Search Doctor', description: 'Join our community by creating an account today.', imageUrl: "/assets/image/hero/hero-img.png" },
    { id: '03', title: 'Schedule Appointment', description: 'Join our community by creating an account today.', imageUrl: "/assets/image/hero/hero-img.png" },
    { id: '04', title: 'Start Consultation', description: 'Join our community by creating an account today.', imageUrl: "/assets/image/hero/hero-img.png" },
];

const HowWeWork: React.FC = () => {
    return (
        <section className="bg-[#f9faff] mx-7.5 py-20 px-6 rounded-[40px] relative overflow-hidden">
            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="flex items-center justify-center gap-2 text-[#7367f0] font-medium mb-4">
                    <span className="text-xl">🩺</span>
                    <span className="text-sm tracking-wide">How We Work</span>
                </div>
                <h2 className="text-[#0a1d37] text-4xl md:text-5xl font-bold mb-6">
                    We work to achieve better health outcomes
                </h2>
                <p className="text-gray-500 leading-relaxed">
                    We are committed to improving health outcomes through personalized care,
                    innovative treatments, and a focus on prevention.
                </p>
            </div>

            {/* Steps Section */}
            <div className="max-w-7xl mx-auto relative">
                {/* Connecting Horizontal Line (Desktop Only) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center text-center group">
                            {/* Circular Image */}
                            <div className="relative w-44 h-44 mb-8">
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 group-hover:border-[#7367f0] transition-colors duration-500"></div>
                                <div className="absolute inset-2 overflow-hidden rounded-full">
                                    <Image
                                        src={step.imageUrl}
                                        alt={step.title}
                                        fill
                                        className="object-center w-fit group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Number Circle */}
                            <div className="bg-[#4d5edb] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6 shadow-lg border-4 border-white">
                                {step.id}
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-[#0a1d37] text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-500 text-sm max-w-50">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            <div className="hidden lg:block absolute bottom-30 left-0 w-full h-px bg-gray-200 z-0"></div>
            </div>

            {/* Bottom Left Decorative Icon (Thermometer/Medical) */}
            <div className="absolute bottom-4 left-4 opacity-20 hidden md:block">
                <Image src="/assets/image/hero/stethoscope.png" alt="icon" width={150} height={150} />
            </div>
        </section>
    );
};

export default HowWeWork;