"use client";

import { useState } from "react";
import { CirclePlus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function SelectFilter({
  label,
  options,
  value,
  onChange,
  width = "w-56",
  triggerClassName = "border-dashed",
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            className={cn(
              "max-w-[260px] sm:max-w-none border-dashed font-medium",
              triggerClassName,
            )}
          />
        }
      >
        <CirclePlus className="w-4 h-4 text-gray-800" />
        <span className="shrink-0 whitespace-nowrap">{label}</span>
        {selected && (
          <span className="font-normal text-slate-500 truncate min-w-0">
            {selected.label}
          </span>
        )}
      </PopoverTrigger>
      {/* <PopoverTrigger render={<Button variant="outline" className={cn("max-w-full", triggerClassName)} />}>
        <CirclePlus className="w-4 h-4 text-gray-800" />
        <span className="text-gray-900">{label}</span>

        {selected && (
          <span className="font-normal text-gray-500">{selected.label}</span>
        )}
      </PopoverTrigger> */}

      <PopoverContent
        className={cn(width, "max-w-[calc(100vw-2rem)] p-0")}
        align="start"
      >
        <Command>
          <CommandList>
            <CommandEmpty>Aplikasi tidak ditemukan.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => {
                const isChecked = opt.value === value;
                return (
                  <CommandItem
                    key={opt.value}
                    className="cursor-pointer"
                    onSelect={() => {
                      onChange(isChecked ? "" : opt.value);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={`w-4 h-4 ${isChecked ? "opacity-100" : "opacity-0"}`}
                    />
                    {opt.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
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
        </Command>
      </PopoverContent>
    </Popover>
  );
}
