"use client";

import { useApi } from "@/lib/hooks";
import VirtualTable from "@/components/tables/VirtualTable";
import { useState } from "react";

export default function AlertTable({
  initial,
  orgId,
}: {
  initial: any[];
  orgId: string;
}) {
  const [filter, setFilter] = useState<"all" | "open">("all");
  const { data } = useApi<any[]>(
    `/org/${orgId}/alerts?filter=${filter}`,
    { refresh: 5000 }
  );

  const rows = data ?? initial;

  return (
    <div>
      <div className="mb-2">
        <button
          className={`mr-2 ${filter === "all" ? "font-semibold" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "open" ? "font-semibold" : ""}
          onClick={() => setFilter("open")}
        >
          Open
        </button>
      </div>

      <VirtualTable
        items={rows}
        rowHeight={36}
        renderRow={(item) => (
          <div className="flex w-full">
            <div className="w-40 px-2">{new Date(item.time).toLocaleString()}</div>
            <div className="w-24 px-2">{item.source}</div>
            <div className="flex-1 px-2">{item.msg}</div>
            <div className="w-24 px-2">{item.status}</div>
          </div>
        )}
      />
    </div>
  );
}
