"use client";

import { useOrgStore } from "@/lib/stores";
import Link from "next/link";

export default function Topbar() {
  const { orgId } = useOrgStore();

  return (
    <header className="h-12 border-b flex items-center justify-between px-4">
      <div className="flex items-center gap-4">
        <select className="border rounded text-sm px-2 py-1">
          <option>{orgId}</option>
          {/* TODO: dynamic org list */}
        </select>
        <button className="border rounded px-3 py-1 text-sm">Create…</button>
      </div>

      <div className="flex items-center gap-4">
        <Link href={`/org/${orgId}/alerts`} className="text-xl">
          🔔
        </Link>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
