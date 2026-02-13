import { IDoctor } from "../admin/doctor.interface";
import { IPatient } from "../admin/patient.interface";
import { IAppointment } from "./appointment.interface";

export interface IPrescription {
    id: string;
    appointmentId: string;
    appointment?: IAppointment;
    doctorId: string;
    doctor?: IDoctor;
    patientId: string;
    patient?: IPatient;
    instructions: string;
    followUpDate?: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface IPrescriptionFormData {
    appointmentId: string;
    instructions: string;
    followUpDate?: string;
}