import Footer from "@/components/shared/Footer";
import React from "react";
import { getUserInfo } from "@/service/auth/user";
import { IUserInfo } from "@/types/user";
import Navbar from "@/components/shared/Navbar";

export default async function layout({children}: {children: React.ReactNode}) {
  const user =await getUserInfo() as IUserInfo
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar user={user}></Navbar>
        <div className="grow">
            {children}
        </div>
        <Footer></Footer>
    </div>
  )
}
