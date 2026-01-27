import { ISpecialty } from "@/types/admin/secialities.interface";
import { Column } from "@/types/shared.interface";
import Image from "next/image";

export const SpecialitiesColumns: Column<ISpecialty>[] = [
    {
        header:"Icon",
        accessor: (speciality)=>(
            <Image alt={speciality.title} src={speciality.icon} width={40} height={40} className="rounded-full w-10 h-10 "></Image>
        )
    },
    {
        header: "Title",
        accessor: (speciality)=>speciality.title
    }
]