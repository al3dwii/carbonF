import { request } from "@/lib/client";
import AlertTable from "@/components/alerts/AlertTable"; // create if missing

export const revalidate = 10;

export default async function AlertsPage(
  props: { params: Promise<{ orgId: string }> },
) {
  await Promise.resolve();
  const { orgId } = await props.params;
  const data = await request(`/org/${orgId}/alerts`);
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-6">Alerts</h1>
      <AlertTable initial={data} orgId={orgId} />
    </div>
  );
}
