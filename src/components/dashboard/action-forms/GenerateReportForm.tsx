"use client";
import { useForm } from "react-hook-form";
import { postJson } from "@/lib/fetcher";

export default function GenerateReportForm() {
  const { register, handleSubmit, formState } = useForm<{ period: string }>();
  const submit = handleSubmit(async (d) => {
    await postJson("/api/reports", d);
  });

  return (
    <form onSubmit={submit} className="space-y-4">
      <label className="block">
        Period
        <select {...register("period")} className="select">
          <option value="Q1">Q1</option>
          <option value="Q2">Q2</option>
          <option value="Q3">Q3</option>
          <option value="Q4">Q4</option>
        </select>
      </label>
      <button disabled={formState.isSubmitting} className="btn-primary w-full">
        Generate
      </button>
    </form>
  );
}
