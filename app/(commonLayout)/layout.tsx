import PublicNavbar from "@/components/shared/PublicNavbar";
import Footer from "@/components/shared/Footer";
import React from "react";
import { getUserInfo } from "@/service/auth/user";
import { IUserInfo } from "@/types/user";

export default async function layout({children}: {children: React.ReactNode}) {
  const user =await getUserInfo() as IUserInfo
  return (
    <div className="min-h-screen flex flex-col">
        <PublicNavbar user={user}></PublicNavbar>
        <div className="grow">
            {children}
        </div>
        <Footer></Footer>
    </div>
  )
}
