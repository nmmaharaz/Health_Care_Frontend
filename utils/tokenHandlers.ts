import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"

export const setCookie = async (cookieName: string, cookieValue: string, options: Partial<ResponseCookie>) => {
    const cookieStore = await cookies()
    cookieStore.set(cookieName, cookieValue, options);
}           
export const getCookie = async (cookieName: string) => {
    const cookieStore = await cookies()
    return cookieStore.get(cookieName);
}     

export const deleteCookie = async (cookieName: string) => {
    const cookieStore = await cookies()
    cookieStore.delete(cookieName);
} 

export const verifyTokenFromCookie = async (cookieName: string, cookieSecret: string) => {
    return jwt.verify(cookieName, cookieSecret)
}