import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SelectFilterProps } from "@/types/shared.interface";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


export default function SelectFilter({
    paramName,
    placeholder,
    options,
}: SelectFilterProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
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
            router.push(`?${params.toString()}`)
        })
    }

    return (
        <div>
            <Select 
            value={currentValue}
            onValueChange={handleValue}
            disabled={isPending}
            >
                <SelectTrigger
                    className="border-transparent bg-muted shadow-none"
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
