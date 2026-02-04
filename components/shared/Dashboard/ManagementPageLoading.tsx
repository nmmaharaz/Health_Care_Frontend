"use client";
import { useMemo } from "react";
import { TableSkeleton } from "./TableSkeleton";
import DashboardHeaderSkeleton from "./DashboardHeaderSkeleton";

interface ManagementPageLoadingProps {
    columns: number;
    hasActionButton?: boolean;
    filterCount?: number;
    filterWidths?: string[];
}

export function ManagementPageLoading({
    columns,
    hasActionButton = false,
    filterCount = 0,
    filterWidths = [],
}: ManagementPageLoadingProps) {
    // Memoize filter elements to prevent recreation on every render
    const filterElements = useMemo(() => {
        if (filterCount === 0) return null;

        return (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {Array.from({ length: filterCount }).map((_, index) => (
                    <div
                        key={index}
                        className={`h-10 ${filterWidths[index] || "w-40"
                            } bg-slate-100 dark:bg-slate-700 animate-pulse rounded-md border border-slate-100 dark:border-slate-500 shadow-sm`}
                    />
                ))}
            </div>
        );
    }, [filterCount, filterWidths]);

    return (
        <div className="space-y-6">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between">
                <DashboardHeaderSkeleton />
            </div>

            {/* Filters Skeleton */}
            <div className="flex items-center justify-between">
                <div
                    className={`h-10 mr-1 ${"w-28"
                        } bg-slate-100 dark:bg-slate-700 animate-pulse rounded-md border border-slate-100 dark:border-slate-500 shadow-sm`}
                />
                <div className="flex items-center">
                    {filterElements}
                    {hasActionButton && (
                        <div className="h-10 w-32 ml-4 bg-slate-100 dark:bg-slate-700 animate-pulse rounded-md shadow-sm" />
                    )}
                </div>
            </div>
            {/* Table Skeleton */}
            <TableSkeleton columns={columns} rows={10} />
        </div>
    );
}
