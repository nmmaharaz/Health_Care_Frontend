"use client";
import { useState } from "react";
import BookAppointmentDialog from "./BookAppointmentDialog";
import { IDoctor } from "@/types/admin/doctor.interface";

export default function BookNow({doctor}:{doctor:IDoctor}) {
      const [showScheduleModal, setShowScheduleModal] = useState(false);
    return (
       <>
         <button onClick={() => setShowScheduleModal(true)} className="w-full bg-[#f4f9ff] text-blue-700 font-bold py-3 rounded-2xl group-hover:bg-linear-to-r group-hover:from-[#4338ca] group-hover:to-[#4f6ad4f1] cursor-pointer group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
            Book Now
        </button>
        <BookAppointmentDialog
        doctor={doctor}
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
      />
       </>
    )
}
