import { IGender } from "@/types/user"
import z from "zod"

export const createDoctorZodSchema = z.object({
    password: z.string({ message: "Email is required" }),
    doctor: z.object(
        {
            email: z.email({ message: "Email is required" }),
            name: z.string().nonempty("Name is required"),
            // profilePhoto: z.string().optional(),
            address: z.string(),
            contactNumber: z.string(),
            registrationNumber: z.string(),
            experience: z.number(),
            gender: z.enum(Object.keys(IGender)).default("MALE"),
            appointmentFee: z.number(),
            qualification: z.string(),
            currentWorkingPlace: z.string(),
            designation: z.string(),
            specialties: z
                .array(
                    z.string()
                )
                .min(1, {
                    message: "At least one specialty is required",
                })
                .optional()
        }
    )
})