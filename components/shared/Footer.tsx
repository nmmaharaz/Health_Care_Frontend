import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a1128] mx-7.5 text-white pt-20 my-10 pb-10 px-6 rounded-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <div className="text-[#4d5edb] font-bold text-2xl">+</div>
              </div>
              <span className="text-2xl font-bold tracking-tight">Dispnsary</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-70">
              We offer a wide range of healthcare services to meet your needs.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Healthcare</h4>
            <ul className="flex flex-col gap-4">
              {['Doctors', 'Diagnostics', 'Caregiver', 'Hospitality', 'Emergency'].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4d5edb]"></span>
                  <span className="text-gray-400 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About Us', 'FAQS', 'Blog', 'Our Team'].map((item) => (
                <li key={item} className="flex items-center gap-2 group cursor-pointer">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4d5edb]"></span>
                  <span className="text-gray-400 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Contact Us</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-[#1a2238] p-3 rounded-full text-[#4d5edb] group-hover:bg-[#4d5edb] group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-gray-400">info@domain.com</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-[#1a2238] p-3 rounded-full text-[#4d5edb] group-hover:bg-[#4d5edb] group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <span className="text-gray-400">+1 (213) 465 789</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-[#1a2238] p-3 rounded-full text-[#4d5edb] group-hover:bg-[#4d5edb] group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <span className="text-gray-400">2464 Royal Ln. Mesa, New Jersey</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-white text-sm">
            Copyright © 2026 All Rights Reserved.
          </p>

            {/* {[<Globe size={18}/>, <Facebook size={18}/>, <Instagram size={18}/>].map((icon, index) => (
              <div key={index} className="bg-[#1a2238] p-3 rounded-full text-gray-400 hover:bg-[#4d5edb] hover:text-white cursor-pointer transition-all">
                {icon}
              </div>
            ))}
          </div>  */}
          <div className="flex items-center gap-4">
            {[
              <Globe key="globe" size={18} />,
              <Facebook key="facebook" size={18} />,
              <Instagram key="instagram" size={18} />
            ].map((icon, index) => (
              <div
                key={index}
                className="bg-[#1a2238] p-3 rounded-full text-white hover:bg-[#4d5edb] hover:text-white cursor-pointer transition-all"
              >
                {icon}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6 text-sm text-white">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-700"></span>
            <Link href="#" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;