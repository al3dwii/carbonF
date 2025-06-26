"use client";
import { ResponsiveContainer, LineChart, Line } from "recharts";

export function Sparkline({ data, className }: { data: number[]; className?: string }) {
  const points = data.map((v, i) => ({ i, v }));
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <Line type="monotone" dataKey="v" stroke="#16a34a" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Sparkline;
