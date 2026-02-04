import Image from 'next/image';
import Link from 'next/link';

const DoctorHeader = () => {
  return (
    <div className="w-full p-4 md:p-7.5 bg-white">
      {/* Container with rounded corners like your image */}
      <div className="relative w-full min-h-100 rounded-[40px] overflow-hidden bg-[#f4f9ff]">
        

        <div className="">
          <Image
            src="/assets/image/hero/doctorheader.jpg" 
            alt="All Service Doctors"
            fill
            className="object-cover object-right md:object-center opacity-80"
            priority
          />
          {/* Subtle Overlay for Text Readability */}
          <div className="absolute inset-0 bg-linear-to-r from-[#f4f9ff] via-[#f4f9ff]/60 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col justify-center h-full min-h-100 px-8 md:px-20">
          <span className="text-[#1a3765] text-lg font-medium mb-2">
            Service
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-[#0a1d37] mb-6 tracking-tight">
            All Services
          </h1>

          {/* Breadcrumbs with Next.js Link */}
          <nav className="flex items-center gap-2 text-sm font-semibold text-[#1a3765]/80">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Xcare
            </Link>
            <span>»</span>
            <Link href="/services" className="hover:text-blue-600 transition-colors">
              Services
            </Link>
            <span>»</span>
            <span className="text-[#0a1d37]">Doctors</span>
          </nav>
        </div>

        {/* Floating Icons (Matching your second image) */}
        <div className="absolute right-6 bottom-10 hidden md:flex flex-col gap-3">
          <button className="bg-[#79c043] p-3 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </button>
          <button className="bg-[#0a1d37] p-3 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorHeader;