"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFlags } from "@/lib/useFlags"; // your LaunchDarkly hook
import { getRole } from "@/lib/role";
import { NAV_BY_ROLE } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { useOrg } from "@/contexts/OrgContext";

export default function Sidebar() {
  const { id: orgId } = useOrg();
  const pathname = usePathname();
  const role =
    typeof window === "undefined" ? getRole() : (window as any).__ROLE__ ?? "developer";
  const flags = useFlags(orgId).data ?? {};

  const items = (NAV_BY_ROLE[role] ?? []).filter(
    (i) => !i.flag || flags[i.flag]
  );

  return (
    <aside className="w-56 shrink-0 border-r bg-white p-4">
      <h1 className="mb-6 text-xl font-bold">CarbonCore</h1>
      <nav className="space-y-1">
        {items.map((it) => (
          <Link
            key={it.href}
            href={`/org/${orgId}${it.href}`}
            className={cn(
              "block rounded px-3 py-2 hover:bg-gray-100",
              pathname.startsWith(`/org/${orgId}${it.href}`) && "bg-gray-200 font-semibold"
            )}
          >
            <span className="mr-1">{it.icon}</span>
            {it.label}
          </Link>
        ))}
      </nav>
      <div className="mt-10 text-xs text-gray-500">&nbsp;</div>
    </aside>
  );
}
