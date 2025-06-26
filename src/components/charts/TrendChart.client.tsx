"use client";
import { Line } from "react-chartjs-2";
import useSWR from "swr";
import { ChartDataset } from "chart.js";

export default function TrendChart({
  orgId, period, series
}: {
  orgId: string;
  period: string;
  series: string[];
}) {
  const buck = ["7d"].includes(period) ? "hour" : "day";
  const { data } = useSWR(
    `/api/proxy/org/${orgId}/trend?period=${period}&bucket=${buck}&series=${series.join(",")}`,
    (u) => fetch(u).then(r => r.json())
  );
  if (!data) return <div className="h-64"/>;

  const datasets: ChartDataset<"line">[] = data.map((s: any) => ({
    label: s.label,
    data: s.points.map((p: any) => ({ x: p.ts, y: p.v })),
    tension: 0.3,
    fill: "origin"
  }));

  return <Line data={{ datasets }} options={{ normalized: true }}/>
}
