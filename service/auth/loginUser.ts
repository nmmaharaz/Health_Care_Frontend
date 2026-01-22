/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import z from "zod"
import { parse } from "cookie";
import jwt from "jsonwebtoken";
import envVars from "@/config/env";
import { getDefaultDashboardRoute, isValidRedirectForRole } from "@/utils/auth-utils";
import { redirect } from "next/navigation";
import { setCookie, verifyTokenFromCookie } from "@/utils/tokenHandlers";
import { formValidationError } from "@/error/formValidationError";
import { serverFetch } from "@/utils/server-fetch";

const loginValidationZodSchema = z.object({
    email: z.email({
        message: "Email is required",
    }),
    // email: z.string().min(50, {message: "Email is required"}),
    password: z.string("Password is required").min(6, {
        error: "Password is required and must be at least 6 characters long",
    }).max(100, {
        error: "Password must be at most 100 characters long",
    }),
    confirmPassword: z.string("Password is required")
}).refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"]
});


export const loginUser = async (_currentState: any, formData: any) => {
    try {
        const redirectTo = formData.get('redirect') || null;
        let accessTokenObj: null | any = null
        let refreshTokenObj: null | any = null
        const validationData = {
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword')
        }
        const validatedFields = loginValidationZodSchema.safeParse(validationData);

        if(!validatedFields.success) {
           return formValidationError(validatedFields);
        }

        const loginData = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        const res = await serverFetch.post("/auth/login", {
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const setCookieHeaders = res.headers.getSetCookie()
        if (setCookieHeaders && setCookieHeaders.length > 0) {
            setCookieHeaders.forEach((cookie) => {
                const parsedCookie = parse(cookie);
                if (parsedCookie['accessToken']) {
                    accessTokenObj = parsedCookie
                }
                if (parsedCookie['refreshToken']) {
                    refreshTokenObj = parsedCookie
                }
            })
        } else {
            throw new Error("No Set-Cookie headers found")
        }

        if (!accessTokenObj) {
            throw new Error("Tokens not found in cookies");
        }

        if (!refreshTokenObj) {
            throw new Error("Tokens not found in cookies");
        }

        setCookie("accessToken", accessTokenObj.accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: accessTokenObj['SameSite'] || 'none',
            maxAge: accessTokenObj['Max-Age'] ? parseInt(accessTokenObj['Max-Age']) : 1000 * 60 * 60,
            path: accessTokenObj['Path'] || '/',
        })

        setCookie("refreshToken", refreshTokenObj.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: refreshTokenObj['SameSite'] || 'none',
            maxAge: refreshTokenObj['Max-Age'] ? parseInt(refreshTokenObj['Max-Age']) : 1000 * 60 * 60 * 24 * 30,
            path: refreshTokenObj['Path'] || '/',
        })

        const verifiedToken: jwt.JwtPayload | string = verifyTokenFromCookie(accessTokenObj.accessToken, envVars.jwt.jwt_access_secret)

        if (typeof verifiedToken === "string") {
            throw new Error("Invalid token");
        }

        if (redirectTo) {
            const redirectPath = redirectTo.toString();
            if (isValidRedirectForRole(redirectPath, verifiedToken.role)) {
                redirect(redirectPath);
            } else {
                redirect(getDefaultDashboardRoute(verifiedToken.role));
            }
        } else {
            redirect(getDefaultDashboardRoute(verifiedToken.role));
        }

        return res.json()
    } catch (error: any) {
        if (error?.digest?.startsWith('NEXT_REDIRECT')) {
            throw error;
        }
        console.log("Login error: ", error);
        return { error: "Login failed" };
    }
}