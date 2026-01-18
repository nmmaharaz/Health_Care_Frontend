import { FaVials } from "react-icons/fa6";

export default function Features() {
    return (
        <section className="relative mb-10 z-50 mx-7.5">
            <div className="absolute -top-20 w-full">
                <div className="flex top-40 items-center flex-col md:flex-row justify-center">
                    <div className="p-8 bg-white rounded-t-3xl  md:rounded-t-none md:rounded-l-3xl max-w-115 md:max-w-92 flex space-y-4 flex-col border-2 border-[#e0e7ff] shadow-lg">
                        <button className="p-4 w-24 h-24 flex justify-center items-center border-[#e0e7ff] hover:border-[#746BF4] border-3 transition-all rounded-full">
                            <FaVials className="text-5xl text-[#746BF4] hover:scale-[95%] transition" />
                        </button>
                        <h2 className="text-2xl font-semibold">Patient Centered Care</h2>
                        <p className="text-gray-600 text-lg">Putting you at the heart of everything we do. Our patient-centered approach ensures personalized.</p>
                    </div>
                    <div className="px-8 py-16 bg-[#746BF4] md:rounded-3xl max-w-115 md:max-w-110 flex space-y-4 flex-col border-[#e0e7ff] shadow-lg ">
                        <button className="p-4 w-24 h-24 flex justify-center items-center border-gray-300 hover:border-white border-3 transition-all rounded-full">
                            <FaVials className="text-5xl text-white hover:scale-[95%] transition" />
                        </button>
                        <h2 className="text-2xl text-white font-semibold">Specialist Doctors</h2>
                        <p className="text-gray-200 text-lg">Putting you at the heart of everything we do. Our patient-centered approach ensures personalized.</p>
                    </div>
                    <div className="p-8 bg-white rounded-b-3xl md:rounded-l-none md:rounded-r-3xl max-w-115 md:max-w-92 flex space-y-4 flex-col border-2 border-[#e0e7ff] shadow-lg ">
                        <button className="p-4 w-24 h-24 flex justify-center items-center border-[#e0e7ff] hover:border-[#746BF4] border-3 transition-all rounded-full">
                            <FaVials className="text-5xl text-[#746BF4] hover:scale-[95%] transition" />
                        </button>
                        <h2 className="text-2xl font-semibold">24 Hours Service</h2>
                        <p className="text-gray-600">24 Hours Service
                            Putting you at the heart of everything we do. Our patient-centered approach ensures personalized.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
