import Shell from "@/components/Shell";

export default function OrgLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { orgId: string };
}) {
  return <Shell role="developer" orgId={params.orgId}>{children}</Shell>;
}
