/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import z from "zod"

const loginValidationZodSchema = z.object({
    email: z.email({
        message: "Email is required",
    }),
    password: z.string("Password is required").min(6, {
        error: "Password is required and must be at least 6 characters long",
    }).max(100, {
        error: "Password must be at most 100 characters long",
    }),
    confirmPassword: z.string("Password is required").min(6, {
        error: "Password is required and must be at least 6 characters long",
    }).max(100, {
        error: "Password must be at most 100 characters long",
    })
}).refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"]
});


export const loginUser = async (_currentState: any, formData: any) => {
    const loginData = {
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')
    }
    const validatedFields = loginValidationZodSchema.safeParse(loginData);
    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.issues.map(issue => {
                return {
                    field: issue.path[0],
                    message: issue.message,
                }
            })
        }
    }
  

}