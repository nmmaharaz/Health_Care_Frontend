"use client"
import ManagementTable from "@/components/shared/Dashboard/ManagementTable"
import { ISpecialitiesProps, ISpecialty } from "@/types/admin/secialities.interface"
import { SpecialitiesColumns } from "./SpecialitiesColumns"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { deleteSpeciality } from "@/service/admin/specialitiesManagement"
import { toast } from "sonner"
import DeleteConfirmationDialog from "@/components/shared/Dashboard/DeleteConfirmationDialog"

export default function SpecialitiesTable({ specialities }: ISpecialitiesProps) {
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [deletingSpeciality, setDeletingSpeciality] =
        useState<ISpecialty | null>(null);
    const [isDeletingDialog, setIsDeletingDialog] = useState(false);
    const handleRefresh = () => {
        startTransition(() => {
            router.refresh();
        });
    };

    const handleDelete = (speciality: ISpecialty) => {
        setDeletingSpeciality(speciality);
    };

    const confirmDelete = async () => {
        if (!deletingSpeciality) return;
        setIsDeletingDialog(true);
        const result = await deleteSpeciality(deletingSpeciality.id);
        setIsDeletingDialog(false);
        if (result.success) {
            toast.success(result.message || "Speciality deleted successfully");
            setDeletingSpeciality(null);
            handleRefresh();
        } else {
            toast.error(result.message || "Failed to delete speciality");
        }
    };

    return (
        <>
            <ManagementTable
                columns={SpecialitiesColumns}
                data={specialities}
                getRowKey={(speciality) => speciality.id}
                onDelete={handleDelete}
                emptyMessage="No Specilities Found">
            </ManagementTable>

            <DeleteConfirmationDialog
                open={!!deletingSpeciality}
                onConfirm={confirmDelete}
                onOpenChange={(open) => !open && setDeletingSpeciality(null)}
                isDeleting={isDeletingDialog}
                title="Delete Speciality"
                description={`Are you sure you want to delete ${deletingSpeciality?.title}? This action cannot be undone.`}>
            </DeleteConfirmationDialog>
        </>
    )
}
