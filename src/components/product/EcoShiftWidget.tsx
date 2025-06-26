"use client";

import { Clock } from "lucide-react";
import { ProductWidget } from "./ProductWidget";

export default function EcoShiftWidget({ orgId }: { orgId: string }) {
  return (
    <ProductWidget
      orgId={orgId}
      icon={Clock}
      title="EcoShift Jobs"
      endpoint={`/scheduler/shifts?limit=5`}
      render={(jobs: any[]) => (
        <ul className="text-sm space-y-1">
          {jobs.map(j => (
            <li key={j.id}>
              <b>{j.name}</b>&nbsp;
              <span className="text-muted">– {j.kwh_saved} kWh saved</span>
            </li>
          ))}
        </ul>
      )}
    />
  );
}
