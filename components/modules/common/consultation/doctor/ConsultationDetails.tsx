/* eslint-disable @next/next/no-img-element */
import React from 'react'
import StatCircle from './StatCircle'
import InfoRow from './InfoRow'

export default function ConsultationDetails() {
  return (
    <div> 
        <div>
            <div className="shadow mx-7.5 py-20 px-6 rounded-[40px]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-10 flex-col md:flex-row items-start">

                        {/* LEFT STICKY CARD */}
                        <aside className="w-full md:w-[32%] md:sticky top-24">
                            <div className="bg-white rounded-4xl shadow-lg overflow-hidden">
                                <img
                                    src="/assets/image/hero/male doctor.jpg"
                                    alt="Doctor"
                                    className="w-full h-90 object-top-right"
                                />

                                <div className="bg-[#031B4E]  text-white px-6 py-8">
                                    <p className="text-sm uppercase opacity-70">Cardiologist</p>
                                    <h2 className="text-2xl font-semibold mt-1">Jordan Peele</h2>

                                    <div className="mt-7 space-y-3 text-sm">
                                        <p>📞 +123 1800 567 8990</p>
                                        <p>✉️ noreply@pbmit.com</p>
                                        <p>🧠 Experience: 12 Years</p>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* RIGHT SCROLL CONTENT */}
                        <main className="w-full md:w-[68%] space-y-5 md:space-y-12">

                            {/* Biography */}
                            <section>
                                <h2 className="text-4xl font-bold text-slate-800 mb-4">
                                    Personal Info
                                </h2>
                                <p className="text-slate-500 font-semibold leading-relaxed">
                                    Here’s a situation that comes up for many people: you move in later life...
                                </p>
                            </section>

                            {/* Details */}
                            <section className="space-y-4">
                                <InfoRow label="Speciality" value="Cardiothoracic Surgeon" />
                                <InfoRow label="Degrees" value="MBBS University of California" />
                                <InfoRow label="Experience" value="7 years, New York Medical Care" />
                            </section>

                            {/* Stats */}
                            <section className="bg-[#f4f6ff] p-6 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
                                <StatCircle value="95%" label="Successful Surgery" />
                                <StatCircle value="90%" label="Satisfied Patients" />
                                <StatCircle value="85%" label="Infection Prevention" />
                            </section>

                            {/* Contact Form */}
                            <section className="bg-white rounded-2xl p-10 shadow">
                                <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

                                <form className="grid grid-cols-2 gap-6">
                                    <input className="border-b p-2 outline-none" placeholder="Your Name*" />
                                    <input className="border-b p-2 outline-none" placeholder="Your Email*" />
                                    <input className="border-b p-2 outline-none" placeholder="Your Phone*" />
                                    <input className="border-b p-2 outline-none" placeholder="Subject" />

                                    <textarea
                                        className="col-span-2 border-b p-2 outline-none"
                                        placeholder="Message"
                                    />

                                    <button className="mt-4 bg-linear-to-r from-[#4338ca] to-[#4f6ad4f1]  px-6 py-3 font-semibold text-white hover:from-[#3a2fac] hover:to-[#4f69d0f1] hover:transition-transform rounded-full w-fit">
                                        Submit Now →
                                    </button>
                                </form>
                            </section>

                        </main>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}
