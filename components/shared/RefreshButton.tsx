"use client"
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
            className={className}
            onClick={handleRefresh}
        >
            <RefreshCcw
                className={`h-4 w-4 ${isPending ? "animate-spin" : ""} ${showLabel ? "mr-2" : ""
                    }`}
            />
        </button>
    )
}
