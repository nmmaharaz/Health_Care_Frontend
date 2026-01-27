import { ICreateButton } from "@/types/admin/secialities.interface";

export default function CreateButton({ label, onClick }: ICreateButton) {
    return (
        <div>
            <button onClick={onClick} className="bg-linear-to-r from-[#4338ca] to-[#4f6ad4f1] px-4 py-2 text-sm font-semibold rounded-md text-white">{label}</button>
        </div>
    )
}
