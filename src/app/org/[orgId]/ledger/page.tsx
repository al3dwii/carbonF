import FilterBar from "@/components/ledger/FilterBar";
import BalanceTrendChart from "@/components/ledger/BalanceTrendChart";
import LiveStreamToggle from "@/components/widgets/LiveStreamToggle";
import DownloadDropdown from "@/components/widgets/DownloadDropdown";
import LedgerTable from "@/components/ledger/Table";

export default async function LedgerPage({ params }: { params: Promise<{ orgId: string }> }) {
  const { orgId } = await params;
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <FilterBar orgId={orgId} />
        <div className="flex gap-2">
          <LiveStreamToggle scope="ledger" />
          <DownloadDropdown endpoint={`/api/org/${orgId}/ledger/export`} />
        </div>
      </div>

      <BalanceTrendChart orgId={orgId} />

      <LedgerTable orgId={orgId} />
    </div>
  );
}
