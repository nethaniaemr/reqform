import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DetailField from "./DetailField";

export default function ProposalCard({ item }) {
  // Field theme berisi pilar di baris pertama, lalu program di baris berikutnya.
  const [pilar, ...program] = (item.theme || "").split("\n");

  return (
    <Card>
      <CardHeader className="border-b border-gray-100 pb-4">
        <CardTitle className="text-sm font-bold text-gray-900">Detail Usulan Pekerjaan</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <DetailField
          label="Jenis Pengembangan"
          value={item.category}
          valueClassName="font-bold text-primary"
        />
        <DetailField
          label="Nama Usulan Aplikasi"
          value={item.title}
          valueClassName="font-bold text-gray-900"
        />
        <DetailField label="Latar Belakang / Permasalahan" value={item.latarBelakang} />
        <DetailField label="Cost & Benefit" value={item.costBenefit} />
        <DetailField label="Risiko Jika Tidak Dibuat" value={item.risiko} />

        {pilar && (
          <div className="space-y-1.5">
            <label className="text-xs uppercase font-semibold tracking-wider text-gray-400 block">
              Tema IT Master Plan PI Grup 2025 - 2029 Yang Terpilih
            </label>
            <div className="p-3.5 bg-gray-50 border border-gray-200 rounded text-sm space-y-1">
              <div className="font-bold text-primary text-xs tracking-wide">{pilar}</div>
              {program.map((name) => (
                <div key={name} className="text-gray-700 font-medium">
                  {name}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}