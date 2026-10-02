import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ITMP_PILARS } from "../constants";

export default function FormStep2({
  selectedThemes,
  onToggleTheme,
  noItmpMatch,
  onToggleNoMatch,
  onBack,
  onSubmit,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-8 shadow-sm space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">
          Kesesuaian dengan Tema pada IT Master Plan PI Group 2025 - 2029
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Pilih pilar dan program inisiatif spesifik yang bersesuaian dengan
          pengajuan sistem
        </p>
      </div>

      {ITMP_PILARS.map((pilar) => (
        <div
          key={pilar.id}
          className={`border border-gray-200 rounded-md overflow-hidden bg-white transition-opacity ${
            noItmpMatch ? "opacity-40 pointer-events-none" : ""
          }`}
        >
          <div className="bg-gray-100 px-4 py-3 font-bold text-sm text-gray-900 border-b border-gray-200 flex items-center gap-2.5">
            <span className="w-6 h-6 rounded bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0">
              {pilar.id}
            </span>
            <span>{pilar.name}</span>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
            {pilar.items.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0">
                  <Checkbox
                    id={item}
                    disabled={noItmpMatch}
                    checked={!!selectedThemes[item]}
                    onCheckedChange={() => onToggleTheme(item)}
                  />
                </span>
                <Label
                  htmlFor={item}
                  className="text-sm font-normal text-gray-700 cursor-pointer leading-snug"
                >
                  {item}
                </Label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="border border-primary/30 bg-primary/5 rounded-md p-4">
        <div className="flex items-center gap-2.5">
          <Checkbox
            id="noItmpMatch"
            checked={noItmpMatch}
            onCheckedChange={(checked) => onToggleNoMatch(checked === true)}
          />
          <Label
            htmlFor="noItmpMatch"
            className="text-sm font-bold text-gray-800 cursor-pointer"
          >
            Tidak ada kesesuaian dengan tema ITMP di atas
          </Label>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
        <Button variant="outline" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        <Button onClick={onSubmit} className="bg-primary hover:bg-primary/90">
          <FileText className="w-4 h-4" />
          Create Request
        </Button>
      </div>
    </div>
  );
}
