import useSWR from "swr";
import { request } from "./client";

export function useApi<T>(path: string, opts?: { refresh?: number }) {
  return useSWR<T>(path, () => request<T>(path), {
    refreshInterval: opts?.refresh,
  });
}
