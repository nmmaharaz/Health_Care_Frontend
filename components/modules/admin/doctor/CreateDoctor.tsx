"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import MultipleSelector from "@/components/ui/multiselect";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import InputFieldError from "@/error/InputFieldError";
import { createDoctor, updateDoctor } from "@/service/admin/doctorManagement";
import { IDoctorFormDialogProps } from "@/types/admin/doctor.interface";
import { ISpecialty } from "@/types/admin/secialities.interface";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";


export default function CreateDoctor({ specialities, open, onClose, doctor, onSuccess }: IDoctorFormDialogProps) {
    // console.log(doctor?.doctorSpecialties?.specialities, "doctor.doctorSpecialties")
    const [specialitiesData, setSpecialitiesData] = useState<string[]>(() => {
        if (doctor?.doctorSpecialties) {
            return doctor?.doctorSpecialties
                .map((s) => s.specialities?.title) as string[];
        }
        return [];
    });
    console.log(specialitiesData, "specialitiesData")

    const isEdit = !!doctor;
    const [state, formAction, pending] = useActionState(
        isEdit ? updateDoctor.bind(null, doctor.id!) : createDoctor,
        null
    );
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const data = specialities?.map((specialty: ISpecialty) => ({
        label: specialty.title,
        value: specialty.title
    }))

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedFile(file || null);
    };

    useEffect(() => {
        if (!state) return

        if (state.success) {
            toast.success(state.message)
            onSuccess()
            onClose()

        } else {
            toast.error(state.message)
        }
    }, [state, onSuccess, onClose])

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="overflow-hidden sm:max-w-2xl">
                <div>
                    <DialogHeader className="pb-4">
                        <DialogTitle>Doctor Profile</DialogTitle>
                    </DialogHeader>
                    <div className="max-h-[85vh] overflow-y-auto relative">
                        <form
                            action={formAction}
                            className="grid grid-cols-1 px-2 md:grid-cols-2 gap-3"
                        >
                            <div className="md:col-span-2">
                                <Field>
                                    <FieldLabel className="text-gray-700">Name</FieldLabel>
                                    <Input required
                                        autoComplete="on"
                                        name="name"
                                        defaultValue={
                                            state?.formData?.name || (isEdit ? doctor?.name : "")
                                        }
                                    />
                                    <InputFieldError state={state} field="name"></InputFieldError>
                                </Field>
                            </div>

                            <div className="md:col-span-2">
                                <Field>
                                    <FieldLabel className="text-gray-700">Email</FieldLabel>
                                    <Input required
                                        autoComplete="on"
                                        name="email"
                                        defaultValue={
                                            state?.formData?.email || (isEdit ? doctor?.email : "")
                                        }
                                        disabled={isEdit}
                                    />
                                    <InputFieldError state={state} field="email"></InputFieldError>
                                </Field>
                            </div>
                            {
                                !isEdit && (

                                    <div>
                                        <Field>
                                            <FieldLabel className="text-gray-700">Password</FieldLabel>
                                            <Input required
                                                autoComplete="on"
                                                type="password"
                                                name="password"
                                                defaultValue={
                                                    state?.formData?.password || ""
                                                }
                                                disabled={isEdit}
                                            />
                                            <InputFieldError state={state} field="password"></InputFieldError>
                                        </Field>
                                    </div>
                                )
                            }

                            {
                                !isEdit && (
                                    <div>
                                        <Field>
                                            <FieldLabel className="text-gray-700">Profile Photo</FieldLabel>
                                            <Input required
                                                autoComplete="on"
                                                type="file" name="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                defaultValue={
                                                    state?.formData?.file || ""
                                                }
                                            />
                                        </Field>
                                    </div>

                                )
                            }

                            <div>
                                <Field>
                                    <FieldLabel className="text-gray-700">Contact Number</FieldLabel>
                                    <Input required autoComplete="on" name="contactNumber"
                                        defaultValue={
                                            state?.formData?.contactNumber || (isEdit ? doctor?.contactNumber : "")
                                        }
                                    />
                                    <InputFieldError state={state} field="contactNumber"></InputFieldError>
                                </Field>
                            </div>

                            <div>
                                <Field>
                                    <FieldLabel className="text-gray-700">Gender</FieldLabel>
                                    <Select
                                        defaultValue={
                                            state?.formData?.gender || (isEdit ? doctor?.gender : "")
                                        }
                                        name="gender">
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Gender" />
                                        </SelectTrigger>
                                        <SelectContent
                                            position={"popper"}
                                        >
                                            <SelectGroup>
                                                <SelectItem value="MALE">Male</SelectItem>
                                                <SelectItem value="FEMALE">Female</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <InputFieldError state={state} field="gender"></InputFieldError>
                                </Field>
                            </div>
                            <div className="md:col-span-2">
                                <Field>
                                    <FieldLabel className="text-gray-700">Address</FieldLabel>
                                    <Textarea name="address"
                                        defaultValue={
                                            state?.formData?.address || (isEdit ? doctor?.address : "")
                                        }
                                    />
                                    <InputFieldError state={state} field="address"></InputFieldError>
                                </Field>
                            </div>

                            <div>
                                <Field>
                                    <FieldLabel className="text-gray-700">Registration Number</FieldLabel>
                                    <Input required autoComplete="on" name="registrationNumber"
                                        defaultValue={
                                            state?.formData?.registrationNumber || (isEdit ? doctor?.registrationNumber : "")
                                        }
                                    />
                                    <InputFieldError state={state} field="registrationNumber"></InputFieldError>
                                </Field>
                            </div>

                            <div>
                                <Field>
                                    <FieldLabel className="text-gray-700">Experience</FieldLabel>
                                    <Input required autoComplete="on" name="experience" type="number"
                                        defaultValue={
                                            state?.formData?.experience || (isEdit ? doctor?.experience : "")
                                        }
                                    />
                                    <InputFieldError state={state} field="experience"></InputFieldError></Field>
                            </div>

                            <div>
                                <Field>
                                    <FieldLabel className="text-gray-700">Appointment Fee</FieldLabel>
                                    <Input required autoComplete="on" name="appointmentFee" type="number"
                                        defaultValue={
                                            state?.formData?.appointmentFee || (isEdit ? doctor?.appointmentFee : "")
                                        }
                                    />
                                    <InputFieldError state={state} field="appointmentFee"></InputFieldError>
                                </Field>
                            </div>

                            <div>
                                <Field>
                                    <FieldLabel className="text-gray-700">Qualification</FieldLabel>
                                    <Input required autoComplete="on" name="qualification"
                                        defaultValue={
                                            state?.formData?.qualification || (isEdit ? doctor?.qualification : "")
                                        }
                                    />
                                    <InputFieldError state={state} field="qualification"></InputFieldError>
                                </Field>
                            </div>
                            <div className="md:col-span-2">
                                <Field>
                                    <FieldLabel className="text-gray-700">Specialities</FieldLabel>
                                    <MultipleSelector
                                        value={specialitiesData.map((sp) => ({
                                            label: sp,
                                            value: sp,
                                        }))}
                                        commandProps={{
                                            label: "Select Specialities",
                                        }}

                                        defaultOptions={data}
                                        onChange={(items) => {
                                            setSpecialitiesData(items.map(item => item.value))
                                        }}
                                        emptyIndicator={<p className="text-center text-sm">No results found</p>}
                                        placeholder="Select Specialities"
                                    />
                                    <InputFieldError state={state} field="specialities"></InputFieldError>
                                </Field>
                            </div>
                            <Input
                                type="hidden"
                                name="specialities"
                                value={JSON.stringify(specialitiesData)}
                            />

                            <div>
                                <Field>
                                    <FieldLabel className="text-gray-700">Designation</FieldLabel>
                                    <Input required autoComplete="on" name="designation"
                                        defaultValue={
                                            state?.formData?.designation || (isEdit ? doctor?.designation : "")
                                        }
                                    />
                                    <InputFieldError state={state} field="designation"></InputFieldError>
                                </Field>
                            </div>
                            <div>
                                <Field>
                                    <FieldLabel className="text-gray-700">Current Working Place</FieldLabel>
                                    <Input required autoComplete="on" name="currentWorkingPlace"
                                        defaultValue={
                                            state?.formData?.currentWorkingPlace || (isEdit ? doctor?.currentWorkingPlace : "")
                                        }
                                    />
                                    <InputFieldError state={state} field="currentWorkingPlace"></InputFieldError>
                                </Field>
                            </div>

                            {state?.error && (
                                <p className="text-red-500 md:col-span-2 text-sm">
                                    {typeof state.error === "string"
                                        ? state.error
                                        : "Validation error"}
                                </p>
                            )}

                            <div className="md:col-span-2">
                                <Button type="submit"
                                    className="bg-linear-to-r w-full from-[#4338ca] to-[#4f6ad4f1] hover:bg-linear-to-r hover:from-[#3a2fac] hover:to-[#4f69d0f1]"
                                    disabled={pending}>
                                    {pending ? "Pending..." : isEdit
                                        ? "Update Doctor"
                                        : "Create Doctor"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}
