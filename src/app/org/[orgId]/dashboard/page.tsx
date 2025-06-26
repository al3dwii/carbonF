// Server Component — DO NOT add "use client"
import { DashboardLayout }  from "@/components/dashboard/DashboardLayout";
import KpiGrid              from "@/components/dashboard/KpiGrid";
import QuickActions         from "@/components/quick-actions/QuickActions.client";
import { AlertBanner }      from "@/components/alerts/AlertBanner";
import BudgetBanner         from "@/components/budget/BudgetBanner";
import { getRole }          from "@/lib/auth.server";
import { EmissionChart }    from "@/components/dashboard/EmissionChart.client";
import { LedgerPreview }    from "@/components/ledger/LedgerPreview";
import { PageMetrics }      from "@/components/dashboard/PageMetrics.client";
import { PluginCards }      from "@/components/dashboard/PluginCards.client";
import EcoShiftWidget       from "@/components/product/EcoShiftWidget";
import EcoEdgeWidget        from "@/components/product/EcoEdgeWidget";
import TrendSection         from "@/components/charts/TrendSection";
import { fetchAlertCount }  from "@/lib/alerts-api";

import FocusHelper          from "@/components/dashboard/FocusHelper.client";

export default async function DashboardPage({
  params
}: {
  params: { orgId: string };
}) {
  // ─────────────────────────────────────────────────────────────
  // 1. Figure out scroll-focus section based on Clerk role
  // ─────────────────────────────────────────────────────────────
  const role = await getRole();
  const focusId =
    role === "ops" ? "budget-section"
    : role === "dev" ? "ledger-section"
    : "trend-section";

  // ─────────────────────────────────────────────────────────────
  // 2. Server fetches that block initial render
  // ─────────────────────────────────────────────────────────────
  const { orgId }  = await params;
  const alertCount = await fetchAlertCount(orgId);

  // ─────────────────────────────────────────────────────────────
  // 3. Render layout — client widgets mount where needed
  // ─────────────────────────────────────────────────────────────
  return (
    <DashboardLayout>
      {/* client helper for shortcuts + scroll */}
      <FocusHelper focusId={focusId} orgId={orgId} />

      {/* page-view metrics (client) */}
      <PageMetrics page="dashboard" />

      {/* alerts + quick actions */}
      <AlertBanner count={alertCount} />
      <QuickActions orgId={orgId} />

      {/* budget banner (finance focus) */}
      <div id="budget-section">
        <BudgetBanner orgId={orgId} />
      </div>

      {/* KPI snapshot cards */}
      <KpiGrid orgId={orgId} />

      {/* trends & main chart */}
      <TrendSection orgId={orgId} />
      <EmissionChart orgId={orgId} />

      {/* recent ledger events (developer focus) */}
      <div id="ledger-section">
        <LedgerPreview orgId={orgId} />
      </div>

      {/* product mini-widgets */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <EcoShiftWidget orgId={orgId} />
        <EcoEdgeWidget  orgId={orgId} />
      </section>

      {/* plugin status cards */}
      <PluginCards orgId={orgId} />
    </DashboardLayout>
  );
}
