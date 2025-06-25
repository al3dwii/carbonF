"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_BY_ROLE } from "@/lib/nav";
import { useOrgStore } from "@/lib/stores";
import { useFlags } from "@/lib/useFlags";

export default function Sidebar({ role }: { role: string }) {
  const { orgId } = useOrgStore();
  const path = usePathname();
  const flags = useFlags(orgId).data ?? {};

  const items =
    (NAV_BY_ROLE[role] ?? []).filter((i) => !i.flag || flags[i.flag]) ?? [];

  return (
    <aside className="w-56 border-r">
      <ul>
        {items.map(({ href, label }) => (
          <li key={label}>
            <Link
              href={`/org/${orgId}${href}`}
              className={clsx(
                "block px-4 py-2",
                path?.startsWith(`/org/${orgId}${href}`) && "font-semibold"
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
