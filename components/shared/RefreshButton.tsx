"use client"
import { RefreshButtonProps } from "@/types/shared.interface"
import { RefreshCcw } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

export default function RefreshButton({ showLabel, className }: RefreshButtonProps) {
    const router = useRouter()
    const [isPending, setTransition] = useTransition()
    const handleRefresh = () => {
        setTransition(() => {
            router.refresh()
        })
    }
    return (
        <button
            className="flex items-center bg-linear-to-r from-[#4338ca] to-[#4f6ad4f1] px-4 py-2 text-sm font-semibold rounded-md text-white"
            onClick={handleRefresh}
        >
            <RefreshCcw
                className={`h-4 w-4 ${isPending ? "animate-spin" : ""} ${showLabel ? "mr-2" : ""
                    }`}
            />
            {showLabel}
        </button>
    )
}
