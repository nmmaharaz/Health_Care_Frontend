import { ArrowRightIcon, SearchIcon } from "lucide-react";
import { useId } from "react";

import { Input } from "@/components/ui/input";

export default function SearchInputFeild() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <div className="relative">
        <Input
          className="peer ps-9 pe-22 py-5 border border-gray-100 lg:pe-32"
          id={id}
          placeholder="Search..."
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <SearchIcon size={16} />
        </div>
      </div>
    </div>
  );
}
