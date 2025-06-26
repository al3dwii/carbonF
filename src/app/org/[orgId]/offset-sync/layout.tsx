import Link from "next/link";
import type { LayoutProps } from "@/types/layout";

export default function RouterLayout({ children }: LayoutProps) {
  return (
    <div className="space-y-6">
      <nav className="tabs">
        <Link href="./overview">Overview</Link>
        <Link href="./experiments">Experiments</Link>
        <Link href="./logs">Logs</Link>
      </nav>
      {children}
    </div>
  );
}
