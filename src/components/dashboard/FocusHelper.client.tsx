"use client";

import { useEffect } from "react";
import { useGlobalShortcuts } from "@/lib/shortcuts";

export default function FocusHelper({
  focusId,
  orgId
}: {
  focusId: string;
  orgId: string;
}) {
  // keyboard shortcuts live only in the browser
  useGlobalShortcuts(orgId);

  // auto-scroll once on mount
  useEffect(() => {
    document.getElementById(focusId)?.scrollIntoView({ behavior: "smooth" });
  }, [focusId]);

  return null;
}
