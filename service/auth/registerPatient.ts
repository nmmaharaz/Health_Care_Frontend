/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import z from "zod"
import { loginUser } from "./loginUser";
import { formValidationError } from "@/error/formValidationError";
import { serverFetch } from "@/utils/server-fetch";

const registerPatientValidationZodSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    address: z.string().optional(),
    email: z.email({ message: "Valid email is required" }),
    password: z.string().min(6, {
        error: "Password is required and must be at least 6 characters long",
    }).max(100, {
        error: "Password must be at most 100 characters long",
    }),
    confirmPassword: z.string().min(6, {
        error: "Confirm Password is required and must be at least 6 characters long",
    }),
}).refine((data: any) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
});


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

        const validatedFields = registerPatientValidationZodSchema.safeParse(verifyFormData);

        if (!validatedFields.success) {
            return formValidationError(validatedFields);
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
        console.log("Registration Result:", result);

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