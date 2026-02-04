import React from 'react';
import Image from 'next/image';

// Props Interface
interface ServiceProps {
  name: string;
  qalification: string;
  specialties: string;
  designation: string;
  appoinmentFee: string;
  imageUrl?: string;
  icon: React.ReactNode;
}

const Card: React.FC<ServiceProps> = ({ name, qalification, specialties, designation, appoinmentFee, imageUrl }) => {
  return (
    <div className="relative max-w-90 h-full flex flex-col cursor-pointer bg-white rounded-4xl shadow-sm overflow-hidden pt-6 px-6 pb-6 group transition-all duration-300 hover:shadow-xl">

      <div className="relative h-60 w-full overflow-hidden rounded-[15px] z-10">
        <Image
          src={imageUrl!}
          alt="Business Insurance"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full shadow-sm">
          <span className="text-blue-700 font-bold text-sm">Fee: {appoinmentFee}</span>
        </div>
      </div>

      <div className="relative flex items-center -mt-10 mx-4 z-20">
        <div className="bg-white w-full py-5 px-6 rounded-[10px] border-b border-[#e5e7eb]">
          <h3 className="text-[#1a2b48] text-xl text-center font-bold tracking-tight">
            {name}
          </h3>
        </div>
      </div>

     <div className='flex grow flex-col'>
       <p className="text-blue-600 text-center py-3 font-semibold text-sm uppercase tracking-wide">
        {designation}
      </p>

      <div className="space-y-2 border-t border-slate-100 pt-3">
        <div className="flex items-start gap-2">
          <span className="text-slate-400 text-xs font-bold uppercase w-20">Specialty:</span>
          <p className="text-slate-600 text-sm font-medium flex-1">{specialties}</p>
        </div>

        <div className="flex items-start gap-2">
          <span className="text-slate-400 text-xs font-bold uppercase w-20">Degrees:</span>
          <p className="text-slate-600 text-sm">{qalification}</p>
        </div>
      </div>
     </div>

      <div className="mt-4">
        <button className="w-full bg-[#f4f9ff] text-blue-700 font-bold py-3 rounded-2xl group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
          View Profile
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <div
        className="absolute bottom-0 right-0 w-32 h-32 bg-[#7367f0] opacity-20"
        style={{
          clipPath: 'circle(75% at 100% 100%)'
        }}
      ></div>
    </div>
  );
};

export default Card;

// import React from 'react';
// import Image from 'next/image';

// // Props Interface
// interface ServiceProps {
//   name: string;
//   qalification: string;
//   specialties: string;
//   designation: string;
//   appoinmentFee: string;
//   imageUrl?: string;
//   icon: React.ReactNode;
// }

// const Card: React.FC<ServiceProps> = ({ name, qalification, specialties, designation, appoinmentFee, imageUrl, icon }) => {
//   return (
//     /* 1. Added 'flex flex-col' and 'h-full' to make the card a flex container */
//     <div className="relative max-w-90 h-full flex flex-col cursor-pointer bg-white rounded-4xl shadow-sm overflow-hidden pt-6 px-6 pb-6 group transition-all duration-300 hover:shadow-xl">

//       <div className="relative h-60 w-full overflow-hidden rounded-[15px] z-10 flex-shrink-0">
//         <Image
//           src={imageUrl!}
//           alt={name}
//           fill
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />

//         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full shadow-sm">
//           <span className="text-blue-700 font-bold text-sm">Fee: {appoinmentFee}</span>
//         </div>
//       </div>

//       <div className="relative flex items-center -mt-10 mx-4 z-20 flex-shrink-0">
//         <div className="bg-white w-full py-5 px-6 rounded-[10px] border-b border-[#e5e7eb] shadow-sm">
//           <h3 className="text-[#1a2b48] text-xl text-center font-bold tracking-tight">
//             {name}
//           </h3>
//         </div>
//       </div>

//       {/* 2. Middle content wrapped in flex-grow to push the button down */}
//       <div className="flex-grow flex flex-col">
//         <p className="text-blue-600 text-center py-3 font-semibold text-sm uppercase tracking-wide">
//           {designation}
//         </p>

//         <div className="space-y-2 border-t border-slate-100 pt-3 mb-4">
//           <div className="flex items-start gap-2">
//             <span className="text-slate-400 text-xs font-bold uppercase w-20">Specialty:</span>
//             <p className="text-slate-600 text-sm font-medium flex-1">{specialties}</p>
//           </div>

//           <div className="flex items-start gap-2">
//             <span className="text-slate-400 text-xs font-bold uppercase w-20">Degrees:</span>
//             <p className="text-slate-600 text-sm">{qalification}</p>
//           </div>
//         </div>
//       </div>

//       {/* 3. Button will now always stay at the bottom */}
//       <div className="mt-auto z-10">
//         <button className="w-full bg-[#f4f9ff] text-blue-700 font-bold py-3 rounded-2xl group-hover:bg-blue-700 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
//           View Profile
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//           </svg>
//         </button>
//       </div>

//       <div
//         className="absolute bottom-0 right-0 w-32 h-32 bg-[#7367f0] opacity-20 pointer-events-none"
//         style={{
//           clipPath: 'circle(75% at 100% 100%)'
//         }}
//       ></div>
//     </div>
//   );
// };

// export default Card;