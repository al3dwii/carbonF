"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Combobox } from "@/components/ui";

export default function FilterBar({ orgId }: { orgId: string }) {
  const params = useSearchParams();
  const router = useRouter();

  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params as any);
    value ? next.set(key, value) : next.delete(key);
    router.replace(`?${next.toString()}`);
  };

  return (
    <div className="flex gap-3 items-center">
      <Combobox
        placeholder="Project"
        fetchPath={`/api/org/${orgId}/projects`}
        value={(params.get("project") as string) || ""}
        onChange={(v) => set("project", v)}
      />
      <Combobox
        placeholder="Plugin"
        fetchPath="/api/plugins"
        value={(params.get("plugin") as string) || ""}
        onChange={(v) => set("plugin", v)}
      />
      <Combobox
        placeholder="SKU"
        fetchPath="/api/skus"
        value={(params.get("sku") as string) || ""}
        onChange={(v) => set("sku", v)}
      />
    </div>
  );
}
