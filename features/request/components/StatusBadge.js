import { Badge } from "@/components/ui/badge";
import { STATUS_META } from "@/config/status";

export default function StatusBadge({ status }) {
  const className = STATUS_META[status] || "bg-gray-50 text-gray-600 border-gray-200";

  return (
    <Badge variant="outline" className={`font-medium ${className}`}>
      {status}
    </Badge>
  );
}