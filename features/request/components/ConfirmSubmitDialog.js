"use client";

import { User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DEFAULT_REVIEWER, DEFAULT_APPROVER } from "../constants";

function ContactRow({ label, person }) {
  return (
    <div className="space-y-1.5">
      <p className="text-sm font-semibold text-gray-900">{label}</p>
      <div className="flex items-center gap-3 border border-gray-200 rounded-md px-3 py-2.5">
        <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
          <User className="w-4 h-4" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
          <p className="text-xs text-gray-500 truncate">{person.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmSubmitDialog({ open, onOpenChange, onConfirm }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Konfirmasi Reviewer & Manager Approval</DialogTitle>
          <DialogDescription>
            Order ini akan dikirim ke reviewer (AVP) untuk di-review, kemudian ke manager (atasan)
            untuk proses approval.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <ContactRow label="Reviewer (AVP)" person={DEFAULT_REVIEWER} />
          <ContactRow label="Manager (Atasan)" person={DEFAULT_APPROVER} />
        </div>

        <DialogFooter className="flex-col-reverse sm:flex-row gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
            Batal
          </Button>
          <Button onClick={onConfirm} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
            Konfirmasi & Kirim
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}