export interface SharedHeaderProps {
    title: string;
    subtitle?: string;
}

export interface RefreshButtonProps {
    className?: string,
    showLabel?: string
}


export interface SelectFilterProps {
    paramName: string,
    placeholder?: string,
    options: {
        label: string,
        value: string
    }[]
}

export interface Column<T> {
    header: string,
    accessor: keyof T | ((row: T) => React.ReactNode)
    className?: string,
    sortKey?: string,
}

export interface ManagementTableProps<T> {
    data: T[];
    columns: Column<T>[];
    onView?: (row: T) => void;
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
    getRowKey: (row: T) => string;
    emptyMessage?: string;
    isRefreshing?: boolean;
}