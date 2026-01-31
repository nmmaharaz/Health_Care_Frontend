"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MultipleSelector from "@/components/ui/multiselect";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createDoctor } from "@/service/admin/doctorManagement";
import { ISpecialitiesCreateProps, ISpecialty } from "@/types/admin/secialities.interface";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";


export default function CreateDoctor({ specialities, open, onClose, onSuccess }: ISpecialitiesCreateProps) {
    const [specialitiesData, setSpecialitiesData] = useState<string[]>([]);
    const [state, formAction, pending] = useActionState(createDoctor, null)

    const data = specialities?.map((specialty: ISpecialty) => ({
        label: specialty.title,
        value: specialty.title
    }))

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

    // useEffect(() => {
    //     if (state && state?.success) {
    //         toast.success(state.message);
    //         onSuccess();
    //         onClose();
    //     } else if (state && !state.success) {
    //         toast.error(state.message);
    //     }
    // },  [state, onSuccess, onClose])
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="overflow-hidden sm:max-w-2xl">
                <div className="max-h-[90vh] overflow-y-auto relative">
                <DialogHeader className="pb-4">
                    <DialogTitle>Doctor Profile</DialogTitle>
                </DialogHeader>
                    <div>
                        <form
                            action={formAction}
                            className="grid grid-cols-1 px-2 md:grid-cols-2 gap-3"
                        >
                            <div className="md:col-span-2">
                                <Label className="text-gray-700">Name</Label>
                                <Input required autoComplete="on" name="name" />
                            </div>

                            <div className="md:col-span-2">
                                <Label className="text-gray-700">Email</Label>
                                <Input required autoComplete="on" name="email" />
                            </div>

                            <div>
                                <Label className="text-gray-700">Password</Label>
                                <Input required autoComplete="on" type="password" name="password" />
                            </div>

                            <div>
                                <Label className="text-gray-700">Profile Photo</Label>
                                <Input required autoComplete="on" type="file" name="file" accept="image/*" />
                            </div>

                            <div>
                                <Label className="text-gray-700">Contact Number</Label>
                                <Input required autoComplete="on" name="contactNumber" />
                            </div>

                            <div>
                                <Label className="text-gray-700">Gender</Label>
                                <Select defaultValue="MALE" name="gender">
                                    <SelectTrigger className="w-full">
                                        <SelectValue />
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
                            </div>
                            <div className="md:col-span-2">
                                <Label className="text-gray-700">Address</Label>
                                <Textarea name="address" />
                            </div>

                            <div>
                                <Label className="text-gray-700">Registration Number</Label>
                                <Input required autoComplete="on" name="registrationNumber" />
                            </div>

                            <div>
                                <Label className="text-gray-700">Experience</Label>
                                <Input required autoComplete="on" name="experience" type="number" />
                            </div>

                            <div>
                                <Label className="text-gray-700">Appointment Fee</Label>
                                <Input required autoComplete="on" name="appointmentFee" type="number" />
                            </div>

                            <div>
                                <Label className="text-gray-700">Qualification</Label>
                                <Input required autoComplete="on" name="qualification" />
                            </div>
                            <div className="md:col-span-2">
                                <Label className="text-gray-700">Specialities</Label>
                                <MultipleSelector
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
                            </div>
                            <input
                                type="hidden"
                                name="specialities"
                                value={JSON.stringify(specialitiesData)}
                            />

                            <div>
                                <Label className="text-gray-700">Designation</Label>
                                <Input required autoComplete="on" name="designation" />
                            </div>
                            <div>
                                <Label className="text-gray-700">Current Working Place</Label>
                                <Input required autoComplete="on" name="currentWorkingPlace" />
                            </div>

                            {state?.error && (
                                <p className="text-red-500 md:col-span-2 text-sm">
                                    {typeof state.error === "string"
                                        ? state.error
                                        : "Validation error"}
                                </p>
                            )}

                            <div className="md:col-span-2">
                                <Button type="submit" className="bg-linear-to-r w-full from-[#4338ca] to-[#4f6ad4f1] hover:bg-linear-to-r hover:from-[#3a2fac] hover:to-[#4f69d0f1]" disabled={pending}>{pending ? "Pending..." : "Register Doctor"}</Button>
                            </div>
                        </form>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}
