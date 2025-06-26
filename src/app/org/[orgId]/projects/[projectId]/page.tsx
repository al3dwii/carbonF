/* projects/[projectId]/page.tsx */
import { request } from "@/lib/client";
import { Tabs } from "@/components/ui/Tabs";          // assume you have one

export default async function ProjectPage(
  props: { params:{orgId:string;projectId:string} },
) {
  await Promise.resolve();
  const { orgId, projectId } = props.params;
  const summary = await request(`/org/${orgId}/projects/${projectId}/summary`);
  return (
    <div className="p-6">
      <h1 className="text-xl mb-4">{summary.name}</h1>
      <Tabs
        tabs={[
          { id:"summary", label:"Summary",  href:`/org/${orgId}/projects/${projectId}` },
          { id:"ledger",  label:"Ledger",   href:`/org/${orgId}/projects/${projectId}/ledger` },
          { id:"plugins", label:"Plugins",  href:`/org/${orgId}/projects/${projectId}/plugins` },
          { id:"team",    label:"Team",     href:`/org/${orgId}/projects/${projectId}/team` },
        ]}
      />
      {/* add nested routes later */}
    </div>
  );
}