"use client";

import { useState } from "react";
import Link from "next/link";
import { FolderCode, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/layout/Breadcrumb";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import RequestPagination from "@/components/ui/RequestPagination";
import { ROUTES } from "@/config/routes";
import { mockRequests } from "@/features/request/data/mock-requests";
import { EMPTY_FILTERS, applyFilters } from "@/features/request/filters";
import RequestCard from "@/features/request/components/RequestCard";
import RequestRow from "@/features/request/components/RequestRow";
import FilterToolbar from "@/features/request/components/FilterToolbar";
import ExportDialog from "@/features/request/components/ExportDialog";

const PAGE_SIZE = 12;

export default function FormRequestPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [page, setPage] = useState(1);

  const handleFiltersChange = (next) => {
    setFilters(next);
    setPage(1);
  };

  const filtered = applyFilters(mockRequests, filters);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const [exportOpen, setExportOpen] = useState(false);

  return (
    <div className="py-6 px-4 sm:px-8 w-full space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div className="contents md:block">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              Form Request
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Sistem Permintaan & Pengembangan Aplikasi TI - Ajukan dan kelola
              permintaan aplikasi TI unit kerja Anda
            </p>
          </div>

          <div className="order-3 md:order-none mt-5">
            <Breadcrumb items={[{ label: "Form Request" }]} />
          </div>
        </div>

        <Button
          render={<Link href={ROUTES.requestCreate} />}
          nativeButton={false}
          className="w-full md:w-auto bg-primary hover:bg-primary/90 shrink-0 order-2 md:order-none"
        >
          <Plus className="w-5 h-5" />
          Create Request
        </Button>
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-2">
        Your Requests
      </h3>

      <FilterToolbar
        filters={filters}
        onFiltersChange={handleFiltersChange}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onExportClick={() => setExportOpen(true)}
      />

      {filtered.length === 0 ? (
        <Empty className="border border-gray-200 rounded-md bg-white py-16 shadow-sm">
          <EmptyHeader>
            <EmptyMedia variant="icon" className="w-12 h-12">
              <FolderCode className="text-gray-500" />
            </EmptyMedia>

            <EmptyTitle>Belum Ada Request</EmptyTitle>

            <EmptyDescription>
              Anda belum mengajukan request aplikasi. Mulai dengan membuat
              request pertama Anda.
            </EmptyDescription>
          </EmptyHeader>

          <EmptyContent>
            <Button
              render={<Link href={ROUTES.requestCreate} />}
              nativeButton={false}
              className="bg-primary hover:bg-primary/90"
            >
              <Plus className="w-4 h-4" />
              Create Request
            </Button>
          </EmptyContent>
        </Empty>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paged.map((item) => (
            <RequestCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {paged.map((item) => (
            <RequestRow key={item.id} item={item} />
          ))}
        </div>
      )}

      <RequestPagination
        page={page}
        totalPages={totalPages}
        totalItems={filtered.length}
        pageSize={PAGE_SIZE}
        onPageChange={setPage}
      />

      <ExportDialog
        open={exportOpen}
        onOpenChange={setExportOpen}
        items={mockRequests}
      />
    </div>
  );
}
