"use client"
import { Search } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { Input } from "@/components/ui/input";

interface ISearchFilter {
    paramName: string,
    placeholder: string
}

export default function SearchFilter({ paramName, placeholder }: ISearchFilter) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const searchParams = useSearchParams()
    const [value, setValue] = useState("")
    const debouncedValue = useDebounce(value, 500)

    useEffect(()=>{
        const params = new URLSearchParams(searchParams.toString())
        const initialValue = searchParams.get(paramName) || ""

        if(debouncedValue === initialValue){
            return
        }

        if(debouncedValue){
            params.set(paramName, debouncedValue);
            // params.set("page", "1")
        }else{
            params.delete(paramName)
            // params.delete("page")
        }

        startTransition(()=>{
            router.push(`?${params.toString()}`)
        })
    }, [debouncedValue, paramName, router,searchParams ])

    return (
        <div className="relative">
            <Search className="absolute left-3 top-4.5 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                placeholder={placeholder}
                className="pl-8"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={isPending}
            />
        </div>
    )
}
