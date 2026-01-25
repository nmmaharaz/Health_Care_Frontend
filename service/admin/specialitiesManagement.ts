"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodValidate } from "@/error/zodValidate";
import { serverFetch } from "@/utils/server-fetch"
import { createSpecialityZodSchema } from "@/validation/zod/admin/specialties.validation";

export const createSpecialities = async (_previewState: any, formData: FormData) => {
    try {
        const payload = {
            title: formData.get("title") as string
        }

        if (zodValidate(payload, createSpecialityZodSchema).success === false) {
            return zodValidate(payload, createSpecialityZodSchema);
        }

        const validatedPayload = zodValidate(payload, createSpecialityZodSchema).data;

        const newFormData = new FormData()
        newFormData.append("data", JSON.stringify(validatedPayload))

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob)
        }

        const response = await serverFetch.get("/specialties", {
            body: newFormData
        })
        return await response.json()
    } catch (error) {
        console.log(error, "Specialities Error")
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

export const getAllSpecialities = async (queryString?: string) => {
    try {
        const response = await serverFetch.get(`/specialties${queryString ? queryString : ""}`)
        return await response.json()
    } catch (error) {
        console.log(error, "Specialities Error")
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