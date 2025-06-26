import { request } from "@/lib/client";
import DownloadDropdown from "@/components/widgets/DownloadDropdown";
import ReportWizard from "@/components/comply/ReportWizard.client";

export const revalidate = 60;

export default async function ComplyOverview(
  props: {
  params: { orgId: string };
  },
) {
  const { orgId } = props.params;
  const files = await request<any[]>(`/org/${orgId}/reports?type=csrd`);
  const list = Array.isArray(files) ? files : [];
  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl">CSRD / ESRS Reports</h1>
        <ReportWizard orgId={orgId} />
      </div>
      <ul>
        {list.map((f) => (
          <li key={f.id} className="flex items-center gap-4 mb-2">
            <span>{f.period}</span>
            <DownloadDropdown
              onSelect={(fmt) => {
                window.location.href = `/api/reports/${f.id}.${fmt}`;
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
