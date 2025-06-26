"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_BY_ROLE } from "@/lib/nav";
import { useOrgStore } from "@/lib/stores";
import { useFlags } from "@/lib/useFlags";
import { Icons } from "@/components/ui/Icons";

export default function Sidebar({ role }: { role: string }) {
  const { orgId } = useOrgStore();
  const path = usePathname();
  const flags = useFlags(orgId).data ?? {};

  const items =
    (NAV_BY_ROLE[role] ?? []).filter((i) => !i.flag || flags[i.flag]) ?? [];

  return (
    <aside className="w-56 border-r">
      <ul>
        {items.map((item) => {
          const Icon = Icons[item.icon];
          return (
            <li key={item.label}>
              <Link
                href={`/org/${orgId}${item.href}`}
                className={clsx(
                  "block px-4 py-2 flex items-center gap-2",
                  path?.startsWith(`/org/${orgId}${item.href}`) && "font-semibold"
                )}
              >
                {Icon && <Icon className="h-4 w-4" />}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
