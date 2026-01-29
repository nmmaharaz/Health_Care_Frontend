/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { zodValidate } from "@/error/zodValidate";
import { serverFetch } from "@/utils/server-fetch"
import { createDoctorZodSchema } from "@/validation/zod/admin/doctor.validation";

export const createDoctor = async (_previewState: any, formData: FormData) => {
    try {
        const payload = {
            password: formData.get("password"),
            doctor:
            {
                email: formData.get("email"),
                name: formData.get("name"),
                address: formData.get("address"),
                contactNumber: formData.get("contactNumber"),
                registrationNumber: formData.get("registrationNumber"),
                experience: Number(formData.get("experience")),
                gender: formData.get("gender"),
                appointmentFee: Number(formData.get("appointmentFee")),
                qualification: formData.get("qualification"),
                currentWorkingPlace: formData.get("currentWorkingPlace"),
                designation: formData.get("designation"),
            }
        }

        if (zodValidate(payload, createDoctorZodSchema).success === false) {
            return zodValidate(payload, createDoctorZodSchema);
        }

        const validatedPayload = zodValidate(payload, createDoctorZodSchema).data;
        const newFormData = new FormData()
        newFormData.append("data", JSON.stringify(validatedPayload))

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob)
        }
        console.log(newFormData)
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

export const deleteSpeciality = async (id: string) => {
    try {
        // console.log(id, "this is id")
        const response = await serverFetch.delete(`/specialties/${id}`)
        return await response.json()
    } catch (error) {
        console.log(error, "Specialities Error")
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}