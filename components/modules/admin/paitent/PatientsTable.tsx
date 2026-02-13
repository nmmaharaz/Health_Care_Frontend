"use client";

import ManagementTable from "@/components/shared/Dashboard/ManagementTable";
import { IPatient, PatientsTableProps } from "@/types/admin/patient.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import PatientFormDialog from "./PatientFormDialog";
import { patientsColumns } from "./patientsColumns";
import { softDeletePatient } from "@/service/admin/patientManagement";
import PatientViewDetailDialog from "./PatientViewDetailDialog";
import DeleteConfirmationDialog from "@/components/shared/Dashboard/DeleteConfirmationDialog";

const PatientsTable = ({ patients }: PatientsTableProps) => {
  console.log("Patients data in PatientsTable:", patients);
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingPatient, setDeletingPatient] = useState<IPatient | null>(null);
  const [viewingPatient, setViewingPatient] = useState<IPatient | null>(null);
  const [editingPatient, setEditingPatient] = useState<IPatient | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (patient: IPatient) => {
    setViewingPatient(patient);
  };

  const handleEdit = (patient: IPatient) => {
    setEditingPatient(patient);
  };

  const handleDelete = (patient: IPatient) => {
    setDeletingPatient(patient);
  };

  const confirmDelete = async () => {
    if (!deletingPatient) return;

    setIsDeleting(true);
    const result = await softDeletePatient(deletingPatient.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Patient deleted successfully");
      setDeletingPatient(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete patient");
    }
  };

  return (
    <>
      <ManagementTable
        data={patients}
        columns={patientsColumns}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(patient) => patient.id!}
        emptyMessage="No patients found"
      />

      {/* Edit Patient Form Dialog */}
      <PatientFormDialog
        key={editingPatient?.id}
        open={!!editingPatient}
        onClose={() => setEditingPatient(null)}
        patient={editingPatient!}
        onSuccess={() => {
          setEditingPatient(null);
          handleRefresh();
        }}
      />

      <PatientViewDetailDialog
        open={!!viewingPatient}
        onClose={() => setViewingPatient(null)}
        patient={viewingPatient}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingPatient}
        onOpenChange={(open) => !open && setDeletingPatient(null)}
        onConfirm={confirmDelete}
        title="Delete Patient"
        description={`Are you sure you want to delete ${deletingPatient?.name}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />

      {/* View Patient Detail Dialog */}

    </>
  );
};

export default PatientsTable;
