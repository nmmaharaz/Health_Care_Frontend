/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodValidate } from "@/error/zodValidate";
import { serverFetch } from "@/utils/server-fetch"
import { createDoctorZodSchema } from "@/validation/zod/admin/doctor.validation";

export const createDoctor = async (file: any, _previewState: any, formData: FormData) => {
    try {
        const payload = {
            password: formData.get("password"),
            doctor:
            {
                email: formData.get("email"),
                name: formData.get("name"),
                // profilePhoto: z.string().optional(),
                address: formData.get("address"),
                contactNumber: formData.get("contactNumber"),
                registrationNumber: formData.get("registrationNumber"),
                experience: formData.get("experience"),
                gender: formData.get("gender"),
                appointmentFee: formData.get("appointmentFee"),
                qualification: formData.get("qualification"),
                currentWorkingPlace: formData.get("currentWorkingPlace"),
                designation: formData.get("designation"),
            }
        }

        if (zodValidate(payload, createDoctorZodSchema).success === false) {
            return zodValidate(payload, createDoctorZodSchema);
        }

        const validatedPayload = zodValidate(payload, createDoctorZodSchema).data;
        console.log(validatedPayload)
        const newFormData = new FormData()
        newFormData.append("data", JSON.stringify(validatedPayload))

        if (file) {
            newFormData.append("file", file as Blob)
        }
        // console.log(newFormData)
        const response = await serverFetch.post("/user/create-doctor", {
            body: newFormData
        })
        return await response.json()
    } catch (error) {
        console.log(error, "Doctor Error")
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

export const getAllDoctors = async (queryString?: string) => {
    try {
        const response = await serverFetch.get(`/doctor${queryString ? queryString : ""}`)
        return await response.json()
    } catch (error) {
        console.log(error, "Doctors Error")
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}