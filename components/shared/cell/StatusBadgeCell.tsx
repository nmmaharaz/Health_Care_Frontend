"use client";

import { Badge } from "@/components/ui/badge";

interface StatusBadgeCellProps {
  isDeleted?: boolean;
  activeText?: string;
  deletedText?: string;
}

export function StatusBadgeCell({
  isDeleted,
  activeText = "Active",
  deletedText = "Deleted",
}: StatusBadgeCellProps) {
  return (
    <Badge className={`${!isDeleted ? "text-green-50 bg-green-700":"text-red-50 bg-red-700"}`}>
      {isDeleted ? deletedText : activeText}
    </Badge>
  );
}
