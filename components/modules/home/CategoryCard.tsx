import React from 'react';
import Image from 'next/image';

// Props Interface
interface ServiceProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
}

const CategoryCard: React.FC<ServiceProps> = ({ title, description, imageUrl, icon }) => {
  return (
    <div className="relative w-95 bg-white rounded-4xl shadow-sm overflow-hidden pt-6 px-6 pb-12 group transition-all duration-300 hover:shadow-xl">
      
      {/* 1. Top Image with Rounded Corners */}
      <div className="relative h-60 w-full overflow-hidden rounded-[15px] z-10">
        <Image
          src={imageUrl} // Apnar image path ekhane diben
          alt="Business Insurance"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 2. Overlapping Title Section */}
      <div className="relative flex items-center -mt-10 ml-0 mr-4 z-20">
        {/* Purple Icon Box */}
        <div className="bg-[#7367f0] p-5 rounded-tl-[10px] rounded-bl-[10px] rounded-tr-[10px] flex items-center justify-center shadow-lg">
          {/* <{icon} size={40} strokeWidth={1.5} /> */}
          <p className='text-white'>{icon}</p>
        </div>
        
        {/* Title Box */}
        <div className="bg-white flex-1 py-5 px-6 rounded-tr-[10px] border-b border-[#e5e7eb]">
          <h3 className="text-[#1a2b48] text-xl font-bold tracking-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* 3. Description Text */}
      <div className="mt-8 px-2">
        <p className="text-[#6b7280] text-lg leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* 4. Bottom Right Purple Curve Shape */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 bg-[#7367f0] opacity-20"
        style={{ 
          clipPath: 'circle(75% at 100% 100%)' 
        }}
      ></div>
    </div>
  );
};

export default CategoryCard;