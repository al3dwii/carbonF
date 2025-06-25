"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Tabs({
  tabs,
}: {
  tabs: { id: string; label: string; href: string }[];
}) {
  const path = usePathname();
  return (
    <nav className="flex gap-4 border-b mb-4">
      {tabs.map(({ id, label, href }) => (
        <Link
          key={id}
          href={href}
          className={clsx(
            "py-2 text-sm",
            path === href
              ? "border-b-2 border-blue-500 font-medium"
              : "text-gray-500"
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
