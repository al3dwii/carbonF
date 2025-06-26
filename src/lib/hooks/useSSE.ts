import { useEffect, useState } from "react";

export function useSSE<T>(url: string, enabled = true) {
  const [data, set] = useState<T | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const es = new EventSource(url);
    es.onmessage = (e) => set(JSON.parse(e.data));
    es.onerror = () => es.close();
    return () => es.close();
  }, [url, enabled]);

  return data;
}
