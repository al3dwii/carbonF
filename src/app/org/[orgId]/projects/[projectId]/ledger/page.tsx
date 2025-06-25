import { VirtualTable } from "@/components/tables/VirtualTable";
import { request } from "@/lib/client";
import DownloadDropdown from "@/components/widgets/DownloadDropdown";
import LiveStreamToggle from "@/components/widgets/LiveStreamToggle";
import { useApi } from "@/lib/hooks";

export const revalidate = 10;

export default async function ProjectLedger({
  params,
}: {
  params: { orgId: string; projectId: string };
}) {
  const { orgId, projectId } = params;
  /* server fetch for first paint */
  const initial = await request<any[]>(
    `/org/${orgId}/projects/${projectId}/ledger`,
  );

  return (
    <div className="p-6 space-y-4">
      <header className="flex justify-between items-center">
        <h1 className="text-xl">Ledger</h1>
        <DownloadDropdown
          onSelect={(fmt) =>
            (location.href = `/api/org/${orgId}/projects/${projectId}/ledger.${fmt}`)
          }
        />
      </header>

      {/* client wrapper for live stream */}
      <ClientLedgerTable
        orgId={orgId}
        projectId={projectId}
        initial={initial}
      />
    </div>
  );
}

/* ---------- client component ----------- */
("use client");
import { useState } from "react";
function ClientLedgerTable({
  orgId,
  projectId,
  initial,
}: {
  orgId: string;
  projectId: string;
  initial: any[];
}) {
  const [live, setLive] = useState(false);
  const { data } = useApi<any[]>(
    live
      ? `/org/${orgId}/projects/${projectId}/ledger/stream`
      : `/org/${orgId}/projects/${projectId}/ledger`,
    { refresh: live ? 0 : 5000 },
  );

  const rows = live ? (data ?? initial) : (data ?? initial);

  return (
    <>
      <LiveStreamToggle enabled={live} onToggle={setLive} />
      <VirtualTable
        items={rows}
        rowHeight={36}
        renderRow={(e) => (
          <div className="flex w-full">
            <div className="w-44 px-2">{new Date(e.ts).toLocaleString()}</div>
            <div className="w-40 px-2">{e.plugin}</div>
            <div className="flex-1 px-2">{e.desc}</div>
            <div className="w-28 px-2 text-right">{e.co2.toFixed(2)} kg</div>
          </div>
        )}
      />
    </>
  );
}
