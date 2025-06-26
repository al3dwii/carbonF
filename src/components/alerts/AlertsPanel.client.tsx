"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import { Collapse } from "@radix-ui/react-collapse";

export default function AlertsPanel({ orgId }: { orgId: string }) {
  const { data: initial } = useSWR(`/api/proxy/org/${orgId}/alerts`);
  const [alerts, setAlerts] = useState(initial ?? []);
  const mute = (id: string) =>
    fetch(`/api/proxy/alerts/${id}/mute`, { method: "PATCH" })
      .then(() => setAlerts(a => a.filter((x: any) => x.id !== id)));

  useEffect(() => {
    const es = new EventSource(`/sse/alerts?org=${orgId}`);
    es.onmessage = e => setAlerts(a => [JSON.parse(e.data), ...a]);
    return () => es.close();
  }, [orgId]);

  if (!alerts) return null;

  return (
    <section className="rounded border p-4">
      <h2 className="font-medium mb-2">Alerts</h2>
      {alerts.map((al: any) => (
        <div key={al.id} className="flex items-start gap-2 py-1">
          <div className="grow">
            <p className="text-sm">{al.msg}</p>
            <small className="text-xs text-muted">
              {new Date(al.ts).toLocaleString()}
            </small>
          </div>
          <button onClick={() => mute(al.id)} className="text-xs underline">
            mute
          </button>
        </div>
      ))}
    </section>
  );
}
