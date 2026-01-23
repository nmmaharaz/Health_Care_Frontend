"use server"

import { deleteCookie } from "@/utils/tokenHandlers"
import { redirect } from "next/navigation"

export const logOut = async() =>{
    await deleteCookie("accessToken")
    await deleteCookie("resfreshToken")
    return redirect("/login?loggedOut=true")
}