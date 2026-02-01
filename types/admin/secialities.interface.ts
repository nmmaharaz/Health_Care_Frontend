export interface ISpecialty {
    id?: string;
    title: string;
    icon: string;
}


export interface ISpecialitiesProps {
    specialities: ISpecialty[]
}

export interface ICreateButton {
    label: string,
    onClick: () => void
}


export interface ISpecialitiesCreateProps {
    specialities?:ISpecialty[],
    open: boolean,
    onClose: () => void,
    onSuccess: () => void
}

