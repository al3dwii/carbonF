"use client";

import { useState } from "react";
import TimeRangePicker, { Range } from "@/components/widgets/TimeRangePicker";
import CarbonBadge from "@/components/widgets/CarbonBadge";
import DownloadDropdown from "@/components/widgets/DownloadDropdown";
import { LedgerTable  }from "@/components/ledger/LedgerTable.client";
import FilterBar from "@/components/ledger/FilterBar";
import BalanceTrendChart from "@/components/ledger/BalanceTrendChart";
import LiveStreamToggle from "@/components/widgets/LiveStreamToggle";

export default function ClientPage({
  orgId,
  initialRows,
}: {
  orgId: string;
  initialRows: any[];
}) {
  const [range, setRange] = useState<Range | null>(null);
  const [live, setLive] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <FilterBar orgId={orgId} />
        <div className="flex items-center gap-4">
          <TimeRangePicker value={range as any} onChange={setRange as any} />
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
