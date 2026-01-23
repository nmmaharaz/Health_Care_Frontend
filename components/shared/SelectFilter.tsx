import { useState, useTransition } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { redirect, useSearchParams } from "next/navigation";
interface SelectFilterProps {
    paramName: string,
    placeholder?: string,
    options: {
        label: string,
        value: string
    }[]
}

export default function SelectFilter({
    paramName,
    placeholder,
    options,
}: SelectFilterProps) {
    const searchParams = useSearchParams()
    const [isPending, startTransition] = useTransition()
    const currentValue = searchParams.get(paramName) || "All"

    const handleValue = (value: string) => {
        const params = new URLSearchParams(currentValue.toString())
        if(value === "All"){
            params.delete(paramName)
        }else if(value){
            params.set(paramName, value)
        }else{
            params.delete(paramName)
        }
        startTransition(()=>{
            redirect(`?${params.toString()}`)
        })

    }

    return (
        <div>
            <Select 
            value={currentValue}
            onValueChange={handleValue}
            disabled={isPending}
            // defaultValue="2"
            >
                <SelectTrigger
                    className="border-transparent bg-muted shadow-none"
                // id={id}
                >
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    {options?.map((option) =>
                        <SelectItem key={option.value} value="1">React</SelectItem>
                    )}
                </SelectContent>
            </Select>
        </div>
    )
}
