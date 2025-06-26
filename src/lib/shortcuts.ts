import hotkeys from "hotkeys-js";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useGlobalShortcuts(orgId: string) {
  const router = useRouter();
  useEffect(() => {
    hotkeys("g l", () => router.push(`/org/${orgId}/ledger`));
    hotkeys("g r", () => document.querySelector("#quick-actions")?.click());
    return () => hotkeys.unbind("g l,g r");
  }, [orgId, router]);
}
