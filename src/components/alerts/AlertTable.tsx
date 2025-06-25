"use client";
import { useState } from "react";
import { VirtualTable } from "@/components/ui/VirtualTable";
import { useApi } from "@/lib/hooks";

export default function AlertTable({ initial = [], orgId }: { initial?: any[]; orgId: string }) {
  const [status, setStatus] = useState("open");
  const { data } = useApi<any[]>(`/org/${orgId}/alerts?status=${status}`, { refresh: 10000 });
  const alerts = data ?? initial;

  return (
    <div className="space-y-4">
      <div className="flex gap-2 text-sm">
        {['open','snoozed','resolved'].map(s => (
          <button
            key={s}
            onClick={() => setStatus(s)}
            className={`rounded px-2 py-1 ${status===s ? 'bg-blue-600 text-white' : 'bg-neutral-700 text-white/60'}`}
          >
            {s}
          </button>
        ))}
      </div>
      <VirtualTable
        items={alerts}
        rowHeight={36}
        renderRow={(a) => (
          <div className="grid grid-cols-[160px_1fr_80px] gap-2 px-2 text-sm" key={a.id}>
            <span>{new Date(a.time).toLocaleString()}</span>
            <span>{a.msg}</span>
            <span className="text-right">{a.status}</span>
          </div>
        )}
      />
    </div>
  );
}
