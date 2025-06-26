"use client";
import { useEffect, useState } from "react";

export default function CarbonBadge({ orgId, range }: { orgId: string; range: string }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    fetch(`/api/org/${orgId}/carbon?range=${range}`)
      .then(r => r.json())
      .then(d => setValue(d.total ?? 0))
      .catch(() => setValue(0));
  }, [orgId, range]);
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs">
      🌿 {value.toFixed(1)} kg CO₂
    </span>
  );
}
