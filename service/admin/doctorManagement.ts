/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import envVars from "@/config/env";
import { zodValidate } from "@/error/zodValidate";
import { IDoctor } from "@/types/admin/doctor.interface";
import { serverFetch } from "@/utils/server-fetch"
import { createDoctorZodSchema, updateDoctorZodSchema } from "@/validation/zod/admin/doctor.validation";

export const createDoctor = async (_previewState: any, formData: FormData) => {
    const specialtiesData = formData.get("specialities") as string
    const payload = {
        password: formData.get("password"),
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
        specialties: JSON.parse(specialtiesData)
    }
    const validatedPayload = zodValidate(payload, createDoctorZodSchema);

    if (!validatedPayload.success && validatedPayload.errors) {
        return {
            success: validatedPayload.success,
            message: "Validation failed",
            formData: payload,
            errors: validatedPayload.errors,
        }
    }

    if (!validatedPayload.data) {
        return {
            success: false,
            message: "Validation failed",
            formData: payload,
        }
    }

    const { password, ...doctorData } = validatedPayload.data
    const payloadData = {
        password,
        doctor: doctorData
    }
    const newFormData = new FormData()
    newFormData.append("data", JSON.stringify(payloadData))

    if (formData.get("file")) {
        newFormData.append("file", formData.get("file") as Blob)
    }

    try {
        const response = await serverFetch.post("/user/create-doctor", {
            body: newFormData
        })
        return await response.json()
    } catch (error: any) {
        console.log(error, "Doctor Error")
        return {
            success: false,
            message: envVars.node_env ? error.message : "Something went wrong",
            formData: payload
        }
    }
}

export const getAllDoctors = async (queryString?: string) => {
    try {
        const response = await serverFetch.get(`/doctor${queryString ? `?${queryString}` : ""}`)
        return await response.json()
    } catch (error) {
        console.log(error, "Doctors Error")
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}

export async function updateDoctor(id: string, _prevState: any, formData: FormData) {
    const experienceValue = formData.get("experience");
    const appointmentFeeValue = formData.get("appointmentFee");
    const specialtiesData = formData.get("specialities") as string

    const specialties = JSON.parse(specialtiesData);
    if (!specialtiesData && !Array.isArray(specialties) && specialties.length < 1) {
        return {
            success: false,
            message: "At least one specialty is required",
        }
    }

    const validationPayload: Partial<IDoctor> = {
        name: formData.get("name") as string,
        contactNumber: formData.get("contactNumber") as string,
        address: formData.get("address") as string,
        registrationNumber: formData.get("registrationNumber") as string,
        experience: experienceValue ? Number(experienceValue) : 0,
        gender: formData.get("gender") as "MALE" | "FEMALE",
        appointmentFee: appointmentFeeValue ? Number(appointmentFeeValue) : 0,
        qualification: formData.get("qualification") as string,
        currentWorkingPlace: formData.get("currentWorkingPlace") as string,
        designation: formData.get("designation") as string,
        specialties: specialties
    };

    // Parse specialties array (for adding new specialties)
    // const specialtiesValue = formData.get("specialties") as string;
    // if (specialtiesValue) {
    //     try {
    //         const parsed = JSON.parse(specialtiesValue);
    //         if (Array.isArray(parsed) && parsed.length > 0) {
    //             validationPayload.specialties = parsed;
    //         }
    //     } catch {
    //         // Ignore invalid JSON
    //     }
    // }

    // Parse removeSpecialties array (for removing existing specialties)
    
    // const removeSpecialtiesValue = formData.get("removeSpecialties") as string;
    // if (removeSpecialtiesValue) {
    //     try {
    //         const parsed = JSON.parse(removeSpecialtiesValue);
    //         if (Array.isArray(parsed) && parsed.length > 0) {
    //             validationPayload.removeSpecialties = parsed;
    //         }
    //     } catch {
    //         // Ignore invalid JSON
    //     }
    // }

    const validatedPayload = zodValidate(validationPayload, updateDoctorZodSchema);

    if (!validatedPayload.success && validatedPayload.errors) {
        return {
            success: validatedPayload.success,
            message: "Validation failed",
            formData: validationPayload,
            errors: validatedPayload.errors,
        }
    }

    if (!validatedPayload.data) {
        return {
            success: false,
            message: "Validation failed",
            formData: validationPayload,
        }
    }

    console.log(validatedPayload.data, "validatedPayload.data")

    try {
        const response = await serverFetch.patch(`/doctor/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validatedPayload.data),
        })
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false, message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`,
            formData: validationPayload,
        }
    }
}

export const deleteDoctor = async (id: string) => {
    try {
        const response = await serverFetch.delete(`/doctor/soft/${id}`)
        return await response.json()
    } catch (error) {
        console.log(error, "Specialities Error")
        return {
            success: false,
            message: "Something went wrong"
        }
    }
}