import Shell from "@/components/Shell";
import { getServerRole } from "@/lib/getRole.server";

export default async function OrgLayout(
  props: {
    children: React.ReactNode;
    params: { orgId: string };
  },
) {
  const { children, params } = props;
  const { orgId } = params; // read params synchronously
  const role = await getServerRole();

  return (
    <>
      {/* expose data for client components */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__ROLE__=${JSON.stringify(
            role
          )}; window.__ORG__=${JSON.stringify(orgId)};`,
        }}
      />
      <Shell role={role} orgId={orgId}>
        {children}
      </Shell>
    </>
  );
}
