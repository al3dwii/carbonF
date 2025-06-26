"use client";
import { StatCard, SkeletonCards } from "@/components/ui/StatCard";
import { useOrgSnapshot } from "@/hooks/useOrgSnapshot";

export default function KpiGrid({ orgId }: { orgId: string }) {
  const snap = useOrgSnapshot(orgId);

  if (!snap) return <SkeletonCards/>;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard label="Total emissions YTD" value={snap.ytd_co2_t} unit="t" />
      <StatCard label="€ saved YTD"        value={snap.ytd_money}  unit="€" />
      <StatCard label="kWh avoided YTD"    value={snap.ytd_kwh}    unit="kWh" />
      <StatCard label="Projects w/ budget" value={snap.budgeted_projects} />
    </div>
  );
}
