import { ZodObject } from "zod";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const zodValidate = <T>(schema:ZodObject,validatedFields:T ) => {
    const validatedPayload = schema.safeParse(validatedFields);
    if(!validatedPayload.success){return {
        seccess: false,
        errors: validatedPayload.error.issues.map((issue: any) => {
            return {
                field: issue.path[0],
                message: issue.message,
            }
        })
    }}
    return {
        success: true,
        data: validatedPayload.data
    }
}