import { UserRole } from "@/utils/auth-utils";
import { IAdmin } from "../admin/admin.interface";
import { IPatient } from "../admin/patient.interface";
import { IDoctor } from "../admin/doctor.interface";

export interface UserInfo {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    needPasswordChange: boolean;
    status: "ACTIVE" | "BLOCKED" | "DELETED";
    admin?: IAdmin;
    patient?: IPatient;
    doctor?: IDoctor;
    createdAt: string;
    updatedAt: string;
}