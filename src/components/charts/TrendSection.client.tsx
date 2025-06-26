"use client";
import { useState } from "react";
import TrendChart from "./TrendChart.client";
import { DateRangePicker } from "@/components/ui/DateRangePicker";

export default function TrendSection({ orgId }: { orgId: string }) {
  const [period, setPeriod] = useState<"7d" | "30d" | "90d" | "custom">("30d");

  return (
    <section className="space-y-6" id="trend-section">
      <header className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Trends</h2>
        <DateRangePicker period={period} onChange={setPeriod}/>
      </header>

      <TrendChart
        orgId={orgId}
        period={period}
        series={["emissions_by_project", "grid_intensity"]}
      />
      <TrendChart
        orgId={orgId}
        period={period}
        series={["savings", "offsets"]}
      />
    </section>
  );
}
