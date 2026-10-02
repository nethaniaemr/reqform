import { Label } from "@/components/ui/label";

export default function DetailField({ label, value, valueClassName = "text-gray-700" }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs uppercase font-semibold tracking-wider text-gray-400">
        {label}
      </Label>
      <div
        className={`p-3.5 bg-gray-50 border border-gray-200 rounded text-sm leading-relaxed whitespace-pre-line ${valueClassName}`}
      >
        {value}
      </div>
    </div>
  );
}