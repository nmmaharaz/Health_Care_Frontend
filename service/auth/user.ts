// import envVars from "@/config/env"
// import { IUserInfo } from "@/types/user"
// import { getCookie } from "@/utils/tokenHandlers"
// import jwt, { JwtPayload } from "jsonwebtoken"

// export const getUserInfo = async () => {
//     try {
//         const accessToken = await getCookie("accessToken")
//         if(!accessToken){
//             return null
//         }
//         const verifiedToken: string | jwt.JwtPayload = jwt.verify(accessToken, envVars.jwt.jwt_access_secret) as JwtPayload

//          if (!verifiedToken) {
//              return null;
//         }

//         const userInfo:IUserInfo = {
//             userId: verifiedToken.userId,
//             email: verifiedToken.email,
//             role: verifiedToken.role
//         }
//         return userInfo
//     } catch (error) {
//         console.log(error)
//         return null
//     }
// }


/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { UserInfo } from "@/types/user/user.interface";
import { serverFetch } from "@/utils/server-fetch";
import { getCookie } from "@/utils/tokenHandlers";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getUserInfo = async (): Promise<UserInfo | any> => {
    let userInfo: UserInfo | any;
    try {

        const response = await serverFetch.get("/auth/me"
        //     , {
        //     next: { tags: ["user-info"], revalidate: 180 },

        // }
    )

        const result = await response.json();
        // console.log(result, "Result")

        // if (result.success) {
        //     const accessToken = await getCookie("accessToken");

        //     if (!accessToken) {
        //         throw new Error("No access token found");
        //     }

        //     const verifiedToken = jwt.verify(accessToken, process.env.JWT_SECRET as string) as JwtPayload;

        //     userInfo = {
        //         name: verifiedToken.name || "Unknown User",
        //         email: verifiedToken.email,
        //         role: verifiedToken.role,
        //     }
        // }

        userInfo = {
            name: result.data.admin?.name || result.data.doctor?.name || result.data.patient?.name || result.data.name || "Unknown User",
            ...result.data
        };


        // console.log(userInfo, "UserInfo")
        return userInfo;
    } catch (error: any) {
        console.log(error);
        return {
            id: "",
            name: "Unknown User",
            email: "",
            role: "PATIENT",
        };
    }

}