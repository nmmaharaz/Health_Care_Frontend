/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import z from "zod"
import { loginUser } from "./loginUser";

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

        const res = await fetch("http://localhost:5000/api/v1/user/create-patient", {
            method: "POST",
            body: form, 
        });
        
        const result = await res.json();

        if(result.success) {
            await loginUser(_currentState, formData)
        }
        return result;

    } catch (error: any) {
        console.error("Fetch Error:", error);
         if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        return { success: false, message: "Registration failed" };
    }
}