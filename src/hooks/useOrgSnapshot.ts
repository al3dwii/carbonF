import useSWR from "swr";
import { useEffect } from "react";

const fetcher = (u: string) => fetch(u).then(r => r.json());

export function useOrgSnapshot(orgId: string, live = true) {
  const { data, mutate } = useSWR(
    `/api/proxy/org/${orgId}/snapshot`,
    fetcher,
    { refreshInterval: 30_000 }
  );

  useEffect(() => {
    if (!live) return;
    const es = new EventSource(`/sse/snapshot?org=${orgId}`);
    es.onmessage = e => mutate(JSON.parse(e.data), false);
    return () => es.close();
  }, [live, orgId, mutate]);

  return data;
}
