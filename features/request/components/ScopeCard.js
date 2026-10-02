import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DiagramPreview from "./DiagramPreview";

export default function ScopeCard({ item }) {
  return (
    <Card>
      <CardHeader className="border-b border-gray-100 pb-4">
        <CardTitle className="text-sm font-bold text-gray-900">
          Gambaran Umum & Lingkup Aplikasi
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded text-sm text-gray-700">
            <div className="whitespace-pre-line leading-relaxed font-mono text-xs">
              {item.gambaranUmum}
            </div>
          </div>

          <div className="border border-gray-200 rounded p-4 bg-white space-y-2 flex flex-col items-center justify-center">
            <div className="w-full text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Diagram
            </div>
            <DiagramPreview text={item.gambaranUmum} />
            <div className="w-full text-right text-[10px] text-gray-400 italic mt-2">
              *Diagram terbuat otomatis
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}