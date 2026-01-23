/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"
import { parse } from "cookie";
import jwt from "jsonwebtoken";
import envVars from "@/config/env";
import { getDefaultDashboardRoute, isValidRedirectForRole } from "@/utils/auth-utils";
import { redirect } from "next/navigation";
import { setCookie } from "@/utils/tokenHandlers";
import { serverFetch } from "@/utils/server-fetch";
import { zodValidate } from "@/error/zodValidate";
import { loginValidationZodSchema } from "@/validation/zod/auth.validation";

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

        if (zodValidate(validationData, loginValidationZodSchema).success === false) {
            return zodValidate(validationData, loginValidationZodSchema);
        }

        const loginData = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        const res = await serverFetch.post("/auth/login", {
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json",
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

        // const verifiedToken: jwt.JwtPayload | string = verifyTokenFromCookie(accessTokenObj.accessToken, envVars.jwt.jwt_access_secret)
        const verifiedToken: jwt.JwtPayload | string = jwt.verify(accessTokenObj.accessToken, envVars.jwt.jwt_access_secret)

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