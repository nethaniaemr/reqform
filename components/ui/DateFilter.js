"use client";

import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

function formatDisplay(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
}

function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export default function DateFilter({
  label,
  value,
  onChange,
  triggerClassName = "",
}) {
  const selectedDate = value ? new Date(value + "T00:00:00") : undefined;

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn("max-w-full border-dashed", triggerClassName)}
          />
        }
      >
        <CirclePlus className="w-4 h-4 text-gray-800" />
        {label}
        {value && (
          <span className="font-normal text-slate-500">
            {formatDisplay(value)}
          </span>
        )}
      </PopoverTrigger>

      <PopoverContent
        className="w-auto max-w-[calc(100vw-2rem)] p-0"
        align="start"
      >
        <Calendar
          mode="single"
          selected={selectedDate}
          className="[&_button]:cursor-pointer"
          onSelect={(date) => onChange(date ? toDateKey(date) : "")}
        />
        {value && (
          <div className="border-t border-gray-200 p-1.5">
            <Button
              variant="ghost"
              size="sm"
              className="w-fit cursor-pointer justify-start text-gray-600"
              onClick={() => onChange("")}
            >
              Clear
            </Button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
