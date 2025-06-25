import { request } from "@/lib/client";
import ReportsList from "@/components/comply/ReportsList";

export default async function ComplyOverview({ params:{orgId} }:{params:{orgId:string}}) {
  const files = await request(`/org/${orgId}/reports?type=csrd`, "get", { orgId });
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl">CSRD / ESRS Reports</h1>
        <ReportsList.GenerateButton orgId={orgId} />
      </div>
      <ReportsList files={files as any} />
    </div>
  );
}
