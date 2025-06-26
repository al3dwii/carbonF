"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui";
import { Sparkline } from "@/components/ui";

type Props = {
  label: string;
  value: string;
  trend: number[];
  deltaPct?: number;
};

export default function SnapshotCard({ label, value, trend, deltaPct }: Props) {
  return (
    <Card className="flex flex-col gap-2">
      <CardHeader className="pb-1">
        <CardTitle className="text-sm text-muted-foreground">{label}</CardTitle>
        <span className="text-2xl font-semibold">{value}</span>
      </CardHeader>
      <CardContent className="flex items-end justify-between">
        <Sparkline data={trend} className="h-6 w-32" />
        {deltaPct !== undefined && (
          <span className={deltaPct >= 0 ? "text-emerald-600" : "text-rose-600"}>
            {deltaPct > 0 ? "▲" : "▼"} {deltaPct.toFixed(1)}%
          </span>
        )}
      </CardContent>
    </Card>
  );
}
