"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Switch } from "@/components/ui/Switch";
import { Input } from "@/components/ui/Input";
import BudgetSparkline from "./BudgetSparkline";

export default function BudgetBanner({ orgId }: { orgId: string }) {
  const { data } = useQuery({
    queryKey: ["budget", orgId],
    queryFn: () => fetch(`/api/proxy/org/${orgId}/budget`).then(r => r.json())
  });
  const queryClient = useQueryClient();

  const mPrice = useMutation({
    mutationFn: (val: number) =>
      fetch(`/api/proxy/org/${orgId}/budget/price`, {
        method: "PUT",
        body: JSON.stringify({ price: val })
      }),
    onSuccess: () => queryClient.invalidateQueries(["budget", orgId])
  });
  const mSlack = useMutation({
    mutationFn: (val: boolean) =>
      fetch(`/api/proxy/org/${orgId}/alerts/budget`, {
        method: "PATCH",
        body: JSON.stringify({ slack: val })
      })
  });

  if (!data) return <div className="h-24"/>;

  return (
    <section className="rounded border p-4 flex flex-col gap-2">
      <h2 className="text-lg font-medium">Carbon Budget</h2>
      <div className="flex items-center gap-4">
        <span>Internal price € / t:</span>
        <Input
          type="number"
          defaultValue={data.price}
          onBlur={e => mPrice.mutate(+e.target.value)}
          className="w-24"
        />
        <span className="ml-auto">Slack alert</span>
        <Switch
          checked={data.slack}
          onCheckedChange={v => mSlack.mutate(v)}
        />
      </div>
      <BudgetSparkline orgId={orgId} />
    </section>
  );
}
