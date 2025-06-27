import useSWR from "swr";
import { useEffect, useMemo } from "react";

const fetcher = (u: string) => fetch(u).then(r => r.json());

export function useOrgSnapshot(orgId: string, live = true) {
  const { data, mutate } = useSWR(
    `/api/proxy/org/${orgId}/snapshot`,
    fetcher,
    { refreshInterval: 30_000 }
  );

  const es = useMemo(
    () =>
      typeof window !== "undefined" && window.EventSource
        ? new EventSource(`/sse/snapshot?org=${orgId}`)
        : null,
    [orgId]
  );

  useEffect(() => {
    if (!live || !es) return;
    es.onmessage = e => mutate(JSON.parse(e.data), false);
    return () => es.close();
  }, [live, es, mutate]);

  return data;
}
