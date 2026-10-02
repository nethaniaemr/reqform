"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, Download, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { ROUTES } from "@/config/routes";
import { getMockRequestById } from "@/features/request/data/mock-requests";
import TicketInfoCard from "@/features/request/components/TiketInfoCard";
import ProposalCard from "@/features/request/components/ProposalCard";
import ScopeCard from "@/features/request/components/ScopeCard";

export default function RequestDetailPage() {
  const { id } = useParams();

  // SEMENTARA: data contoh. Nanti diganti query database lewat repository.js.
  const item = getMockRequestById(id);

  if (!item) return notFound();

  return (
    <div className="py-6 px-4 sm:px-8 w-full space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
            Detail Request
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Lihat informasi lengkap dan status permintaan pengembangan aplikasi TI
          </p>
          <div className="mt-2">
            <Breadcrumb
              items={[{ label: "Form Request", href: ROUTES.request }, { label: `${item.id}` }]}
            />
          </div>
        </div>

        <Button
          render={<Link href={ROUTES.request} />}
          nativeButton={false}
          variant="outline"
          className="self-start md:self-auto shrink-0"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 space-y-6 min-w-0">
          <TicketInfoCard item={item} />
          <ProposalCard item={item} />
          <ScopeCard item={item} />
        </div>

        <div className="space-y-3">
          <div className="bg-white border border-gray-200 rounded-md p-5 shadow-sm flex flex-col gap-3">
            <Button variant="outline" className="w-full">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
            <Button variant="outline" className="w-full">
              <Edit3 className="w-4 h-4" />
              Edit Pengajuan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}