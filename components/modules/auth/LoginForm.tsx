import React from 'react';
import { Headset, Clock } from 'lucide-react';

const LoginForm = () => {
  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      <div className="bg-white rounded-[40px] drop-shadow-sm p-8 md:p-16 flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Booking Form */}
        <div className="lg:w-3/5">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="First Name" 
              className="bg-[#f5f6ff] p-4 rounded-xl outline-none border border-transparent focus:border-[#4d5edb] transition-all"
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="bg-[#f5f6ff] p-4 rounded-xl outline-none border border-transparent focus:border-[#4d5edb] transition-all"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="md:col-span-2 bg-[#f5f6ff] p-4 rounded-xl outline-none border border-transparent focus:border-[#4d5edb] transition-all"
            />
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="md:col-span-2 bg-[#f5f6ff] p-4 rounded-xl outline-none border border-transparent focus:border-[#4d5edb] transition-all"
            />
            <input 
              type="date" 
              className="bg-[#f5f6ff] p-4 rounded-xl outline-none border border-transparent focus:border-[#4d5edb] transition-all text-gray-500"
            />
            <select className="bg-[#f5f6ff] p-4 rounded-xl outline-none border border-transparent focus:border-[#4d5edb] transition-all text-gray-500">
              <option>—Please choose an option—</option>
              <option>General Consultation</option>
              <option>Cardiology</option>
              <option>Diagnostics</option>
            </select>
            
            <div className="md:col-span-2 mt-4">
              <button className="bg-[#4d5edb] text-white font-bold py-4 px-10 rounded-full hover:bg-[#3b4bbd] transition-colors shadow-lg">
                Book An Appointment
              </button>
            </div>

            {/* Success Message Placeholder */}
            <div className="md:col-span-2 mt-4 p-4 border border-green-500 rounded-full text-green-600 text-sm font-medium">
              Thank you for your message. It has been sent.
            </div>
          </form>
        </div>

        {/* Right Side: Information */}
        <div className="lg:w-2/5 flex flex-col gap-10 justify-center">
          <div>
            <h2 className="text-[#0a1d37] text-4xl md:text-5xl font-bold mb-6">Make An Account</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Schedule your handyman service with ease. Choose a date and time that works best for you.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Customer Services */}
            <div className="flex items-center gap-6">
              <div className="text-[#4d5edb] p-4 rounded-full border border-gray-100 shadow-sm">
                <Headset size={32} />
              </div>
              <div>
                <h4 className="text-[#0a1d37] text-xl font-bold">Customer Services</h4>
                <p className="text-gray-500">+91 – 123 456 7890</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center gap-6">
              <div className="text-[#4d5edb] p-4 rounded-full border border-gray-100 shadow-sm">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="text-[#0a1d37] text-xl font-bold">Opening Hours</h4>
                <p className="text-gray-500">Mon - Sat (09:00 - 21:00 Sunday (Closed))</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LoginForm;