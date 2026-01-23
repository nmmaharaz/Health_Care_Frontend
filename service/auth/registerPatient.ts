/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { zodValidate } from "@/error/zodValidate";
import { loginUser } from "./loginUser";
import { serverFetch } from "@/utils/server-fetch";
import { registerPatientValidationZodSchema } from "@/validation/zod/auth.validation";

export const regiterPatient = async (_currentState: any, formData: any) => {
    try {
        const file = formData.get("file");

        const verifyFormData = {
            name: formData.get("name"),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
            address: formData.get("address")
        };

        if (zodValidate(verifyFormData, registerPatientValidationZodSchema).success === false) {
            return zodValidate(verifyFormData, registerPatientValidationZodSchema);
        }
        const registerData = {
            password: formData.get('password'),
            patient: {
                name: formData.get("name"),
                email: formData.get('email'),
                address: formData.get("address")
            }
        };

        const form = new FormData();
        form.append("data", JSON.stringify(registerData));

        if (file) {
            form.append("file", file);
        }

        const res = await serverFetch.post("/user/create-patient", {
            body: form,
        });

        const result = await res.json();

        if (result.success) {
            await loginUser(_currentState, formData)
        }
        return result;

    } catch (error: any) {
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.error("Fetch Error:", error);
        return { success: false, message: "Registration failed" };
    }
}