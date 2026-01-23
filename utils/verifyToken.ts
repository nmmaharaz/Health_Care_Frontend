import jwt from "jsonwebtoken"

export const verifyTokenFromCookie = (cookieName: string, cookieSecret: string) => {
    const verify: string | jwt.JwtPayload =  jwt.verify(cookieName, cookieSecret)
    return verify
}