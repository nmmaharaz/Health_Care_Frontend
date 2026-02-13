const services = [
  "DENTAL CARE", "PHARMACOLOGY", "ORTHOPEDIC", "PLASTIC SURGERY", 
  "HEMATOLOGY", "NEUROLOGY", "RHINOLOGY", "OPHTHALMOLOGY", "PULMONARY"
];

const ConsultationList = () => {
  return (
    <div className="sticky top-0 w-full lg:max-w-sm bg-white rounded-[40px] shadow-sm border border-slate-50 p-8">
      {/* Title */}
      <div className="flex items-center gap-3 mb-8">
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <h2 className="text-3xl font-bold text-[#0a1d37]">Our Service</h2>
      </div>

      {/* List Items */}
      <div className="space-y-1">
        {services.map((service, index) => {
          const isActive = service === "HEMATOLOGY"; // Example active state
          return (
            <button
              key={index}
              className={`w-full flex items-center justify-between py-4 border-b border-slate-100 group transition-all
                ${isActive ? 'text-blue-600' : 'text-[#0a1d37] hover:text-blue-500'}`}
            >
              <div className="flex items-center gap-4">
                <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-blue-600' : 'bg-blue-300'}`} />
                <span className="font-bold text-sm tracking-wide">{service}</span>
              </div>
              
              <div className={`p-2 rounded-full transition-all
                ${isActive ? 'bg-blue-600 text-white' : 'text-blue-400 group-hover:translate-x-1'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ConsultationList;