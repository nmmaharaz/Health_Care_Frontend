import DashbordLayoutStyle from "@/components/modules/dashboard/DashbordLayoutStyle"
import React from "react"

export default function Dashboardlayout({children}:{
  children: React.ReactNode
}) {
  return (
    <div>
     <DashbordLayoutStyle>{children}</DashbordLayoutStyle>
    </div>
  )
}
