import { ICreateButton } from "@/types/admin/secialities.interface";

export default function CreateButton({ label, onClick }: ICreateButton) {
    return (
        <div>
            <button onClick={onClick} className="bg-linear-to-r min-w-31 from-[#4338ca] to-[#4f6ad4f1]  px-4 py-2 text-sm font-semibold rounded-md text-white hover:from-[#3a2fac] hover:to-[#4f69d0f1] hover:transition-transform">{label}</button>
        </div>
    )
}
