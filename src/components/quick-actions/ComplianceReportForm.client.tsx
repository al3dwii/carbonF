"use client";
import { useForm } from "react-hook-form";
import { toastSuccess } from "@/lib/toast";

export default function ComplianceReportForm({ orgId }: { orgId: string }) {
  const { register, handleSubmit } = useForm<{ period: string }>();
  const onSubmit = (v: any) =>
    fetch(`/api/proxy/org/${orgId}/reports/compliance`, {
      method: "POST",
      body: JSON.stringify(v)
    }).then(() => toastSuccess("Report requested"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <input {...register("period")} placeholder="Period" required/>
      <button className="btn-primary w-full">Generate</button>
    </form>
  );
}
