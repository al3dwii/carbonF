import FilterBar from "@/components/ledger/FilterBar";
import BalanceTrendChart from "@/components/ledger/BalanceTrendChart";
import LiveStreamToggle from "@/components/widgets/LiveStreamToggle";
import DownloadDropdown from "@/components/widgets/DownloadDropdown";
import LedgerTable from "@/components/ledger/Table";
import { fetchLedger } from "@/lib/ledger-api";

export default async function LedgerPage({ params }: { params: Promise<{ orgId: string }> }) {
  const { orgId } = await params;
  const initialRows = await fetchLedger(orgId, 50);
  return <ClientPage orgId={orgId} initialRows={initialRows} />;
}

("use client");
import { useState } from "react";
import TimeRangePicker, { Range } from "@/components/widgets/TimeRangePicker";
import CarbonBadge from "@/components/widgets/CarbonBadge";

function ClientPage({ orgId, initialRows }: { orgId: string; initialRows: any[] }) {
  const [live, setLive] = useState(false);
  const [range, setRange] = useState<Range>("7d");
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <FilterBar orgId={orgId} />
        <div className="flex items-center gap-4">
          <TimeRangePicker value={range} onChange={setRange} />
          {range && <CarbonBadge orgId={orgId} range={range} />}
          <LiveStreamToggle enabled={live} onToggle={setLive} />
          <DownloadDropdown endpoint={`/api/org/${orgId}/ledger/export`} />
        </div>
      </div>

      <BalanceTrendChart orgId={orgId} />

      <LedgerTable orgId={orgId} initialRows={initialRows} live={live} />
    </div>
  );
}
