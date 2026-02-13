/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { zodValidate } from "@/error/zodValidate";
import { serverFetch } from "@/utils/server-fetch";
import { updatePatientZodSchema } from "@/validation/zod/admin/patient.validation";

/**
 * GET ALL PATIENTS
 * API: GET /patient?queryParams
 */
export async function getAllPatients(queryString?: string) {
    try {
        // const searchParams = new URLSearchParams(queryString);
        // const page = searchParams.get("page") || "1";
        // const searchTerm = searchParams.get("searchTerm") || "all";
        const response = await serverFetch.get(`/patient${queryString ? `?${queryString}` : ""}`);
        // console.log("Fetch patients response:", await response.json());
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

/**
 * GET PATIENT BY ID
 * API: GET /patient/:id
 */
export async function getPatientById(id: string) {
    try {
        const response = await serverFetch.get(`/patient/${id}`, {
            next: {
                tags: [`patient-${id}`, "patients-list"],
                revalidate: 180, // more responsive patient profile updates
            }
        })
        const result = await response.json();
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

/**
 * UPDATE PATIENT
 * API: PATCH /patient/:id
 */
export async function updatePatient(id: string, _prevState: any, formData: FormData) {
    const validationPayload: any = {
        name: formData.get("name") as string,
        contactNumber: formData.get("contactNumber") as string,
        address: formData.get("address") as string,
    };

    const validation = zodValidate(validationPayload, updatePatientZodSchema);
    if (!validation.success && validation.errors) {
        return {
            success: false,
            message: "Validation failed",
            formData: validationPayload,
            errors: validation.errors,
        };
    }

    if (!validation.data) {
        return {
            success: false,
            message: "Validation failed",
            formData: validationPayload,
            errors: [{ field: "unknown", message: "Invalid data" }],
        };
    }
    try {

        const response = await serverFetch.patch(`/patient/${id}`, {
            body: JSON.stringify(validation.data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        return result;
    } catch (error: any) {
        console.error("Update patient error:", error);
        return {
            success: false,
            message: process.env.NODE_ENV === 'development' ? error.message : 'Failed to update patient',
            formData: validationPayload
        };
    }
}

/**
 * SOFT DELETE PATIENT
 * API: DELETE /patient/soft/:id
 */
export async function softDeletePatient(id: string) {
    try {
        const response = await serverFetch.delete(`/patient/soft/${id}`)
        const result = await response.json();
        // if (result.success) {
        //     revalidateTag('patients-list', { expire: 0 });
        //     revalidateTag(`patient-${id}`, { expire: 0 });
        // }
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}

/**
 * HARD DELETE PATIENT
 * API: DELETE /patient/:id
 */
export async function deletePatient(id: string) {
    try {
        const response = await serverFetch.delete(`/patient/${id}`)
        const result = await response.json();
        // if (result.success) {
        //     revalidateTag('patients-list', { expire: 0 });
        //     revalidateTag(`patient-${id}`, { expire: 0 });
        // }
        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'}`
        };
    }
}
