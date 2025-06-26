"use client";
import { VirtualTable } from "@/components/ui/VirtualTable";
import useSWR from "swr";
import { useEffect } from "react";
import { useLedgerFilters } from "./filters/store";

export interface LedgerRow {
  id: string;
  ts: string;
  project: string;
  sku: string;
  kwh: number;
  kg: number;
}

export function LedgerTable({
  orgId,
  initialRows,
  live
}: {
  orgId: string;
  initialRows: LedgerRow[];
  live: boolean;
}) {
  const fetcher = (u: string) => fetch(u).then(r => r.json());
  const { filters } = useLedgerFilters();
  const qs = new URLSearchParams(filters as Record<string,string>).toString();
  const { data, mutate } = useSWR(
    `/api/proxy/org/${orgId}/ledger?${qs}`,
    fetcher,
    { refreshInterval: live ? 0 : 15_000 }
  );
  useEffect(() => {
    if (!live) return;
    const es = new EventSource(`/sse/ledger?org=${orgId}&${qs}`);
    es.onmessage = e => mutate(JSON.parse(e.data), false);
    return () => es.close();
  }, [live, qs, mutate, orgId]);
  const rows = data ?? initialRows;
  /** define the column functions *inside* the client component */
  const columns = [
    { key: "ts",      header: "Date",   width: 130, cell: (r: LedgerRow) => r.ts },
    { key: "project", header: "Project",width: 160 },
    { key: "sku",     header: "SKU",    width: 140 },
    { key: "kwh",     header: "kWh",    width: 100 },
    { key: "kg",      header: "kg CO₂", width: 100 },
  ];

  return (
    <VirtualTable
      rowHeight={38}
      rows={rows}
      columns={columns}
      height={300}
    />
  );
}
