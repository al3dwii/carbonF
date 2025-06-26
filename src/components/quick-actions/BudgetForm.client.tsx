"use client";
import { useForm } from "react-hook-form";
import { toastSuccess } from "@/lib/toast";

export default function BudgetForm({ orgId }: { orgId: string }) {
  const { register, handleSubmit } = useForm<{ project: string; cap: number }>();
  const onSubmit = (v: any) =>
    fetch(`/api/proxy/org/${orgId}/budgets`, {
      method: "POST",
      body: JSON.stringify(v)
    }).then(() => toastSuccess("Budget created"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <input {...register("project")} placeholder="Project ID" required/>
      <input {...register("cap",{valueAsNumber:true})} type="number"
             placeholder="t CO₂ cap" required/>
      <button className="btn-primary w-full">Create</button>
    </form>
  );
}
