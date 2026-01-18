"use client"; // Next.js App Router hole oboshoy diten hobe
import React, { useState } from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import { Play, Stethoscope, Clock, ShieldPlus, CheckCircle2 } from 'lucide-react';
import VideoModal from './VideoModal';

const WhyChooseUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Apnar YouTube Video Link ekhane din (Embed link)
    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";

    return (
        <section className="max-w-7xl mx-auto py-16 px-6">
            {/* Upper Content (Same as previous design) */}
            <div className="flex flex-col lg:flex-row justify-between mb-16 gap-10">
                <div className="lg:w-1/2">
                    <div className={`${styles.badge}`}>
                        <span className='text-2xl'>🩺</span>
                        <p>Why Choose Us</p>
                    </div>
                    <h2 className="text-4xl pb-6 font-bold">Why patients trust us with their care</h2>
                    <p className='text-gray-500'>Our commitment to excellence, compassion, and personalized treatment has earned the trust of countless patients. Discover what sets our care apart. Discover what sets our care apart.</p>
                </div>
                <div className="lg:w-1/2 flex flex-col = gap-3 pt-6">
                    {["We offer flexible hours to fit your busy schedule.", "Team is committed to making you feel comfortable.", "We ensure you receive prompt and effective care.", "Helping you manage your health at every stage of life."].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 font-medium text-[#0a1d37]">
                            <CheckCircle2 className="text-[#4d5edb]" size={20} /> <p className='text-gray-500'>{text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Trigger Section */}
            <div
                className="relative w-full h-137.5 rounded-[40px] overflow-hidden cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
            >
                <Image
                    src="/assets/image/hero/surgery.jpg" // Image path thik korun
                    alt="Surgery Team"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Play className="text-[#4d5edb] fill-[#4d5edb] ml-1" size={32} />
                    </div>
                </div>

                {/* Bottom Stats Overlay */}
                <div className="absolute bottom-0 w-full p-10 grid grid-cols-1 md:grid-cols-3 gap-6 bg-linear-to-t from-black/90 to-transparent">
                    <StatItem icon={<Stethoscope />} title="50+ Expert Doctor" />
                    <StatItem icon={<Clock />} title="24/7 Instant Support" />
                    <StatItem icon={<ShieldPlus />} title="Expert Medical Team" />
                </div>
            </div>

            {/* Video Modal Implementation */}
            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoUrl={videoUrl}
            />
        </section>
    );
};

// Sub-component for Stats
const StatItem = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
    <div className="flex items-center gap-4 text-white">
        <div className="bg-[#4d5edb] p-3 rounded-2xl">{icon}</div>
        <div>
            <h4 className="text-xl font-bold">{title}</h4>
            <p className="text-gray-300 text-sm">Our team includes highly skilled doctors.</p>
        </div>
    </div>
);

export default WhyChooseUs;