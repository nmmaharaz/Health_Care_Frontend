/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export interface IUserContextType {
    role: any,
    setRole: Dispatch<SetStateAction<undefined>>
}
