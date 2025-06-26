import SnapshotCard from "./SnapshotCard";
import { useOrgSnapshot } from "@/lib/queries/useOrgSnapshot";

export default async function KpiGrid({ orgId }: { orgId: string }) {
  const snapshot = await useOrgSnapshot(orgId);
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <SnapshotCard
        label="Total savings"
        value={`$${snapshot.total.toLocaleString()}`}
        trend={snapshot.totalTrend}
      />
      <SnapshotCard
        label="CO₂ avoided"
        value={`${snapshot.co2.toFixed(1)} t`}
        trend={snapshot.co2Trend}
      />
      <SnapshotCard
        label="Top project"
        value={snapshot.topProject.name}
        trend={snapshot.topProject.trend}
      />
    </section>
  );
}
