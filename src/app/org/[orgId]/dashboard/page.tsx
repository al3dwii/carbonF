import { DashboardLayout }  from "@/components/dashboard/DashboardLayout";
import { Suspense }          from "react";
import KpiGrid from "@/components/dashboard/KpiGrid";
import { QuickActions }      from "@/components/dashboard/QuickActions";
import { AlertBanner }       from "@/components/alerts/AlertBanner";
import { EmissionChart }     from "@/components/dashboard/EmissionChart.client";
import { LedgerPreview }     from "@/components/ledger/LedgerPreview";
import { PageMetrics }       from "@/components/dashboard/PageMetrics.client";
import { PluginCards }       from "@/components/dashboard/PluginCards.client";
import { fetchAlertCount }    from "@/lib/alerts-api";
import { ChartSkeleton } from "@/components/ui/ChartSkeleton";


export default async function DashboardPage(
  props: {
    params: { orgId: string };
  },
) {
  await Promise.resolve();
  const { orgId } = props.params;
  // Server-side fetches (block render until resolved)
  const [alertCount] = await Promise.all([
    fetchAlertCount(orgId),
  ]);

  return (
    <DashboardLayout>
      <PageMetrics page="dashboard" />
      {/* Row 1 – alerts + quick actions */}
      <AlertBanner count={alertCount} />
      <QuickActions orgId={orgId} />

      {/* Row 2 – KPI grid (includes live RemainingBudget tile) */}
      <KpiGrid orgId={orgId} />

      {/* Row 3 – 30 day emissions vs budget chart */}
      {/* <Suspense fallback={<ChartSkeleton />}> */}
        <EmissionChart orgId={orgId} />
      {/* </Suspense> */}

      {/* Row 4 – recent ledger events */}
      <LedgerPreview orgId={orgId} />

      {/* Row 5 – plugin status */}
      <PluginCards orgId={orgId} />
    </DashboardLayout>
  );
}
