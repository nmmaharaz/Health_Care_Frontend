"use client"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ISpecialitiesCreateProps } from "@/types/admin/secialities.interface";
import { CircleAlertIcon } from "lucide-react";
import { useActionState } from "react";

export default function SpecialitiesCreate({ open, onClose, onSuccess }:ISpecialitiesCreateProps) {
    const [state, formAction, pending] = useActionState(() => { }, null)
    return (
        <AlertDialog open={open} onOpenChange={onClose}>
            <AlertDialogContent>
                <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
                    <div
                        aria-hidden="true"
                        className="flex size-9 shrink-0 items-center justify-center rounded-full border"
                    >
                        <CircleAlertIcon className="opacity-80" size={16} />
                    </div>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            {/* {description || (
                <>
                  This will delete <strong>{title}</strong>. This action cannot
                  be undone.
                </>
              )} */}
                            <form action={formAction} id="form-rhf-demo">
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="form-rhf-demo-title">
                                            Bug Title
                                        </FieldLabel>
                                        <Input
                                            id="form-rhf-demo-title"
                                            placeholder="Login button not working on mobile"
                                            autoComplete="off"
                                        />
                                        {/* <FieldError errors={[fieldState.error]} /> */}
                                    </Field>
                                </FieldGroup>
                            </form>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel disabled={pending}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onSuccess} disabled={pending}>{pending ? "Pending..." : "Submit"}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
