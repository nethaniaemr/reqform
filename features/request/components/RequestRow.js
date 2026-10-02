import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import StatusBadge from "./StatusBadge";
import { ROUTES } from "@/config/routes";

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

export default function RequestRow({ item }) {
  return (
    <Link href={ROUTES.requestDetail(item.id)} className="block">
      <Card className="hover:bg-gray-50 transition-colors cursor-pointer">
        <CardContent>
          <h3 className="text-sm font-semibold text-gray-900 truncate">{item.title}</h3>

          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm">
            <span className="text-gray-800">{item.category}</span>

            <span className="flex items-center gap-2 text-gray-500 min-w-0">
              <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold shrink-0">
                {getInitials(item.name)}
              </span>
              <span className="truncate">{item.name}</span>
            </span>

            <span className="text-gray-500">{item.date}</span>

            <StatusBadge status={item.status} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}