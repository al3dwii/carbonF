"use client";
import { useBalanceTrend } from "@/lib/queries/useBalanceTrend";
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function BalanceTrendChart({ orgId }: { orgId: string }) {
  const data = useBalanceTrend(orgId);
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopOpacity={0.4} />
            <stop offset="100%" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="day" tick={{ fontSize: 12 }} />
        <YAxis tickFormatter={(v) => `$${v / 1e3}k`} />
        <Tooltip formatter={(v: number) => `$${v.toLocaleString()}`} />
        <Area dataKey="balance" strokeWidth={2} fill="url(#g)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
