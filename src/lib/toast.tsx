"use client";
import { Toaster, toast } from "sonner";

export const AppToaster = () => <Toaster position="top-right" richColors />;

export const toastSuccess = (msg: string) =>
  toast(msg, { className: "bg-green-600 text-white" });
export function toastError(msg: string, retry?: () => void) {
  toast.error(msg, retry && { action: { label: "Retry", onClick: retry } });
}
