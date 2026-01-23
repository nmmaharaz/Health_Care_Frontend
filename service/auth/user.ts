import envVars from "@/config/env"
import { IUserInfo } from "@/types/user"
import { getCookie } from "@/utils/tokenHandlers"
import jwt, { JwtPayload } from "jsonwebtoken"

export const getUserInfo = async () => {
    try {
        const accessToken = await getCookie("accessToken")
        if(!accessToken){
            return null
        }
        const verifiedToken: string | jwt.JwtPayload = jwt.verify(accessToken, envVars.jwt.jwt_access_secret) as JwtPayload

         if (!verifiedToken) {
             return null;
        }

        const userInfo:IUserInfo = {
            userId: verifiedToken.userId,
            email: verifiedToken.email,
            role: verifiedToken.role
        }
        return userInfo
    } catch (error) {
        console.log(error)
        return null
    }
}
