// src/components/dashboard/DashboardClient.tsx
"use client";

import { useEffect } from "react";

export default function DashboardClient(
  { orgId, role }: { orgId: string; role: string }
) {
  /* interactive hooks here */
  useEffect(() => console.log("role from server →", role), [role]);
  return <p>Client side for org {orgId}</p>;
}
