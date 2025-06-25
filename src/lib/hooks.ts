import useSWR from "swr";
import { request } from "./client";
import { useEffect, useState } from "react";

export function useApi<T>(path: string, opts?: { refresh?: number }) {
  return useSWR<T>(path, () => request<T>(path), {
    refreshInterval: opts?.refresh,
  });
}

export function useEventSource<T>(url: string, enabled: boolean) {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    if (!enabled) return;
    const es = new EventSource(url);
    es.onmessage = (e) => {
      setData((d) => [...d, JSON.parse(e.data)]);
    };
    return () => es.close();
  }, [url, enabled]);
  return data;
}
