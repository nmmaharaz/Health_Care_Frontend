import PublicNavbar from "@/components/shared/PublicNavbar";
import Footer from "@/components/shared/Footer";
import React from "react";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen flex flex-col">
        <PublicNavbar></PublicNavbar>
        <div className="grow">
            {children}
        </div>
        <Footer></Footer>
    </div>
  )
}
