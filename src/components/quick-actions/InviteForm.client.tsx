"use client";
import { useForm } from "react-hook-form";
import { toastSuccess } from "@/lib/toast";

export default function InviteForm({ orgId }: { orgId: string }) {
  const { register, handleSubmit } = useForm<{ email: string }>();
  const onSubmit = (v: any) =>
    fetch(`/api/proxy/org/${orgId}/invite`, {
      method: "POST",
      body: JSON.stringify(v)
    }).then(() => toastSuccess("Invite sent"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <input {...register("email")} type="email" placeholder="Email" required/>
      <button className="btn-primary w-full">Invite</button>
    </form>
  );
}
