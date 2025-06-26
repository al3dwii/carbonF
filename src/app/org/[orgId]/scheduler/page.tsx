import SchedulerView from "@/components/scheduler/SchedulerView";
import { request } from "@/lib/client";
import { Suspense } from 'react';
import { Loading } from '@/components/Loading';

export default function SchedulerPage(
  props: { params: { orgId: string } },
) {
  const { orgId } = props.params;
  return (
    <Suspense fallback={<Loading />}>
      <Content orgId={orgId} />
    </Suspense>
  );
}

async function Content({ orgId }: { orgId: string }) {
  const data = await request("/org/{orgId}/jobs", "get", { orgId });
  return <SchedulerView initial={data as any} orgId={orgId} />;
}
