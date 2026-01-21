/* eslint-disable @typescript-eslint/no-explicit-any */
export const formValidationError = (validatedFields: any) => {
    return {
        seccess: false,
        errors: validatedFields.error.issues.map((issue: any) => {
            return {
                field: issue.path[0],
                message: issue.message,
            }
        })
    }
}