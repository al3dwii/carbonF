"use client";

import { useApi, useEventSource } from "@/lib/hooks";
import VirtualTable from "@/components/tables/VirtualTable";
import { useState } from "react";
import LiveStreamToggle from "@/components/widgets/LiveStreamToggle";

export default function AlertTable({
  initial,
  orgId,
}: {
  initial: any[];
  orgId: string;
}) {
  const [filter, setFilter] = useState<"all" | "open">("all");
  const [live, setLive] = useState(false);
  const { data } = useApi<any[]>(
    `/org/${orgId}/alerts?filter=${filter}`,
    { refresh: live ? 0 : 5000 }
  );
  const stream = useEventSource<any[]>(
    `/api/org/${orgId}/alerts/stream`,
    live
  );

  const rows = live ? stream : data ?? initial;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div>
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
        <LiveStreamToggle enabled={live} onToggle={setLive} />
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
