import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <div className="grow-1">
            {children}
        </div>
        <Footer></Footer>
    </div>
  )
}
