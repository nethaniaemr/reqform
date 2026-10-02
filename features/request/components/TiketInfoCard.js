import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";

function getInitials(name) {
  const afterDash = name.includes("-") ? name.split("-")[1] : name;
  return afterDash
    .trim()
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function InfoItem({ label, children }) {
  return (
    <div>
      <span className="text-gray-400 text-xs uppercase font-semibold tracking-wider block mb-1">
        {label}
      </span>
      {children}
    </div>
  );
}

export default function TicketInfoCard({ item }) {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between border-b border-gray-100 pb-4">
        <CardTitle className="text-sm font-bold text-gray-900">
          Informasi Tiket & Pemohon
        </CardTitle>
        <StatusBadge status={item.status} />
      </CardHeader>

      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <InfoItem label="Nomor Tiket">
          <span className="font-bold text-gray-900">#{item.id}</span>
        </InfoItem>

        <InfoItem label="Tanggal Pengajuan">
          <span className="font-medium text-gray-800">{item.date}</span>
        </InfoItem>

        <InfoItem label="Pemohon">
          <div className="flex items-center gap-2 mt-1">
            <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold shrink-0">
              {getInitials(item.name)}
            </span>
            <span className="font-bold text-gray-900">{item.name}</span>
          </div>
        </InfoItem>

        <InfoItem label="Unit Kerja / Departemen">
          <span className="font-medium text-gray-800">{item.dept}</span>
        </InfoItem>
      </CardContent>
    </Card>
  );
}