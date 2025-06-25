"use client";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/navigation/Topbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useOrgStore } from "@/lib/stores";

export default function Shell({
  role,
  orgId,
  children,
}: {
  role: string;
  orgId: string;
  children: React.ReactNode;
}) {
  const setOrg = useOrgStore((s) => s.setOrg);

  useEffect(() => {
    setOrg(orgId);
  }, [orgId, setOrg]);

  return (
    <div className="flex h-screen">
      <Sidebar role={role} />
      <section className="flex-1 flex flex-col">
        <Topbar />
        <ErrorBoundary>
          <main className="flex-1 overflow-auto">{children}</main>
        </ErrorBoundary>
      </section>
    </div>
  );
}
