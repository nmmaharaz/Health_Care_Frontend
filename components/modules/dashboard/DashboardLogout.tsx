"use client"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { handleLogout } from "@/utils/handleLogout";
import { LogOutIcon } from "lucide-react";

export default function DashboardLogout() {
    
  return (
        <DropdownMenuItem onClick={handleLogout} variant="destructive">
          <LogOutIcon />
          Log out
        </DropdownMenuItem>
  )
}
