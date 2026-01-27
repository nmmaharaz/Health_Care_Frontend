import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CreditCardIcon, SettingsIcon, UserIcon } from "lucide-react";
import DashboardLogout from "./DashboardLogout";
import Link from "next/link";

export default function UserProfileDropdown() {
    return (
         <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
            <div className='flex items-center gap-3'>
                <Avatar>
                    <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="grayscale"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="leading-tight">
                    <p className="text-sm pb-1 font-semibold text-gray-600">
                        Json Taylor
                    </p>
                    <p className="text-xs text-gray-500">
                        Doctor
                    </p>
                </div>
            </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href="/my-profile">
        <DropdownMenuItem>
          <UserIcon />
          Profile
        </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <CreditCardIcon />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DashboardLogout></DashboardLogout>
      </DropdownMenuContent>
    </DropdownMenu>

    )
}
