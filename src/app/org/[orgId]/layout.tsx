import Shell from "@/components/Shell";
import { getServerRole } from "@/lib/getRole.server";

export default async function OrgLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ orgId: string }>;
}) {
  /* 1️⃣  capture the dynamic segment immediately */
  const { orgId } = await params;        // ⬅️  NO await yet!

  /* 2️⃣  now you’re free to await anything */
  const role = await getServerRole();

  return (
    <Shell role={role ?? "developer"} orgId={orgId}>
      {children}
    </Shell>
  );
}
