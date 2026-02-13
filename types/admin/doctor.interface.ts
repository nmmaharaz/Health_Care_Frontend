import { ISpecialty } from "./secialities.interface";

export interface ISchedule {
  id: string;
  startDateTime: string; 
  endDateTime: string;   
  createdAt: string;
  updatedAt: string;
}

export interface IDoctorSchedule {
  doctorId: string;
  scheduleId: string;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
  schedule: ISchedule;
}


export interface IDoctor {
    id?: string;
    name: string;
    email: string;
    password: string;
    contactNumber: string;
    address?: string;
    registrationNumber: string;
    experience?: number;
    gender: "MALE" | "FEMALE";
    appointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    specialties?: string[];
    profilePhoto?: File | string;
    removeSpecialties?: string[];
    isDeleted?: boolean;
    averageRating?: number;
    createdAt?: string;
    updatedAt?: string;
    doctorSpecialties?: Array<{
        specialitiesId: string;
        specialities?: {
            id: string;
            title: string;
            icon?: string;
        };
    }>;
    doctorSchedules?: IDoctorSchedule[];
}

export interface IDoctorsProps {
    doctor: IDoctor[],
}

export interface IDoctorProps {
    doctor: IDoctor[],
    specialities:ISpecialty[]
}

export interface IDoctorFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  doctor?: IDoctor;
  specialities?: ISpecialty[];
}
