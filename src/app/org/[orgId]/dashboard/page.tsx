import { DashboardLayout }  from "@/components/dashboard/DashboardLayout";
import { Suspense, useEffect }          from "react";
import KpiGrid from "@/components/dashboard/KpiGrid";
import QuickActions from "@/components/quick-actions/QuickActions.client";
import { AlertBanner }       from "@/components/alerts/AlertBanner";
import BudgetBanner from "@/components/budget/BudgetBanner";
import { useGlobalShortcuts } from "@/lib/shortcuts";
import { getSession } from "@/lib/auth";
import { EmissionChart }     from "@/components/dashboard/EmissionChart.client";
import { LedgerPreview }     from "@/components/ledger/LedgerPreview";
import { PageMetrics }       from "@/components/dashboard/PageMetrics.client";
import { PluginCards }       from "@/components/dashboard/PluginCards.client";
import EcoShiftWidget from "@/components/product/EcoShiftWidget";
import EcoEdgeWidget  from "@/components/product/EcoEdgeWidget";
import TrendSection from "@/components/charts/TrendSection.client";
import { fetchAlertCount }    from "@/lib/alerts-api";
import { ChartSkeleton } from "@/components/ui/ChartSkeleton";

function FocusHelper({ focusId, orgId }: { focusId: string; orgId: string }) {
  useGlobalShortcuts(orgId);
  useEffect(() => {
    document.getElementById(focusId)?.scrollIntoView({ behavior: "smooth" });
  }, [focusId]);
  return null;
}


export default async function DashboardPage(
  props: {
    params: Promise<{ orgId: string }>;
  },
) {
  await Promise.resolve();
  const { orgId } = await props.params;
  const { roles } = await getSession();
  const focusId =
    roles.includes("finance")
      ? "budget-section"
      : roles.includes("developer")
        ? "ledger-section"
        : "trend-section";
  // Server-side fetches (block render until resolved)
  const [alertCount] = await Promise.all([
    fetchAlertCount(orgId),
  ]);

  return (
    <DashboardLayout>
      <FocusHelper focusId={focusId} orgId={orgId} />
      <PageMetrics page="dashboard" />
      {/* Row 1 – alerts + quick actions */}
      <AlertBanner count={alertCount} />
      <QuickActions orgId={orgId} />

      <div id="budget-section">
        <BudgetBanner orgId={orgId} />
      </div>

      {/* Row 2 – KPI grid (includes live RemainingBudget tile) */}
      <KpiGrid orgId={orgId} />

      <TrendSection orgId={orgId} />

      {/* Row 3 – 30 day emissions vs budget chart */}
      {/* <Suspense fallback={<ChartSkeleton />}> */}
        <EmissionChart orgId={orgId} />
      {/* </Suspense> */}

      {/* Row 4 – recent ledger events */}
      <div id="ledger-section">
        <LedgerPreview orgId={orgId} />
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <EcoShiftWidget orgId={orgId}/>
        <EcoEdgeWidget  orgId={orgId}/>
      </section>

      {/* Row 5 – plugin status */}
      <PluginCards orgId={orgId} />
    </DashboardLayout>
  );
}
