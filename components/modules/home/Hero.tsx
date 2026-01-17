import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full flex items-center overflow-hidden bg-white">

      {/* Background Geometric Pattern (Left Side) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="gray" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto pl-6 lg:pl-28 grid lg:grid-cols-2 items-center gap-10 z-10">

        {/* Left Content Column */}
        <div className="max-w-2xl space-y-6 relative">
          {/* Navigation Arrows (Decorative) */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
            <button className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#7865ff] hover:text-white transition-all">
              ←
            </button>
            <button className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#7865ff] hover:text-white transition-all">
              →
            </button>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-[#1f1a3a] leading-[1.1]">
            Life More <br />
            Relaxed with <br />
            <span className="relative">
              Smart Insurance
              {/* Purple Dot and Circle from Image */}
              <span className="absolute -top-4 -right-8 w-4 h-4 bg-[#7865ff] opacity-30 rounded-full animate-pulse" />
              <span className="absolute -top-6 -right-12 w-8 h-8 border border-[#7865ff] opacity-40 rounded-full" />
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            There are many variations of passages of Lorem Ip available, but the majority have suffered aeration in some form,
          </p>

          <button className="bg-[#7865ff] hover:bg-opacity-90 text-white px-10 py-4 rounded-md font-bold text-sm tracking-wide transition-all shadow-lg shadow-blue-200">
            Discover More
          </button>
          <div className="absolute -bottom-10 right-20 w-48 h-48 drop-shadow-2xl">
            <Image
              src="/stethoscope.png" // The 3D icon at the bottom
              alt="Insurance Icon"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

        </div>

        {/* Right Image Column with Custom Shape */}
        <div className="relative h-full flex items-center justify-center">
          <div className="relative w-full h-[600px] overflow-hidden">
            {/* The Slanted Shape Backdrop */}
            <div
              className="absolute inset-0 bg-white"
              style={{
                clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
              }}
            >
              <Image
                src="/hero.jpg" // Path to your uploaded image
                alt="Family using tablet"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Umbrella Checklist Icon */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;