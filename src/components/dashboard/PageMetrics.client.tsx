"use client";
import { usePageMetrics } from "@/hooks/usePageMetrics";

export function PageMetrics({ page }: { page: string }) {
  usePageMetrics(page);
  return null;
}
