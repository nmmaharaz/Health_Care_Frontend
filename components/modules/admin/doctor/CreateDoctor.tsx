"use client"
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MultipleSelector from "@/components/ui/multiselect";
import { Textarea } from "@/components/ui/textarea";
import { createDoctor } from "@/service/admin/doctorManagement";
import { ISpecialitiesCreateProps, ISpecialty } from "@/types/admin/secialities.interface";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";


const data = [
    {
        label: "Next.js",
        value: "next.js",
    },
    {
        label: "SvelteKit",
        value: "sveltekit",
    },
    {
        label: "Nuxt.js",
        value: "nuxt.js",
    },
    {
        label: "Remix",
        value: "remix",
    },
    {
        label: "Astro",
        value: "astro",
    },
    {
        label: "Angular",
        value: "angular",
    },
    {
        label: "Vue.js",
        value: "vue",
    },
    {
        label: "React",
        value: "react",
    },
    {
        label: "Ember.js",
        value: "ember",
    },
    {
        label: "Gatsby",
        value: "gatsby",
    },
    {
        label: "Eleventy",
        value: "eleventy",
    },
    {
        label: "SolidJS",
        value: "solid",
    },
    {
        label: "Preact",
        value: "preact",
    },
    {
        label: "Qwik",
        value: "qwik",
    },
    {
        label: "Alpine.js",
        value: "alpine",
    },
    {
        label: "Lit",
        value: "lit",
    },
];


export default function CreateDoctor({ specialities, open, onClose, onSuccess }: ISpecialitiesCreateProps) {
    const [specialitiesData, setSpecialitiesData] = useState<string[]>([]);
    const [state, formAction, pending] = useActionState(createDoctor, null)
    
    const data = specialities?.map((specialty:ISpecialty)=>({
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
        <AlertDialog open={open} onOpenChange={onClose}>
            {/* <AlertDialogTitle>Create Speciality</AlertDialogTitle> */} 
            <AlertDialogContent className="overflow-hidden data-[size=default]:sm:max-w-2xl">
                <div className="max-h-[90vh] overflow-y-auto relative">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Create Speciality</AlertDialogTitle>
                    </AlertDialogHeader>
                    <Button onClick={onClose} className="absolute right-0 top-0 text-black bg-white hover:bg-gray-50 text-lg" disabled={pending}>X</Button>
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
                            <select
                                name="gender"
                                className="w-full border rounded-md h-10 px-3"
                            >
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                            </select>
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
                            value={JSON.stringify(specialities)}
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
            </AlertDialogContent>
        </AlertDialog>
    )
}
