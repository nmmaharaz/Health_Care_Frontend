"use client"
import ManagementTable from "@/components/shared/Dashboard/ManagementTable"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import DeleteConfirmationDialog from "@/components/shared/Dashboard/DeleteConfirmationDialog"
import { doctorsColumns } from "./DoctorColumn"
import { IDoctor, IDoctorProps } from "@/types/admin/doctor.interface"
import { deleteDoctor } from "@/service/admin/doctorManagement"

export default function DoctorTable({ doctor }: IDoctorProps) {
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [deletingDoctor, setDeletingDoctor] =
        useState<IDoctor | null>(null);
    const [isDeletingDialog, setIsDeletingDialog] = useState(false);
    const handleRefresh = () => {
        startTransition(() => {
            router.refresh();
        });
    };

    const handleDelete = (doctor: IDoctor) => {
        setDeletingDoctor(doctor);
    };

    const confirmDelete = async () => {
        if (!deletingDoctor) return;
        setIsDeletingDialog(true);
        const result = await deleteDoctor(deletingDoctor.id as string);
        setIsDeletingDialog(false);
        if (result.success) {
            toast.success(result.message || "Speciality deleted successfully");
            setDeletingDoctor(null);
            handleRefresh();
        } else {
            toast.error(result.message || "Failed to delete speciality");
        }
    };

    return (
        <>
            <ManagementTable
                data={doctor}
                columns={doctorsColumns}
                getRowKey={(doctor) => doctor.id as string}
                onDelete={handleDelete}
                emptyMessage="No Specilities Found">
            </ManagementTable>

            <DeleteConfirmationDialog
                open={!!deletingDoctor}
                onConfirm={confirmDelete}
                onOpenChange={(open) => !open && setDeletingDoctor(null)}
                isDeleting={isDeletingDialog}
                title="Delete Speciality"
                description={`Are you sure you want to delete ${deletingDoctor?.name}? This action cannot be undone.`}>
            </DeleteConfirmationDialog>
        </>
    )
}
