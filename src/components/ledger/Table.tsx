"use client";

import { LedgerEvent } from "@/lib/schemas";
import { useSSE } from "@/lib/hooks/useSSE";

export default function LedgerTable({
  initialRows,
  orgId,
  live,
}: {
  initialRows: LedgerEvent[];
  orgId: string;
  live: boolean;
}) {
  const liveData = useSSE<LedgerEvent[]>(
    `/api/proxy/org/${orgId}/ledger/stream`,
    live
  );
  const rows = live ? liveData ?? initialRows : initialRows;

  /* 4 ─ render */
  return (
    <table className="w-full table-auto text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 text-left">Time</th>
          <th className="px-4 py-2 text-left">Type</th>
          <th className="px-4 py-2 text-left">Details</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(e => (
          <tr key={e.id} className="border-t">
            <td className="px-4 py-2">
              {new Date(e.ts).toLocaleString()}
            </td>
            <td className="px-4 py-2">{e.kind}</td>
            <td className="px-4 py-2">{e.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
