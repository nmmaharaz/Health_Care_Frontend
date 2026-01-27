/* eslint-disable @next/next/no-img-element */
"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import InputFieldError from "@/error/InputFieldError";
import { useFileUpload } from "@/hooks/use-file-upload";
import { createSpecialities } from "@/service/admin/specialitiesManagement";
import { ISpecialitiesCreateProps } from "@/types/admin/secialities.interface";
import { AlertCircleIcon, ImageIcon, UploadIcon, XIcon } from "lucide-react";
import { useActionState } from "react";

export default function SpecialitiesCreate({ open, onClose, onSuccess }: ISpecialitiesCreateProps) {
    const [state, formAction, pending] = useActionState(createSpecialities, null)
    const maxSizeMB = 2;
    const maxSize = maxSizeMB * 1024 * 1024; 

    const [
        { files, isDragging, errors },
        {
            handleDragEnter,
            handleDragLeave,
            handleDragOver,
            handleDrop,
            openFileDialog,
            removeFile,
            getInputProps,
        },
    ] = useFileUpload({
        accept: "image/svg+xml,image/png,image/jpeg,image/jpg,image/gif",
        maxSize,
    });
    const previewUrl = files[0]?.preview || null;
    // const _fileName = files[0]?.file.name || null;

    return (
        <AlertDialog open={open} onOpenChange={onClose}>
            {/* <AlertDialogTitle>Create Speciality</AlertDialogTitle> */}
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Create Speciality</AlertDialogTitle>
                </AlertDialogHeader>
                <form action={formAction} id="form-rhf-demo">
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="title">
                                Title
                            </FieldLabel>
                            <Input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Cardiology"
                                autoComplete="off"
                                required
                            />
                            <InputFieldError field="title" state={state} />
                        </Field>
                 
                        <div className="flex flex-col gap-2">
                            <FieldLabel htmlFor="title">
                                Upload Icon
                            </FieldLabel>
                            <div className="relative">
                                {/* Drop area */}
                                <div
                                    className="relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border border-input border-dashed p-4 transition-colors has-[input:focus]:border-ring has-[input:focus]:ring-[3px] has-[input:focus]:ring-ring/50 data-[dragging=true]:bg-accent/50"
                                    data-dragging={isDragging || undefined}
                                    onDragEnter={handleDragEnter}
                                    onDragLeave={handleDragLeave}
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                >
                                    <input
                                        {...getInputProps()}
                                        required
                                        aria-label="Upload image file"
                                        className="sr-only"
                                    />
                                    {previewUrl ? (
                                        <div className="absolute inset-0 flex items-center justify-center p-4">
                                            <img
                                                alt={files[0]?.file?.name || "Uploaded image"}
                                                className="mx-auto max-h-full rounded object-contain"
                                                src={previewUrl}
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
                                            <div
                                                aria-hidden="true"
                                                className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border bg-background"
                                            >
                                                <ImageIcon className="size-4 opacity-60" />
                                            </div>

                                            <Button
                                                className="mt-4"
                                                onClick={openFileDialog}
                                                variant="outline"
                                            >
                                                <UploadIcon
                                                    aria-hidden="true"
                                                    className="-ms-1 size-4 opacity-60"
                                                />
                                                Upload Icon
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {previewUrl && (
                                    <div className="absolute top-4 right-4">
                                        <button
                                            aria-label="Remove image"
                                            className="z-50 flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-none transition-[color,box-shadow] hover:bg-black/80 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                                            onClick={() => removeFile(files[0]?.id)}
                                            type="button"
                                        >
                                            <XIcon aria-hidden="true" className="size-4" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {errors.length > 0 && (
                                <div
                                    className="flex items-center gap-1 text-destructive text-xs"
                                    role="alert"
                                >
                                    <AlertCircleIcon className="size-3 shrink-0" />
                                    <span>{errors[0]}</span>
                                </div>
                            )}
                        </div>
                    </FieldGroup>
                </form>
                <AlertDialogFooter>
                    <AlertDialogCancel className="text-[#E71F23]" disabled={pending}>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-linear-to-r from-[#4338ca] to-[#4f6ad4f1] hover:bg-linear-to-r hover:from-[#3a2fac] hover:to-[#4f69d0f1]" onClick={onSuccess} disabled={pending}>{pending ? "Pending..." : "Submit"}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
