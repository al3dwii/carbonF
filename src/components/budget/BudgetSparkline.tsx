"use client";
import { Line } from "react-chartjs-2";
import useSWR from "swr";

export default function BudgetSparkline({ orgId }:{ orgId:string }) {
  const { data } = useSWR(`/api/proxy/org/${orgId}/budget/trend`, u=>fetch(u).then(r=>r.json()));
  if (!data) return <div className="h-16"/>;
  const points = data.map((p:any)=>({ x: p.ts, y: p.v }));
  return <Line data={{datasets:[{data:points}]}} options={{plugins:{legend:{display:false}},scales:{x:{display:false},y:{display:false}}}} />;
}
